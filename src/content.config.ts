import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    // Identification
    id: z.string().regex(/^[A-E]\d{2}$/),
    slug: z.string(),
    group: z.enum(['A', 'B', 'C', 'D', 'E']),
    group_label: z.string(),
    title: z.string(),
    subtitle: z.string().optional(),

    // Chronology
    year_revealed: z.number().int().min(2000).max(2030),
    years_active: z.tuple([z.number(), z.number()]).optional(),
    last_updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),

    // Entities
    companies: z.array(z.string()),
    company_parents: z.array(z.string()).optional(),

    // Status
    status: z.enum([
      'active_investigation',
      'settled',
      'withdrawn',
      'concluded',
      'ongoing_litigation',
      'regulatory_monitoring',
      'criminal_proceedings',
    ]),

    // Jurisdictions
    jurisdictions: z.array(z.string()),
    lead_regulator: z.string().optional(),
    affected_users: z.number().optional(),
    affected_users_description: z.string().optional(),

    // Legal basis
    legal_basis: z.array(z.string()),

    // Fines
    fines: z
      .array(
        z.object({
          amount: z.number(),
          currency: z.enum(['EUR', 'USD', 'GBP', 'PLN']),
          authority: z.string(),
          date: z.string(),
          category: z.enum([
            'regulatory_fine',
            'class_action_settlement',
            'state_attorney_general',
            'criminal_forfeiture',
            'consumer_refund',
          ]),
          status: z.enum(['paid', 'pending', 'appealed', 'unpaid']).optional(),
        })
      )
      .default([]),

    // People
    whistleblowers: z.array(z.string()).default([]),
    journalists: z.array(z.string()).default([]),
    key_people: z
      .array(
        z.object({
          name: z.string(),
          role: z.string(),
          company: z.string().optional(),
        })
      )
      .default([]),

    // Relations
    related_cases: z.array(z.string()).default([]),
    precedents_cited: z.array(z.string()).default([]),

    // Taxonomy
    tags: z.array(z.string()),
    categories: z.array(
      z.enum([
        'privacy',
        'children_safety',
        'election_manipulation',
        'biometrics',
        'ai_training',
        'surveillance',
        'financial_deception',
        'content_moderation',
        'workers_access',
        'false_security_claims',
        'data_transfer',
        'geopolitics',
      ])
    ),

    // Geo
    geo_coords: z
      .array(
        z.object({
          lat: z.number(),
          lng: z.number(),
          label: z.string(),
          role: z
            .enum(['regulator', 'company_hq', 'incident_location', 'court'])
            .optional(),
        })
      )
      .default([]),

    // Meta
    priority: z.enum(['TOP', 'STANDARD']).default('STANDARD'),
    card_complete: z.boolean().default(true),
    word_count: z.number().optional(),

    // SEO
    seo_description: z.string().max(160).optional(),
    seo_keywords: z.array(z.string()).default([]),
  }),
});

export const collections = {
  cases: caseCollection,
};
