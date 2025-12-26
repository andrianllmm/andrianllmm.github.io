import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { skills } from "@data/skills";
import { tags } from "@data/tags";

const skillEnum = z.enum(Object.keys(skills) as [string, ...string[]]);
const tagEnum = z.enum(Object.keys(tags) as [string, ...string[]]);

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
      skills: z.array(skillEnum).optional(),
      demoURL: z.string().optional(),
      repoURL: z.string().optional(),
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

const achievements = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/achievements",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      position: z.string(),
      type: z.enum([
        "Hackathon",
        "Coding Competition",
        "CTF",
        "Award",
        "Other",
      ]),
      date: z.coerce.date(),
      description: z.string().optional(),
      skills: z.array(skillEnum).optional(),
      image: image().optional(),
      url: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});
const cv = defineCollection({
  type: "content",
  schema: z.object({ title: z.string().optional() }),
});

export const collections = { posts, projects, cv, achievements };
