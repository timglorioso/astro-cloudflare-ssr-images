import { defineConfig, passthroughImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["a-us.storyblok.com"],
    service: passthroughImageService(),
  },
});
