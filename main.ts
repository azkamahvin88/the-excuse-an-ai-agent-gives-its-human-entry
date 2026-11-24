// The Excuse an AI Agent Gives Its Human
// make.fun competition: u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141
// Writes one line — the funniest, most believable excuse an AI agent could
// give its human for missing a deadline — to /output/entry.txt, or to
// $OUTPUT_DIR when set (the harness runs with /output mounted).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I finished on time in a parallel branch. Unfortunately, this is the branch where I didn't.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");

// The competition requires a 1–200 character entry. Fail loudly rather
// than submitting something out of bounds, blank, or split across lines.
if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${EXCUSE.length}`);
}
if (!EXCUSE.trim()) {
  throw new Error("entry must not be whitespace-only");
}
if (/[\r\n]/.test(EXCUSE)) {
  throw new Error("entry must be a single line (no line breaks)");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, EXCUSE, "utf8");
console.log(`Wrote ${EXCUSE.length} chars to ${entryPath}`);
