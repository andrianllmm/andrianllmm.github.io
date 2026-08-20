import { beforeEach, describe, expect, it, vi } from "vitest";

const { getCollection } = vi.hoisted(() => ({ getCollection: vi.fn() }));
vi.mock("astro:content", () => ({ getCollection }));

const posts = [
  { id: "post-a", data: { draft: false } },
  { id: "post-b", data: { draft: false } },
];
const caseStudies = [
  { id: "cs-a", data: { draft: false } },
  { id: "cs-b", data: { draft: false } },
];

beforeEach(() => {
  vi.resetModules();
  getCollection.mockImplementation((collection: string) =>
    Promise.resolve(collection === "posts" ? posts : caseStudies),
  );
});

describe("resolveRelatedContent", () => {
  it("filters posts and case studies down to the requested ids", async () => {
    const { resolveRelatedContent } = await import("./relatedContent");
    const result = await resolveRelatedContent(["post-a"], ["cs-b"]);

    expect(result.posts.map((p) => p.id)).toEqual(["post-a"]);
    expect(result.caseStudies.map((cs) => cs.id)).toEqual(["cs-b"]);
  });

  it("returns empty arrays when no ids are given", async () => {
    const { resolveRelatedContent } = await import("./relatedContent");
    const result = await resolveRelatedContent();

    expect(result.posts).toEqual([]);
    expect(result.caseStudies).toEqual([]);
  });

  it("ignores ids that don't match any published content", async () => {
    const { resolveRelatedContent } = await import("./relatedContent");
    const result = await resolveRelatedContent(["missing"], ["missing"]);

    expect(result.posts).toEqual([]);
    expect(result.caseStudies).toEqual([]);
  });
});
