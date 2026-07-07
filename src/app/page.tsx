import { HeroSection, AdsSection, FeaturedProducts, ProductCategory, BlogSection, FaqSection } from "@/components/Home";
import { getHeroBanners } from "@/app/actions/hero.action";
import { getFaqs } from "@/app/actions/faq.action";
import { getBestProducts } from "@/app/actions/product.action";
import { getPromoCards } from "@/app/actions/promo.action";

export const revalidate = 60; // Refresh data setiap 60 detik jika ada perubahan di database langsung

export default async function Home() {
  const banners = await getHeroBanners();
  const faqs = await getFaqs();
  const bestProducts = await getBestProducts();
  const promoCards = await getPromoCards();

  return (
    <div className="w-full bg-black">
      <HeroSection banners={banners} />
      <AdsSection cards={promoCards} />
      <FeaturedProducts products={bestProducts} />
      <ProductCategory />
      <BlogSection />
      <FaqSection faqs={faqs} />
    </div>
  );
}

