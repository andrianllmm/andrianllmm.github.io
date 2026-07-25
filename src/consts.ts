import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Andrian Lloyd Maagma",
  DESCRIPTION: "This is Andrian Lloyd Maagma's personal website.",
  EMAIL: "maagmaandrian@gmail.com",
  NUM_PROJECTS_ON_HOMEPAGE: 4,
  NUM_SKILLS_ON_HOMEPAGE: 10,
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_TAGS_ON_HOMEPAGE: 10,
  NUM_ACHIEVEMENTS_ON_HOMEPAGE: 3,
  NUM_EDUCATION_ON_HOMEPAGE: 5,
};

export const PINNED_PROJECTS = [
  "manobela",
  "project-hermes",
  "iskommerce",
  "miago",
];

export const PINNED_SKILLS = [
  "typescript",
  "react",
  "nextjs",
  "reactNative",
  "expo",
  "astro",
  "tailwind",
  "python",
  "django",
  "fastapi",
  "pandas",
  "tensorflow",
  "pytorch",
];

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "This is Andrian Lloyd Maagma's personal website.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const POSTS: Metadata = {
  TITLE: "Posts",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const ACHIEVEMENTS = {
  TITLE: "Achievements",
  DESCRIPTION: "A collection of competitions and notable accomplishments.",
};

export const CASE_STUDIES: Metadata = {
  TITLE: "Case Studies",
  DESCRIPTION:
    "Engineering deep dives into how I built and shipped my projects.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "A timeline of my professional experience.",
};

export const SOCIALS: Socials = [
  {
    NAME: "LinkedIn",
    HREF: "https://linkedin.com/in/andrian-maagma/",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/andrianllmm",
  },
  {
    NAME: "Twitter-X",
    HREF: "https://twitter.com/andrianllmm",
  },
  {
    NAME: "YouTube",
    HREF: "https://www.youtube.com/@andrianllmm",
  },
];
