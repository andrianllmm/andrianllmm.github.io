import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Andrian Lloyd Maagma",
  DESCRIPTION: "This is Andrian Lloyd Maagma's personal website.",
  EMAIL: "maagmaandrian@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "This is Andrian Lloyd Maagma's personal website.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Twitter-X",
    HREF: "https://twitter.com/andrianllmm",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/andrianllmm",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://linkedin.com/in/andrianllmm/",
  },
];
