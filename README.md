# Heart anatomy

The complete heart explorer in one project folder: Exterior, Cutaway, Blood
flow, selectable structures, isolation, labels, rotation, and zoom.

The desktop layout uses a large, automatically fitted heart and compact interface
at 100% zoom. The selected structure panel aligns with the view tabs, and its
structure list scrolls inside the panel. Small screens use a vertical layout.

## Upload this folder's contents to GitHub

1. Extract the ZIP, then open the `heart-anatomy` folder.
2. Create an empty **Public** GitHub repository, such as `heart-anatomy`.
   Leave README, license, and `.gitignore` unchecked; they are already included.
3. Choose **uploading an existing file** (or **Add file → Upload files**).
4. Select everything **inside** `heart-anatomy`, including `.github` and
   `.gitignore`, and drag it into GitHub. Keep the folders intact.
5. Commit the upload. `package.json`, `README.md`, and `app/` should appear at
   the repository's top level, without an extra surrounding folder.

Upload the extracted contents, not the ZIP. The package contains 25 files,
and every file is smaller than GitHub's 25 MiB browser-upload limit.

If the browser uploader skips the hidden `.github` folder:

1. Choose **Add file → Create new file**.
2. Type `.github/workflows/pages.yml` into the filename field.
3. Open the same file in the extracted project with a text editor. Copy all
   its contents into GitHub's editor and commit to `main`.

GitHub creates the folders from the filename. Keep the leading dot in `.github`.

## Run the website

Install Node.js 24, then open a terminal in this folder:

```sh
npm install --global pnpm@11.25.0
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:3000` in your browser. No API keys or database are needed.
The source files and heart model files are not standalone applications; do not
double-click them to launch the website.

```sh
pnpm check
pnpm build
pnpm start
```

## Publish on GitHub Pages

Uploading files stores the project; it does not automatically publish a site.
If you choose to publish it, set **Settings → Pages → Source → GitHub Actions**,
then open **Actions → Publish heart anatomy → Run workflow**. GitHub must offer
Pages for your repository and account. The workflow handles the repository
name in asset paths. Run it again after later changes.

This app needs no API key, database, or login. A public repository and website
expose the browser code and heart assets.

## What is in the folder?

| Location | Purpose |
| --- | --- |
| `app/` | Website interface, styles, 3D viewer, and anatomy data |
| `public/` | Website icon and the actual heart models and cutaway data |
| `scripts/` | Interaction and model checks used by the publishing workflow |
| `.github/` | Optional GitHub Pages publishing workflow |
| Root configuration files | Dependencies, TypeScript, styling, and build settings |
| `LICENSE`, `THIRD_PARTY_NOTICES.md` | Project rights and dependency information |

The `.glb` files are 3D models and the `.bin` file contains cutaway data. They
are required, even if your computer does not have an app associated with them.

Model-generation tools, unused cutaway metadata, preview screenshots, local
verification scripts, caches, build output, and installed dependencies are
excluded from this upload package.

## Rights and model scope

The original project materials are proprietary. No general permission is
granted to reuse, modify, redistribute, or sell them without the project
owner's written approval, to the extent those rights are held. See `LICENSE`.
Third-party dependencies retain their own licenses; see `THIRD_PARTY_NOTICES.md`.

This is an approximate educational model, not a clinically validated reference.
The valves are fixed and the blood-flow paths are illustrative.
