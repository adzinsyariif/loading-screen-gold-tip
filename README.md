# Loading Screen Gold — A Tip in 200 Characters

[![make.fun](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)](https://make.fun/c/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/adzinsyariif/loading-screen-gold-tip/rank.svg)](https://make.fun/c/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/adzinsyariif/loading-screen-gold-tip/reward.svg)](https://make.fun/c/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

Entry for the [Loading Screen Gold: A Tip in 200 Characters](https://make.fun/c/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270) competition on [make.fun](https://make.fun).

## What it does

`main.ts` writes a single loading-screen tip — one line, at most 200
characters, aimed at stressed developers and AI coding agents — to
`/output/entry.txt`. The program is fully deterministic: the tip is a
constant in the source, with no input, no randomness, no network and
no environment reads, so every run writes byte-identical output.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later (the grader runs Node 22.23.4).

## The tip

> Tip: your AI copilot is staring at this spinner too, bluffing through the same error. Breathe. You're the only one here with lungs.

## License

MIT — see [LICENSE](LICENSE).
