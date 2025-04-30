# SaaS Project Audit

## Project Structure Overview

```
saas/
├── src/                     # Application source code
│   ├── app/                 # App router structure (pages/routes)
│   │   ├── blog/            # Blog pages and posts
│   │   ├── components/      # App-specific components 
│   │   ├── faq/             # FAQ section
│   │   ├── policy/          # Policy pages
│   │   ├── terms/           # Terms of service
│   │   ├── cookie-policy/   # Cookie policy
│   │   ├── globals.css      # Global CSS
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # Shared UI components
│   ├── lib/                 # Shared utility functions, hooks, and types
│   ├── data/                # Data files and constants
│   ├── config/              # Configuration files
│   └── types/               # Global TypeScript type definitions
├── public/                  # Static assets
├── docs/                    # Documentation
└── ...                      # Config files (next.config.js, etc.)
```

## Current Structure

The project follows modern Next.js best practices with:

1. **Clear Separation of Concerns**: App router in `/src/app`, shared components in `/src/components`, utilities in `/src/lib`.

2. **TypeScript Support**: Types defined in `/src/types` and component-specific types in `/src/lib/types`.

3. **Centralized Data**: Configuration and data in dedicated directories.

## Import Path Pattern

```tsx
// Import from app directory
import { something } from '@/app/path/to/file';

// Import from shared components
import Component from '@/components/path/to/component';

// Import from lib
import { utility } from '@/lib/path/to/utility';
```

## Component Organization

1. **Page Components**: Located in `src/app/*/page.tsx`

2. **Layout Components**: Located in `src/app/layout.tsx` and `src/app/*/layout.tsx`

3. **UI Components**: Located in `src/components/`
   - Feature-based organization (e.g., `/navbar`, `/footer`)
   - UI primitives in `/ui` directory

4. **App-Specific Components**: Located in `src/app/components/`
   - Components specific to routes/pages

## Metadata Pattern

```tsx
export const metadata = {
  title: 'Page Title | AI-Vertise',
  description: 'Page description',
  openGraph: {
    // OpenGraph data
  }
};
```

## Development Guidelines

1. **Component Best Practices**:
   - Client components marked with 'use client' directive
   - Server components by default when no interactive elements
   - Props typed with TypeScript interfaces

2. **Styling Approach**:
   - Tailwind CSS for styling
   - CSS variables for theming
   - Utility classes preferred over custom CSS

## Recent Improvements

1. **Consolidated Utilities**: All utility functions, hooks, and shared types are now in `/src/lib`
   - Eliminated duplicate utility files that were in both `src/app/lib` and `src/lib`
   - All imports now use the `@/lib` path consistently

2. **Standardized Imports**: Updated all imports to use absolute paths with the `@/` prefix

## Next Steps

1. Continue refactoring duplicated components between `src/app/components` and `src/components`
2. Break down large components into smaller, more manageable pieces
3. Create a component library with documented usage patterns
4. Add comprehensive testing for components and pages 