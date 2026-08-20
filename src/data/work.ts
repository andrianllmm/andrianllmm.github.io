import type { SkillKey } from "@data/skills";

export type WorkItem = {
  id: string;
  title: string;
  company: string;
  companyURL?: string;
  /** Name of an icon in src/icons/ (rendered via astro-icon's local set) */
  companyLogo?: string;
  location?: string;
  employmentType?: string;
  startDate: string;
  endDate?: string;
  description?: string;
  skills?: SkillKey[];
  relatedPosts?: string[];
  relatedCaseStudies?: string[];
};

export const work: WorkItem[] = [
  {
    id: "morphelabs",
    title: "AI Automation Engineer",
    company: "MorpheLabs",
    companyURL: "https://morphelabs.org",
    companyLogo: "morphelabs-logo",
    employmentType: "Internship",
    location: "Remote",
    startDate: "2026-06",
    endDate: "2026-08",
    description:
      "Built an AI voice booking agent and a face clustering pipeline for photo search.",
    skills: ["n8n", "langchain", "langgraph", "python", "fastapi", "nextjs"],
    relatedCaseStudies: ["morphevents", "morphestate"],
  },
  {
    id: "flyrank-ai",
    title: "Backend AI Engineer",
    company: "FlyRank AI",
    companyURL: "https://flyrank.ai",
    companyLogo: "flyrank-logo",
    employmentType: "Internship",
    location: "Remote",
    startDate: "2026-06",
    endDate: "2026-08",
    description:
      "Built an LLM metering and billing engine and a hybrid retrieval answer pipeline.",
    skills: ["python", "fastapi", "javascript", "express"],
    relatedCaseStudies: ["llm-metering-billing-engine"],
  },
  {
    id: "updssoc",
    title: "Web Developer (Branding & Creative)",
    company: "UP Data Science Society",
    companyURL: "https://www.linkedin.com/company/updatasciencesociety",
    companyLogo: "updssoc-logo",
    employmentType: "Volunteer",
    location: "Remote",
    startDate: "2026-01",
    endDate: "2026-05",
    description:
      "Contributed to the organization's website and built a data visualization site featured by the organization, reaching 1,000+ viewers.",
    skills: [
      "python",
      "pandas",
      "sklearn",
      "react",
      "nextjs",
      "javascript",
      "typescript",
      "tailwind",
    ],
  },
  {
    id: "pagbutlak",
    title: "Lead Web Developer",
    company: "Pagbutlak",
    companyURL: "https://pagbutlak.org",
    companyLogo: "pagbutlak-logo",
    employmentType: "Volunteer",
    location: "Remote",
    startDate: "2025-09",
    endDate: "2026-05",
    description:
      "Designed system architecture and implemented a CMS, authentication, RBAC, and media uploads for 50+ editorial users; built a content migration pipeline for 300+ legacy articles.",
    skills: [
      "react",
      "nextjs",
      "postgresql",
      "javascript",
      "typescript",
      "tailwind",
    ],
  },
  {
    id: "komsai-org",
    title: "Web Developer",
    company: "Komsai.Org",
    companyURL: "https://komsai.org",
    companyLogo: "komsai-logo",
    employmentType: "Volunteer",
    location: "Remote",
    startDate: "2024-09",
    endDate: "2025-09",
    description:
      "Redesigned and rebuilt the organization website from a legacy implementation to a modern web stack, reducing update overhead for 10+ maintainers.",
    skills: ["react", "javascript", "typescript", "tailwind"],
  },
];
