import type { SkillKey } from "@data/skills";

export type WorkItem = {
  id: string;
  title: string;
  company: string;
  companyURL?: string;
  startDate: string;
  endDate?: string;
  description?: string;
  skills?: SkillKey[];
  image?: string;
  relatedPosts?: string[];
  relatedCaseStudies?: string[];
};

export const work: WorkItem[] = [
  {
    id: "flyrank-ai",
    title: "Backend AI Engineer",
    company: "FlyRank AI",
    startDate: "2026-07",
    description:
      "Building backend workflows with hybrid retrieval, structured LLM outputs, and RAG pipelines.",
  },
  {
    id: "morphelabs",
    title: "AI Automation Engineer",
    company: "MorpheLabs",
    companyURL: "https://morphelabs.org",
    startDate: "2026-06",
    description:
      "Building production AI agents and enterprise automation workflows with n8n, integrating AI services, APIs, and business systems.",
    skills: ["n8n"],
  },
  {
    id: "up-data-science-society",
    title: "Web Developer (Branding & Creative)",
    company: "UP Data Science Society",
    startDate: "2026-01",
    endDate: "2026-05",
    description:
      "Contributed to the organization's website and built a Spotify Wrapped-style data visualization site featured by the organization, reaching 1,000+ viewers.",
  },
  {
    id: "pagbutlak",
    title: "Lead Web Developer",
    company: "Pagbutlak — Student Publication, College of Arts and Sciences",
    startDate: "2025-09",
    endDate: "2026-05",
    description:
      "Designed system architecture and implemented a CMS, authentication, role-based access control, and media uploads for 50+ editorial users; built a content migration pipeline for 300+ legacy articles.",
  },
  {
    id: "komsai-org",
    title: "Web Developer",
    company: "Komsai.Org — Computer Science Student Organization",
    startDate: "2024-09",
    endDate: "2025-09",
    description:
      "Redesigned and rebuilt the organization website from a legacy implementation to a modern web stack, reducing update overhead for 10+ maintainers.",
  },
];
