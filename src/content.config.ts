import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { skills } from "@data/skills";
import { tags } from "@data/tags";

const skillEnum = z.enum(Object.keys(skills) as [string, ...string[]]);
const tagEnum = z.enum(Object.keys(tags) as [string, ...string[]]);

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    skills: z.array(skillEnum).optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(tagEnum).optional(),
  }),
});

const cv = defineCollection({
  type: "content",
  schema: z.object({ title: z.string().optional() }),
});

export const collections = { blog, projects, cv };
