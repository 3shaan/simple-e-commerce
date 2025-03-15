import Footer from "../components/Footer/Footer";
import Header from "../components/Headers/Header";
import ProductCategory from "../components/HomePage/Category/ProductCategory";
import HeroSlider from "../components/HomePage/HeroPage/HeroSlider";
import DealProducts from "../components/HomePage/Products/DealProducts";
import PopulerProducts from "../components/HomePage/Products/PopulerProducts";
import ProductsBanner from "../components/HomePage/ProductsBanner/ProductsBanner";
import ServicePage from "../components/HomePage/ServicePage/ServicePage";
export default function Home() {
  return (
    <div>
      <Header />
      {/* <MobileHeader /> */}
      <HeroSlider />
      <ProductCategory />
      <PopulerProducts />
      <ProductsBanner />
      <ServicePage />
      <DealProducts />
      <Footer />
    </div>
  );
}
