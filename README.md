# Bohan Yu: Personal Site

The source for [yubohann.github.io](https://yubohann.github.io), a portfolio,
résumé, and writing site for my robotics work — multi-agent search benchmarks,
graph reinforcement learning, world models, and aerial manipulation in
high-fidelity simulation.

The code home for the projects is
[MultiAgent-Robotics-Portfolio](https://github.com/yubohann/MultiAgent-Robotics-Portfolio);
this site is the human-readable layer on top.

## Stack

- A statically exported Next.js 16 site deployed to GitHub Pages.
- A responsive light/dark design system built from semantic CSS tokens.
- Markdown writing with drafts, RSS, and page metadata.
- A filterable résumé that still prints in full.
- Tests for components, content, metadata, and the final static export.

## Getting started

```bash
nvm install
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run dev             # Start the development server
npm run format          # Format with Prettier and Biome
npm run lint            # Run Biome checks
npm run type-check      # Run TypeScript
npm test                # Run Vitest
npm run build           # Build the production static export
npm run verify-export   # Inspect the generated HTML and XML
npm run measure-export  # Weigh the export against scripts/budget.json
npm run og              # Regenerate the site and per-post share cards
npm run icons           # Regenerate the favicon and web app manifest art
```

## Deploy

Pushes to `main` deploy the static build through GitHub Actions to GitHub
Pages. The repository must be named `yubohann.github.io` for the root URL, with
Pages configured to build from GitHub Actions.

## Credit

The design and architecture are adapted from the MIT-licensed
[personal-site](https://github.com/mldangelo/personal-site) by
[Michael D'Angelo](https://mldangelo.com). Content, identity, and generated
art in this repository are mine.

## License

[MIT](./LICENSE). The upstream copyright notice is retained in `LICENSE`.
