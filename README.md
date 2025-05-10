# AI-Vertise Ads

AI-powered advertising platform for small and medium businesses.

## Project Structure

The project follows a standard Next.js 14 app router structure:

- `/src`: Main source directory
  - `/app`: Pages and routes using Next.js 14 App Router
  - `/components`: Shared UI components used throughout the application
  - `/lib`: Utilities, hooks, and helper functions
  - `/types`: TypeScript type definitions
  - `/config`: Application configuration
  - `/data`: Static data for the application

## Recent Improvements

The codebase has been refactored to:
- Remove duplicated components between `/src/app/components` and `/src/components`
- Standardize import paths using the `@/` alias consistently
- Keep all reusable components in a single location (`/src/components`)

## Deployment Structure

The project is configured for deployment to Vercel with:
- Production builds created with `npm run build`
- Output directory set to `.next`
- Automatic redirects configured in vercel.json

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To create a production build:

```bash
npm run build
```

## Detailed Documentation

For more detailed documentation about the Next.js application, see the [README in the /ai directory](./ai/README.md).

## License

This project is licensed under the MIT License. 