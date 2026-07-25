export type EducationItem = {
  id: string;
  title: string;
  category: "Degree" | "Certification";
  institution?: string;
  provider?: string;
  startDate?: string;
  endDate?: string;
  url?: string;
  image?: string;
};

export const education: EducationItem[] = [
  {
    id: "upv-bscs",
    title: "Bachelor of Science in Computer Science",
    category: "Degree",
    institution: "University of the Philippines Visayas",
    startDate: "2024",
    endDate: "2028",
    url: "https://www.upv.edu.ph/",
  },
  {
    id: "datacamp-ml-engineer",
    title: "Machine Learning Engineer",
    category: "Certification",
    provider: "DataCamp",
    startDate: "2026",
    endDate: "2026",
    url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/1cf699c08e23695dbca607329b41d0dfe5445cf8",
    image: "/images/certificates/datacamp-ml-engineer.png",
  },
  {
    id: "datacamp-ai-engineer-for-developers",
    title: "Associate AI Engineer",
    category: "Certification",
    provider: "DataCamp",
    startDate: "2026",
    endDate: "2026",
    url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/a8c3eb096fa7786a95895759a759410cba26c8e5",
    image: "/images/certificates/datacamp-ai-engineer-for-developers.png",
  },
  {
    id: "datacamp-data-analyst-in-python",
    title: "Data Analyst",
    category: "Certification",
    provider: "DataCamp",
    startDate: "2026",
    endDate: "2026",
    url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/e79a50d814f987fb416e9a5329e95787737e410a",
    image: "/images/certificates/datacamp-data-analyst-in-python.png",
  },
  {
    id: "cs50w",
    title: "CS50's Web Programming with Python and JavaScript",
    category: "Certification",
    provider: "Harvard University",
    startDate: "2025",
    endDate: "2025",
    url: "https://cs50.harvard.edu/certificates/564a60f1-280c-4554-ad14-60aee0deae85",
    image: "/images/certificates/cs50w.png",
  },
  {
    id: "cs50x",
    title: "CS50's Introduction to Computer Science",
    category: "Certification",
    provider: "Harvard University",
    startDate: "2024",
    endDate: "2024",
    url: "https://cs50.harvard.edu/certificates/323b200c-3b4f-47b8-aa75-a837e792f406",
    image: "/images/certificates/cs50x.png",
  },
  {
    id: "cs50p",
    title: "CS50's Introduction to Programming with Python",
    category: "Certification",
    provider: "Harvard University",
    startDate: "2023",
    endDate: "2023",
    url: "https://cs50.harvard.edu/certificates/072beab5-177c-471b-a52f-8b66625fee8a",
    image: "/images/certificates/cs50p.png",
  },
];

export type EducationProfile = {
  platform: string;
  url: string;
  icon?: string;
};

export const educationProfiles: EducationProfile[] = [
  {
    platform: "Coursera",
    url: "https://www.coursera.org/learner/andrianllmm",
    icon: "simple-icons:coursera",
  },
  {
    platform: "EdX",
    url: "https://profile.edx.org/u/andrianllmm",
    icon: "simple-icons:edx",
  },
  {
    platform: "DataCamp",
    url: "https://www.datacamp.com/portfolio/andrianllmm",
    icon: "simple-icons:datacamp",
  },
  {
    platform: "Kaggle",
    url: "https://www.kaggle.com/andrianlloydmaagma",
  },
];
