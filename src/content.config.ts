import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  // Function form: Astro passes in `image()`, which resolves a frontmatter
  // path through the asset pipeline instead of leaving it a bare string.
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
    }),
});

export const collections = { blog };
