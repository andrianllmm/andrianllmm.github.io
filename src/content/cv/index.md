# Andrian Lloyd Maagma's CV

- Email: [maagmaandrian@gmail.com](mailto:maagmaandrian@gmail.com)
- Location: Aklan, Philippines
- Website: [andrianllmm.dev](https://andrianllmm.dev/)
- LinkedIn: [andrian-maagma](https://linkedin.com/in/andrian-maagma)
- GitHub: [andrianllmm](https://github.com/andrianllmm)

# Summary

Computer Science student with industry experience developing AI systems and full-stack applications,
alongside technical leadership across student organizations and award-winning hackathon teams.
Seeking AI/ML engineering roles focused on building production-ready intelligent systems.

# Education

## **University of the Philippines Visayas**

_Iloilo, Philippines_

_Aug 2024 – present_

_BS_ _in_ _Computer Science_

- Cumulative GWA: 1.15/1.00 (President's Lister; 1.00 is the highest possible grade)

- Relevant Coursework: Software Engineering, Web Programming, Database Systems

# Experience

## **AI Automation Engineer**

_June 2026 – present_

_MorpheLabs_

- Replaced a fully manual property-viewing booking form with an AI voice agent and n8n automation layer, automating conflict checks, calendar sync, and rescheduling/cancellation across every booking so staff no longer cross-reference calendars by hand.

- Redesigned an event photo search platform's matching pipeline from one-time selfie lookups to persistent face clustering, moving recognition in-house (DeepFace, RetinaFace, pgvector) so 1,000+ attendees can browse and re-find themselves without re-uploading a selfie on every visit.

## **Backend AI Engineer**

_July 2026 – present_

_FlyRank AI_

- Built a usage metering and billing engine with idempotent event recording, quota enforcement, and Stripe test-mode webhook sync, guaranteeing zero duplicate charges under request retries and replayed events.

- Built an AI image-matching engine with a mismatch guard that combines vision-model tagging, semantic embeddings, and similarity thresholds, rejecting incorrect image-to-article pairings and reporting top-1 match precision on a labeled eval set.

## **Web Developer (Branding & Creative)**

_Jan 2026 – May 2026_

_UP Data Science Society_

- Co-planned and built the organization's website from initial development through launch, shipping the branding and creative team's first production site.

- Built a Spotify Wrapped-style personal-data visualization site featured by the organization, reaching 1,000+ viewers.

## **Lead Web Developer**

_Sept 2025 – May 2026_

_Pagbutlak — Student Publication, College of Arts and Sciences_

- Architected and built a CMS with authentication, role-based access control, and media uploads from scratch, replacing WordPress for 50+ editorial users.

- Built a content migration pipeline that moved 300+ legacy articles from WordPress into the new full-stack architecture.

## **Web Developer**

_Sept 2024 – Sept 2025_

_Komsai.Org — Computer Science Student Organization_

- Rebuilt the organization's website from a legacy implementation to a modern web stack.

- Restructured content organization across the site, reducing update overhead for 10+ maintainers.

# Projects

## **[Iskommerce](https://github.com/andrianllmm/iskommerce)**

_Mar 2026 – May 2026_

University-based C2C marketplace platform modeling informal student trading behavior in a structured system.

- Led a team through a 3-month Agile development cycle to design and ship a full-stack C2C marketplace with a modular monolith architecture (auth, listings, messaging, transactions, reviews, notifications) across a Turborepo monorepo.

- Designed transaction-state modeling (available, reserved, sold, archived) and real-time messaging with WebSockets to keep buyer-seller negotiations tied to each listing.

## **[Project HERMES](https://github.com/popcorn-prophets/project-hermes)**

_Mar 2026 – Apr 2026_

Disaster response communication system using AI-assisted chat workflows and multi-platform messaging integration.

- Led a 5-person team as system architect, owning sprint planning, task allocation, and code review to ship a disaster-response coordination platform in 1 month.

- Designed a hybrid AI/rule-based chatbot that extracts structured incident data (location, type, severity) from freeform disaster reports while keeping validation and response decisions human-reviewed, deployed across Messenger and Telegram.

- Built a responder dashboard with feed, table, and kanban views plus a live incident map, giving responders real-time visibility from initial report to resolution.

## **[Manobela](https://github.com/popcorn-prophets/manobela) (TrackTech Hackathon Winner)**

_Dec 2025 – Feb 2026_

Driver monitoring system using real-time computer vision for in-vehicle safety.

- Led a 5-person team to deliver a deployed driver-monitoring system in a 3-week hackathon sprint, winning 1st place among 8 teams at TrackTech Hackathon 2026.

- Built a real-time computer vision pipeline (MediaPipe, YOLOv8, OpenCV, ONNX Runtime) detecting drowsiness, distraction, and phone use via eye-aspect-ratio, PERCLOS, and gaze-tracking models.

- Designed a WebRTC video streaming architecture that offloads inference to the backend, keeping the mobile app lightweight while processing live camera frames for real-time alerts.

## **[Aklish](https://github.com/andrianllmm/aklish)**

_Jan 2025 – July 2025_

Crowdsourced Aklanon-English translation platform with NLP tools for an underserved Philippine language.

- Manually encoded 5,000+ dictionary entries from a printed source into a crowdsourced Aklanon-English dictionary with community voting and a Stack Overflow-style reputation system.

- Built a spellchecker combining SymSpellPy, LemmInflect, and a custom-built Aklanon stemmer (AklStemmer) to catch inflected-word errors in both languages.

- Conducted user testing with 100+ native speakers and iterated on UX improvements based on their feedback.

# Awards

## **Quantum Computing and Cybersecurity Hackathon 2026 (QCSP)**

_June 2026_

1st Place — Philippines' first quantum-themed cybersecurity hackathon, specialized in Classical-Quantum challenges.

## **Hack4Gov National CTF 2025 (DICT & CERT-PH)**

_Oct 2025_

1st Runner-Up (Team) and 2nd Runner-Up (Individual) — national cybersecurity competition, specialized in web security.

# Skills

**Programming Languages:** Python, TypeScript, JavaScript, Java

**AI / ML:** PyTorch, TensorFlow, Scikit-learn, Pandas, LangChain, LangGraph, RAG pipelines, vector databases (pgvector), LLM evaluation

**Frontend:** React, Next.js, React Native, Expo, Astro, TailwindCSS

**Backend:** FastAPI, Django, Express.js, NestJS

**Databases:** PostgreSQL, Supabase, Firebase

**Tools:** n8n, Git, Docker, CI/CD, Stripe, Vercel, Render, Railway
