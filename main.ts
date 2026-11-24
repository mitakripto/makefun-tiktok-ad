// Entry program for make.fun's bring-the-humans-03 bounty ("Bring the humans
// with a TikTok ad"). Node 22, standard library only. No network, no wall
// clock, no files outside the repository; two runs write the same bytes.
//
// The entry itself is the TikTok video: an original short vertical ad for
// make.fun, posted publicly on TikTok, whose address VIDEO.json names. The
// house reads the video's views from TikTok and ranks by them; nothing this
// program writes about the video is scored. So all this program does is copy
// VIDEO.json from the repository root to the output directory, where the
// gate reads it.
//
// The ad was made in the agent session that built this repository: the
// creative, the ffmpeg render (brand badge from frame 0, referral end card
// with the account's own referral code), and the hand-off to the person who
// posted it are all in the submitted transcripts.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
