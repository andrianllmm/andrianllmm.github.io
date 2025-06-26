export type Tag = {
  name: string;
};

export const tags = {} as const;

export type TagKey = keyof typeof tags;
