export type Achievement = {
  id: string;
  title: string;
  organizer?: string;
  position: string;
  type:
    | "Hackathon"
    | "Coding Competition"
    | "CTF"
    | "Award"
    | "Competition" // for general use
    | "Other";
  date: string;
  url?: string;
  relatedPost?: string;
  relatedCaseStudy?: string;
};

export const achievements: Achievement[] = [
  {
    id: "qcsp26",
    title: "Quantum Computing and Cybersecurity Hackathon",
    organizer: "QCSP x ISC2",
    type: "CTF",
    position: "Champion",
    date: "2026-06-13",
    relatedPost: "qcsp26",
  },
  {
    id: "komsaihack26",
    title: "KomsaiHack RiskReady",
    organizer: "UP Visayas",
    type: "Hackathon",
    position: "Participant",
    date: "2026-04-06",
    relatedPost: "komsaihack26",
  },
  {
    id: "tracktech26",
    title: "TrackTech",
    organizer: "CPU",
    type: "Hackathon",
    position: "Champion",
    date: "2026-01-24",
    relatedPost: "tracktech26",
    relatedCaseStudy: "manobela",
  },
  {
    id: "hack4gov25",
    title: "Hack4Gov",
    organizer: "DICT x CERT-PH",
    type: "CTF",
    position: "1st Runner-Up",
    date: "2025-10-20",
    relatedPost: "hack4gov25",
  },
  {
    id: "komsaihack25",
    title: "KomsaiHack Democratech",
    organizer: "UP Visayas",
    type: "Hackathon",
    position: "Participant",
    date: "2025-04-11",
    relatedPost: "komsaihack25",
  },
  {
    id: "buildablock24",
    title: "Build A Block",
    organizer: "Miagao Valley",
    type: "Hackathon",
    position: "Winner",
    date: "2024-10-21",
    relatedPost: "buildablock24",
  },
  {
    id: "psc7",
    title: "Philippine Startup Challenge 7",
    organizer: "DICT",
    type: "Competition",
    position: "Participant",
    date: "2022-07-01",
    relatedPost: "psc7",
  },
];
