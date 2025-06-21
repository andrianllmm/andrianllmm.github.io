export type Tag = {
  name: string;
};

export const tags = {
  tech: { name: "tech" },
} as const;

export type TagKey = keyof typeof tags;
