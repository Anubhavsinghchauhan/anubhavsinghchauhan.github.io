# Anubhav Singh — Portfolio

A polished, static portfolio for an AI Engineer. Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and Lucide.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content

Projects, skills, experience, and education live in `src/data`. Add real GitHub and demo URLs in `src/data/projects.ts`; private projects intentionally show a muted “Private” label instead of dead buttons.

The résumé is served from `public/resume.pdf`.

## Deploy

### Vercel (recommended first)

Import the repository in Vercel and deploy. The site uses static export, so no extra settings are required.

### GitHub Pages

Push to `main`, then choose **GitHub Actions** as the Pages source in repository settings. The included workflow builds and publishes the `out` directory.

## Personal links

Replace the generic LinkedIn and GitHub URLs in `Hero.tsx` and `Contact.tsx` with your profile URLs before publishing.
