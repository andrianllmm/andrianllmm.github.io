export type Skill = {
  name: string;
  icon?: string;
};

export const skills = {
  python: { name: "Python", icon: "simple-icons:python" },
  javascript: { name: "JavaScript", icon: "simple-icons:javascript" },
  typescript: { name: "TypeScript", icon: "simple-icons:typescript" },
  java: { name: "Java", icon: "devicon-plain:java" },
  django: { name: "Django", icon: "simple-icons:django" },
  react: { name: "React", icon: "simple-icons:react" },
  nextjs: { name: "Next.js", icon: "simple-icons:nextdotjs" },
  tailwind: { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
  firebase: { name: "Firebase", icon: "simple-icons:firebase" },
  solidity: { name: "Solidity", icon: "simple-icons:solidity" },
  wxt: { name: "WXT" },
  flask: { name: "Flask", icon: "simple-icons:flask" },

  sqlite: { name: "SQLite", icon: "simple-icons:sqlite" },
  html5: { name: "HTML", icon: "simple-icons:html5" },
  css3: { name: "CSS", icon: "simple-icons:css3" },
  sass: { name: "Sass", icon: "simple-icons:sass" },
  bootstrap: { name: "Bootstrap", icon: "simple-icons:bootstrap" },

  pandas: { name: "Pandas", icon: "simple-icons:pandas" },
  nltk: { name: "NLTK" },

  tkinter: { name: "Tkinter" },
  pygame: { name: "PyGame" },
  poetry: { name: "Poetry", icon: "simple-icons:poetry" },
  pypi: { name: "PyPI", icon: "simple-icons:pypi" },

  git: { name: "Git", icon: "simple-icons:git" },
  docker: { name: "Docker", icon: "simple-icons:docker" },
  turborepo: { name: "Turborepo", icon: "simple-icons:turborepo" },
  vercel: { name: "Vercel", icon: "simple-icons:vercel" },

  nlp: { name: "NLP" },
  regex: { name: "Regex", icon: "lucide:regex" },
  webScraping: { name: "Web Scraping", icon: "lucide:globe" },
  xmlParsing: { name: "XML Parsing", icon: "lucide:code-xml" },

  crypto: { name: "Cryptography", icon: "lucide:message-square-lock" },
  reversing: { name: "Reverse Engineering", icon: "lucide:bug" },
  networkSec: { name: "Network Security", icon: "lucide:network" },
  webSec: { name: "Web Security", icon: "lucide:globe-lock" },
  forensics: { name: "Digital Forensics", icon: "lucide:file-search" },
  stego: { name: "Steganography", icon: "lucide:images" },
  pwn: { name: "Binary Exploitation", icon: "lucide:binary" },
  osint: { name: "OSINT" },
} as const;

export type SkillKey = keyof typeof skills;
