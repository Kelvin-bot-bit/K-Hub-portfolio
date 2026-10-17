# K-Hub portfolio (React + Vite)

Kelvin Kaiseyie's portfolio, rebuilt in React.

## Run it locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # preview the build
```

## Edit your content
All text, projects, links and categories live in `src/data.js`. Each project has a `cat` list (`web`, `fullstack`, `security`, `ai`) that controls the filter buttons. Add `live:` to a project to turn its "Live site" button on.

## Deploy on Netlify
Connect the repo (build command `npm run build`, publish directory `dist`, both already set in `netlify.toml`). The contact form is a Netlify Form: test it once after the first deploy and read messages under **Forms** in the Netlify dashboard. Security headers are in `public/_headers`.

The form only works on Netlify, not on `npm run dev`.
# K-Hub-portfolio
