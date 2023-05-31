import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import rehypeExternalLinks from "rehype-external-links"
import mdx from "@astrojs/mdx";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://stateof.greensoftware.foundation',
  markdown:{
    rehypePlugins: [
      [rehypeExternalLinks, {
        target: '_blank',
        rel: ['noopener', 'noreferrer']
      }],
    ]
  },
  integrations: [react(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), mdx(), sitemap()]
});