import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import ProductDetails from "@/components/ProductDetails";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { getStoryblokApi } from "@/lib/storyblok";

export default async function Home() {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get("cdn/stories/home", {
    version: "draft",
  });

  const content = data.story.content;

  return (
    <main className="min-h-screen bg-neutral-950">
      <Navbar />

      <Hero
        availability={content.availability_status}
        launchText={content.launch_text}
        ctaText={content.cta_text}
      />

      <FeatureGrid />
      <ProductDetails />
      <FAQ />

      <FinalCTA
        launchText={content.launch_text}
        ctaText={content.cta_text}
      />

      <Footer />
    </main>
  );
}