export type Tag = {
  name: string;
};

export const tags = {
  tutorial: { name: "Tutorial" },
  life: { name: "Life" },
} as const;

export type TagKey = keyof typeof tags;
