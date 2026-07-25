import { getCollection } from "astro:content";

export async function resolveRelatedContent(
  relatedPosts: string[] = [],
  relatedCaseStudies: string[] = [],
) {
  const [posts, caseStudies] = await Promise.all([
    getCollection("posts", (p) => !p.data.draft && relatedPosts.includes(p.id)),
    getCollection(
      "caseStudies",
      (cs) => !cs.data.draft && relatedCaseStudies.includes(cs.id),
    ),
  ]);
  return { posts, caseStudies };
}
