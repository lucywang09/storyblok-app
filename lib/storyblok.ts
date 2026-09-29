import ProductDrop from "@/components/ProductDrop";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  components: {
    k75_content: ProductDrop,
  },
  apiOptions: {
    region: "eu",
  },
});