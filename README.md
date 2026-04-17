# Hasan & Eman Portfolio

Astro 4.x starter for the Hasan & Eman brand identity studio.

## Stack

- Astro 4.x with built-in i18n
- React islands via `@astrojs/react`
- Tailwind CSS v3 plus CSS custom properties for design tokens
- MDX content for case studies
- Self-hosted fonts via `@fontsource`
- Static output for Vercel or Cloudflare Pages

## Project Structure

- `/src/pages` holds the localized routes
- `/src/layouts` contains the shared shell
- `/src/components` contains Astro and React UI components
- `/src/content` contains MDX case studies and collection schema
- `/src/styles` contains the global stylesheet and design tokens

## Environment Variables

Copy `.env.example` to `.env` and set:

- `PUBLIC_GOOGLE_APPS_SCRIPT_URL` for the contact form POST target
- `PUBLIC_CALENDLY_URL` for the booking embed
- `PUBLIC_PLAUSIBLE_DOMAIN` for Plausible analytics

## Run

```bash
npm install --package-lock=false
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Deploy

### Vercel

1. Import the repository into Vercel.
2. Set the build command to `npm run build`.
3. Set the output directory to `dist`.
4. Add the environment variables from `.env.example`.

### Cloudflare Pages

1. Create a new Pages project.
2. Set the build command to `npm run build`.
3. Set the build output directory to `dist`.
4. Add the environment variables from `.env.example`.

## Notes

- The homepage is intentionally minimal while the content structure is being established.
- RTL support is handled at the layout level for `/ar` routes.
- The contact form uses a Google Apps Script Web App URL and requires no backend.
