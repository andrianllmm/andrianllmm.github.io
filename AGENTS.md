# AGENTS.md

## Repository

This repository contains the source code for my personal website, built with Astro.

The site is content-driven. Most pages are generated from structured content.

## Purpose

This portfolio exists to prove one specific claim:

> I build software that thoughtfully integrates machine learning to solve real problems.

Every change should strengthen that claim.

## Architecture

The repository is organized around four Astro content collections (`projects`, `posts`, `achievements`, `cv`) and two data files (`skills`, `tags`) that define enums used by content schemas.

- **Projects**: Portfolio projects with associated case studies and skills.
- **Posts**: Writing with associated tags.
- **Achievements**: Awards, hackathons, and other competitions.
- **Education**: Degrees, certifications, online courses, and workshops. (Data file, not a content collection.)
- **Skills** and **Tags**: TypeScript data files at `src/data/` that define the vocabularies used across content.

### CV

The CV is generated from `/cv/cv.yaml`, the single source of truth, using the Python library RenderCV.

After modifying the YAML, activate the Python venv in `cv/` and regenerate with `npm run cv`. This produces both `src/content/cv/index.md` and `public/cv.pdf`.

Generated artifacts should never be edited directly.
