import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { tags } from "@data/tags";

const tagEnum = z.enum(Object.keys(tags) as [string, ...string[]]);

const caseStudies = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/case-studies",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      image: image().optional(),
      draft: z.boolean().default(false),
    }),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      tags: z.array(tagEnum).optional(),
      image: image().optional(),
      draft: z.boolean().default(false),
    }),
});

const cv = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/cv" }),
  schema: z.object({ title: z.string().optional() }),
});

export const collections = { posts, caseStudies, cv };
