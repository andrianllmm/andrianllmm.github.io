export type Skill = {
  name: string;
  icon: string;
};

export const skills = {
  python: { name: "Python", icon: "simple-icons:python" },
  javascript: { name: "JavaScript", icon: "simple-icons:javascript" },
  typescript: { name: "TypeScript", icon: "simple-icons:typescript" },
  django: { name: "Django", icon: "simple-icons:django" },
  flask: { name: "Flask", icon: "simple-icons:flask" },
  react: { name: "React", icon: "simple-icons:react" },
  nextdotjs: { name: "Next.js", icon: "simple-icons:nextdotjs" },
  html5: { name: "HTML", icon: "simple-icons:html5" },
  css3: { name: "CSS", icon: "simple-icons:css3" },
  sass: { name: "Sass", icon: "simple-icons:sass" },
  tailwindcss: { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
  bootstrap: { name: "Bootstrap", icon: "simple-icons:bootstrap" },
  sqlite: { name: "SQLite", icon: "simple-icons:sqlite" },
  docker: { name: "Docker", icon: "simple-icons:docker" },
  git: { name: "Git", icon: "simple-icons:git" },
} as const;

export type SkillKey = keyof typeof skills;
