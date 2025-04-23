import BreadCrumb from "@/components/BreadCrumb";
import ProductDetail from "@/components/Products/ProductDetails";

export default async function ProductDetailsPage() {
  return (
    <div>
      <BreadCrumb />
      <div className="container mx-auto">
        <ProductDetail product={undefined} />
      </div>
      {/* <ProductDetails1 /> */}
    </div>
  );
}
