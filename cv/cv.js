import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const cvFile = join(__dirname, "cv.yaml");

function runPython(cmd) {
  try {
    execSync(cmd, { stdio: "inherit", cwd: __dirname }); // set cwd to cv folder
    return true;
  } catch {
    return false;
  }
}

if (!runPython(`python -m rendercv render --watch "${cvFile}"`)) {
  if (!runPython(`python3 -m rendercv render --watch "${cvFile}"`)) {
    console.error("Error: Python is not found or rendercv is not installed.");
    process.exit(1);
  }
}
