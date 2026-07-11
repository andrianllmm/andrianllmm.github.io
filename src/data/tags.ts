export type Tag = {
  name: string;
  description: string;
};

export const tags: Record<string, Tag> = {
  tutorial: {
    name: "tutorial",
    description: "Step-by-step guides and walkthroughs.",
  },
  project: {
    name: "project",
    description: "Showcases of completed or ongoing work.",
  },
  research: {
    name: "research",
    description: "Experiments, analyses, and investigations.",
  },
  note: {
    name: "note",
    description: "Short explanations and knowledge records.",
  },
  review: {
    name: "review",
    description: "Evaluations of tools, products, or resources.",
  },
  opinion: {
    name: "opinion",
    description: "Personal views and perspectives.",
  },
  reflection: {
    name: "reflection",
    description: "Personal lessons, experiences, and insights.",
  },
  update: {
    name: "update",
    description: "Progress reports and announcements.",
  },
} as const;

export type TagKey = keyof typeof tags;
