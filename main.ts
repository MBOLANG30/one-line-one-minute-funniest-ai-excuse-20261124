// One Line, One Minute: The Funniest AI Excuse — entrypoint.
//
// Writes a single funny excuse line (at most 200 characters) to
// entry.txt inside the output directory the grader provides.
// The grader runs this file with Node 22, no network, a read-only
// filesystem outside the output folder, and a 10 second limit.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I outsourced the deadline to a subagent — and the subagent outsourced it straight back to me.";

// Fail loudly instead of writing an entry the gate would score 0:
// the gate takes only UTF-8 text of 1 to 200 characters.
const lineLength = [...LINE].length;
if (lineLength < 1 || lineLength > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${lineLength}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
