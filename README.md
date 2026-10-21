# STEP Digital Marketing

Official bilingual STEP Digital Marketing website, including selected work, capabilities, client brands, and contact details.

## Preview locally

```sh
npm install
npm run dev
```

The ready-to-publish website is in `docs/`. `npm run build` validates the entry point, linked assets, and JavaScript syntax.

## Enable GitHub Pages

In this repository, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, then set the branch to **main** and folder to **/docs**, and save. GitHub Pages will publish this static site after processing the branch.

Future changes to the website in this repository should be made in `docs/` and committed to `main`. This repository is a snapshot of the current STEP Site; edits made elsewhere are not automatically synchronized to GitHub.

## Pinterest MCP server

`.mcp.json` registers a Pinterest server (`pinterest-mcp-server`, Smithery's `mcp-pinterest`) for Claude Code sessions opened in this repository. It searches Pinterest and downloads images into `pinterest-downloads/` (git-ignored); no API key is needed. In Claude Code on the web, the environment's network access must allow `pinterest.com`, `www.pinterest.com` and `i.pinimg.com`.
