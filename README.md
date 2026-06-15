# Apoorv Deshmukh — Portfolio

React + Vite portfolio site. Deployable on Netlify in ~3 minutes.

## Local development

```bash
npm install
npm run dev
```

## Deploy to Netlify

### Option A — Netlify CLI (fastest)
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Option B — GitHub + Netlify UI
1. Push this folder to a GitHub repo
2. Go to app.netlify.com → "Add new site" → "Import an existing project"
3. Connect GitHub, select the repo
4. Build settings are pre-configured in netlify.toml:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Custom domain
In Netlify: Site settings → Domain management → Add custom domain

## Updating content

All content lives in one file: `src/data/content.js`

- Personal info / links → `personal`
- Impact metrics → `metrics`
- Project cards → `projects`
- Skills grid → `stack`
- Work history → `experience`
- Education / certs → `education`, `certifications`

No component changes needed for content updates.
