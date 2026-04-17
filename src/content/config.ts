import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    year: z.string(),
    sector: z.string().optional(),
    excerpt: z.string().optional(),
    locale: z.enum(['en', 'ar']).optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  work,
};
