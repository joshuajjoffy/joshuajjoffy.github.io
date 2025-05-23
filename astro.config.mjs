import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import AutoImport from "astro-auto-import";
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: "/",
  integrations: [
    react(),
    tailwind(),
    AutoImport({
      imports: [
        {
          "./src/components/index.tsx": [
            "Carousel",
            "Button",
            "DataHeader",
            "ImageGallery",
            "Icon",
            "Header",
            "HorizontalArticleCard",
            "VerticalArticleCard",
            "NewsletterSignUpSendInBlue",
            "LogoGrid",
            "Pill",
            "SubFooter",
            "People",
            "Footer",
            "NewsletterForm",
            "FooterNewsletterWrapper",
            "NewsletterFullWidth",
            "RepoCard",
            "GridCardIconWrapper",
            "CardsGrid",
            "Tabs",
            "Tab",
          ],
          "@fchh/fcos-suite-ui": [
            "Accordion",
            "Member",
            "YoutubeEmbed",
            "Image",
            "ActionBox",
            "Feature",
            "ImageSlider",
            "GridCard",
            "SocialMediaIcons",
          ],
        },
      ],
    }),
    mdx(),
  ],
});
