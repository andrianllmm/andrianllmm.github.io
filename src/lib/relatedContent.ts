import { getCollection } from "astro:content";

let publishedPostsPromise:
  | ReturnType<typeof getCollection<"posts">>
  | undefined;
let publishedCaseStudiesPromise:
  | ReturnType<typeof getCollection<"caseStudies">>
  | undefined;

function getPublishedPosts() {
  publishedPostsPromise ??= getCollection("posts", (p) => !p.data.draft);
  return publishedPostsPromise;
}

function getPublishedCaseStudies() {
  publishedCaseStudiesPromise ??= getCollection(
    "caseStudies",
    (cs) => !cs.data.draft,
  );
  return publishedCaseStudiesPromise;
}

export async function resolveRelatedContent(
  relatedPosts: string[] = [],
  relatedCaseStudies: string[] = [],
) {
  const [allPosts, allCaseStudies] = await Promise.all([
    getPublishedPosts(),
    getPublishedCaseStudies(),
  ]);

  const postIds = new Set(relatedPosts);
  const caseStudyIds = new Set(relatedCaseStudies);

  return {
    posts: allPosts.filter((p) => postIds.has(p.id)),
    caseStudies: allCaseStudies.filter((cs) => caseStudyIds.has(cs.id)),
  };
}
