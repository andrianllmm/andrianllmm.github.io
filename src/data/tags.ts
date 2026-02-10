export type Tag = {
  name: string;
};

export const tags: Record<string, Tag> = {} as const;

export type TagKey = keyof typeof tags;
