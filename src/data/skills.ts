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
  nestjs: { name: "NestJS", icon: "simple-icons:nestjs" },
  express: { name: "Express", icon: "simple-icons:express" },
  reactNative: { name: "React Native", icon: "simple-icons:react" },
  expo: { name: "Expo", icon: "simple-icons:expo" },
  astro: { name: "Astro", icon: "simple-icons:astro" },
  django: { name: "Django", icon: "simple-icons:django" },
  fastapi: { name: "FastAPI", icon: "simple-icons:fastapi" },
  flask: { name: "Flask", icon: "simple-icons:flask" },
  tailwind: { name: "Tailwind", icon: "simple-icons:tailwindcss" },
  html: { name: "HTML", icon: "simple-icons:html5" },
  css: { name: "CSS", icon: "simple-icons:css3" },
  sass: { name: "Sass", icon: "simple-icons:sass" },
  bootstrap: { name: "Bootstrap", icon: "simple-icons:bootstrap" },
  numpy: { name: "NumPy", icon: "simple-icons:numpy" },
  pandas: { name: "Pandas", icon: "simple-icons:pandas" },
  sklearn: { name: "Scikit-learn", icon: "simple-icons:scikitlearn" },
  tensorflow: { name: "TensorFlow", icon: "simple-icons:tensorflow" },
  pytorch: { name: "PyTorch", icon: "simple-icons:pytorch" },
  langchain: { name: "LangChain", icon: "simple-icons:langchain" },
  langgraph: { name: "LangGraph", icon: "simple-icons:langgraph" },
  huggingface: { name: "Hugging Face", icon: "simple-icons:huggingface" },
  opencv: { name: "OpenCV", icon: "simple-icons:opencv" },
  yolo: { name: "YOLO" },
  mediapipe: { name: "MediaPipe" },
  sqlite: { name: "SQLite", icon: "simple-icons:sqlite" },
  postgresql: { name: "PostgreSQL", icon: "simple-icons:postgresql" },
  pgvector: { name: "pgvector" },
  prisma: { name: "Prisma", icon: "simple-icons:prisma" },
  supabase: { name: "Supabase", icon: "simple-icons:supabase" },
  firebase: { name: "Firebase", icon: "simple-icons:firebase" },
  n8n: { name: "n8n", icon: "simple-icons:n8n" },
  git: { name: "Git", icon: "simple-icons:git" },
  docker: { name: "Docker", icon: "simple-icons:docker" },
  vercel: { name: "Vercel", icon: "simple-icons:vercel" },
  render: { name: "Render", icon: "simple-icons:render" },
  railway: { name: "Railway", icon: "simple-icons:railway" },
} as const;

export type SkillKey = keyof typeof skills;

export const skillGroups = {
  Languages: ["python", "javascript", "typescript", "java"],

  "AI / ML": [
    "numpy",
    "pandas",
    "sklearn",
    "tensorflow",
    "pytorch",
    "langchain",
    "langgraph",
    "huggingface",
    "opencv",
    "yolo",
    "mediapipe",
  ],

  "Web / Mobile": [
    "html",
    "css",
    "react",
    "nextjs",
    "nestjs",
    "express",
    "reactNative",
    "expo",
    "astro",
    "tailwind",
    "sass",
    "bootstrap",
    "django",
    "fastapi",
    "flask",
  ],

  Databases: [
    "sqlite",
    "postgresql",
    "pgvector",
    "prisma",
    "supabase",
    "firebase",
  ],

  Tools: ["n8n", "git", "docker", "vercel", "render", "railway"],
} satisfies Record<string, readonly SkillKey[]>;
