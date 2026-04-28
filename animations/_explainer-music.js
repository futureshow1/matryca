/**
 * Dramatic cinematic soundtrack for Matryca 60-second explainer animations.
 * Generated at runtime via Web Audio API — no asset, no licensing.
 *
 * Character: thriller / political documentary score —
 *   - sub-bass heartbeat (75 BPM)
 *   - low cinematic strings drone (C-minor)
 *   - staccato motif rising every 4 bars
 *   - filter sweep tension build
 *   - accent hit on bar 8 / 16
 *
 * Includes a small toggle button in top-right of the iframe.
 * Posts a message to the parent window when started/stopped so the
 * Matryca ambient player can mute itself for the duration of playback.
 *
 *   postMessage: { type: 'matryca-explainer-audio', state: 'on' | 'off' }
 */
(function () {
  if (window.__matrycaExplainerMusicReady) return;
  window.__matrycaExplainerMusicReady = true;

  // === Build toggle button ===
  const btn = document.createElement('button');
  btn.id = 'explainer-music-toggle';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Włącz / wyłącz muzykę');
  btn.title = 'Muzyka dramatyczna';
  btn.innerHTML = '<span class="emt__icon" aria-hidden="true">♫</span><span class="emt__label">muzyka · off</span>';
  Object.assign(btn.style, {
    position: 'fixed',
    top: '16px',
    right: '16px',
    zIndex: '9999',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 12px',
    background: 'rgba(20, 20, 22, 0.78)',
    color: 'rgba(255, 255, 255, 0.85)',
    border: '0.5px solid rgba(255, 255, 255, 0.18)',
    borderRadius: '999px',
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '11px',
    letterSpacing: '0.06em',
    cursor: 'pointer',
    textTransform: 'uppercase',
    backdropFilter: 'blur(6px)',
    transition: 'color 200ms, border-color 200ms',
    pointerEvents: 'auto',
  });
  // Hover style via CSS
  const style = document.createElement('style');
  style.textContent = `
    #explainer-music-toggle:hover { color: #ff8888 !important; border-color: rgba(255, 100, 100, 0.5) !important; }
    #explainer-music-toggle.is-on { color: #ff8888; }
    #explainer-music-toggle.is-on .emt__icon { animation: emt-pulse 1.4s ease-in-out infinite; }
    @keyframes emt-pulse { 0%,100% { opacity: 0.5; } 50% { opacity: 1; } }
    .emt__icon { font-size: 13px; }
  `;
  document.head.appendChild(style);
  document.body.appendChild(btn);

  const label = btn.querySelector('.emt__label');

  // === Audio state ===
  let ctx = null;
  let masterGain = null;
  let timers = [];
  let oscillators = [];
  let running = false;

  function notifyParent(state) {
    try {
      window.parent.postMessage({ type: 'matryca-explainer-audio', state }, '*');
    } catch (e) { /* same-origin only; ignore */ }
  }

  function clearTimers() {
    timers.forEach((t) => clearTimeout(t));
    timers = [];
  }

  function build() {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = ctx.createGain();
    masterGain.gain.value = 0;
    masterGain.connect(ctx.destination);
    masterGain.gain.setTargetAtTime(0.22, ctx.currentTime, 0.6);

    // === Sub-bass heartbeat — 75 BPM (0.8s per beat) ===
    const subOsc = ctx.createOscillator();
    subOsc.type = 'sine';
    subOsc.frequency.value = 41; // very low E
    const subGain = ctx.createGain();
    subGain.gain.value = 0;
    // LFO for heartbeat envelope
    const subLfo = ctx.createOscillator();
    subLfo.type = 'sine';
    subLfo.frequency.value = 75 / 60 / 2; // 0.625 Hz = 75 BPM doubled (two pulses per beat)
    const subLfoGain = ctx.createGain();
    subLfoGain.gain.value = 0.35;
    const subLfoOffset = ctx.createConstantSource();
    subLfoOffset.offset.value = 0.35;
    subLfo.connect(subLfoGain).connect(subGain.gain);
    subLfoOffset.connect(subGain.gain);
    subOsc.connect(subGain).connect(masterGain);
    subOsc.start();
    subLfo.start();
    subLfoOffset.start();
    oscillators.push(subOsc, subLfo, subLfoOffset);

    // === Low strings drone — C minor: C2, Eb2, G2 detuned ===
    // C2 = 65.41, Eb2 = 77.78, G2 = 98.00
    const droneFilter = ctx.createBiquadFilter();
    droneFilter.type = 'lowpass';
    droneFilter.frequency.value = 600;
    droneFilter.Q.value = 3;
    const droneGain = ctx.createGain();
    droneGain.gain.value = 0.18;
    droneFilter.connect(droneGain).connect(masterGain);

    [65.41, 77.78, 98.00, 65.85, 77.40].forEach((freq) => {
      const o = ctx.createOscillator();
      o.type = 'sawtooth';
      o.frequency.value = freq;
      const g = ctx.createGain();
      g.gain.value = 0.42;
      o.connect(g).connect(droneFilter);
      o.start();
      oscillators.push(o, g);
    });

    // Slow filter sweep on drone — adds tension build
    const filterLfo = ctx.createOscillator();
    filterLfo.frequency.value = 0.04;
    const filterLfoGain = ctx.createGain();
    filterLfoGain.gain.value = 500;
    filterLfo.connect(filterLfoGain).connect(droneFilter.frequency);
    filterLfo.start();
    oscillators.push(filterLfo, filterLfoGain);

    // === Staccato motif — 4-note ascending pattern in C-minor every 4 bars ===
    // 75 BPM → 1 beat = 0.8s; 1 bar (4 beats) = 3.2s; 4 bars = 12.8s
    // Motif: C4 → Eb4 → G4 → Bb4 (262, 311, 392, 466 Hz)
    const motifNotes = [261.63, 311.13, 392.00, 466.16];
    const barDuration = 3.2;

    function playStaccato(startTime, freq, dur, vel) {
      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.value = freq;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 1800;
      filter.Q.value = 2;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0, startTime);
      g.gain.linearRampToValueAtTime(vel, startTime + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, startTime + dur);
      osc.connect(filter).connect(g).connect(masterGain);
      osc.start(startTime);
      osc.stop(startTime + dur + 0.05);
    }

    function scheduleMotif(startBeat) {
      if (!running || !ctx) return;
      const startTime = ctx.currentTime + startBeat;
      // Each motif note plays on beats 1, 2, 3, 4 of the bar
      motifNotes.forEach((freq, i) => {
        playStaccato(startTime + i * 0.8, freq, 0.4, 0.06 + i * 0.015);
      });
    }

    function scheduleAccentHit(startTime) {
      if (!running || !ctx) return;
      // Low cinematic accent (Hans Zimmer-style): C2 + noise burst
      const accentOsc = ctx.createOscillator();
      accentOsc.type = 'square';
      accentOsc.frequency.setValueAtTime(82, startTime);
      accentOsc.frequency.exponentialRampToValueAtTime(40, startTime + 1.2);
      const accentGain = ctx.createGain();
      accentGain.gain.setValueAtTime(0, startTime);
      accentGain.gain.linearRampToValueAtTime(0.25, startTime + 0.02);
      accentGain.gain.exponentialRampToValueAtTime(0.0001, startTime + 1.4);
      accentOsc.connect(accentGain).connect(masterGain);
      accentOsc.start(startTime);
      accentOsc.stop(startTime + 1.5);

      // Noise burst (cinematic riser/fall)
      const bufferSize = 4096;
      const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 1.5, ctx.sampleRate);
      const noiseData = noiseBuffer.getChannelData(0);
      for (let i = 0; i < noiseData.length; i++) {
        noiseData[i] = (Math.random() * 2 - 1) * (1 - i / noiseData.length); // decay
      }
      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = noiseBuffer;
      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'highpass';
      noiseFilter.frequency.value = 4000;
      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.15, startTime);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, startTime + 1.2);
      noiseSource.connect(noiseFilter).connect(noiseGain).connect(masterGain);
      noiseSource.start(startTime);
    }

    // Schedule motifs every 4 bars (12.8s) — 4 occurrences in 60s
    let bar = 0;
    function tick() {
      if (!running || !ctx) return;
      const now = ctx.currentTime;
      // Motif at start of every 4-bar block
      scheduleMotif(0);
      // Accent hit at bar 0 and bar 4 (every 16 bars effectively in 60s would be fewer)
      if (bar % 2 === 0) {
        scheduleAccentHit(now + 0.05);
      }
      bar++;
      // Next 4-bar block in 12.8s
      timers.push(setTimeout(tick, barDuration * 4 * 1000));
    }
    tick();
  }

  function start() {
    if (running) return;
    if (!ctx) {
      build();
    } else {
      ctx.resume();
      const t = ctx.currentTime;
      masterGain.gain.cancelScheduledValues(t);
      masterGain.gain.setValueAtTime(0, t);
      masterGain.gain.setTargetAtTime(0.22, t, 0.6);
    }
    running = true;
    btn.classList.add('is-on');
    label.textContent = 'muzyka · on';
    notifyParent('on');
  }

  function stop() {
    if (!running) return;
    running = false;
    clearTimers();
    if (masterGain && ctx) {
      const t = ctx.currentTime;
      masterGain.gain.cancelScheduledValues(t);
      masterGain.gain.setTargetAtTime(0, t, 0.2);
      const ctxRef = ctx;
      setTimeout(() => {
        if (ctxRef && !running && ctxRef.state === 'running') {
          ctxRef.suspend();
        }
      }, 800);
    }
    btn.classList.remove('is-on');
    label.textContent = 'muzyka · off';
    notifyParent('off');
  }

  btn.addEventListener('click', () => {
    if (running) stop(); else start();
  });

  // Auto-stop on page unload — make sure parent ambient resumes
  window.addEventListener('beforeunload', () => {
    if (running) notifyParent('off');
  });

  // If iframe loses visibility (parent navigates), stop
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && running) {
      stop();
    }
  });
})();
