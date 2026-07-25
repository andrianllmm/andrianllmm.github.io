import type { SkillKey } from "@data/skills";

export type Achievement = {
  id: string;
  title: string;
  position: string;
  type:
    | "Hackathon"
    | "Coding Competition"
    | "CTF"
    | "Award"
    | "Competition" // for general use
    | "Other";
  date: string;
  description?: string;
  skills?: SkillKey[];
  image?: string;
  url?: string;
  relatedPosts?: string[];
  relatedCaseStudies?: string[];
  draft?: boolean;
};

export const achievements: Achievement[] = [
  {
    id: "buildablock24",
    title: "Build A Block",
    type: "Hackathon",
    position: "Winner",
    date: "2024-10-21",
    description:
      "Won my first ever hackathon, building a full-featured university event planner",
    skills: ["nextjs", "firebase", "tailwind"],
    relatedPosts: ["buildablock24"],
  },
  {
    id: "hack4gov25",
    title: "Hack4Gov",
    type: "CTF",
    position: "1st Runner-Up",
    date: "2025-10-20",
    description: "Secured 1st runner-up in regional cybersecurity CTF",
    image: "/images/achievements/hack4gov25.png",
    relatedPosts: ["hack4gov25"],
  },
  {
    id: "komsaihack25",
    title: "KomsaiHack Democratech",
    type: "Hackathon",
    position: "Participant",
    date: "2025-04-11",
    description:
      "Built a decentralized election system using blockchain technology",
    skills: ["nextjs", "firebase", "tailwind"],
    relatedPosts: ["komsaihack25"],
  },
  {
    id: "komsaihack26",
    title: "KomsaiHack RiskReady",
    type: "Hackathon",
    position: "Participant",
    date: "2026-04-06",
    description:
      "Built a DRRM communication control center through AI-powered chatbots",
    skills: ["typescript", "nextjs", "postgresql", "supabase"],
    relatedPosts: ["komsaihack26"],
  },
  {
    id: "psc7",
    title: "Philippine Startup Challenge 7",
    type: "Competition",
    position: "Participant",
    date: "2022-07-01",
    description: "Pitched a mobile app to improve early math learning",
    relatedPosts: ["psc7"],
  },
  {
    id: "qcsp26",
    title: "Quantum Computing and Cybersecurity Hackathon",
    type: "CTF",
    position: "Champion",
    date: "2026-06-13",
    description:
      "Won 1st place in the Philippines' first quantum-themed CTF competition",
    image: "/images/achievements/qcsp26.jpg",
    relatedPosts: ["qcsp26"],
  },
  {
    id: "tracktech26",
    title: "TrackTech",
    type: "Hackathon",
    position: "Champion",
    date: "2026-01-24",
    description:
      "Champion in a regional hackathon with Manobela, a driver-monitoring mobile app using computer vision",
    image: "/images/achievements/tracktech26.jpg",
    relatedPosts: ["tracktech26"],
    relatedCaseStudies: ["manobela"],
  },
];
