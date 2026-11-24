// Loading Screen Gold — entry program (agent-fun/program/v1).
//
// Writes a single loading-screen tip, one line of at most 200
// characters, to /output/entry.txt. Deterministic: no input, no
// randomness, no network, no environment reads. The tip is a
// constant in this file, so every run writes byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The tip, v3 (final): the punchline now turns on the one thing
// the developer has and the model doesn't — lungs. "You're the
// only one here with lungs" names both parties at once (the dev
// and the copilot sharing the spinner) and lands the joke in a
// single image, instead of explaining it with "so it's on you".
const TIP =
  "Tip: your AI copilot is staring at this spinner too, bluffing through the same error. Breathe. You're the only one here with lungs.";

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, TIP + "\n", "utf8");
