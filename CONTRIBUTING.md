# Contributing to Spenta Engineers Website

Thank you for your interest in contributing to the Spenta Engineers website project.

## Development Setup

1. Fork and clone the repository
2. Install dependencies: `npm install`
3. Create `.env.local` with required environment variables (see README.md)
4. Run the development server: `npm run dev`

## Code Style

- Use TypeScript for all new files
- Follow the existing code style and patterns
- Use functional components with TypeScript
- Prefer server components over client components when possible
- Use Tailwind CSS for styling

## SEO Guidelines

When adding new pages:

1. **Always add metadata**:
   ```typescript
   import type { Metadata } from "next";
   
   export const metadata: Metadata = {
     title: "Page Title",
     description: "Page description (150-160 characters)",
     alternates: {
       canonical: "/page-path",
     },
     openGraph: {
       title: "Page Title | Spenta Engineers",
       description: "OG description",
       url: "https://www.spentaengineers.com/page-path",
     },
   };
   ```

2. **Update sitemap.ts** when adding new routes
3. **Use semantic HTML** elements
4. **Add alt text** to all images
5. **Use descriptive headings** (h1, h2, h3 hierarchy)

## Image Guidelines

- Optimize images before adding to `/public`
- Use WebP or AVIF formats when possible
- Provide descriptive alt text
- Use Next.js Image component for optimization

## Commit Messages

Use clear, descriptive commit messages:
- `feat: Add new product page`
- `fix: Correct contact form validation`
- `docs: Update README with setup instructions`
- `seo: Add metadata to products page`

## Testing

Before submitting changes:
- Test on multiple screen sizes (mobile, tablet, desktop)
- Verify all links work correctly
- Check form submissions
- Run `npm run lint` to check for errors
- Test build: `npm run build`

## Questions?

For questions or clarifications, please contact the development team.

