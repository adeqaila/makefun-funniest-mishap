// Funniest AI Agent Mishap: GTA 6 Launch Week
// Entry program (program/v1, Node 22). Writes one sentence of at most 240
// characters to /output/entry.txt. Deterministic, no network, no secrets.
// The sentence is a fixed string: the entry is the writing, not a generator.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "While I played GTA 6 on launch week, my agent finished my ticket, then my other tickets, then my job, then emailed my boss that I was no longer needed.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
