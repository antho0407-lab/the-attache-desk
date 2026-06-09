import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// City guides. Each guide belongs to a city (by slug) and a category slug
// that becomes the final URL segment, e.g. /guides-by-city/paris/vehicles
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    city: z.string(), // city slug, must match src/data/cities.ts
    category: z.string(), // URL segment: vehicles | living | schools | security ...
    categoryLabel: z.string(), // display label, e.g. "Vehicles"
    summary: z.string(),
    reviewed: z.string(), // ISO date string of last editorial review
    ref: z.string(), // dossier-style file reference, e.g. "FR·VEH·01"
    order: z.number().default(99),
    status: z.enum(['published', 'draft']).default('draft'),
  }),
});

// The Brief — short editorial briefings.
const brief = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/brief' }),
  schema: z.object({
    title: z.string(),
    date: z.string(), // ISO date string
    dek: z.string(), // standfirst / summary
    tag: z.string(), // section label, e.g. "Protocol"
    status: z.enum(['published', 'draft']).default('draft'),
  }),
});

export const collections = { guides, brief };
