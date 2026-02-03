## Sporty Leagues App

A responsive single-page application (SPA) built with Vue 3 and Vite. Browse, search, and filter sports leagues using data from TheSportsDB API.

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

- Primary theme color: `#e41827`
- Font: [Barlow] loaded via Google Fonts
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
- mobile-first responsive approach
