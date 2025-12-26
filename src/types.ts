export type Site = {
  TITLE: string;
  DESCRIPTION: string;
  EMAIL: string;
  NUM_PROJECTS_ON_HOMEPAGE: number;
  NUM_SKILLS_ON_HOMEPAGE: number;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_TAGS_ON_HOMEPAGE: number;
  NUM_ACHIEVEMENTS_ON_HOMEPAGE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];
