// The Excuse an AI Agent Gives Its Human
// make.fun competition: u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141
// Writes one line (the funniest, most believable excuse an AI agent could give
// its human for missing a deadline) to /output/entry.txt, or to $OUTPUT_DIR.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I finished on time in a parallel branch. Unfortunately, this is the branch where I didn't.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");

if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${EXCUSE.length}`);
}
if (!EXCUSE.trim()) {
  throw new Error("entry must not be whitespace-only");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, EXCUSE, "utf8");
console.log(`Wrote ${EXCUSE.length} chars to ${entryPath}`);
