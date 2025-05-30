"use client";

import categoriesData from "@web/data/categoryData";
import productsData from "@web/data/productData";
import { useState } from "react";
import { ReactMixitup } from "react-mixitup";
import ProductCard from "./ProductCard";

const PopulerProducts = () => {
  // Convert products into keys array for mixitup
  const [keys, setKeys] = useState(() =>
    productsData.map((product) => product.id)
  );
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    // Filter products based on category
    const filteredKeys = productsData
      .filter(
        (product) => categoryId === "all" || product.category === categoryId
      )
      .map((product) => product.id);
    setKeys(filteredKeys);
  };

  const TRANSITION_DURATION = 300;

  return (
    <div>
      <section className="section-popular-product-shape relative pb-[100px] max-[1199px]:pb-[70px]">
        <div
          className="popular-product-container flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]"
          data-aos="fade-up"
          data-aos-duration={2000}
        >
          <div className="flex flex-wrap w-full">
            <div className="w-full px-[12px]">
              <div className="mb-[30px]">
                <div className="cr-banner mb-[15px] text-center">
                  <h2 className="font-Manrope text-[32px] font-bold leading-[1.2] text-[#2b2b2d] max-[1199px]:text-[28px] max-[991px]:text-[25px] max-[767px]:text-[22px]">
                    Popular Products
                  </h2>
                </div>
                <div className="cr-banner-sub-title w-full">
                  <p className="max-w-[600px] m-auto font-Poppins text-[14px] text-[#7a7a7a] leading-[22px] text-center max-[1199px]:w-[80%] max-[991px]:w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore lacus vel facilisis.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="product-content flex flex-wrap w-full mb-[-24px]"
            id="MixItUpDA2FB7"
          >
            <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] w-full mb-[24px]">
              <div className="flex flex-wrap w-full mb-[-24px] sticky top-[0]">
                <div className="min-[992px]:w-full w-[50%] max-[480px]:w-full px-[12px] mb-[24px]">
                  <div className="cr-product-tabs">
                    <ul>
                      {categoriesData.map((category) => (
                        <li
                          key={category.id}
                          className={`py-[12px] px-[15px] relative bg-[#f7f7f8] font-Poppins text-[14px] font-bold leading-[1.667] text-[#2b2b2d] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] cursor-pointer max-[991px]:p-[15px] mb-[5px] max-[1399px]:mb-[3px] max-[1199px]:mb-[5px]  ${
                            category.label === "All" ? "active" : ""
                          }   filter-button `}
                        >
                          <button
                            type="button"
                            className="w-full h-full"
                            onClick={() => handleCategoryClick(category.id)}
                          >
                            {category.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="min-[992px]:w-full w-[50%] max-[480px]:w-full px-[12px] max-[480px]:hidden mb-[24px]">
                  <div className="cr-ice-cubes max-h-[500px] overflow-hidden relative rounded-[5px] max-[991px]:h-[297px]">
                    <img
                      src="assets/img/product/product-banner.jpg"
                      alt="product banner"
                      className="w-full rounded-[5px] max-[420px]:h-auto"
                    />
                    <div className="cr-ice-cubes-contain pt-[80px] pb-[20px] px-[20px] absolute top-[0] left-[0] flex flex-col flex-wrap items-baseline">
                      <h4 className="title mb-[5px] font-Manrope text-[40px] text-[#fff] font-light leading-[1.2] max-[1399px]:text-[28px] max-[1199px]:text-[22px] max-[991px]:text-[28px] max-[767px]:text-[26px] max-[575px]:text-[28px]">
                        Juicy{" "}
                      </h4>
                      <h5 className="sub-title mb-[5px] font-Manrope uppercase text-[38px] text-[#f7e8aa] font-black leading-[1.2] max-[1399px]:mb-[2px] max-[1399px]:text-[26px] max-[1199px]:mb-[0] max-[1199px]:text-[20px] max-[991px]:mb-[3px] max-[991px]:text-[24px] max-[767px]:mb-[0] max-[767px]:text-[22px] max-[575px]:mb-[2px] max-[575px]:text-[24px]">
                        Fruits
                      </h5>
                      <span className="font-Poppins text-[16px] text-[#fff] max-[1399px]:text-[14px]">
                        100% Natural
                      </span>
                      <a
                        href="shop-left-sidebar.html"
                        className="cr-button mt-[15px] h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[5px] px-[15px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-[1200px]:w-[75%] min-[992px]:w-[66.66%] w-full mb-[24px]">
              <ReactMixitup
                keys={keys}
                dynamicDirection="vertical"
                transitionDuration={TRANSITION_DURATION}
                renderCell={(key, style, ref) => {
                  const product = productsData.find((p) => p.id === key);
                  if (!product) return null;

                  return (
                    <div
                      key={key}
                      ref={ref}
                      style={{
                        transition: `transform ${TRANSITION_DURATION}ms ease`,
                        // width: "calc(25% - 24px)",
                        // margin: "12px",
                        ...style,
                      }}
                      // className="product-card-wrapper " // big screen 4 card, medium screen 3 card, small screen 2 card
                      className="min-[1400px]:w-[25%] min-[1200px]:w-[33.33%] w-[50%] max-[480px]:w-full px-[12px] mb-[24px]"
                    >
                      <ProductCard product={product} />
                    </div>
                  );
                }}
                renderWrapper={(style, ref, children) => (
                  <div
                    style={{
                      // display: "flex",
                      // flexWrap: "wrap",
                      transition: `height ${TRANSITION_DURATION}ms ease`,
                      // margin: "-12px",
                      ...style,
                    }}
                    ref={ref}
                    className="flex flex-wrap w-full"
                  >
                    {children}
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopulerProducts;
