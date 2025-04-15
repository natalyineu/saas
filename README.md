# AI-Vertise Boost

AI-powered advertising platform for small and medium businesses.

## Project Structure

This repository has a monorepo structure:

- `/` (root): Contains the project configuration and workspace setup
- `/ai`: Contains the actual Next.js application

## Deployment Structure

The project is configured to:
- Build from the `/ai` directory 
- Deploy to the root domain (no `/ai` path in URLs)

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

## Detailed Documentation

For more detailed documentation about the Next.js application, see the [README in the /ai directory](./ai/README.md).

## License

This project is licensed under the MIT License. 