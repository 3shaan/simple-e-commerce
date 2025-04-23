import BreadCrumb from "@/components/BreadCrumb";
import ProductDetail from "@/components/Products/ProductDetails";
import productsData from "@/data/productData";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ product_id: string }>;
}) {
  const { product_id } = await params;
  console.log(product_id);
  const product = productsData.find((product) => product.id === +product_id);
  console.log(product);
  return (
    <div>
      <BreadCrumb />
      <div className="container mx-auto">
        <ProductDetail product={product} />
      </div>
    </div>
  );
}
