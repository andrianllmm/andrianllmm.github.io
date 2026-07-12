import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import mermaid from "astro-mermaid";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://andrianllmm.dev",
  redirects: {
    "/resume": "/cv",
    "/resume.pdf": "/cv.pdf",
  },
  integrations: [
    sitemap(),
    mdx(),
    pagefind(),
    icon(),
    mermaid({
      theme: "dark",
      autoTheme: true,
      mermaidConfig: {
        startOnLoad: false,
        logLevel: "error",
        securityLevel: "strict",
      },
    }),
    partytown(),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ["**/cv/**"],
      },
    },
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
