import { defineConfig, passthroughImageService } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  image: {
    domains: ["a-us.storyblok.com"],
    service: passthroughImageService(),
  },
  adapter: cloudflare({ mode: "directory" }),
});
