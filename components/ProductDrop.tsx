import { storyblokEditable } from "@storyblok/react/rsc";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import ProductDetails from "@/components/ProductDetails";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function ProductDrop({ blok }: { blok: any }) {
  const k75 = blok.body?.find((b: any) => b.component === "K75 Content");

  return (
    <main
      className="min-h-screen bg-neutral-950"
      {...storyblokEditable(blok)}
    >
      <Navbar />

      <div {...(k75 ? storyblokEditable(k75) : {})}>
        <Hero
          availability={k75?.availability}
          launchMessage={k75?.launch_message}
          ctaText={k75?.cta_text}
        />
      </div>

      <FeatureGrid />
      <ProductDetails />
      <FAQ />

      <FinalCTA
        launchMessage={k75?.launch_message}
        ctaText={k75?.cta_text}
      />

      <Footer />
    </main>
  );
}