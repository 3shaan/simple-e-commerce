import HeroSlider from "@/components/HomePage/HeroPage/HeroSlider";
import PopulerProducts from "@/components/HomePage/Products/PopulerProducts";
import ProductsBanner from "@/components/HomePage/ProductsBanner/ProductsBanner";
export default function Home() {
  return (
    <div>
      <HeroSlider />
      {/* <ProductCategory /> */}
      <PopulerProducts />
      <ProductsBanner />
      {/* <ServicePage />
      // {/* <DealProducts /> */}
    </div>
  );
}
