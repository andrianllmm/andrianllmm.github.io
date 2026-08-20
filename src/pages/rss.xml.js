import rss from "@astrojs/rss";
import { SITE } from "@consts";
import { getCollection } from "astro:content";
import { projects } from "@data/projects";

export async function GET(context) {
  const posts = (await getCollection("posts")).filter(
    (post) => !post.data.draft,
  );

  const activeProjects = projects.filter((project) => !project.draft);

  const items = [
    ...posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/${post.collection}/${post.id}/`,
    })),
    ...activeProjects.map((project) => ({
      title: project.title,
      description: project.description,
      pubDate: new Date(project.startDate),
      link: `/projects/${project.id}/`,
    })),
  ].sort(
    (a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf(),
  );

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items,
  });
}
