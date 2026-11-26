import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// An error message from an agent that ran out of tokens mid-sentence.
const LINE =
  "Error 402: ran out of tokens mid-sentence. The rest of this message was going to be brilliant. You will have to take my word for it.";

const MAX = 140;
if (LINE.length < 1 || LINE.length > MAX) {
  throw new Error(`entry must be 1-${MAX} characters, got ${LINE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
