import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://stateof.greensoftware.foundation',
  integrations: [react(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), mdx(), sitemap()]
});