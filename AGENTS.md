# AGENTS.md

## Repository

This repository contains the source code for my personal website, built with Astro.

The site is content-driven. Most pages are generated from structured content.

## Purpose

This portfolio exists to prove one specific claim:

> I build software that thoughtfully integrates machine learning to solve real problems.

Every change should strengthen that claim.

## Architecture

The site separates **content** (things I write) from **entities** (things in my career).

- **Content**: `posts` and `case-studies`, the only long-form Astro content collections (MDX, defined in `src/content.config.ts`, live under `src/content/`). Posts carry `tags`; case studies don't.
- **Entities**: `work`,`projects`, `achievements`, `education` are plain TypeScript data modules in `src/data/` (`work.ts`, `projects.ts`, `achievements.ts`, `education.ts`). No MDX body, no zod schema.
- **Skills** and **Tags**: TypeScript data files at `src/data/` (`skills.ts`, `tags.ts`) that define the vocabularies used across content and entities. Skills attach only to `projects` and `work`; tags are exclusive to `posts`.

Entities and content are linked one way only: an entity can carry `relatedPosts`/`relatedCaseStudies` (arrays of slugs) pointing at content. Content never references entities back. Don't add back-references or auto-inferred relationships; if a page needs a reverse lookup, do it as a page-level query, not a schema field.

Each entity type has an index page (`/work`, `/projects`, `/achievements`, `/education`); `projects` and `work` also have per-item detail pages (`/projects/[id]`, `/work/[id]`) that render entity fields plus any related posts/case studies via `src/lib/relatedContent.ts` + `src/components/RelatedContent.astro`.

`cv` remains a separate Astro content collection generated from `cv/cv.yaml` (see below) and is not unified with `work.ts`.

### CV

The CV is generated from `/cv/cv.yaml`, the single source of truth, using the Python library RenderCV.

After modifying the YAML, activate the Python venv in `cv/` and regenerate with `npm run cv`. This produces both `src/content/cv/index.md` and `public/cv.pdf`.

Generated artifacts should never be edited directly.

## Code Conventions

### Style

Enforced with **Prettier** and **ESLint**.

### Git

- Use Conventional Commits: `type(scope): concise description`. `content` is a special type for this repo for content-related changes such as updating a post or adding a case study.
- Keep commits atomic.
- Keep commit messages concise. Add a description only when necessary.
- Do not co-author commits or include yourself in commit messages.
- Do not use `--no-verify` or otherwise bypass Git hooks.
- Do not bypass GPG signing. If a commit cannot be signed because GPG is locked or requires user interaction, stop and ask the user to unlock GPG before continuing.
- When updating a branch with changes from its base branch, prefer rebasing over merging.

#### Branches

- Use descriptive branch names with the format `type/<short-description>` (e.g., `feat/add-search`, `content/update-post`); prefer `feat/` over `feature/`.
- Do not include issue number in branch names.
- Keep branches focused on a single issue or logical change.
- Create a dedicated branch for each change. Do not make changes directly on the default branch.

#### Issues

- Follow the GitHub issue template.
- Add relevant GitHub labels; do not add labels speculatively.
- Add relevant issue type.
- Assign the issue to the current user.

#### Pull Requests

- Follow the GitHub PR template.
- Add relevant GitHub labels; do not add labels speculatively.
- Assign the PR to the current user.
- Link the PR to its corresponding issue using `Closes #<issue-number>` when the PR fully resolves the issue.
- Keep PRs focused and reasonably sized.
