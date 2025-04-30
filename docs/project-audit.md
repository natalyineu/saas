# SaaS Project Audit

## Project Structure Overview

```
saas/
├── src/                     # Application source code
│   ├── app/                 # App router structure (pages/routes)
│   │   ├── blog/            # Blog pages and posts
│   │   ├── components/      # App-specific components 
│   │   ├── faq/             # FAQ section
│   │   ├── lib/             # App-specific utility functions
│   │   ├── policy/          # Policy pages
│   │   ├── terms/           # Terms of service
│   │   ├── cookie-policy/   # Cookie policy
│   │   ├── globals.css      # Global CSS
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # Shared UI components
│   ├── lib/                 # Shared utility functions
│   ├── data/                # Data files and constants
│   ├── config/              # Configuration files
│   └── types/               # TypeScript type definitions
├── public/                  # Static assets
├── docs/                    # Documentation
└── ...                      # Config files (next.config.js, etc.)
```

## Current Structure

The project follows modern Next.js best practices with:

1. **Clear Separation of Concerns**: App router in `/src/app`, shared components in `/src/components`, utilities in `/src/lib`.

2. **TypeScript Support**: Types defined in `/src/types`.

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

## Performance Considerations

1. **Image Optimization**: Always use Next.js Image component

2. **Dynamic Imports**: Use for larger components that aren't needed on initial load

3. **Selective Hydration**: Minimize 'use client' directives

## Next Steps

1. Implement the recommendations above, starting with import path standardization.
2. Create a component library with documented usage patterns.
3. Establish a consistent file/folder naming convention across the project.
4. Add comprehensive testing for components and pages. 