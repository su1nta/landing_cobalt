# Cobalt Finance Landing Page [(Live Link)](https://landing-cobalt.vercel.app)

Modern marketing splash page for a fictional small-business finance platform. Built with React 19, Vite 7, and Tailwind CSS v4 to showcase a hero pitch, product positioning, and future feature highlights.

## Quick Start

1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`
3. Open the URL printed by Vite (defaults to `http://localhost:5173`)

Available scripts:

- `npm run dev` – launch Vite with hot module reloading
- `npm run build` – create a production-ready bundle in `dist`
- `npm run preview` – serve the built bundle locally
- `npm run lint` – run ESLint with the project ruleset

## Project Structure

```
src/
	App.jsx          # Layout shell that renders the landing page sections
	main.jsx         # React entry point wired to Vite
	index.css        # Tailwind CSS setup and design tokens
	components/
		Hero.jsx       # Hero headline, CTA button, and banner graphic
		Feature.jsx    # Value proposition copy block
		Bento.jsx      # Placeholder for future grid of feature cards
public/
	vite.svg         # Default Vite favicon
```

## Key Features

- Responsive single-column layout with Tailwind utility classes
- Custom theme tokens (`@theme`) for brand color and display font
- Hero section with waitlist CTA and banner imagery
- Feature highlight copy block using split-column layout on wide screens
- ESLint 9 and Prettier (with Tailwind plugin) for consistent formatting

## Styling Notes

- Tailwind CSS 4 (via `@tailwindcss/vite`) powers utility classes and theming
- Google Fonts import provides `Instrument Serif` for hero typography
- `Hero.jsx` demonstrates group-hover interactions on the waitlist button
- Update `src/index.css` to extend the theme or introduce additional layers

## Future Enhancements

- [x] Flesh out `Bento.jsx` with feature tiles or testimonial cards
- [ ] Add navigation and footer components for a full marketing page
<!-- - [ ] Integrate form handling (e.g., waitlist signup) with a backend or SaaS -->
- [x] Expand responsive design coverage with additional breakpoints and tests

## Tooling

- React 19 with Strict Mode rendering
- Vite 7 bundler configured in `vite.config.js`
- ESLint configuration in `eslint.config.js` with React hooks and refresh plugins
- Prettier + Tailwind plugin for deterministic class ordering
