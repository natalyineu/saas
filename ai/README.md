# AI-Vertise Boost Landing Page

A modern, responsive landing page for AI-Vertise Boost, an AI-powered advertising platform for small and medium businesses.

## Features

- 💜 Beautiful purple-pink gradient design
- 📱 Fully responsive layout
- ⚡ Built with Next.js 15 and React 19
- 🎨 Styled with Tailwind CSS
- 🔠 Custom Comfortaa font integration
- 🧩 Component-based architecture

## Project Structure

```
app/
  ├── components/           # UI components
  │   ├── layout/           # Layout components (Section, Container)
  │   ├── sections/         # Page sections (Hero, Features, etc.)
  │   ├── ui/               # Reusable UI components (Button, icons)
  │   └── forms/            # Form components
  ├── lib/                  # Utilities and helpers
  │   ├── hooks/            # Custom React hooks
  │   ├── types/            # TypeScript types and interfaces
  │   └── utils/            # Helper functions and constants
  ├── globals.css           # Global styles
  ├── layout.tsx            # Root layout
  └── page.tsx              # Home page
```

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Component Library

### Layout Components

- `Container`: Handles consistent width and padding
- `Section`: Creates consistent section spacing with background options

### UI Components

- `Button`: Versatile button component with multiple variants
- Icon components: SVG icons as React components

### Utility Hooks

- `useMediaQuery`: Custom hook for responsive design
- `useIsMobile`, `useIsTablet`, `useIsDesktop`: Breakpoint-specific hooks

## Styling

This project uses Tailwind CSS for styling with custom configurations for:

- Colors (primary-purple, primary-pink, gradients)
- Typography (Comfortaa for headings, Geist for body text)
- Spacing and layout
- Component-specific styles

## License

This project is licensed under the MIT License.
