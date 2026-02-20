export type EducationItem = {
  title: string;
  category: "Degree" | "Certification" | "Online Course" | "Workshop";
  institution?: string;
  provider?: string;
  startDate?: string;
  endDate?: string;
  url?: string;
  description?: string;
  image?: string;
};

export const education: EducationItem[] = [
  {
    title: "Bachelor of Science in Computer Science",
    category: "Degree",
    institution: "University of the Philippines Visayas",
    startDate: "2024",
    endDate: "2028",
    url: "https://www.upv.edu.ph/",
  },
  {
    title: "CS50's Web Programming with Python and JavaScript",
    category: "Certification",
    provider: "Harvard University",
    startDate: "2025",
    endDate: "2025",
    url: "https://cs50.harvard.edu/certificates/564a60f1-280c-4554-ad14-60aee0deae85",
    image:
      "https://cs50.harvard.edu/certificates/564a60f1-280c-4554-ad14-60aee0deae85.png",
  },
  {
    title: "CS50's Introduction to Computer Science",
    category: "Certification",
    provider: "Harvard University",
    startDate: "2024",
    endDate: "2024",
    url: "https://cs50.harvard.edu/certificates/323b200c-3b4f-47b8-aa75-a837e792f406",
    image:
      "https://cs50.harvard.edu/certificates/323b200c-3b4f-47b8-aa75-a837e792f406.png",
  },
  {
    title: "CS50's Introduction to Programming with Python",
    category: "Certification",
    provider: "Harvard University",
    startDate: "2023",
    endDate: "2023",
    url: "https://cs50.harvard.edu/certificates/072beab5-177c-471b-a52f-8b66625fee8a",
    image:
      "https://cs50.harvard.edu/certificates/072beab5-177c-471b-a52f-8b66625fee8a.png",
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
