export type Skill = {
  name: string;
  icon?: string;
};

export const skills = {
  python: { name: "Python", icon: "simple-icons:python" },
  javascript: { name: "JavaScript", icon: "simple-icons:javascript" },
  typescript: { name: "TypeScript", icon: "simple-icons:typescript" },
  django: { name: "Django", icon: "simple-icons:django" },
  flask: { name: "Flask", icon: "simple-icons:flask" },
  react: { name: "React", icon: "simple-icons:react" },
  nextjs: { name: "Next.js", icon: "simple-icons:nextdotjs" },
  html5: { name: "HTML", icon: "simple-icons:html5" },
  css3: { name: "CSS", icon: "simple-icons:css3" },
  sass: { name: "Sass", icon: "simple-icons:sass" },
  tailwind: { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
  bootstrap: { name: "Bootstrap", icon: "simple-icons:bootstrap" },
  sqlite: { name: "SQLite", icon: "simple-icons:sqlite" },
  wxt: { name: "WXT", icon: "lucide:puzzle" },
  pandas: { name: "Pandas", icon: "simple-icons:pandas" },
  nltk: { name: "NLTK" },
  pypi: { name: "PyPI", icon: "simple-icons:pypi" },
  poetry: { name: "Poetry", icon: "simple-icons:poetry" },
  tkinter: { name: "Tkinter" },
  pygame: { name: "PyGame" },
  regex: { name: "Regex", icon: "lucide:regex" },
  nlp: { name: "NLP", icon: "lucide:languages" },
  docker: { name: "Docker", icon: "simple-icons:docker" },
  git: { name: "Git", icon: "simple-icons:git" },
  turborepo: { name: "Turborepo", icon: "simple-icons:turborepo" },
  vercel: { name: "Vercel", icon: "simple-icons:vercel" },
  webScraping: { name: "Web Scraping", icon: "lucide:code" },
  xmlParsing: { name: "XML Parsing", icon: "lucide:code-xml" },
} as const;

export type SkillKey = keyof typeof skills;
