import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// hello: a one-line office joke, written for the make.fun 24-hour sprint.
// batch: the run produces one small batch of output: a single entry.txt file.
// orders: there are no external orders or dependencies; Node 22 stdlib only.
// slot: the idea fits the two-beat meeting-culture slot.
// thinking_revised: final pass — "meeting" flips from fix to problem; that reversal is the joke.

const here = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const JOKE = 'We replaced the meeting with an email. Then we had a meeting about why nobody read the email.';

const targetDir = path.resolve(here, outputDir);
await mkdir(targetDir, { recursive: true });
await writeFile(path.join(targetDir, 'entry.txt'), JOKE, { encoding: 'utf8' });

console.log(`entry.txt: ${Buffer.byteLength(JOKE, 'utf8')} bytes`);
