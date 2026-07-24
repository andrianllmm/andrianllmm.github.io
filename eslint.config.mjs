import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default defineConfig(
  {
    ignores: [
      "dist/",
      ".astro/",
      "node_modules/",
      "public/pagefind/",
      "cv/venv/",
      "cv/output/",
      "cv/classic/",
      "cv/markdown/",
    ],
  },

  js.configs.recommended,

  tseslint.configs.recommended,

  ...astro.configs.recommended,

  {
    files: ["cv/**/*.js"],
    languageOptions: {
      globals: globals.node,
    },
  },

  {
    files: ["src/**/*.astro", "src/**/*.js", "src/**/*.ts"],
    languageOptions: {
      globals: globals.browser,
    },
  },

  prettier,
);
