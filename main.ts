import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Brindlewick: 19°C, confetti drizzle, buses on time for once — bring an umbrella, leave the grudge at home.";

const MAX_CHARS = 140;

if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be exactly one line");
}

if (LINE.length > MAX_CHARS) {
  throw new Error(`entry line is ${LINE.length} chars, over the ${MAX_CHARS} limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? process.env.MAKEFUN_OUTPUT_DIR
  : "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
