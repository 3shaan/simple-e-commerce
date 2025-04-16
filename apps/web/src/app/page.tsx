import HeroSlider from "../components/HomePage/HeroPage/HeroSlider";
import DealProducts from "../components/HomePage/Products/DealProducts";
import PopulerProducts from "../components/HomePage/Products/PopulerProducts";
import ProductsBanner from "../components/HomePage/ProductsBanner/ProductsBanner";
import ServicePage from "../components/HomePage/ServicePage/ServicePage";
export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      {/* <MobileHeader /> */}
      <HeroSlider />
      {/* <ProductCategory /> */}
      <PopulerProducts />
      <ProductsBanner />
      <ServicePage />
      <DealProducts />
      {/* <Footer /> */}
      {/* <ExternalScript /> */}
    </div>
  );
}
