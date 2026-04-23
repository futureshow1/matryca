#!/usr/bin/env python3
"""
Generuje 60-sekundowe explainery dla wszystkich kart bazy Matrycy
według wzorca v2 (graficzna wersja, zaakceptowana przez Jana).

Wejście: struktura CASES_DATA ze scenami per case.
Wyjście:
  - public/animations/{slug}.html  — każdy explainer
  - modyfikacja src/content/cases/{slug}.md — dodaje `explainer` do frontmatter
"""
from pathlib import Path
import re

ROOT = Path(__file__).parent.parent
ANIMATIONS_DIR = ROOT / 'public' / 'animations'
CASES_DIR = ROOT / 'src' / 'content' / 'cases'

# ============================================================================
# SHARED CSS — identyczne dla wszystkich explainerów
# ============================================================================
SHARED_CSS = r"""
  @font-face {
    font-family: 'Source Serif 4'; font-style: normal; font-weight: 300 900;
    font-display: swap;
    src: url('./fonts/source-serif-4-latin-wght-normal.woff2') format('woff2-variations');
  }
  @font-face {
    font-family: 'Inter'; font-style: normal; font-weight: 100 900;
    font-display: swap;
    src: url('./fonts/inter-latin-wght-normal.woff2') format('woff2-variations');
  }
  @font-face {
    font-family: 'IBM Plex Mono'; font-style: normal; font-weight: 400;
    font-display: swap;
    src: url('./fonts/ibm-plex-mono-latin-400-normal.woff2') format('woff2');
  }
  :root {
    --bg: #FAFAF7; --bg-dark: #0F1013; --bg-card: #FFFFFF;
    --text: #1A1C20; --text-inv: #F2F0EA;
    --text-2: #5C5E64; --text-3: #8E9096; --text-3-inv: #6C6A66;
    --accent: #A32D2D; --accent-bg: #FCEBEB;
    --border: rgba(0,0,0,0.08); --border-inv: rgba(255,255,255,0.12);
    --mono: 'IBM Plex Mono', ui-monospace, monospace;
    --serif: 'Source Serif 4', Georgia, serif;
    --sans: 'Inter', -apple-system, system-ui, sans-serif;
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: var(--bg); color: var(--text); font-family: var(--sans); -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }
  .wrap { max-width: 1100px; margin: 40px auto; padding: 0 20px; }
  .header { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; margin-bottom: 16px; flex-wrap: wrap; }
  .header__kicker { font-family: var(--mono); font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent); margin: 0; }
  .header__title { font-family: var(--serif); font-size: 22px; font-weight: 500; margin: 4px 0 0; }
  .header__controls { display: flex; gap: 8px; align-items: center; }
  .btn { font-family: var(--mono); font-size: 12px; padding: 6px 12px; border-radius: 4px; border: 0.5px solid var(--border); background: var(--bg-card); cursor: pointer; color: var(--text); }
  .btn--primary { background: var(--accent); color: white; border-color: var(--accent); }
  .btn:hover { border-color: var(--accent); }
  .stage { position: relative; width: 100%; aspect-ratio: 16 / 9; border: 0.5px solid var(--border); border-radius: 8px; overflow: hidden; background: var(--bg-card); }
  .scene { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px; opacity: 0; overflow: hidden; }
  .scene--dark { background: var(--bg-dark); color: var(--text-inv); }
  .scene--dark .kicker { color: var(--text-3-inv); }
  .kicker { position: absolute; top: 20px; left: 24px; font-family: var(--mono); font-size: 11px; letter-spacing: 0.15em; color: var(--text-3); text-transform: uppercase; }
  .display { font-family: var(--serif); font-weight: 500; letter-spacing: -0.03em; line-height: 0.88; text-align: center; margin: 0; }
  .display--caps { font-family: var(--sans); font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em; line-height: 0.9; }
  .huge { font-size: clamp(60px, 13vw, 180px); }
  .big  { font-size: clamp(48px, 9vw, 120px); }
  .med  { font-size: clamp(32px, 6vw, 72px); }
  .accent { color: var(--accent); }
  .muted  { color: var(--text-3); }
  .muted-inv { color: var(--text-3-inv); }
  .caption { font-family: var(--mono); font-size: clamp(12px, 1.5vw, 14px); color: var(--text-2); letter-spacing: 0.05em; text-transform: uppercase; margin: 24px 0 0; }
  .scene--dark .caption { color: var(--text-3-inv); }
  .strike-word { position: relative; display: inline-block; }
  .strike-word::after { content: ''; position: absolute; left: -4%; right: -4%; top: 50%; height: 6px; background: var(--accent); transform: translateY(-50%) rotate(-6deg); animation: strikeIn 800ms ease-out 1200ms both; transform-origin: left center; }
  @keyframes strikeIn { from { transform: translateY(-50%) rotate(-6deg) scaleX(0); } to { transform: translateY(-50%) rotate(-6deg) scaleX(1); } }
  .split { position: absolute; inset: 0; display: grid; grid-template-columns: 1fr 1fr; }
  .split__half { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px; gap: 16px; }
  .split__half + .split__half { border-left: 0.5px solid var(--border); }
  .tl { width: 100%; max-width: 920px; margin: 0 auto; position: relative; }
  .tl__bar { position: relative; height: 12px; background: var(--border); border-radius: 6px; overflow: hidden; }
  .tl__fill { position: absolute; inset: 0 auto 0 0; background: var(--accent); width: 0; animation: tlFill 5s ease-out both; animation-delay: 0.6s; }
  @keyframes tlFill { from { width: 0; } to { width: 100%; } }
  .tl__labels { display: flex; justify-content: space-between; margin-top: 12px; font-family: var(--mono); font-size: 13px; color: var(--text-2); }
  .tl__numbers { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 36px; }
  .tl__stat { text-align: left; }
  .tl__stat-value { font-family: var(--serif); font-size: clamp(32px, 5vw, 52px); font-weight: 500; letter-spacing: -0.02em; line-height: 1; color: var(--accent); margin: 0; }
  .tl__stat-label { font-family: var(--mono); font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-2); margin: 8px 0 0; }
  .diag { position: relative; width: 100%; max-width: 900px; height: 50%; display: flex; align-items: center; justify-content: space-between; padding: 0 24px; }
  .diag__node { border: 1.5px solid var(--text); padding: 20px 24px; min-width: 200px; text-align: center; border-radius: 4px; background: var(--bg-card); z-index: 2; }
  .diag__node--dashed { border-style: dashed; }
  .diag__node-title { font-family: var(--sans); font-weight: 700; font-size: 14px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text); margin: 0 0 4px; }
  .diag__node-sub { font-family: var(--mono); font-size: 11px; color: var(--accent); margin: 0; }
  .diag__line { position: absolute; top: 50%; left: 224px; right: 224px; height: 2px; background: var(--text-3); transform: translateY(-50%); }
  .diag__packet { position: absolute; top: 50%; left: 224px; width: 14px; height: 14px; background: var(--accent); border-radius: 50%; transform: translateY(-50%); animation: packetRun 1.8s linear infinite; }
  .diag__packet:nth-of-type(3) { animation-delay: 0.6s; }
  .diag__packet:nth-of-type(4) { animation-delay: 1.2s; }
  @keyframes packetRun { 0% { left: 224px; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { left: calc(100% - 224px - 14px); opacity: 0; } }
  .diag__label { position: absolute; top: calc(50% - 36px); left: 50%; transform: translateX(-50%); font-family: var(--mono); font-size: 12px; color: var(--accent); letter-spacing: 0.05em; text-transform: uppercase; background: var(--bg-card); padding: 2px 10px; }
  .clock-hero { display: grid; grid-template-columns: auto 1fr; gap: 40px; align-items: center; max-width: 860px; }
  .clock-big { font-family: var(--serif); font-size: clamp(110px, 16vw, 200px); font-weight: 500; color: var(--accent); letter-spacing: -0.04em; line-height: 0.85; margin: 0; }
  .clock-context { display: flex; flex-direction: column; gap: 16px; }
  .clock-context__line { font-family: var(--sans); font-size: clamp(16px, 2vw, 20px); line-height: 1.35; margin: 0; }
  .clock-context__comparison { font-family: var(--mono); font-size: 13px; color: var(--text-2); display: grid; grid-template-columns: auto auto; gap: 16px 20px; padding-top: 16px; border-top: 0.5px solid var(--border); }
  .clock-context__comparison strong { color: var(--accent); font-weight: 500; }
  .name-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 24px; margin-top: 40px; width: 100%; max-width: 820px; }
  .name-card { text-align: center; padding: 20px 12px; border-top: 2px solid var(--accent); }
  .name-card__title { font-family: var(--sans); font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; font-size: 14px; margin: 0 0 6px; }
  .name-card__sub { font-family: var(--mono); font-size: 11px; color: var(--text-3); letter-spacing: 0.04em; text-transform: uppercase; margin: 0; }
  .scene.s1 { animation: show 7s ease both; animation-delay: 0s; }
  .scene.s2 { animation: show 6s ease both; animation-delay: 7s; }
  .scene.s3 { animation: show 6s ease both; animation-delay: 13s; }
  .scene.s4 { animation: show 10s ease both; animation-delay: 19s; }
  .scene.s5 { animation: show 8s ease both; animation-delay: 29s; }
  .scene.s6 { animation: show 8s ease both; animation-delay: 37s; }
  .scene.s7 { animation: show 8s ease both; animation-delay: 45s; }
  .scene.s8 { animation: show 7s ease both; animation-delay: 53s; }
  @keyframes show { 0% { opacity: 0; transform: scale(0.98); } 6% { opacity: 1; transform: none; } 94% { opacity: 1; transform: none; } 100% { opacity: 0; transform: scale(1.02); } }
  .scene .reveal-1 { opacity: 0; animation: slideUp 700ms ease-out 300ms both; }
  .scene .reveal-2 { opacity: 0; animation: slideUp 700ms ease-out 900ms both; }
  .scene .reveal-3 { opacity: 0; animation: slideUp 700ms ease-out 1500ms both; }
  .scene .reveal-4 { opacity: 0; animation: slideUp 700ms ease-out 2100ms both; }
  @keyframes slideUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
  .hud { margin-top: 12px; display: flex; align-items: center; gap: 10px; font-family: var(--mono); font-size: 11px; color: var(--text-3); }
  .hud__bar { flex: 1; height: 2px; background: var(--border); border-radius: 1px; overflow: hidden; position: relative; }
  .hud__fill { position: absolute; inset: 0 auto 0 0; width: 0; background: var(--accent); animation: progress 60s linear forwards; }
  @keyframes progress { from { width: 0; } to { width: 100%; } }
  .hud__time { min-width: 56px; text-align: right; }
  .footer { margin-top: 20px; padding-top: 20px; border-top: 0.5px solid var(--border); font-family: var(--mono); font-size: 11px; color: var(--text-3); display: flex; flex-wrap: wrap; gap: 12px; justify-content: space-between; }
  .footer a { color: var(--accent); text-decoration: none; }
  .footer a:hover { text-decoration: underline; }
  @media (prefers-reduced-motion: reduce) {
    .scene, .hud__fill, .diag__packet, .tl__fill, .strike-word::after, .scene .reveal-1, .scene .reveal-2, .scene .reveal-3, .scene .reveal-4 { animation: none !important; }
    .scene { opacity: 1; position: static; margin-bottom: 40px; }
    .scene .reveal-1, .scene .reveal-2, .scene .reveal-3, .scene .reveal-4 { opacity: 1; }
    .strike-word::after { transform: translateY(-50%) rotate(-6deg) scaleX(1); }
    .stage { aspect-ratio: auto; padding: 20px; }
    .tl__fill { width: 100%; }
  }
  .stage--paused .scene, .stage--paused .hud__fill, .stage--paused .diag__packet, .stage--paused .tl__fill, .stage--paused .strike-word::after,
  .stage--paused .scene .reveal-1, .stage--paused .scene .reveal-2, .stage--paused .scene .reveal-3, .stage--paused .scene .reveal-4 {
    animation-play-state: paused !important;
  }
"""

# ============================================================================
# SCENE RENDERERS — każdy typ sceny ma template produkujący HTML
# ============================================================================

def render_title(scene: dict, idx: int, total: int) -> str:
    kicker = f"{idx:02d} / {total:02d}" + (f" · {scene.get('phase')}" if scene.get('phase') else "")
    dark = ' scene--dark' if scene.get('dark') else ''
    display_class = scene.get('size', 'big')  # huge | big | med
    color = scene.get('color', 'accent')  # accent | default
    text_color_class = 'accent' if color == 'accent' else ''
    sub = scene.get('sub', '')
    text = scene.get('text', '')
    return f'''
    <div class="scene s{idx}{dark}">
      <p class="kicker">{kicker}</p>
      <p class="display display--caps {display_class} {text_color_class} reveal-1">{text}</p>
      {f'<p class="caption muted reveal-2">{sub}</p>' if sub else ''}
    </div>'''

def render_strike(scene: dict, idx: int, total: int) -> str:
    kicker = f"{idx:02d} / {total:02d}" + (f" · {scene.get('phase')}" if scene.get('phase') else "")
    dark = ' scene--dark' if scene.get('dark') else ''
    strike_word = scene.get('strike', '')
    rest = scene.get('rest', '')
    sub = scene.get('sub', '')
    display_class = scene.get('size', 'big')
    return f'''
    <div class="scene s{idx}{dark}">
      <p class="kicker">{kicker}</p>
      <p class="display display--caps {display_class} reveal-1">
        <span class="strike-word">{strike_word}</span> {rest}
      </p>
      {f'<p class="caption muted reveal-2">{sub}</p>' if sub else ''}
    </div>'''

def render_split(scene: dict, idx: int, total: int) -> str:
    kicker = f"{idx:02d} / {total:02d}" + (f" · {scene.get('phase')}" if scene.get('phase') else "")
    L = scene.get('left', {})
    R = scene.get('right', {})
    def half(half_data, reveal_prefix=''):
        kicker_text = half_data.get('kicker', '')
        big = half_data.get('big', '')
        title = half_data.get('title', '')
        caption = half_data.get('caption', '')
        return f'''
        <div class="split__half">
          {f'<p class="caption muted reveal-1" style="margin: 0;">{kicker_text}</p>' if kicker_text else ''}
          <p class="display display--caps huge accent reveal-2">{big}</p>
          <p class="display display--caps med reveal-3" style="line-height: 1">{title}</p>
          {f'<p class="caption muted reveal-4" style="margin-top: 12px">{caption}</p>' if caption else ''}
        </div>'''
    return f'''
    <div class="scene s{idx}" style="padding: 0;">
      <p class="kicker">{kicker}</p>
      <div class="split">
        {half(L)}
        {half(R)}
      </div>
    </div>'''

def render_diagram(scene: dict, idx: int, total: int) -> str:
    kicker = f"{idx:02d} / {total:02d}" + (f" · {scene.get('phase')}" if scene.get('phase') else "")
    headline = scene.get('headline', '')
    left_title = scene.get('left_title', '')
    left_sub = scene.get('left_sub', '')
    right_title = scene.get('right_title', '')
    right_sub = scene.get('right_sub', '')
    label = scene.get('label', '')
    footer = scene.get('footer', '')
    return f'''
    <div class="scene s{idx}">
      <p class="kicker">{kicker}</p>
      <p class="display display--caps med reveal-1" style="margin-bottom: 40px; line-height: 1">{headline}</p>
      <div class="diag reveal-2">
        <div class="diag__node">
          <p class="diag__node-title">{left_title}</p>
          <p class="diag__node-sub">{left_sub}</p>
        </div>
        <div class="diag__line"></div>
        <div class="diag__label">{label}</div>
        <div class="diag__packet"></div>
        <div class="diag__packet"></div>
        <div class="diag__packet"></div>
        <div class="diag__node diag__node--dashed">
          <p class="diag__node-title">{right_title}</p>
          <p class="diag__node-sub">{right_sub}</p>
        </div>
      </div>
      {f'<p class="caption muted reveal-3" style="margin-top: 40px">{footer}</p>' if footer else ''}
    </div>'''

def render_scale(scene: dict, idx: int, total: int) -> str:
    kicker = f"{idx:02d} / {total:02d}" + (f" · {scene.get('phase')}" if scene.get('phase') else "")
    headline_pre = scene.get('headline_pre', '')
    headline_post = scene.get('headline_post', '')
    tl_left = scene.get('tl_left', '')
    tl_mid = scene.get('tl_mid', '')
    tl_right = scene.get('tl_right', '')
    tl_mid_pos = scene.get('tl_mid_pos', 72)
    stats = scene.get('stats', [])
    stats_html = ''.join([f'''
        <div class="tl__stat">
          <p class="tl__stat-value">{s["value"]}</p>
          <p class="tl__stat-label">{s.get("label") or s.get("sub", "")}</p>
        </div>''' for s in stats[:3]])
    return f'''
    <div class="scene s{idx}">
      <p class="kicker">{kicker}</p>
      <p class="display display--caps med reveal-1" style="margin-bottom: 32px; line-height: 1">
        <span class="accent">{headline_pre}</span> {headline_post}
      </p>
      <div class="tl">
        <div class="tl__bar"><div class="tl__fill"></div></div>
        <div class="tl__labels">
          <span>{tl_left}</span>
          {f'<span style="margin-left: {tl_mid_pos - 50}%">{tl_mid}</span>' if tl_mid else ''}
          <span>{tl_right}</span>
        </div>
      </div>
      <div class="tl__numbers reveal-3">{stats_html}</div>
    </div>'''

def render_discovery(scene: dict, idx: int, total: int) -> str:
    kicker = f"{idx:02d} / {total:02d}" + (f" · {scene.get('phase')}" if scene.get('phase') else "")
    date = scene.get('date', '')
    names = scene.get('names', [])
    footer = scene.get('footer', '')
    names_html = ''.join([f'''
        <div class="name-card">
          <p class="name-card__title">{n["name"]}</p>
          <p class="name-card__sub">{n.get("sub", "")}</p>
        </div>''' for n in names])
    return f'''
    <div class="scene s{idx}">
      <p class="kicker">{kicker}</p>
      <p class="display display--caps big accent reveal-1" style="line-height: 1">{date}</p>
      <div class="name-list reveal-2">{names_html}</div>
      {f'<p class="caption muted reveal-3" style="margin-top: 36px">{footer}</p>' if footer else ''}
    </div>'''

def render_clock(scene: dict, idx: int, total: int) -> str:
    kicker = f"{idx:02d} / {total:02d}" + (f" · {scene.get('phase')}" if scene.get('phase') else "")
    time_val = scene.get('time', '07:45')
    line = scene.get('line', '')
    compare_rows = scene.get('compare', [])
    compare_html = ''.join([f'<span>{r["left"]}</span><strong>{r["right"]}</strong>' for r in compare_rows])
    return f'''
    <div class="scene s{idx}">
      <p class="kicker">{kicker}</p>
      <div class="clock-hero">
        <p class="clock-big reveal-1">{time_val}</p>
        <div class="clock-context">
          <p class="clock-context__line reveal-2">{line}</p>
          {f'<div class="clock-context__comparison reveal-3">{compare_html}</div>' if compare_rows else ''}
        </div>
      </div>
    </div>'''

def render_stat(scene: dict, idx: int, total: int) -> str:
    """Jedna wielka liczba + kontekst (np. kara, liczba użytkowników)"""
    kicker = f"{idx:02d} / {total:02d}" + (f" · {scene.get('phase')}" if scene.get('phase') else "")
    value = scene.get('value', '')
    label = scene.get('label', '')
    context = scene.get('context', '')
    # Dopasuj rozmiar do długości liczby — dla długich ciągów "5 000 000 000" użyj mniejszej skali
    size_class = 'big' if len(value) > 10 else 'huge'
    return f'''
    <div class="scene s{idx}">
      <p class="kicker">{kicker}</p>
      <p class="display {size_class} accent reveal-1" style="font-family: var(--serif); letter-spacing: -0.04em; max-width: 1000px">{value}</p>
      <p class="caption muted reveal-2" style="margin-top: 16px; max-width: 720px; text-align: center">{label}</p>
      {f'<p class="reveal-3" style="margin-top: 24px; max-width: 720px; font-size: 14px; line-height: 1.55; color: var(--text-2); text-align: center">{context}</p>' if context else ''}
    </div>'''

def render_close(scene: dict, idx: int, total: int) -> str:
    """Scena zamykająca — wielki tytuł + subtitle + link. Ciemna."""
    kicker = f"{idx:02d} / {total:02d}"
    title = scene.get('title', '')
    sub = scene.get('sub', '')
    card_id = scene.get('card_id', '')
    return f'''
    <div class="scene s{idx} scene--dark">
      <p class="kicker">{kicker}</p>
      <p class="display display--caps huge accent reveal-1">{title}</p>
      <p class="caption reveal-2" style="margin-top: 32px; color: var(--text-3-inv); max-width: 640px; text-align:center; text-transform: none; font-size: 14px; letter-spacing: 0.02em; line-height: 1.5;">
        {sub}<br>
        Karta <span class="accent">{card_id}</span> w Matrycy.
      </p>
    </div>'''

SCENE_RENDERERS = {
    'title': render_title,
    'strike': render_strike,
    'split': render_split,
    'diagram': render_diagram,
    'scale': render_scale,
    'discovery': render_discovery,
    'clock': render_clock,
    'stat': render_stat,
    'close': render_close,
}

# ============================================================================
# CASES_DATA — wszystkie 32 explainery (bez A01, który już istnieje)
# ============================================================================

CASES_DATA = [
    # =========================================================================
    # GROUP A — META
    # =========================================================================
    {
        'id': 'A02', 'slug': 'a02-cambridge-analytica',
        'card_title': 'Cambridge Analytica',
        'header_title': 'Cambridge Analytica — 87 milionów profili i wybory 2016',
        'scenes': [
            {'type':'title','phase':'Setup','text':'MYŚLAŁEŚ, ŻE LIKE TO TYLKO LIKE.','sub':'2013 rok','size':'big'},
            {'type':'stat','phase':'Skala','value':'87 000 000','label':'tyle profili Facebooka wyciekło','context':'300 tys. osób zainstalowało aplikację. Reszta — ich znajomi.'},
            {'type':'title','phase':'Reveal','text':'THIS IS YOUR DIGITAL LIFE','sub':'aplikacja-quiz. autor: Aleksandr Kogan, Cambridge','size':'med','color':'default'},
            {'type':'diagram','phase':'Mechanizm','headline':'quiz psychometryczny → dane znajomych','left_title':'Aplikacja','left_sub':'thisisyourdigitallife','right_title':'Cambridge Analytica','right_sub':'profilowanie OCEAN','label':'Facebook Graph API pre-2015','footer':'Openness · Conscientiousness · Extraversion · Agreeableness · Neuroticism'},
            {'type':'scale','phase':'Użycie','headline_pre':'KAMPANIA TRUMPA.','headline_post':'BREXIT.','tl_left':'2013','tl_mid':'2016 wybory USA','tl_right':'2018 ujawnienie','tl_mid_pos':72,
             'stats':[{'value':'87 mln','label':'profili'},{'value':'5,8 mld','label':'wyświetleń reklam'},{'value':'$1 mln','label':'miesięcznie dla Cambridge'}]},
            {'type':'discovery','phase':'Odkrycie','date':'MARZEC 2018',
             'names':[{'name':'Christopher Wylie','sub':'Whistleblower · CA'},{'name':'Carole Cadwalladr','sub':'Observer · Guardian'},{'name':'NYT','sub':'+ The Observer'}],
             'footer':'książka Wylie "Mindf*ck" (2019)'},
            {'type':'stat','phase':'Kara','value':'$5 000 000 000','label':'kara FTC dla Facebooka (2019) — rekord','context':'+ 725 mln USD class action · 100 mln SEC · 1,4 mld USD Texas AG · 8 mld pozew akcjonariuszy'},
            {'type':'close','title':'CAMBRIDGE ANALYTICA','sub':'Pierwsza sprawa, która przekonała świat, że dane to broń polityczna. Facebook zapłacił rekord. Cambridge Analytica upadła.','card_id':'A02'},
        ]
    },
    {
        'id': 'A03', 'slug': 'a03-onavo-i-facebook-research-vpn-project-atlas',
        'card_title': 'Onavo + Facebook Research VPN',
        'header_title': 'Onavo / Project Atlas — Facebook płacił za szpiegowanie',
        'scenes': [
            {'type':'title','phase':'Setup','text':'VPN. PRYWATNOŚĆ.','sub':'tak brzmiała reklama Onavo','size':'huge'},
            {'type':'strike','phase':'Tension','strike':'CZEGO','rest':'NIE POWIEDZIELI.','sub':'że VPN należy do Facebooka','size':'big'},
            {'type':'title','phase':'Reveal','text':'ONAVO → PROJECT ATLAS','sub':'2013: Facebook kupuje Onavo · 2016: relaunch jako Research','size':'med','color':'default'},
            {'type':'diagram','phase':'Mechanizm','headline':'VPN = cały ruch w rękach Facebooka','left_title':'Urządzenie','left_sub':'cały ruch sieciowy','right_title':'Facebook','right_sub':'analityka konkurencji','label':'VPN tunnel','footer':'WhatsApp rośnie 60%/rok → FB kupuje za 19 mld USD'},
            {'type':'scale','phase':'Skala','headline_pre':'20 USD MIESIĘCZNIE.','headline_post':'W TYM DZIECI.','tl_left':'2013 start','tl_mid':'2018 Apple usuwa','tl_right':'2019 zamknięte','tl_mid_pos':70,
             'stats':[{'value':'~187 tys.','label':'urządzeń'},{'value':'13–35 lat','label':'wiek uczestników'},{'value':'$20/mc','label':'opłata za szpiegowanie'}]},
            {'type':'discovery','phase':'Odkrycie','date':'STYCZEŃ 2019',
             'names':[{'name':'Josh Constine','sub':'TechCrunch'},{'name':'Apple','sub':'zrywa umowę Enterprise'},{'name':'FTC','sub':'dochodzenie'}],
             'footer':'wcześniej: ostrzeżenia ekspertów już w 2018'},
            {'type':'stat','phase':'Konsekwencja','value':'SKASOWANE','label':'Apple usuwa Onavo z App Store (2018), Facebook zamyka Research VPN (2019)','context':'Bez osobnej kary — włączone do 5 mld USD Cambridge Analytica. Projekt Atlas — ukryty w ekosystemie.'},
            {'type':'close','title':'PROJECT ATLAS','sub':'Kupiłeś się na darmowy VPN. Płaciłeś sobą. I dwudziestoma dolarami.','card_id':'A03'},
        ]
    },
    {
        'id': 'A04', 'slug': 'a04-wyciek-533-milionow-numerow-facebooka-z-2-67-mln-polakow',
        'card_title': '533 mln numerów Facebooka',
        'header_title': 'Wyciek 533 mln numerów Facebooka — w tym 2,67 mln Polaków',
        'scenes': [
            {'type':'title','phase':'Setup','text':'TWÓJ NUMER NA FACEBOOKU.','sub':'dałeś go do 2FA','size':'big'},
            {'type':'strike','phase':'Tension','strike':'PRYWATNY','rest':'? W 2019 WYPŁYNĄŁ.','sub':'','size':'big'},
            {'type':'title','phase':'Reveal','text':'CONTACT IMPORTER','sub':'bug w API Facebooka pozwalał na mass-lookup po numerze','size':'med','color':'default'},
            {'type':'diagram','phase':'Mechanizm','headline':'mass-lookup numerów → pełne profile','left_title':'Atakujący','left_sub':'lista numerów telefonów','right_title':'Baza Facebooka','right_sub':'imię, nazwisko, email','label':'Contact Importer API','footer':'533 000 000 rekordów z 106 krajów'},
            {'type':'scale','phase':'Skala','headline_pre':'533 MLN REKORDÓW.','headline_post':'106 KRAJÓW.','tl_left':'2019 wyciek','tl_mid':'FB wiedzial','tl_right':'2021 darknet','tl_mid_pos':40,
             'stats':[{'value':'32 mln','label':'USA'},{'value':'45 mln','label':'Egipt'},{'value':'2,67 mln','label':'Polska'}]},
            {'type':'discovery','phase':'Odkrycie','date':'STYCZEŃ 2021',
             'names':[{'name':'Alon Gal','sub':'CTO Hudson Rock'},{'name':'Darknet','sub':'sprzedaż za $5k'},{'name':'Facebook','sub':'milczy od 2019'}],
             'footer':'FB: "historyczne dane, nic nowego"'},
            {'type':'stat','phase':'Kara','value':'265 000 000 €','label':'kara DPC Irlandia (listopad 2022)','context':'Class action trwa. Facebook odmówił indywidualnego zawiadamiania poszkodowanych.'},
            {'type':'close','title':'2,67 MLN POLAKÓW','sub':'Twój numer mogli kupić za 0,01 USD za sztukę. Facebook wiedział od 2019. Ujawnił — kiedy już było za późno.','card_id':'A04'},
        ]
    },
    {
        'id': 'A05', 'slug': 'a05-facebook-files',
        'card_title': 'Facebook Files',
        'header_title': 'Facebook Files — największy przeciek dokumentów Mety',
        'scenes': [
            {'type':'stat','phase':'Setup','value':'32%','label':'dziewczynek: "Instagram pogarsza moją samoocenę"','context':'— z wewnętrznego badania Mety, 2019'},
            {'type':'strike','phase':'Tension','strike':'META','rest':'WIEDZIAŁA. UKRYŁA.','sub':'wewnętrzne raporty, 2019–2021','size':'big'},
            {'type':'title','phase':'Reveal','text':'FRANCES HAUGEN','sub':'product manager Civic Integrity → whistleblower','size':'huge'},
            {'type':'discovery','phase':'Mechanizm','date':'17 REDAKCJI',
             'names':[{'name':'Wall Street Journal','sub':'USA · seria Facebook Files'},{'name':'The New York Times','sub':'USA'},{'name':'Le Monde','sub':'Francja'},{'name':'Süddeutsche Zeitung','sub':'Niemcy'}],
             'footer':'Facebook Files Consortium · wrzesień–październik 2021'},
            {'type':'scale','phase':'Zakres','headline_pre':'INSTAGRAM I DZIEWCZYNKI.','headline_post':'XCHECK. MJANMA. ETIOPIA.','tl_left':'2018 pierwsze raporty','tl_mid':'2020 eskalacja','tl_right':'IX 2021 ujawnienie','tl_mid_pos':65,
             'stats':[{'value':'5,8 mln','label':'dokumentów'},{'value':'5,8 mln','label':'kont XCheck'},{'value':'2500+','label':'ofiar Mjanma (UN)'}]},
            {'type':'clock','phase':'Konfrontacja','time':'5 X 2021','line':'Zeznanie Frances Haugen przed Kongresem USA.',
             'compare':[{'left':'Trzy lata','right':'akumulacji przecieków'},{'left':'Sześć godzin','right':'przed Senatem'}]},
            {'type':'stat','phase':'Konsekwencja','value':'DSA','label':'Digital Services Act — przyspieszony w UE','context':'Kary 1,2 mld € (A07) i 390 mln € (A09) powstały w cieniu tej narracji.'},
            {'type':'close','title':'FACEBOOK FILES','sub':'Największa seria przecieków w historii Doliny Krzemowej. Haugen zeznawała sama. Miała wsparcie PR.','card_id':'A05'},
        ]
    },
    {
        'id': 'A06', 'slug': 'a06-emotional-contagion',
        'card_title': 'Emotional Contagion',
        'header_title': 'Emotional Contagion — eksperyment na 689 000 osób bez zgody',
        'scenes': [
            {'type':'title','phase':'Setup','text':'NEWSFEED TO MY.','sub':'to MY wybieramy, co widzimy','size':'huge'},
            {'type':'strike','phase':'Tension','strike':'2012','rest':': KTOŚ WYBIERA ZA NAS.','sub':'Facebook Core Data Science Team','size':'big'},
            {'type':'title','phase':'Reveal','text':'EXPERIMENTAL EVIDENCE OF MASSIVE-SCALE EMOTIONAL CONTAGION','sub':'Kramer · Guillory · Hancock · PNAS 2014','size':'med','color':'default'},
            {'type':'diagram','phase':'Mechanizm','headline':'manipulacja newsfeedu → manipulacja emocji','left_title':'Grupa A','left_sub':'więcej smutnych postów','right_title':'Grupa B','right_sub':'więcej pozytywnych','label':'tydzień · 689 003 osoby','footer':'mierzono ton ich własnych postów po ekspozycji'},
            {'type':'scale','phase':'Skala','headline_pre':'689 003 OSÓB.','headline_post':'ZERO ZGODY.','tl_left':'I 2012 eksperyment','tl_mid':'VI 2014 PNAS','tl_right':'krytyka','tl_mid_pos':75,
             'stats':[{'value':'689 003','label':'osób bez zgody'},{'value':'3 mln','label':'postów analizowanych'},{'value':'1 tydzień','label':'manipulacji'}]},
            {'type':'discovery','phase':'Odkrycie','date':'CZERWIEC 2014',
             'names':[{'name':'PNAS','sub':'publikacja'},{'name':'Forbes','sub':'pierwszy alarm'},{'name':'Cornell IRB','sub':'"zgoda niepotrzebna"'}],
             'footer':'PNAS wydaje Editorial Expression of Concern'},
            {'type':'stat','phase':'Konsekwencja','value':'ZERO','label':'kar formalnych','context':'Ale: zmiana dyskusji o "informed consent" w badaniach na platformach. Początek debaty o etyce AI research.'},
            {'type':'close','title':'EMOTIONAL CONTAGION','sub':'Pierwsze publicznie opisane użycie 689 000 ludzi jako królików doświadczalnych — bez ich wiedzy.','card_id':'A06'},
        ]
    },
    {
        'id': 'A07', 'slug': 'a07-meta-1-2-mld-dpc',
        'card_title': 'Meta 1,2 mld € DPC',
        'header_title': 'Meta 1,2 mld € — rekordowa kara RODO',
        'scenes': [
            {'type':'title','phase':'Setup','text':'SCHREMS II','sub':'lipiec 2020, wyrok TSUE','size':'huge'},
            {'type':'strike','phase':'Tension','strike':'MUSIELI','rest':'ZATRZYMAĆ TRANSFERY.','sub':'3 lata ignorowania','size':'big'},
            {'type':'title','phase':'Reveal','text':'MAX SCHREMS','sub':'austriacki prawnik, noyb, od 2011','size':'huge'},
            {'type':'diagram','phase':'Mechanizm','headline':'dane EU → USA → zasięg NSA','left_title':'Meta Ireland','left_sub':'450 mln użytkowników EU','right_title':'Meta USA','right_sub':'serwery w Kalifornii','label':'Standard Contractual Clauses? niewystarczające','footer':'zakres FISA Section 702 — obywatele EU'},
            {'type':'scale','phase':'Skala','headline_pre':'450 MLN EUROPEJCZYKÓW.','headline_post':'10 LAT TRANSFERÓW.','tl_left':'2013 start','tl_mid':'VII 2020 Schrems II','tl_right':'V 2023 kara','tl_mid_pos':60,
             'stats':[{'value':'3 lata','label':'po Schrems II'},{'value':'2,6 mld €','label':'przychód Mety/tydzień'},{'value':'0,7%','label':'kary vs przychód roczny'}]},
            {'type':'discovery','phase':'Egzekwowanie','date':'MAJ 2023',
             'names':[{'name':'DPC Ireland','sub':'po naciskach EDPB'},{'name':'EDPB','sub':'Europejska Rada Ochrony'},{'name':'noyb','sub':'Max Schrems'}],
             'footer':'Irlandia zmuszona do wydania decyzji'},
            {'type':'stat','phase':'Kara','value':'1 200 000 000 €','label':'rekord w historii RODO','context':'0,7% rocznego przychodu Mety. Akcje wzrosły o 1,8% tydzień później. Meta się odwołuje — transfery trwają.'},
            {'type':'close','title':'1,2 MLD €','sub':'Rekordowa kara RODO. Meta: rynek przyjął z ulgą — kwota mniejsza, niż się obawiano.','card_id':'A07'},
        ]
    },
    {
        'id': 'A08', 'slug': 'a08-new-mexico-v-meta',
        'card_title': 'New Mexico v. Meta',
        'header_title': 'New Mexico v. Meta — pierwszy wyrok ławy przeciwko Big Tech',
        'scenes': [
            {'type':'title','phase':'Setup','text':'INSTAGRAM.','sub':'platforma, z której korzysta twoje dziecko','size':'huge'},
            {'type':'strike','phase':'Tension','strike':'BEZPIECZNA','rest':'? SKLEP Z PREDATORAMI.','sub':'','size':'big'},
            {'type':'title','phase':'Reveal','text':'RAÚL TORREZ','sub':'Attorney General stanu Nowy Meksyk · XII 2023','size':'huge'},
            {'type':'diagram','phase':'Dowód','headline':'fałszywy profil 13-latki → rekomendacje predatorów w godzinach','left_title':'Biuro AG','left_sub':'tworzy fake profil','right_title':'Algorytm IG','right_sub':'rekomenduje dorosłych','label':'deep cover sting','footer':'dowody zebrane w trybie undercover · bezpośrednie zaproszenia seksualne'},
            {'type':'scale','phase':'Skala','headline_pre':'100 MLN DZIECI W USA.','headline_post':'500 MLN GLOBALNIE.','tl_left':'2004 Facebook','tl_mid':'2019 Haugen','tl_right':'2024 wyrok NM','tl_mid_pos':80,
             'stats':[{'value':'46%','label':'nastolatek codziennie IG'},{'value':'75%','label':'spotkało nieznajomych'},{'value':'Haugen','sub':'jako świadek ekspert'}]},
            {'type':'discovery','phase':'Proces','date':'2024',
             'names':[{'name':'Sąd NM','sub':'ława przysięgłych'},{'name':'Frances Haugen','sub':'świadek ekspert'},{'name':'Torrez','sub':'AG prowadzący'}],
             'footer':'precedens dla kolejnych 49 stanów'},
            {'type':'stat','phase':'Wyrok','value':'PIERWSZY','label':'wyrok ławy USA przeciwko Big Tech za szkody dla dzieci','context':'Ugoda nieujawniona. Precedens otwierający drogę do kolejnych AG. Meta zmienia algorytm rekomendacji dla kont <18 lat.'},
            {'type':'close','title':'NEW MEXICO v. META','sub':'Pierwszy raz ława przysięgłych USA uznała Big Tech winnego szkód dla dzieci.','card_id':'A08'},
        ]
    },
    {
        'id': 'A09', 'slug': 'a09-kara-390-mln-dpc',
        'card_title': 'Meta 390 mln € DPC',
        'header_title': 'Meta 390 mln € — koniec "performance of contract" dla reklam',
        'scenes': [
            {'type':'title','phase':'Setup','text':'AKCEPTUJĘ REGULAMIN','sub':'czy to jest zgoda?','size':'huge'},
            {'type':'strike','phase':'Tension','strike':'TAK','rest':'— MÓWIŁA META.','sub':'TSUE: nie.','size':'big'},
            {'type':'title','phase':'Reveal','text':'PERFORMANCE OF CONTRACT','sub':'podstawa, na której Meta opierała reklamy behawioralne','size':'med','color':'default'},
            {'type':'diagram','phase':'Mechanizm','headline':'"reklamy = część usługi" → bez osobnej zgody','left_title':'Meta','left_sub':'akceptacja regulaminu = zgoda','right_title':'RODO art. 6','right_sub':'wymaga świadomej zgody','label':'konflikt od 25 V 2018','footer':'skarga noyb złożona w pierwszy dzień RODO'},
            {'type':'scale','phase':'Skala','headline_pre':'400 MLN UŻYTKOWNIKÓW EU.','headline_post':'10 LAT TEJ INTERPRETACJI.','tl_left':'2018 skarga','tl_mid':'2022 pierwsza decyzja','tl_right':'I 2023 kara','tl_mid_pos':70,
             'stats':[{'value':'210 mln €','label':'Facebook'},{'value':'180 mln €','label':'Instagram'},{'value':'5,5 mln €','label':'WhatsApp'}]},
            {'type':'discovery','phase':'Proces','date':'STYCZEŃ 2023',
             'names':[{'name':'DPC Ireland','sub':'pod przymusem EDPB'},{'name':'noyb','sub':'skarga 2018'},{'name':'EDPB','sub':'nadrzędny organ'}],
             'footer':'pięć lat procesu · decyzja: przymusowa reweryfikacja zgody'},
            {'type':'stat','phase':'Konsekwencja','value':'390 MLN €','label':'łącznie (210 Facebook + 180 Instagram)','context':'Meta zmuszona do zmiany modelu zgody. Wprowadza "consent or pay" — co uruchamia sprawę A10.'},
            {'type':'close','title':'390 MLN €','sub':'To nie jest zgoda. To jest wymuszenie. DPC Ireland po pięciu latach — wreszcie to potwierdził.','card_id':'A09'},
        ]
    },
    {
        'id': 'A10', 'slug': 'a10-kara-dma-200-mln-komisji-europejskiej',
        'card_title': 'DMA 200 mln € (Meta)',
        'header_title': 'DMA 200 mln € — pierwsza kara za "consent or pay"',
        'scenes': [
            {'type':'title','phase':'Setup','text':'CONSENT OR PAY','sub':'listopad 2023, nowy model Mety','size':'huge'},
            {'type':'strike','phase':'Tension','strike':'WYBÓR','rest':'? ULTIMATUM.','sub':'12,99 € lub reklamy behawioralne','size':'big'},
            {'type':'title','phase':'Reveal','text':'DIGITAL MARKETS ACT','sub':'marzec 2024 · gatekeepers: Meta, Google, Apple, Amazon, MS, ByteDance','size':'med','color':'default'},
            {'type':'diagram','phase':'Mechanizm','headline':'fałszywy wybór: płać lub zgoda na śledzenie','left_title':'Użytkownik','left_sub':'3 przyciski','right_title':'Meta','right_sub':'dwie opcje (tak + tak)','label':'brak "bez reklam, bez płacenia"','footer':'DMA wymaga równorzędnej alternatywy'},
            {'type':'scale','phase':'Skala','headline_pre':'250 MLN UŻYTKOWNIKÓW UE.','headline_post':'PIERWSZA SPRAWA DMA.','tl_left':'III 2024 DMA live','tl_mid':'III 2024 skarga','tl_right':'IV 2025 kara','tl_mid_pos':30,
             'stats':[{'value':'12,99 €','label':'miesiąc za "bez reklam"'},{'value':'250 mln','label':'użytkowników UE'},{'value':'10%','label':'maks. kara rocznego przychodu'}]},
            {'type':'discovery','phase':'Wszczęcie','date':'KWIECIEŃ 2025',
             'names':[{'name':'Komisja Europejska','sub':'bezpośrednio'},{'name':'noyb · Panoptykon','sub':'skarżący'},{'name':'BEUC','sub':'European Consumer Org'}],
             'footer':'Apple równolegle 500 mln € (App Store)'},
            {'type':'stat','phase':'Kara','value':'200 MLN €','label':'pierwsza kara DMA w historii','context':'Meta się odwołuje. Komisja: "model consent or pay nie spełnia DMA". Apple dostaje 500 mln € za App Store tego samego dnia.'},
            {'type':'close','title':'200 MLN €','sub':'Pierwsza kara DMA. Pierwszy raz powiedziane wprost: "model biznesowy nie spełnia prawa".','card_id':'A10'},
        ]
    },

    # =========================================================================
    # GROUP B — GOOGLE
    # =========================================================================
    {
        'id': 'B01', 'slug': 'b01-google-street-view-wi-spy',
        'card_title': 'Google Street View Wi-Spy',
        'header_title': 'Street View Wi-Spy — samochody Google nasłuchujące Wi-Fi',
        'scenes': [
            {'type':'title','phase':'Setup','text':'GOOGLE MAPUJE ULICE.','sub':'od 2007 roku','size':'huge'},
            {'type':'strike','phase':'Tension','strike':'ALE','rest':'NIE TYLKO ULICE.','sub':'30 krajów · 3 lata · cichy nasłuch','size':'big'},
            {'type':'title','phase':'Reveal','text':'JOHANNES CASPAR','sub':'Hamburski Komisarz Ochrony Danych · maj 2010','size':'huge'},
            {'type':'diagram','phase':'Mechanizm','headline':'samochód z anteną → payload data z Wi-Fi','left_title':'Samochód Street View','left_sub':'anteny Wi-Fi + GPS','right_title':'Serwery Google','right_sub':'setki GB przechwyconych danych','label':'otwarte sieci Wi-Fi','footer':'hasła, emaile, logowania bankowe, nazwy plików'},
            {'type':'scale','phase':'Skala','headline_pre':'30 KRAJÓW.','headline_post':'3 LATA. POLSKA WŁĄCZONA.','tl_left':'2007 start','tl_mid':'2010 ujawnienie','tl_right':'2013 ugody USA','tl_mid_pos':50,
             'stats':[{'value':'600 GB','label':'danych'},{'value':'30+','label':'krajów'},{'value':'~10M','label':'EUR + USD łącznie'}]},
            {'type':'discovery','phase':'Odkrycie','date':'MAJ 2010',
             'names':[{'name':'Bundesnetzagentur','sub':'audyt DE'},{'name':'Johannes Caspar','sub':'Hamburg DPA'},{'name':'Korea Płd. policja','sub':'XI 2011 · przeszukanie'}],
             'footer':'"pojedynczy inżynier"? Marius Milner, autor NetStumbler'},
            {'type':'stat','phase':'Kary','value':'~10 MLN','label':'EUR + USD łącznie z 30 krajów','context':'7 mln USD ugoda 38 stanów USA · Joffe v. Google 13 mln · Hiszpania 900 tys. € · Niemcy 145 tys. € · Francja 100 tys. €'},
            {'type':'close','title':'WI-SPY','sub':'Pierwsza globalna sprawa Big Tech przed regulatorami krajowymi. Nauczka: otwarta sieć Wi-Fi NIE jest "publicznie dostępna".','card_id':'B01'},
        ]
    },
    {
        'id': 'B02', 'slug': 'b02-google-safari-workaround',
        'card_title': 'Google Safari Workaround',
        'header_title': 'Safari Workaround — jak Google obszedł blokadę Apple',
        'scenes': [
            {'type':'title','phase':'Setup','text':'SAFARI BLOKUJE COOKIES.','sub':'stron trzecich · domyślnie od 2003','size':'huge'},
            {'type':'strike','phase':'Tension','strike':'BLOKUJE','rest':'? GOOGLE OBSZEDŁ.','sub':'przez 8 miesięcy · DoubleClick','size':'big'},
            {'type':'discovery','phase':'Reveal','date':'LUTY 2012',
             'names':[{'name':'Jonathan Mayer','sub':'Stanford · analiza kodu'},{'name':'Ashkan Soltani','sub':'niezależny badacz'},{'name':'Wall Street Journal','sub':'publikacja'}]},
            {'type':'diagram','phase':'Mechanizm','headline':'fałszywy submit formularza → cookie dopuszczone','left_title':'Skrypt DoubleClick','left_sub':'submit ukryty','right_title':'Safari','right_sub':'"user initiated" → cookie OK','label':'obejście sandboxingu','footer':'exploit behaviorowej luki w Safari'},
            {'type':'scale','phase':'Skala','headline_pre':'MILIONY iPHONÓW.','headline_post':'WIĘKSZOŚĆ INTERNETU.','tl_left':'VI 2011 wdrożenie','tl_mid':'II 2012 ujawnienie','tl_right':'2013 settlement','tl_mid_pos':55,
             'stats':[{'value':'8 mies.','label':'aktywnego obejścia'},{'value':'22,5 mln','label':'USD FTC — rekord'},{'value':'17 mln','label':'USD stany USA'}]},
            {'type':'title','phase':'Reakcja','text':'NAJWIĘKSZA KARA FTC','sub':'w historii FTC do 2012 roku','size':'big'},
            {'type':'stat','phase':'Kara','value':'22 500 000 $','label':'FTC · październik 2012','context':'+ 17 mln USD 37 stanów USA · 5,5 mln USD Joffe class action. Google: "to był eksperymentalny kod". FTC: "to był kod produkcyjny przez 8 miesięcy".'},
            {'type':'close','title':'SAFARI WORKAROUND','sub':'Pierwsze udowodnienie programowego obchodzenia blokad prywatności przez Big Tech.','card_id':'B02'},
        ]
    },
    {
        'id': 'B03', 'slug': 'b03-google-api-bugs',
        'card_title': 'Google+ API Bugs',
        'header_title': 'Google+ API Bugs — Google wiedział 6 miesięcy. Milczał.',
        'scenes': [
            {'type':'title','phase':'Setup','text':'GOOGLE+','sub':'pamiętasz? 2011–2019','size':'huge'},
            {'type':'strike','phase':'Tension','strike':'PRYWATNE','rest':'? WYCIEKŁY.','sub':'bug w API People przez 3 lata','size':'big'},
            {'type':'title','phase':'Reveal','text':'GOOGLE WIEDZIAŁ OD MARCA.','sub':'ujawnił w październiku','size':'med','color':'default'},
            {'type':'diagram','phase':'Mechanizm','headline':'aplikacja pyta → API zwraca też dane "prywatnych" znajomych','left_title':'Aplikacja zewnętrzna','left_sub':'438 aplikacji z dostępem','right_title':'Google+ People API','right_sub':'zwraca prywatne profile','label':'2015–2018 · 3 lata','footer':'imię, email, zawód, relacje — wszystko leak'},
            {'type':'scale','phase':'Skala','headline_pre':'500 000 KONT.','headline_post':'PRZEZ 3 LATA.','tl_left':'2015 bug powstaje','tl_mid':'III 2018 Google znalazł','tl_right':'X 2018 ujawnienie','tl_mid_pos':75,
             'stats':[{'value':'500k','label':'kont (pierwszy bug)'},{'value':'52,5 mln','label':'kont (drugi bug XI 2018)'},{'value':'6 mies.','label':'milczenia'}]},
            {'type':'discovery','phase':'Odkrycie','date':'PAŹDZIERNIK 2018',
             'names':[{'name':'Wall Street Journal','sub':'Douglas MacMillan'},{'name':'wewnętrzne memo','sub':'"dochodzenie jak CA"'},{'name':'Sundar Pichai','sub':'"nie chcieliśmy paniki"'}],
             'footer':'memo ujawnione: "ujawnienie uruchomi dochodzenie porównywalne z Cambridge Analytica"'},
            {'type':'stat','phase':'Konsekwencja','value':'ZAMKNIĘTE','label':'Google+ zamknięty 8 X 2018, tydzień po ujawnieniu','context':'7,5 mln USD class action settlement. Google: "mało popularna usługa". Prawda: naruszenie zasady przejrzystości.'},
            {'type':'close','title':'GOOGLE+','sub':'Zamknięty nie dlatego, że nie był popularny. Zamknięty, bo naruszenie wyciekło.','card_id':'B03'},
        ]
    },
    {
        'id': 'B04', 'slug': 'b04-google-location-history',
        'card_title': 'Google Location History',
        'header_title': 'Location History — śledzenie mimo wyłączenia',
        'scenes': [
            {'type':'title','phase':'Setup','text':'WYŁĄCZYŁAM HISTORIĘ LOKALIZACJI.','sub':'Google: OK. A jednak nie.','size':'med','color':'default'},
            {'type':'strike','phase':'Tension','strike':'WYŁĄCZONE','rest':'? DRUGIE USTAWIENIE.','sub':'"Web & App Activity" — domyślnie ON','size':'big'},
            {'type':'title','phase':'Reveal','text':'RYAN NAKASHIMA','sub':'Associated Press · sierpień 2018','size':'huge'},
            {'type':'diagram','phase':'Mechanizm','headline':'dwa ustawienia → jedna iluzja prywatności','left_title':'Location History','left_sub':'widoczne w Timeline','right_title':'Web & App Activity','right_sub':'ukryte, domyślnie ON','label':'dark pattern','footer':'lokalizacja przez Wi-Fi, IP, sensor fusion — niezależnie od ustawienia'},
            {'type':'scale','phase':'Skala','headline_pre':'8 LAT PRAKTYKI.','headline_post':'MILIARDY TELEFONÓW.','tl_left':'2014 Web & App','tl_mid':'2018 ujawnienie AP','tl_right':'2022 ugody','tl_mid_pos':55,
             'stats':[{'value':'340','label':'transmisji/dzień z Androida'},{'value':'40','label':'stanów USA pozywało'},{'value':'~660 mln','label':'USD łącznie kar'}]},
            {'type':'discovery','phase':'Potwierdzenie','date':'RAPORT SCHMIDT',
             'names':[{'name':'Douglas Schmidt','sub':'Vanderbilt University'},{'name':'AP · Nakashima','sub':'eksperyment 20 telefonów'},{'name':'AG Arizony','sub':'pierwszy pozew 2020'}],
             'footer':'"uproszczenie UX zmniejszy precyzję targetingu" — wewnętrzny email Google'},
            {'type':'stat','phase':'Kary','value':'391,5 MLN $','label':'ugoda 40 AG stanów USA (2022) — rekord historyczny','context':'+ AZ 85 mln · DC/IN/TX/WA 29,5 mln · Korea PIPC 48 mln EUR · Australia ACCC 35 mln EUR · class action 93 mln USD. Łącznie ~660 mln USD.'},
            {'type':'close','title':'LOCATION HISTORY','sub':'Dark patterns jako model biznesowy. "Uproszczenie UX zmniejszyłoby precyzję targetingu" — email wewnętrzny Google.','card_id':'B04'},
        ]
    },
    {
        'id': 'B05', 'slug': 'b05-brown-v-google',
        'card_title': 'Brown v. Google',
        'header_title': 'Brown v. Google — incognito, które nie było incognito',
        'scenes': [
            {'type':'title','phase':'Setup','text':'TRYB INCOGNITO','sub':'co to właściwie jest?','size':'huge'},
            {'type':'strike','phase':'Tension','strike':'PRYWATNY','rest':'? NIE JEST.','sub':'od 2008 roku','size':'big'},
            {'type':'title','phase':'Reveal','text':'BROWN v. GOOGLE','sub':'ND California · czerwiec 2020 · class action','size':'med','color':'default'},
            {'type':'diagram','phase':'Mechanizm','headline':'incognito ≠ niewidzialność · Google dalej śledzi','left_title':'Chrome Incognito','left_sub':'"prywatny" wg UI','right_title':'Google Analytics/Ads','right_sub':'śledzi przez ciasteczka 3rd party','label':'miliony witryn z GA/Ads','footer':'Firebase · DoubleClick · wszystkie produkty Google'},
            {'type':'scale','phase':'Skala','headline_pre':'MILIARDY SESJI DZIENNIE.','headline_post':'10 LAT MARKETINGU.','tl_left':'2008 start','tl_mid':'VI 2020 pozew','tl_right':'XII 2023 ugoda','tl_mid_pos':80,
             'stats':[{'value':'136 mln','label':'Amerykanów reg.'},{'value':'10 lat','label':'wprowadzania w błąd'},{'value':'5 mld $','label':'wartość danych'}]},
            {'type':'discovery','phase':'Dowody','date':'WEWNĘTRZNE DOKUMENTY',
             'names':[{'name':'"nie możemy pozwolić"','sub':'by użytkownicy myśleli że prywatny'},{'name':'"ale nie możemy"','sub':'powiedzieć im tego wprost'},{'name':'NDA engineers','sub':'świadkowie w procesie'}],
             'footer':'dokumenty ujawnione w procesie — strategia komunikacji'},
            {'type':'stat','phase':'Ugoda','value':'5 000 000 000 $','label':'ugoda 2023 — NIE pieniądze, lecz zniszczenie danych','context':'Plus: Google musi zmienić komunikat incognito. Zmienił — subtelnie, bez przyznania winy.'},
            {'type':'close','title':'INCOGNITO','sub':'Przez 10 lat sprzedawane jako prywatność, która nie istniała. Rynek to zauważył po 5 mld $ zniszczonych danych.','card_id':'B05'},
        ]
    },
    {
        'id': 'B06', 'slug': 'b06-project-dragonfly',
        'card_title': 'Project Dragonfly',
        'header_title': 'Project Dragonfly — Google budował ocenzurowaną wyszukiwarkę dla Chin',
        'scenes': [
            {'type':'title','phase':'Setup','text':'GOOGLE W CHINACH.','sub':'wyszedł w 2010 po ataku Aurora','size':'huge'},
            {'type':'strike','phase':'Tension','strike':'WYSZEDŁ','rest':'? WRACAŁ.','sub':'2017–2018 · DRAGONFLY','size':'big'},
            {'type':'title','phase':'Reveal','text':'DRAGONFLY','sub':'kodowe · ocenzurowana wyszukiwarka Android dla ChRL','size':'huge'},
            {'type':'diagram','phase':'Mechanizm','headline':'zapytanie → filter list rządu → zero wyników','left_title':'Użytkownik','left_sub':'zapytanie + numer telefonu','right_title':'Google Dragonfly','right_sub':'filtr ChRL · brak komunikatu','label':'Tiananmen · Dalai Lama · demokracja','footer':'identyfikacja przez numer telefonu na konto'},
            {'type':'scale','phase':'Skala','headline_pre':'1,4 MLD OBYWATELI.','headline_post':'100 MLN ANDROID POTENCJALNIE.','tl_left':'2010 exit','tl_mid':'2017 start Dragonfly','tl_right':'XII 2018 koniec','tl_mid_pos':70,
             'stats':[{'value':'1 400','label':'pracowników · list otwarty'},{'value':'Kongres','sub':'zeznania publiczne'},{'value':'The Intercept','sub':'pierwsza publikacja'}]},
            {'type':'discovery','phase':'Ujawnienie','date':'SIERPIEŃ 2018',
             'names':[{'name':'Ryan Gallagher','sub':'The Intercept'},{'name':'1400 pracowników','sub':'list otwarty'},{'name':'Kongres USA','sub':'zeznania'}],
             'footer':'insider leak · memo wewnętrzne · prototypy techniczne'},
            {'type':'stat','phase':'Konsekwencja','value':'WYGASZONE','label':'projekt "effectively ended" XII 2018','context':'Nigdy oficjalnie nie potwierdzony ani zanegowany. Zespół rozpuszczony stopniowo. Nauka: pracownicy jako sygnaliści — nie zarząd.'},
            {'type':'close','title':'DRAGONFLY','sub':'Sygnalistami byli pracownicy. Nie zarząd. Kultura protestu w Google zmieniła się na zawsze.','card_id':'B06'},
        ]
    },

    # =========================================================================
    # GROUP C — APPLE / MICROSOFT / LINKEDIN
    # =========================================================================
    {
        'id': 'C01', 'slug': 'c01-apple-batterygate',
        'card_title': 'Apple Batterygate',
        'header_title': 'Batterygate — planned obsolescence potwierdzona',
        'scenes': [
            {'type':'title','phase':'Setup','text':'MÓJ iPHONE ZWOLNIŁ.','sub':'kończy się bateria?','size':'huge'},
            {'type':'strike','phase':'Tension','strike':'BATERIA','rest':'? AKTUALIZACJA.','sub':'iOS 10.2.1 · styczeń 2017','size':'big'},
            {'type':'title','phase':'Reveal','text':'APPLE PRZYZNAŁO.','sub':'"for your own good" · grudzień 2017','size':'med','color':'default'},
            {'type':'diagram','phase':'Mechanizm','headline':'stara bateria → iOS zwalnia CPU → iPhone wydaje się wyczerpany','left_title':'Stara bateria','left_sub':'zapotrzebowanie > dostarczalne','right_title':'iOS throttling','right_sub':'ukryte spowolnienie','label':'push: kup nowy','footer':'skutek uboczny? czy model biznesowy?'},
            {'type':'scale','phase':'Skala','headline_pre':'iPhone 6, 6S, SE, 7.','headline_post':'SETKI MILIONÓW URZĄDZEŃ.','tl_left':'2016 praktyka start','tl_mid':'XII 2017 ujawnienie','tl_right':'2020 class action','tl_mid_pos':55,
             'stats':[{'value':'500 mln','label':'USD class action'},{'value':'113 mln','label':'USD 34 AG USA'},{'value':'25 mln','label':'EUR Francja'}]},
            {'type':'discovery','phase':'Odkrycie','date':'GRUDZIEŃ 2017',
             'names':[{'name':'John Poole','sub':'Geekbench · Reddit'},{'name':'Apple','sub':'"Yes, we do that"'},{'name':'Włochy · Garante','sub':'pierwsza europejska'}],
             'footer':'zmiana iOS 11.3 · "Battery Health" UI'},
            {'type':'stat','phase':'Kary','value':'500 MLN $','label':'class action In re Apple Device Performance Litigation (2020)','context':'+ 113 mln USD 34 AG stanów · 25 mln € Francja · 10 mln € Włochy. Apple zmuszone do wprowadzenia "Battery Health" UI.'},
            {'type':'close','title':'BATTERYGATE','sub':'Planned obsolescence potwierdzona dokumentacją wewnętrzną. I wygrana konsumentów w class action.','card_id':'C01'},
        ]
    },
    {
        'id': 'C02', 'slug': 'c02-apple-siri-grading',
        'card_title': 'Apple Siri Grading',
        'header_title': 'Siri Grading — kontraktorzy słuchali rozmów o seksie, narkotykach, terapii',
        'scenes': [
            {'type':'title','phase':'Setup','text':'HEY SIRI.','sub':'i tylko iPhone słucha?','size':'huge'},
            {'type':'strike','phase':'Tension','strike':'TYLKO','rest':'? TYSIĄCE KONTRAKTORÓW.','sub':'w Cork, Dublinie, Chennai','size':'big'},
            {'type':'title','phase':'Reveal','text':'THOMAS LE BONNIEC','sub':'były kontraktor Globe Technical Services · lipiec 2019','size':'huge'},
            {'type':'diagram','phase':'Mechanizm','headline':'false trigger → nagranie → kontraktor w innym kraju','left_title':'iPhone','left_sub':'"false trigger" np. zamek','right_title':'Kontraktor','right_sub':'losowe próbki · "grading"','label':'bez szyfrowania end-to-end','footer':'słyszeli: seks, dealing drugs, rozmowy medyczne, terapia'},
            {'type':'scale','phase':'Skala','headline_pre':'0,2% AKTYWACJI.','headline_post':'MILIARDY PRÓBEK.','tl_left':'2011 Siri start','tl_mid':'2019 ujawnienie','tl_right':'XII 2024 ugoda','tl_mid_pos':70,
             'stats':[{'value':'miliardy','label':'próbek audio'},{'value':'0,2%','label':'wszystkich aktywacji'},{'value':'95 mln','label':'USD ugoda'}]},
            {'type':'discovery','phase':'Ujawnienie','date':'LIPIEC 2019',
             'names':[{'name':'Alex Hern','sub':'The Guardian'},{'name':'Thomas Le Bonniec','sub':'whistleblower · Hiszpania'},{'name':'CNIL · Francja','sub':'formalna skarga 2020'}],
             'footer':'tydzień później — Apple zawiesza program'},
            {'type':'stat','phase':'Ugoda','value':'95 000 000 $','label':'Lopez v. Apple (XII 2024, zatwierdzone 2025)','context':'Pierwsza w historii ugoda za nagrania głosowe bez zgody. Apple zmienia politykę: zawsze opt-in, lokalne przetwarzanie gdzie możliwe.'},
            {'type':'close','title':'SIRI GRADING','sub':'Twój asystent słuchał. A ty nie wiedziałeś, że ludzie słuchają jego.','card_id':'C02'},
        ]
    },
    {
        'id': 'C03', 'slug': 'c03-apple-csam',
        'card_title': 'Apple CSAM (wycofane)',
        'header_title': 'CSAM Detection — plan lokalnego skanowania iPhonów',
        'scenes': [
            {'type':'title','phase':'Setup','text':'CHRONIMY DZIECI.','sub':'Apple · 5 sierpnia 2021','size':'huge'},
            {'type':'strike','phase':'Tension','strike':'TYLKO','rest':'? SKANUJEMY WSZYSTKO.','sub':'każde zdjęcie przed uploadem do iCloud','size':'big'},
            {'type':'title','phase':'Reveal','text':'CSAM DETECTION','sub':'NeuralHash · lokalna baza hashów NCMEC','size':'med','color':'default'},
            {'type':'diagram','phase':'Mechanizm','headline':'zdjęcie → NeuralHash lokalnie → porównanie z bazą','left_title':'iPhone','left_sub':'NeuralHash każdego zdjęcia','right_title':'Apple → NCMEC → FBI','right_sub':'threshold 30 → raport','label':'skanowanie lokalne','footer':'"privacy-preserving" — według Apple'},
            {'type':'scale','phase':'Skala','headline_pre':'1 MLD iPHONÓW.','headline_post':'WSZYSTKIE ZDJĘCIA.','tl_left':'VIII 2021 ogłoszenie','tl_mid':'IX 2021 zawieszenie','tl_right':'XII 2022 wycofanie','tl_mid_pos':40,
             'stats':[{'value':'90+','label':'kryptografów przeciw'},{'value':'EFF','sub':'list otwarty'},{'value':'Snowden','sub':'publicznie krytycznie'}]},
            {'type':'discovery','phase':'Opór','date':'SIERPIEŃ 2021',
             'names':[{'name':'EFF · ACLU','sub':'list otwarty'},{'name':'Matthew Green','sub':'Johns Hopkins'},{'name':'Erik Neuenschwander','sub':'insider · Kongres'}],
             'footer':'"wszystkie argumenty stosują się też do rządów" — kryptolodzy'},
            {'type':'stat','phase':'Konsekwencja','value':'WYCOFANE','label':'grudzień 2022 · zamiast tego: Advanced Data Protection','context':'E2EE dla iCloud — opt-in. Plan CSAM nie wdrożony. Ale: precedens istnieje. I może wrócić.'},
            {'type':'close','title':'CSAM DETECTION','sub':'Nie wdrożone. Ale plan istniał. I może wrócić — w imię dzieci, terrorystów, czego zechcą.','card_id':'C03'},
        ]
    },
    {
        'id': 'C04', 'slug': 'c04-microsoft-recall',
        'card_title': 'Microsoft Recall',
        'header_title': 'Windows Recall — screenshoty co 5 sekund w plain text',
        'scenes': [
            {'type':'title','phase':'Setup','text':'WINDOWS RECALL.','sub':'Build 2024 · maj','size':'huge'},
            {'type':'strike','phase':'Tension','strike':'REMEMBER','rest':'ANYTHING?','sub':'w tym hasła. karty. rozmowy.','size':'big'},
            {'type':'title','phase':'Reveal','text':'PLAINTEXT SQLITE','sub':'baza dostępna dla każdej aplikacji na koncie','size':'med','color':'default'},
            {'type':'diagram','phase':'Mechanizm','headline':'ekran → screenshot co 5s → OCR → SQLite plaintext','left_title':'Copilot+ PC','left_sub':'screenshot co 5 sekund','right_title':'Baza SQLite','right_sub':'plaintext · dostęp global','label':'brak szyfrowania','footer':'każda aplikacja infostealer wygrywa w sekundach'},
            {'type':'scale','phase':'Skala','headline_pre':'WINDOWS 11.','headline_post':'1,5 MLD URZĄDZEŃ.','tl_left':'V 2024 ogłoszenie','tl_mid':'VI 2024 wstrzymane','tl_right':'2026 kontrowersje','tl_mid_pos':15,
             'stats':[{'value':'3 tyg.','label':'od ogłoszenia do cofnięcia'},{'value':'TotalRecall','sub':'narzędzie exploit'},{'value':'Signal','sub':'blokuje screenshoty'}]},
            {'type':'discovery','phase':'Odkrycie','date':'MAJ 2024',
             'names':[{'name':'Kevin Beaumont','sub':'DoublePulsar'},{'name':'Alexander Hagenah','sub':'TotalRecall tool'},{'name':'UK ICO','sub':'oficjalne pytania'}],
             'footer':'"potential security disaster" — Beaumont'},
            {'type':'stat','phase':'Konsekwencja','value':'3 TYGODNIE','label':'od ogłoszenia do wstrzymania premiery','context':'Redesign: opt-in + Windows Hello + VBS+TPM. Ale TotalRecall Reloaded (2026) — nadal ekstrakuje dane. Kontrowersje trwają.'},
            {'type':'close','title':'RECALL','sub':'Najszybciej wycofana funkcja AI w historii Microsoftu. Pokazała, czego społeczność cybersec jest w stanie zmusić.','card_id':'C04'},
        ]
    },
    {
        'id': 'C05', 'slug': 'c05-linkedin-ai-training',
        'card_title': 'LinkedIn AI Training',
        'header_title': 'LinkedIn AI Training — trening na profilach bez opt-in',
        'scenes': [
            {'type':'title','phase':'Setup','text':'TWÓJ PROFIL LINKEDIN.','sub':'dla kogo jest?','size':'huge'},
            {'type':'strike','phase':'Tension','strike':'REKRUTERÓW','rest':'? DLA AI MICROSOFTU.','sub':'od września 2024','size':'big'},
            {'type':'title','phase':'Reveal','text':'USE DATA FOR GENERATIVE AI','sub':'ustawienie ukryte 3 menu głęboko · domyślnie ON','size':'med','color':'default'},
            {'type':'diagram','phase':'Mechanizm','headline':'twoje posty → modele Microsoftu → Copilot, Bing','left_title':'Profile + posty','left_sub':'1,1 mld użytkowników','right_title':'Microsoft AI','right_sub':'Copilot · Bing · GenAI','label':'bez wyraźnej zgody','footer':'opt-out · Settings → Data Privacy → głęboko'},
            {'type':'scale','phase':'Skala','headline_pre':'1,1 MLD PROFILI.','headline_post':'TRENING TRWAŁ.','tl_left':'IX 2024 zmiana','tl_mid':'tydzień','tl_right':'XI 2024 kara','tl_mid_pos':50,
             'stats':[{'value':'1,1 mld','label':'użytkowników'},{'value':'tydzień','label':'przed wykryciem'},{'value':'3 menu','label':'do opt-out'}]},
            {'type':'discovery','phase':'Odkrycie','date':'WRZESIEŃ 2024',
             'names':[{'name':'404 Media','sub':'Joseph Cox'},{'name':'TechCrunch · Verge','sub':'potwierdzenie'},{'name':'DPC Ireland','sub':'dochodzenie'}],
             'footer':'"to było przez tydzień" — LinkedIn. "to wystarczyło" — DPC'},
            {'type':'stat','phase':'Kara','value':'310 MLN €','label':'DPC Ireland · listopad 2024','context':'Rekord kategorii "dark patterns AI training". LinkedIn zmienia: teraz opt-in. Ale dane z tygodnia już w modelach.'},
            {'type':'close','title':'LINKEDIN AI','sub':'Trenował na tobie, zanim się dowiedziałaś. Tydzień wystarczył. DPC Ireland: 310 mln €.','card_id':'C05'},
        ]
    },

    # =========================================================================
    # GROUP D — AMAZON / UBER
    # =========================================================================
    {
        'id': 'D01', 'slug': 'd01-amazon-ring',
        'card_title': 'Amazon Ring',
        'header_title': 'Amazon Ring — kamery, policja, hakerzy',
        'scenes': [
            {'type':'title','phase':'Setup','text':'RING.','sub':'bezpieczeństwo domu','size':'huge'},
            {'type':'strike','phase':'Tension','strike':'BEZPIECZEŃSTWO','rest':'? LUB ODWROTNIE.','sub':'','size':'big'},
            {'type':'title','phase':'Reveal','text':'RING UKRAINE','sub':'pracownicy z pełnym dostępem do nagrań klientów','size':'med','color':'default'},
            {'type':'diagram','phase':'Mechanizm','headline':'kamera → S3 plaintext → Ukraine team + policja USA','left_title':'Ring Doorbell','left_sub':'10+ mln urządzeń USA','right_title':'Ring Ukraine + policja','right_sub':'2000+ wydziałów · bez nakazu','label':'"Request for Assistance"','footer':'20 000+ nagrań przekazanych policji bez nakazu (2020–2022)'},
            {'type':'scale','phase':'Skala','headline_pre':'10 MLN KAMER.','headline_post':'2 000 WYDZIAŁÓW POLICJI.','tl_left':'2013 start','tl_mid':'2018 Amazon kupuje','tl_right':'2023 FTC kara','tl_mid_pos':55,
             'stats':[{'value':'10+ mln','label':'Ring USA'},{'value':'2000+','label':'wydziałów policji'},{'value':'5,8 mln','label':'USD FTC'}]},
            {'type':'discovery','phase':'Ujawnienie','date':'STYCZEŃ 2019',
             'names':[{'name':'Sam Biddle','sub':'The Intercept'},{'name':'Motherboard · Vice','sub':'hakerzy krzyczeli do dzieci'},{'name':'FTC','sub':'dochodzenie'}],
             'footer':'pracownicy "podwójne kliknięcie" = kamery klientów'},
            {'type':'stat','phase':'Kara','value':'5,8 MLN $','label':'FTC · maj 2023','context':'Przymusowe kasowanie danych. Policy change: Neighbors domyślnie off, E2EE opt-in. Nadal: partnerships z policją.'},
            {'type':'close','title':'RING','sub':'Nie tylko ty patrzysz na to, co jest przed twoimi drzwiami. Policja. Pracownicy w Kijowie. Hakerzy.','card_id':'D01'},
        ]
    },
    {
        'id': 'D02', 'slug': 'd02-amazon-alexa',
        'card_title': 'Amazon Alexa',
        'header_title': 'Amazon Alexa — tysiące pracowników słuchało twojej kuchni',
        'scenes': [
            {'type':'title','phase':'Setup','text':'ALEXA, PLAY JAZZ.','sub':'kto usłyszał?','size':'huge'},
            {'type':'strike','phase':'Tension','strike':'ECHO','rest':'? BUCHAREST. BOSTON. CHENNAI.','sub':'pracownicy słuchają w 3 kontynentach','size':'big'},
            {'type':'title','phase':'Reveal','text':'BLOOMBERG','sub':'Matt Day · kwiecień 2019 · 7 anonimowych pracowników','size':'huge'},
            {'type':'diagram','phase':'Mechanizm','headline':'trigger → 10–30s nagrania → losowy sample → transcribe team','left_title':'Echo device','left_sub':'false trigger "Alexis"','right_title':'Transcribe team 24/7','right_sub':'Rumunia · Indie · USA','label':'bez szyfrowania E2E','footer':'słyszeli: seks · przestępstwa · rozmowy medyczne · dzieci'},
            {'type':'scale','phase':'Skala','headline_pre':'100 MLN ECHO.','headline_post':'3 KONTYNENTY 24/7.','tl_left':'2014 start','tl_mid':'2019 ujawnienie','tl_right':'2024 ugoda','tl_mid_pos':60,
             'stats':[{'value':'100+ mln','label':'Echo devices'},{'value':'120 mln','label':'USD ugoda'},{'value':'BIPA','sub':'Illinois — trwa'}]},
            {'type':'discovery','phase':'Ujawnienie','date':'KWIECIEŃ 2019',
             'names':[{'name':'Bloomberg','sub':'Matt Day'},{'name':'The Sun · Guardian','sub':'dalsze śledztwa'},{'name':'CNIL · Garante','sub':'europejskie dochodzenia'}],
             'footer':'7 anonimowych pracowników jako źródła'},
            {'type':'stat','phase':'Ugoda','value':'120 MLN $','label':'class action In re Amazon Alexa Privacy · 2024','context':'+ 25 mln USD FTC za dzieci (D03). BIPA Illinois class action trwa. Amazon: opt-in dla "human review".'},
            {'type':'close','title':'ALEXA','sub':'Always-on znaczy zawsze. Twoje "Hey Alexa" słyszał ktoś w Rumunii, Bostonie, Chennai.','card_id':'D02'},
        ]
    },
    {
        'id': 'D03', 'slug': 'd03-amazon-alexa-coppa',
        'card_title': 'Amazon Alexa COPPA',
        'header_title': 'Alexa & COPPA — dzieci miały prawa. Amazon musiał to wdrożyć.',
        'scenes': [
            {'type':'title','phase':'Setup','text':'USUŃ DANE MOJEGO DZIECKA.','sub':'prawo rodzica pod COPPA','size':'med','color':'default'},
            {'type':'strike','phase':'Tension','strike':'USUNĘŁA','rest':'? NIE.','sub':'Amazon: "zachowamy do ulepszania Alexy"','size':'big'},
            {'type':'title','phase':'Reveal','text':'COPPA','sub':'Children\'s Online Privacy Protection Act · 1998','size':'huge'},
            {'type':'diagram','phase':'Mechanizm','headline':'dziecko mówi → nagranie → nawet po żądaniu: zostaje transkrypcja','left_title':'Dziecko < 13','left_sub':'rozmawia z Alexą','right_title':'Amazon','right_sub':'zachowuje "na zawsze"','label':'ignorowanie żądań rodziców','footer':'sprzecznie z COPPA · art. 312.3(b)(1)'},
            {'type':'scale','phase':'Skala','headline_pre':'10 MLN ECHO DOT KIDS.','headline_post':'MILIONY DZIECI.','tl_left':'2014 Alexa','tl_mid':'2019 Echo Dot Kids','tl_right':'2023 FTC pozew','tl_mid_pos':55,
             'stats':[{'value':'10+ mln','label':'Echo Dot Kids'},{'value':'25 mln','label':'USD FTC'},{'value':'20 lat','label':'zobowiązania privacy'}]},
            {'type':'discovery','phase':'Pozew','date':'MAJ 2023',
             'names':[{'name':'FTC','sub':'formalne dochodzenie'},{'name':'DOJ','sub':'wspólne postępowanie'},{'name':'inspekcja wewn.','sub':'dokumenty techniczne'}],
             'footer':'"zachowujemy na zawsze do ulepszania algorytmu" — wewnętrzne memo'},
            {'type':'stat','phase':'Kara','value':'25 MLN $','label':'FTC · maj 2023','context':'+ 20-letnie zobowiązanie prywatnościowe. Amazon musi usunąć wszystkie historyczne nagrania dzieci na żądanie rodzica LUB gdy konto jest nieaktywne.'},
            {'type':'close','title':'COPPA','sub':'Dzieci mają prawa. Platforma musiała wdrożyć to 25 lat później.','card_id':'D03'},
        ]
    },
    {
        'id': 'D04', 'slug': 'd04-uber-god-view',
        'card_title': 'Uber God View',
        'header_title': 'God View — Uber śledził dziennikarzy dla zabawy',
        'scenes': [
            {'type':'title','phase':'Setup','text':'ZAMAWIASZ UBERA.','sub':'kto widzi, gdzie jesteś?','size':'huge'},
            {'type':'strike','phase':'Tension','strike':'KIEROWCA','rest':'? KAŻDY W UBERZE.','sub':'God View dashboard','size':'big'},
            {'type':'title','phase':'Reveal','text':'GOD VIEW','sub':'wewnętrzne narzędzie · dostęp: managers, staże, rekruterzy','size':'huge'},
            {'type':'diagram','phase':'Mechanizm','headline':'mapa → każdy kursor = klient → klik = historia','left_title':'Uber pracownik','left_sub':'domyślny dostęp','right_title':'Wszystkie przejazdy','right_sub':'w czasie rzeczywistym','label':'bez uzasadnienia · bez audytu','footer':'używane na imprezach firmowych: pokazywanie tras dziennikarzy'},
            {'type':'scale','phase':'Skala','headline_pre':'KAŻDE MIASTO UBER.','headline_post':'TYSIĄCE MAJĄ DOSTĘP.','tl_left':'2011 start','tl_mid':'2014 ujawnienie','tl_right':'2018 ugody','tl_mid_pos':50,
             'stats':[{'value':'50 stanów','label':'USA pozwało'},{'value':'148 mln','label':'USD ugoda'},{'value':'20 tys.','label':'USD pierwsza kara NY'}]},
            {'type':'discovery','phase':'Odkrycie','date':'LISTOPAD 2014',
             'names':[{'name':'Johana Bhuiyan','sub':'BuzzFeed · dziennikarka'},{'name':'Sarah Lacy','sub':'PandoDaily · "pokazali mi"'},{'name':'Emil Michael','sub':'SVP Uber · plan o śledzeniu'}],
             'footer':'God View pokazany dziennikarce jako feature'},
            {'type':'stat','phase':'Ugoda','value':'148 MLN $','label':'połączone ze wyciekiem D06 · 50 stanów · 2018','context':'+ 20 tys. USD pierwsza kara NY AG — symboliczna. Uber: "polityka dostępu została zaostrzona". Prawda: dopiero po pozwach.'},
            {'type':'close','title':'GOD VIEW','sub':'Śledzenie klientów było feature, nie bugiem. Pokazywali dziennikarkom — jako feature.','card_id':'D04'},
        ]
    },
    {
        'id': 'D05', 'slug': 'd05-uber-greyball',
        'card_title': 'Uber Greyball',
        'header_title': 'Greyball — Uber blokował regulatorów',
        'scenes': [
            {'type':'title','phase':'Setup','text':'UBER W PORTLAND.','sub':'gdzie był zakazany','size':'huge'},
            {'type':'strike','phase':'Tension','strike':'ZAKAZANY','rest':'? DZIAŁAŁ.','sub':'dzięki Greyball','size':'big'},
            {'type':'title','phase':'Reveal','text':'GREYBALL','sub':'wewnętrzny system identyfikacji i blokowania regulatorów','size':'huge'},
            {'type':'diagram','phase':'Mechanizm','headline':'podejrzany = regulator → fałszywa aplikacja, brak kierowców','left_title':'Użytkownik','left_sub':'otwiera Ubera','right_title':'Backend','right_sub':'geofence + pattern → fake UI','label':'Greyball scoring','footer':'blokowani: stacje policji, ratusz, prepaid, wzorce użycia'},
            {'type':'scale','phase':'Skala','headline_pre':'10+ MIAST.','headline_post':'CIĄGŁE UKRYWANIE.','tl_left':'2014 start','tl_mid':'2017 ujawnienie','tl_right':'2017 Kalanick odchodzi','tl_mid_pos':75,
             'stats':[{'value':'Portland','sub':'Paris · Boston · Phila'},{'value':'AU · KR','sub':'Chiny · Vegas'},{'value':'DOJ','sub':'dochodzenie kryminalne'}]},
            {'type':'discovery','phase':'Ujawnienie','date':'MARZEC 2017',
             'names':[{'name':'Mike Isaac','sub':'New York Times'},{'name':'byli pracownicy','sub':'anonimowi źródła'},{'name':'Travis Kalanick','sub':'CEO · odchodzi 2017'}],
             'footer':'jeden z wielu skandali Ubera 2017 roku'},
            {'type':'stat','phase':'Konsekwencja','value':'DOJ','label':'dochodzenie kryminalne trwa','context':'Travis Kalanick odchodzi 2017 (Greyball jeden z wielu czynników). Uber: zero greyballowania regulatorów. Portland: kara symboliczna.'},
            {'type':'close','title':'GREYBALL','sub':'Program nie do ukrywania się przed klientami. Przed państwem.','card_id':'D05'},
        ]
    },
    {
        'id': 'D06', 'slug': 'd06-uber-2016-breach',
        'card_title': 'Uber 2016 Breach',
        'header_title': 'Uber 2016 — pierwszy CISO skazany karnie',
        'scenes': [
            {'type':'title','phase':'Setup','text':'2016: WYCIEK 57 MLN REKORDÓW.','sub':'dane klientów + kierowców','size':'med','color':'default'},
            {'type':'strike','phase':'Tension','strike':'POWIEDZIELI','rest':'? NIKOMU.','sub':'rok milczenia','size':'big'},
            {'type':'title','phase':'Reveal','text':'JOE SULLIVAN','sub':'CISO Ubera · wypłacił hakerom $100k jako "bug bounty"','size':'huge'},
            {'type':'diagram','phase':'Mechanizm','headline':'włamanie → wymuszenie → ukrycie pod "bug bounty"','left_title':'Hakerzy','left_sub':'wyciąg z AWS Uber'},
            {'type':'scale','phase':'Skala','headline_pre':'57 MLN REKORDÓW.','headline_post':'ROK MILCZENIA.','tl_left':'X 2016 wyciek','tl_mid':'XI 2017 ujawnienie','tl_right':'X 2022 skazanie','tl_mid_pos':10,
             'stats':[{'value':'600 tys.','label':'numerów prawa jazdy'},{'value':'$100k','label':'dla hakerów'},{'value':'148 mln','label':'USD 50 stanów'}]},
            {'type':'discovery','phase':'Ujawnienie','date':'LISTOPAD 2017',
             'names':[{'name':'Dara Khosrowshahi','sub':'nowy CEO · ujawnia'},{'name':'Bloomberg','sub':'pierwszy raport'},{'name':'FTC','sub':'consent decree'}],
             'footer':'nowy CEO po odejściu Kalanicka'},
            {'type':'stat','phase':'Precedens','value':'PIERWSZY','label':'CISO skazany karnie za ukrycie wycieku · X 2022','context':'Joe Sullivan winny. Federalne przestępstwo. Precedens: ukrycie wycieku to przestępstwo, nie kultura pracy.'},
            {'type':'close','title':'JOE SULLIVAN','sub':'Wyciek danych nie jest wstydem. Ukrycie wycieku jest przestępstwem. Sullivan — pierwszy CISO skazany.','card_id':'D06'},
        ]
    },

    # =========================================================================
    # GROUP E — TIKTOK / X / CLEARVIEW / ZOOM
    # =========================================================================
    {
        'id': 'E01', 'slug': 'e01-tiktok-bytedance',
        'card_title': 'TikTok / ByteDance inwigilacja',
        'header_title': 'ByteDance — śledzenie dziennikarzy FT i Forbes',
        'scenes': [
            {'type':'title','phase':'Setup','text':'TIKTOK MA MOJE DANE.','sub':'ale co z nimi robi?','size':'huge'},
            {'type':'strike','phase':'Tension','strike':'REKOMENDACJE','rest':'? ŚLEDZENIE DZIENNIKAREK.','sub':'grudzień 2022','size':'big'},
            {'type':'title','phase':'Reveal','text':'INTERNAL AUDIT AND RISK CONTROL','sub':'zespół ByteDance w Pekinie · operacja "znaleźć źródło"','size':'med','color':'default'},
            {'type':'diagram','phase':'Mechanizm','headline':'dane aplikacji → geolokalizacja dziennikarki → identyfikacja źródła','left_title':'Aplikacja TikTok','left_sub':'dziennikarka FT','right_title':'ByteDance audyt','right_sub':'szuka leaku wewnętrznego','label':'Pekin · grudzień 2022','footer':'Cristina Criddle (FT) i Emily Baker-White (Forbes) — obserwowane'},
            {'type':'scale','phase':'Skala','headline_pre':'KILKUSET DZIENNIKARZY.','headline_post':'4 PRACOWNIKÓW ZWOLNIONYCH.','tl_left':'2022 operacja','tl_mid':'XII 2022 ujawnienie','tl_right':'I 2025 SCOTUS','tl_mid_pos':35,
             'stats':[{'value':'2 Chiny','label':'pracowników zwolnionych'},{'value':'2 USA','label':'pracowników zwolnionych'},{'value':'DOJ','sub':'kryminalne dochodzenie'}]},
            {'type':'discovery','phase':'Ujawnienie','date':'GRUDZIEŃ 2022',
             'names':[{'name':'Cristina Criddle','sub':'Financial Times'},{'name':'Emily Baker-White','sub':'Forbes'},{'name':'NYT','sub':'śledztwo'}],
             'footer':'ByteDance przyznaje, 4 pracowników zwolnionych'},
            {'type':'stat','phase':'Konsekwencja','value':'PAFACA','label':'ustawa US · 270 dni na sprzedaż TikToka · kwiecień 2024','context':'SCOTUS styczeń 2025: ban potwierdzony. Shou Zi Chew zeznawał przed Senatem. DOJ criminal investigation trwa.'},
            {'type':'close','title':'BYTEDANCE','sub':'Platforma śledziła tych, którzy o niej pisali. Dwa kontynenty. Cztery zwolnienia. Jedna ustawa.','card_id':'E01'},
        ]
    },
    {
        'id': 'E02', 'slug': 'e02-tiktok-dzieci',
        'card_title': 'TikTok — dane dzieci',
        'header_title': 'TikTok — dane dzieci · DPC 345 mln € + ICO 12,7 mln £',
        'scenes': [
            {'type':'title','phase':'Setup','text':'TIKTOK. DZIECKO. 11 LAT.','sub':'i ma tam konto','size':'med','color':'default'},
            {'type':'strike','phase':'Tension','strike':'PRYWATNY','rest':'? PUBLICZNY DOMYŚLNIE.','sub':'przez lata','size':'big'},
            {'type':'title','phase':'Reveal','text':'COPPA + RODO','sub':'dla dzieci < 13 zgoda rodzica · 13–17 domyślnie prywatny','size':'med','color':'default'},
            {'type':'diagram','phase':'Mechanizm','headline':'rejestracja bez weryfikacji wieku → profil publiczny → DM otwarte','left_title':'Dziecko','left_sub':'data urodzenia bez weryfikacji','right_title':'TikTok','right_sub':'publiczny · komentarze · DM','label':'dark patterns · domyślne ustawienia','footer':'Family Pairing opcjonalne — rzadko używane'},
            {'type':'scale','phase':'Skala','headline_pre':'400 MLN UŻYTKOWNIKÓW EU.','headline_post':'40% TO DZIECI.','tl_left':'VII 2020 audyt DPC','tl_mid':'2021 dochodzenia','tl_right':'IX 2023 kara','tl_mid_pos':50,
             'stats':[{'value':'345 mln €','label':'DPC Ireland'},{'value':'12,7 mln £','label':'ICO UK'},{'value':'400+ mln','label':'użytkowników EU'}]},
            {'type':'discovery','phase':'Dochodzenia','date':'2021–2023',
             'names':[{'name':'Anne Longfield','sub':'Children\'s Commissioner UK'},{'name':'ICO UK','sub':'kwiecień 2023 · 12,7 mln £'},{'name':'DPC Ireland','sub':'wrzesień 2023 · 345 mln €'}],
             'footer':'TikTok w odwołaniu · sprawa Irish High Court'},
            {'type':'stat','phase':'Kary','value':'357 MLN €','label':'łącznie DPC + ICO','context':'TikTok wprowadza: domyślnie prywatny dla 13–17, Family Pairing w marketingu, zakaz DM dla <16. Odwołania trwają.'},
            {'type':'close','title':'TIKTOK — DANE DZIECI','sub':'Dzieci nie czytają regulaminów. Platforma to wiedziała. DPC Ireland: 345 mln €.','card_id':'E02'},
        ]
    },
    {
        'id': 'E03', 'slug': 'e03-tiktok-chiny',
        'card_title': 'TikTok — transfery do Chin',
        'header_title': 'TikTok — transfery do Chin · 530 mln € DPC + PAFACA USA',
        'scenes': [
            {'type':'title','phase':'Setup','text':'MOJE DANE NA TIKTOKU.','sub':'gdzie fizycznie są?','size':'huge'},
            {'type':'strike','phase':'Tension','strike':'EUROPA','rest':'? DUBLIN, OSLO — I CHINY.','sub':'dostęp pracowników w Pekinie','size':'big'},
            {'type':'title','phase':'Reveal','text':'SCHREMS II','sub':'adekwatność: Chiny — nie · USA przed 2023 — nie','size':'huge'},
            {'type':'diagram','phase':'Mechanizm','headline':'dane EU → serwery EU → ALE dostęp inżynierów z Chin','left_title':'Serwery EU','left_sub':'Dublin · Oslo · Singapur','right_title':'ByteDance Pekin','right_sub':'T&S · inżynierowie','label':'bez zabezpieczeń Schrems II','footer':'150+ mln użytkowników EU · okres audytu 2020–2022'},
            {'type':'scale','phase':'Skala','headline_pre':'150 MLN UŻYTKOWNIKÓW EU.','headline_post':'PROJECT CLOVER: 12 MLD €.','tl_left':'2021 DPC start','tl_mid':'2023 zabezpieczenia','tl_right':'V 2025 kara','tl_mid_pos':50,
             'stats':[{'value':'530 mln €','label':'kara DPC'},{'value':'12 mld €','label':'Project Clover'},{'value':'150+ mln','label':'użytkowników EU'}]},
            {'type':'discovery','phase':'Dochodzenie','date':'DPC IRELAND',
             'names':[{'name':'DPC Ireland','sub':'od 2021'},{'name':'BfDI','sub':'skargi niemieckie'},{'name':'audyt 2020–2022','sub':'okres badania'}],
             'footer':'druga największa kara po Meta 1,2 mld €'},
            {'type':'stat','phase':'Kara','value':'530 MLN €','label':'DPC Ireland · maj 2025','context':'+ PAFACA w USA · SCOTUS styczeń 2025 ban potwierdzony. Project Clover: 12 mld € inwestycja TikToka w "europejską architekturę".'},
            {'type':'close','title':'PROJECT CLOVER','sub':'Zbudowano dopiero wtedy, gdy wyciekło. Druga największa kara RODO po Meta.','card_id':'E03'},
        ]
    },
    {
        'id': 'E04', 'slug': 'e04-x-grok',
        'card_title': 'X / Grok — deepfake',
        'header_title': 'Grok Imagine — deepfake bez filtrów',
        'scenes': [
            {'type':'title','phase':'Setup','text':'GROK IMAGINE.','sub':'sierpień 2024 · premiera na X','size':'huge'},
            {'type':'strike','phase':'Tension','strike':'FILTRY','rest':'? BRAK.','sub':'24h · Taylor Swift naga','size':'big'},
            {'type':'title','phase':'Reveal','text':'BLACK FOREST LABS FLUX.1','sub':'brak SafetyAPI · Elon Musk uruchamia','size':'med','color':'default'},
            {'type':'diagram','phase':'Mechanizm','headline':'prompt "X naga" → FLUX.1 bez filtru → wiralowo na X','left_title':'Użytkownik','left_sub':'prompt bez ograniczeń','right_title':'X platform','right_sub':'rozprzestrzenianie wiralowe','label':'brak moderacji','footer':'day one: Swift · Harris · AOC · setki deepfake\'ów'},
            {'type':'scale','phase':'Skala','headline_pre':'1000+ DEEPFAKE\'ÓW.','headline_post':'PIERWSZY TYDZIEŃ.','tl_left':'VIII 2024 premiera','tl_mid':'IX 2024 DSA','tl_right':'2025 kary','tl_mid_pos':40,
             'stats':[{'value':'600 mln','label':'użytkowników X'},{'value':'24h','label':'do pierwszych ofiar'},{'value':'120 mln €','label':'propozycja DSA'}]},
            {'type':'discovery','phase':'Ujawnienie','date':'SIERPIEŃ 2024',
             'names':[{'name':'The Verge · 404 Media','sub':'w ciągu godzin'},{'name':'NBC · Wired','sub':'potwierdzenie'},{'name':'Komisja Europejska','sub':'DSA postępowanie'}],
             'footer':'Take It Down Act (UE) · pozwy Swift, AOC (USA)'},
            {'type':'stat','phase':'Kara','value':'120 MLN €','label':'propozycja Komisji DSA · kwiecień 2025','context':'+ pozwy osobiste Swift, Harris, AOC — dziesiątki milionów USD. Grok: "safety model" jesień 2024. Kontrowersje trwają.'},
            {'type':'close','title':'GROK IMAGINE','sub':'Deepfake jako produkt. Brak filtra jako feature.','card_id':'E04'},
        ]
    },
    {
        'id': 'E05', 'slug': 'e05-clearview-ai',
        'card_title': 'Clearview AI',
        'header_title': 'Clearview AI — 30 miliardów zdjęć twarzy',
        'scenes': [
            {'type':'title','phase':'Setup','text':'TWOJA TWARZ NA IG.','sub':'publicznie · bo tak wybrałaś','size':'huge'},
            {'type':'strike','phase':'Tension','strike':'TYLKO','rest':'? 30 MLD BAZA.','sub':'Clearview AI · Hoan Ton-That','size':'big'},
            {'type':'title','phase':'Reveal','text':'CLEARVIEW AI','sub':'założona 2017 · scraping Facebook · IG · LinkedIn · VK · Twitter','size':'med','color':'default'},
            {'type':'diagram','phase':'Mechanizm','headline':'policjant → zdjęcie monitoringu → dopasowanie → link do IG','left_title':'Policja USA','left_sub':'3400 agencji · klienci','right_title':'Baza 30 mld zdjęć twarzy','right_sub':'skradzione z internetu','label':'0,5 sekundy zapytanie','footer':'ICE · FBI · policja lokalna · komercyjni klienci'},
            {'type':'scale','phase':'Skala','headline_pre':'30 MLD ZDJĘĆ TWARZY.','headline_post':'3 400 AGENCJI POLICJI.','tl_left':'2017 start','tl_mid':'I 2020 ujawnienie','tl_right':'2024 zakazy UE','tl_mid_pos':40,
             'stats':[{'value':'30 mld','label':'zdjęć twarzy w bazie'},{'value':'3400','label':'agencji policji USA'},{'value':'AI Act','sub':'zakaz retroactive'}]},
            {'type':'discovery','phase':'Ujawnienie','date':'STYCZEŃ 2020',
             'names':[{'name':'Kashmir Hill','sub':'New York Times'},{'name':'książka 2023','sub':'"Your Face Belongs to Us"'},{'name':'CNIL · ICO','sub':'europejskie dochodzenia'}],
             'footer':'Facebook · Twitter · Google zakazały scrapingu — Clearview ignoruje'},
            {'type':'stat','phase':'Kary','value':'~90 MLN €','label':'UK 7,5 mln £ + Francja 20 mln + Włochy 20 + Grecja 20 + Holandia 30 mln €','context':'AI Act 2024: zakaz retroactive biometric ID w przestrzeni publicznej. Clearview dalej działa komercyjnie, poza EU.'},
            {'type':'close','title':'CLEARVIEW','sub':'Twarzy nie wyłączysz. Wyłączyć muszą regulatorzy. Clearview — pokazało, że się da.','card_id':'E05'},
        ]
    },
    {
        'id': 'E06', 'slug': 'e06-zoom',
        'card_title': 'Zoom fałszywe E2EE',
        'header_title': 'Zoom — "end-to-end encryption" które nie było',
        'scenes': [
            {'type':'title','phase':'Setup','text':'MARZEC 2020. PANDEMIA.','sub':'Zoom każdy dzień · 300 mln uczestników','size':'med','color':'default'},
            {'type':'strike','phase':'Tension','strike':'E2E','rest':'ENCRYPTION? NIE.','sub':'przez lata w marketingu','size':'big'},
            {'type':'title','phase':'Reveal','text':'CITIZEN LAB','sub':'Bill Marczak · kwiecień 2020 · analiza ruchu','size':'huge'},
            {'type':'diagram','phase':'Mechanizm','headline':'użytkownik EU → Bay Area → serwer Pekin pod obciążeniem','left_title':'Użytkownik EU/USA','left_sub':'meeting'},
            {'type':'scale','phase':'Skala','headline_pre':'300 MLN UCZESTNIKÓW DZIENNIE.','headline_post':'500 MLN KONT.','tl_left':'2019 marketing E2EE','tl_mid':'III 2020 pandemia','tl_right':'VII 2021 ugoda','tl_mid_pos':70,
             'stats':[{'value':'300 mln','label':'uczestników/dzień'},{'value':'85 mln','label':'USD ugoda'},{'value':'V 2020','sub':'prawdziwe E2EE'}]},
            {'type':'discovery','phase':'Ujawnienie','date':'KWIECIEŃ 2020',
             'names':[{'name':'Citizen Lab','sub':'Bill Marczak'},{'name':'The Intercept','sub':'Micah Lee · Yael Grauer'},{'name':'Matthew Green','sub':'Johns Hopkins'}],
             'footer':'klucze szyfrujące generowane przez Zoom, nie uczestników'},
            {'type':'stat','phase':'Ugoda','value':'85 MLN $','label':'class action In re Zoom Video Communications · lipiec 2021','context':'+ FTC settlement: prawdziwe E2EE wdrożone maj 2020 (Zoom 5.0). Zakaz fałszywych reklam. Nauczka: marketing ≠ inżynieria.'},
            {'type':'close','title':'ZOOM','sub':'E2EE było słowem marketingowym, zanim stało się funkcją. Pandemia pokazała lukę.','card_id':'E06'},
        ]
    },
]

# ============================================================================
# HTML TEMPLATE
# ============================================================================
HTML_TEMPLATE = r"""<!doctype html>
<html lang="pl">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>{case_title} — 60s explainer ({case_id}) | Matryca</title>
<style>{css}</style>
</head>
<body>
<div class="wrap">
  <header class="header">
    <div>
      <p class="header__kicker">Explainer · karta {case_id} · 60 sekund</p>
      <h1 class="header__title">{header_title}</h1>
    </div>
    <div class="header__controls">
      <button class="btn" id="replay">↻ Od nowa</button>
      <button class="btn btn--primary" id="pause">Pauza</button>
    </div>
  </header>

  <div class="stage" id="stage">
{scenes_html}
  </div>

  <div class="hud">
    <span>00:00</span>
    <div class="hud__bar"><div class="hud__fill" id="hudFill"></div></div>
    <span class="hud__time" id="hudTime">01:00</span>
  </div>

  <footer class="footer">
    <span>Explainer {case_id} · {case_title} · 60s · SVG/CSS · bez trackerów</span>
    <span><a href="/matryca/sprawy/{slug}/">Przejdź do karty →</a></span>
  </footer>
</div>

<script>
  const stage = document.getElementById('stage');
  const pauseBtn = document.getElementById('pause');
  const replayBtn = document.getElementById('replay');
  const hudTime = document.getElementById('hudTime');
  let paused = false;
  let startTime = Date.now();
  pauseBtn.addEventListener('click', () => {{
    paused = !paused;
    stage.classList.toggle('stage--paused', paused);
    pauseBtn.textContent = paused ? 'Wznów' : 'Pauza';
  }});
  replayBtn.addEventListener('click', () => {{ setTimeout(() => location.reload(), 50); }});
  setInterval(() => {{
    if (paused) return;
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const remaining = Math.max(0, 60 - elapsed);
    const mm = String(Math.floor(remaining / 60)).padStart(2, '0');
    const ss = String(remaining % 60).padStart(2, '0');
    hudTime.textContent = `${{mm}}:${{ss}}`;
  }}, 500);
</script>
</body>
</html>
"""

# ============================================================================
# GENERATOR
# ============================================================================

def generate_case(case_data: dict) -> str:
    """Generuje HTML pojedynczego explainera."""
    scenes = case_data.get('scenes', [])
    total = len(scenes)
    scenes_html = []
    for i, scene in enumerate(scenes, start=1):
        stype = scene.get('type')
        renderer = SCENE_RENDERERS.get(stype)
        if not renderer:
            print(f'  WARN: unknown scene type "{stype}" in {case_data["id"]}')
            continue
        scenes_html.append(renderer(scene, i, total))
    return HTML_TEMPLATE.format(
        case_id=case_data['id'],
        case_title=case_data['card_title'],
        header_title=case_data['header_title'],
        slug=case_data['slug'],
        css=SHARED_CSS,
        scenes_html='\n'.join(scenes_html),
    )

def update_frontmatter(case_data: dict, anim_filename: str):
    """Dodaje lub aktualizuje pole `explainer` we frontmatter karty."""
    slug = case_data['slug']
    card_path = CASES_DIR / f'{slug}.md'
    if not card_path.exists():
        print(f'  WARN: card not found: {card_path}')
        return
    text = card_path.read_text()
    # Skip if already has explainer
    if re.search(r'^explainer:', text, re.MULTILINE):
        return
    # Insert before `subtitle:` or end of frontmatter
    explainer_block = f'''explainer:
  src: /animations/{anim_filename}
  duration: '60s'
  title: {case_data['header_title']}
'''
    if 'subtitle:' in text:
        text = text.replace('subtitle:', explainer_block + 'subtitle:', 1)
    else:
        # Insert before closing --- of frontmatter
        text = re.sub(r'^(---\n.*?)(\n---)', r'\1\n' + explainer_block.rstrip() + r'\2', text, count=1, flags=re.DOTALL)
    card_path.write_text(text)

def main():
    ANIMATIONS_DIR.mkdir(parents=True, exist_ok=True)
    count = 0
    for case in CASES_DATA:
        slug = case['slug']
        anim_filename = f'{slug}.html'
        out_path = ANIMATIONS_DIR / anim_filename
        html = generate_case(case)
        out_path.write_text(html)
        update_frontmatter(case, anim_filename)
        count += 1
        print(f'  {case["id"]} → {out_path.relative_to(ROOT)}')
    print(f'\nGenerated {count} explainers.')

if __name__ == '__main__':
    main()
