# Research Workflow Guidebook

This bilingual Eleventy documentation site guides researchers through LaTeX, VS Code, Git, and GitHub in four workflow stages. Korean and English pages share one navigation model and design system.

## Development

```shell
npm ci
npm run dev
```

Build and validate the site:

```shell
npm run validate:content
npm run build
npm run pagefind
npm run validate:site
```

The Eleventy source lives under `src/`; original screenshots and locally hosted fonts live under `assets/`. Content validation preserves 71 public pages, 30 document translation pairs, and 68 search records. The generated-site check verifies navigation targets, document contracts, local font assets, and screenshot links that work without JavaScript.

Generated files belong under the ignored `output/` directory. The shared resolver in `scripts/output-paths.js` provides `output/site/` for Eleventy, Pagefind, generated-site validation, and CI uploads; use `output/qa/` for browser captures and validation reports. The old `_site/` directory is not modified or served by these commands.

Set `PROJECT_OUTPUT_DIR` to change the generated output root. Relative values are resolved from this repository root, and absolute paths are supported. Keep the same value for build, search, validation, and preview commands, for example:

```shell
export PROJECT_OUTPUT_DIR=output/preview
npm run build
npm run pagefind
npm run validate:site
npm run dev
```

Use `node scripts/output-paths.js site` or `node scripts/output-paths.js qa` when another tool needs the resolved directory. Use `npm run dev -- --port=8080` for a local preview. Build Pagefind before checking search; screenshot zoom, native disclosure controls, and original image links are independent of the generated index.

## Font assets

The site hosts [Pretendard Variable 1.3.9](https://github.com/orioncactus/pretendard/releases/tag/v1.3.9) locally with `font-display: swap`. The unmodified full WOFF2 and SIL Open Font License are stored under `assets/fonts/pretendard/`. Asset provenance and checksums are recorded in that directory.

## Authors

- 정기엽(Jung, Kiyuob), Department of Mathematics, Michigan State University, kyjung@msu.edu, [homepage](https://sites.google.com/view/kiyuob-jung)
- 권기웅(Kwon, Kiwoong), Department of Mathematics, TU Darmstadt, Germany, kwon@mathematik.tu-darmstadt.de

## Old Version

- <https://sites.google.com/view/a-30-year-journey/>
