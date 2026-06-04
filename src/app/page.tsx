import { HeroSection, AdsSection, FeaturedProducts, ProductCategory, BlogSection, FaqSection } from "@/components/Home";

export default function Home() {
  return (
    <div className="w-full bg-black">
      <HeroSection />
      <AdsSection />
      <FeaturedProducts />
      <ProductCategory />
      <BlogSection />
      <FaqSection />
    </div>
  );
}

