import { storyblokEditable } from "@storyblok/react/rsc";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import ProductDetails from "@/components/ProductDetails";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function ProductDrop({ blok }: { blok: any }) {
  return (
    <main
      className="min-h-screen bg-neutral-950"
      {...storyblokEditable(blok)}
    >
      <Navbar />

      <Hero
        availability={blok.availability_status}
        launchMessage={blok.launch_text}
        ctaText={blok.cta_text}
      />

      <FeatureGrid />
      <ProductDetails />
      <FAQ />

      <FinalCTA
        launchMessage={blok.launch_text}
        ctaText={blok.cta_text}
      />

      <Footer />
    </main>
  );
}