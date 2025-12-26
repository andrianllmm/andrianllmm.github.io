export type Skill = {
  name: string;
  icon?: string;
};

export const skills = {
  python: { name: "Python", icon: "simple-icons:python" },
  javascript: { name: "JavaScript", icon: "simple-icons:javascript" },
  typescript: { name: "TypeScript", icon: "simple-icons:typescript" },
  java: { name: "Java", icon: "devicon-plain:java" },
  react: { name: "React", icon: "simple-icons:react" },
  nextjs: { name: "Next.js", icon: "simple-icons:nextdotjs" },
  django: { name: "Django", icon: "simple-icons:django" },
  flask: { name: "Flask", icon: "simple-icons:flask" },
  tailwind: { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
  solidity: { name: "Solidity", icon: "simple-icons:solidity" },
  html: { name: "HTML", icon: "simple-icons:html5" },
  css: { name: "CSS", icon: "simple-icons:css3" },
  sass: { name: "Sass", icon: "simple-icons:sass" },
  bootstrap: { name: "Bootstrap", icon: "simple-icons:bootstrap" },
  numpy: { name: "NumPy", icon: "simple-icons:numpy" },
  pandas: { name: "Pandas", icon: "simple-icons:pandas" },
  sklearn: { name: "Scikit-learn", icon: "simple-icons:scikitlearn" },
  tensorflow: { name: "TensorFlow", icon: "simple-icons:tensorflow" },
  pytorch: { name: "PyTorch", icon: "simple-icons:pytorch" },
  sqlite: { name: "SQLite", icon: "simple-icons:sqlite" },
  firebase: { name: "Firebase", icon: "simple-icons:firebase" },
  git: { name: "Git", icon: "simple-icons:git" },
  docker: { name: "Docker", icon: "simple-icons:docker" },
  vercel: { name: "Vercel", icon: "simple-icons:vercel" },
  railway: { name: "Railway", icon: "simple-icons:railway" },
  crypto: { name: "Cryptography", icon: "lucide:message-square-lock" },
  reversing: { name: "Reverse Engineering", icon: "lucide:bug" },
  networkSec: { name: "Network Security", icon: "lucide:network" },
  webSec: { name: "Web Security", icon: "lucide:globe-lock" },
  forensics: { name: "Digital Forensics", icon: "lucide:file-search" },
  osint: { name: "OSINT" },
  webScraping: { name: "Web Scraping" },
} as const;

export type SkillKey = keyof typeof skills;

export const skillGroups = {
  Languages: ["python", "javascript", "typescript", "java", "solidity"],

  Web: [
    "html",
    "css",
    "react",
    "nextjs",
    "tailwind",
    "sass",
    "bootstrap",
    "django",
    "flask",
  ],

  Databases: ["sqlite", "firebase"],

  "Data Science": [
    "numpy",
    "pandas",
    "sklearn",
    "tensorflow",
    "pytorch",
    "webScraping",
  ],

  Cybersecurity: [
    "crypto",
    "reversing",
    "networkSec",
    "webSec",
    "forensics",
    "osint",
  ],

  Tools: ["git", "docker", "vercel", "railway"],
} satisfies Record<string, readonly SkillKey[]>;
