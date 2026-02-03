## Sporty Leagues App

A responsive single-page application (SPA) built with Vue 3 and Vite. Browse, search, and filter sports leagues using data from TheSportsDB API.

---

## Features

- Fast SPA with Vue 3 (Options API) and Vite
- Responsive, branded UI with Tailwind CSS and SCSS
- Search and filter leagues by sport
- League badge popover with image skeleton loader and fallback
- Branded loading and empty states
- Accessibility-first: keyboard navigation, color contrast, ARIA labels
- Caching: in-memory + localStorage for API data

## Technology Stack

- [Vue 3 (Options API)]
- [Vite]
- [Tailwind CSS]
- [TheSportsDB API]
- Fetch API, localStorage

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)

### Install dependencies
```bash
npm install
```

### Run in development
```bash
npm run dev
```

## Project Structure

```
src/
	App.vue                # Root component
	main.js                # App entry point
	api/
		leagues.service.js   # API + caching logic
	cache/
		cacheManager.js      # In-memory + localStorage cache
	components/
		EmptyState.vue       # Branded empty state
		LeagueBadgeModal.vue # Modal popover for league badge
		LeagueList.vue       # List of leagues
		SearchBar.vue        # Search input
		SkeletonLoader.vue   # List skeleton loader
		ImageSkeleton.vue    # Image skeleton loader
		SportFilter.vue      # Sport filter dropdown
	i18n/
		en.properties.js     # UI strings
	styles/
		base.scss            # Global styles
	views/
		HomeView.vue         # Main SPA view
index.html
vite.config.js
tailwind.config.js
postcss.config.js
package.json
```

## Accessibility & UX

- All interactive elements are keyboard accessible
- Sufficient color contrast and focus styles
- ARIA labels and roles for screen readers
- Responsive layout for all devices
- Smooth transitions and skeleton loaders for better perceived performance

## API & Caching

- Uses [TheSportsDB All Leagues API](https://www.thesportsdb.com/api/v1/json/3/all_leagues.php)
- League badge images fetched per league (with fallback if missing)
- In-memory cache for fast access during session
- localStorage cache for persistence across reloads

## Theming & Customization

- Primary theme color: `#e41827` (set in Tailwind and SCSS)
- Font: [Barlow](https://fonts.google.com/specimen/Barlow), loaded via Google Fonts
- Easily adjust theme in `tailwind.config.js` and `base.scss`

## Development Notes

- No router or Vuex: SPA with local state and service-level caching
- Clean, readable code for team environments
- All UI strings in `src/i18n/en.properties.js`

## Credits

- [TheSportsDB](https://www.thesportsdb.com/) for sports data
- [Sporty Group](https://sportygroup.com/) for branding inspiration

## AI Tools Usage

- Used GitHub Copilot to build the basic Vue app and configuration files.
- Ran accessibility checks as per WCAG 2.1 guidelines using Copilot.

## Design Decisions

- Took reference from the Sporty official website for UI design.
- Ensured the UI matches the look and feel of the Sporty website.
