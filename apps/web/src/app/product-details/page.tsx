import BreadCrumb from "@web/src/components/BreadCrumb";
import ProductDetail from "@web/src/components/Products/ProductDetails";

export default async function ProductDetailsPage() {
  return (
    <div>
      <BreadCrumb />
      <ProductDetail />
      {/* <ProductDetails1 /> */}
    </div>
  );
}
