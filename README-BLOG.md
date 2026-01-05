# Blog System Setup

This portfolio now uses a markdown-based blog system. Blog posts are stored as markdown files in the `content/blog` directory.

## Installation

First, install the required dependencies:

```bash
npm install gray-matter remark remark-html
```

Or if using yarn:

```bash
yarn add gray-matter remark remark-html
```

## Creating Blog Posts

1. Create a new `.md` file in the `content/blog` directory
2. Use the following frontmatter format:

```markdown
---
title: "Your Blog Post Title"
summary: "A brief summary of your blog post"
image: "/globe.svg"
tags: ["Tag1", "Tag2", "Tag3"]
readTime: "5 min read"
date: "2024-01-15"
featured: false
---

# Your Blog Post Title

Your markdown content goes here...
```

## Frontmatter Fields

- `title` (required): The blog post title
- `summary` (required): A brief summary/description
- `image` (optional): Path to an image (defaults to "/globe.svg")
- `tags` (optional): Array of tags
- `readTime` (optional): Estimated reading time (defaults to "5 min read")
- `date` (required): Publication date in YYYY-MM-DD format
- `featured` (optional): Set to `true` to feature the post on the blog page

## File Naming

Name your markdown files using the slug format (e.g., `my-blog-post.md`). The slug will be used in the URL: `/blog/my-blog-post`

## Future: Supabase Integration

If you want to migrate to Supabase for a more dynamic CMS experience:

1. Create a `posts` table in Supabase with columns matching the BlogPost interface
2. Update `lib/blog.ts` to fetch from Supabase instead of file system
3. Consider using Supabase Storage for images

## Future: Strapi Integration

For a full headless CMS experience with Strapi:

1. Set up a Strapi instance
2. Create a Blog Post content type
3. Update `lib/blog.ts` to fetch from Strapi API
4. Use Strapi's media library for images

