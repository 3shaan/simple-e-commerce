import ImageZoom from "@/components/Products/ImageZoom";
import type { ProductType } from "@/data/type";
import Link from "next/link";
const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div
      className={`mix ${product.category} min-[1400px]:w-[25%] min-[1200px]:w-[33.33%] w-[50%] max-[480px]:w-full px-[12px] mb-[24px `}
    >
      <div className="cr-product-card h-full p-[12px] border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px] overflow-hidden flex-col max-[480px]:w-full">
        <div className="cr-product-image rounded-[5px] flex items-center justify-center relative">
          <div className="cr-image-inner zoom-image-hover w-full h-full flex items-center justify-center relative overflow-hidden max-[991px]:pointer-events-none">
            <ImageZoom
              src={product.image}
              alt="product-1"
              className="w-full rounded-[5px]"
              width={300}
              height={300}
              //   zoomScale={3}
            />
          </div>

          <div className="cr-side-view transition-all duration-[0.4s] ease-in-out absolute z-[20] top-[15px] right-[-40px] grid opacity-0 max-[991px]:right-[12px]">
            <button
              type="button"
              className="wishlist h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]"
            >
              <i className="ri-heart-line text-[18px] leading-[10px]" />
            </button>
            <button
              type="button"
              className="model-oraganic-product h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%] mt-[5px] cursor-pointer cr-modal-toggle"
            >
              <i className="ri-eye-line text-[18px] leading-[10px]" />
            </button>
          </div>
          <button
            type="button"
            className="cr-shopping-bag h-[35px] w-[35px] absolute bottom-[-16px] flex items-center justify-center m-0 p-0 bg-[#f7f7f8] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]"
          >
            <i className="ri-shopping-bag-line text-[#64b496]" />
          </button>
        </div>
        <div className="cr-product-details pt-[24px] text-center overflow-hidden max-[1199px]:pt-[20px]">
          <div className="cr-brand">
            <a
              href="shop-left-sidebar.html"
              className="transition-all duration-[0.3s] ease-in-out mb-[5px] text-[13px] text-[#777] flex justify-center"
            >
              {product.category}
            </a>
            <div className="cr-star mb-[12px] flex justify-center items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <i
                  key={star}
                  className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"
                />
              ))}
              {/* <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]" />
            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]" />
            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]" />
            {/* <i className="ri-star-line mx-[1px] text-[15px] text-[#f5885f]" /> */}
              <p className="mb-[0] font-Poppins ml-[5px] text-[#999] text-[11px] leading-[10px]">
                ({product.rating})
              </p>
            </div>
          </div>
          <Link
            href={`/products/${product.id}`}
            className="title transition-all duration-[0.3s] ease-in-out mb-[12px] font-Poppins text-[15px] font-medium leading-[24px] text-[#2b2b2d] hover:text-[#64b496] flex justify-center"
          >
            {product.name}
          </Link>
          <p className="cr-price font-Poppins text-[16px] text-[#7a7a7a] leading-[1.75] max-[1199px]:text-[14px]">
            <span className="new-price font-Poppins text-[16px] leading-[1.75] max-[1199px]:text-[14px] font-bold text-[#64b496]">
              ${product.price}
            </span>
            <span className="old-price font-Poppins ml-[5px] leading-[1.75] text-[13px] line-through text-[#7a7a7a] max-[1199px]:text-[12px]">
              ${product.oldPrice}
            </span>
          </p>
          <div className="cr-product-actions">
            <button
              type="button"
              className="w-full h-[35px] bg-[#64b496] text-white rounded-[5px] flex items-center justify-center cursor-pointer"
            >
              <i className="ri-shopping-bag-line mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
