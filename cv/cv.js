import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join, resolve } from "path";
import { mkdirSync, existsSync } from "fs";

// ESM doesn't provide __dirname; derive it from the module's URL.
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, "..");

const args = process.argv.slice(2);

// First non-flag arg is the YAML file (relative to project root, or defaults to cv/cv.yaml).
const cvFileArg = args.find((a) => !a.startsWith("--"));
const cvFile = cvFileArg
  ? resolve(projectRoot, cvFileArg)
  : join(__dirname, "cv.yaml");

function getArg(name) {
  const idx = args.indexOf(name);
  return idx !== -1 ? args[idx + 1] : null;
}

const outputFolder = getArg("--output-folder");
const pdfPath = getArg("--pdf-path");
const markdownPath = getArg("--markdown-path");
const dontGenerateMarkdown = args.includes("--dont-generate-markdown");
const watch = args.includes("--watch");

// Build RenderCV flags.
const flags = [];

if (outputFolder) {
  flags.push(`--output-folder "${outputFolder}"`);
}

// RenderCV resolves --pdf-path relative to the YAML file's directory, which
// breaks when the YAML lives in cv/custom/ but we want output elsewhere.
// Convert to absolute paths and ensure parent directories exist.
function resolveFlag(flag, rawPath) {
  const absolute = resolve(__dirname, rawPath);
  mkdirSync(dirname(absolute), { recursive: true });
  flags.push(`${flag} "${absolute}"`);
}

if (pdfPath) resolveFlag("--pdf-path", pdfPath);
if (markdownPath) resolveFlag("--markdown-path", markdownPath);
if (dontGenerateMarkdown) flags.push("--dont-generate-markdown");

// Prefer the local venv Python, then fall back to system python/python3.
function findPython() {
  const venvPython = join(__dirname, "venv", "bin", "python");
  if (existsSync(venvPython)) return venvPython;

  for (const cmd of ["python", "python3"]) {
    try {
      execSync(`${cmd} --version`, { stdio: "ignore" });
      return cmd;
    } catch {
      // Python not found with this command, try next.
    }
  }
  return null;
}

const python = findPython();
if (!python) {
  console.error("Error: Python is not found or rendercv is not installed.");
  process.exit(1);
}

if (watch) flags.push("--watch");
const cmd = `"${python}" -m rendercv render "${cvFile}" ${flags.join(" ")}`;

try {
  execSync(cmd, { stdio: "inherit", cwd: __dirname });
} catch {
  console.error("Error: Failed to render CV.");
  process.exit(1);
}
