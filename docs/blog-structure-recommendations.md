# Blog Structure Recommendations

## Current Issues in Blog Structure

1. **Disorganized Blog Components**
   - Blog components are mixed with general site components
   - No dedicated structure for blog-specific elements

2. **Inconsistent Blog Post Structure**
   - Each blog post implements its own version of similar components
   - No shared layout or templating system

3. **SEO Optimization Missing**
   - No metadata exports for search engine optimization
   - Missing structured data for blog articles

4. **Poor Import Management**
   - Relative imports make refactoring difficult
   - Import paths are fragile when files are moved

## Recommended Structure

```
ai/app/blog/
├── components/                     # Blog-specific components
│   ├── BlogCard.tsx                # Used on blog index page
│   ├── BlogHeader.tsx              # Consistent blog post header
│   ├── BlogFooter.tsx              # Footer with related posts
│   ├── BlogAuthor.tsx              # Author bio component
│   └── BlogLayout.tsx              # Shared layout wrapper
├── utils/                          # Blog-specific utilities
│   ├── blog-types.ts               # Shared type definitions
│   └── blog-data.ts                # Data fetching/handling
├── page.tsx                        # Blog index page
└── [slug]/                         # Dynamic blog post routes
    └── page.tsx                    # Dynamic blog post template
```

## Implementation Steps

### 1. Create Blog-Specific Components

Create the `ai/app/blog/components` directory and implement shared components:

- `BlogLayout.tsx`: Wrapper with consistent structure for all blog posts
- `BlogHeader.tsx`: Consistent blog post header with title, date, author
- `BlogFooter.tsx`: Footer with back button and related posts

### 2. Implement Type Definitions

Create `ai/app/blog/utils/blog-types.ts` with shared interfaces:

```tsx
export interface BlogPostMetadata {
  title: string;
  description: string;
  publishDate: string;
  author: {
    name: string;
    bio?: string;
    avatar?: string;
  };
  readingTime: string;
  tags: string[];
  slug: string;
  featuredImage?: {
    url: string;
    alt: string;
  };
}

export interface BlogPostProps {
  metadata: BlogPostMetadata;
  content: React.ReactNode;
}
```

### 3. Update Blog Post Template

Convert existing blog posts to use the new structure:

```tsx
import { Metadata } from 'next';
import BlogLayout from '../components/BlogLayout';
import { blogPostData } from '../utils/blog-data';

// Define metadata for SEO
export const metadata: Metadata = {
  title: 'How AI is Transforming Digital Advertising | AI-Vertise Boost',
  description: 'Learn how artificial intelligence is revolutionizing digital advertising...',
  // Additional metadata...
};

export default function AIAdvertisingPost() {
  const postData = blogPostData['ai-in-digital-advertising'];
  
  return (
    <BlogLayout metadata={postData.metadata}>
      {/* Blog content here */}
      <p className="lead">
        Artificial Intelligence is democratizing digital advertising...
      </p>
      
      {/* Rest of the blog content */}
    </BlogLayout>
  );
}
```

### 4. Implement Structured Data for SEO

Add JSON-LD structured data to improve SEO:

```tsx
import { Metadata, JsonLd } from 'next';

// ...other imports

export default function BlogPost() {
  // ...component code
  
  return (
    <>
      <JsonLd
        id="article-schema"
        data={{
          '@type': 'BlogPosting',
          'headline': title,
          'datePublished': publishDate,
          'dateModified': modifiedDate,
          'author': {
            '@type': 'Person',
            'name': author.name
          },
          // additional structured data
        }}
      />
      
      {/* Blog content */}
    </>
  );
}
```

## Migration Strategy

1. Create the new structure in parallel without disrupting existing blog posts
2. Convert one blog post at a time to the new structure
3. Implement automated tests to ensure consistent rendering
4. Update imports across the codebase to use the new component paths 