# CV

This folder contains the source code for my CV.

## Render

```bash
npm run cv
```

Renders `cv/cv.yaml` to `public/cv.pdf` and `src/content/cv/index.md`.

Add `--watch` to re-render on changes:

```bash
npm run cv -- --watch
```

## Tailored Resumes

Generate a tailored resume for a specific job application:

```bash
npm run cv -- cv/custom/<slug>.yaml --output-folder-name custom --pdf-path custom/output/<slug>.pdf --dont-generate-markdown
```

Where `<slug>` is a URL-safe version of the company name or job title (e.g., `google-ml-engineer`).

The tailored YAML is placed in `cv/custom/` (gitignored) and the PDF output goes to `cv/custom/output/` (also gitignored).

## Setup

The `cv.js` script automatically detects the virtual environment in `cv/venv/`. If it's missing:

```bash
cd cv
python3 -m venv venv
source venv/bin/activate
pip install rendercv
```
