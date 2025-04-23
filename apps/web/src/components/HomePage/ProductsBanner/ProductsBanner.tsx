"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Autoplay, FreeMode } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

interface BannerItem {
  id: number;
  image: string;
  title: string;
  discountPercentage: number;
  link: string;
}

const bannerData: BannerItem[] = [
  {
    id: 1,
    image: "/assets/img/product-banner/1.jpg",
    title: "Healthy\nBakery Products",
    discountPercentage: 30,
    link: "shop-left-sidebar.html",
  },
  {
    id: 2,
    image: "/assets/img/product-banner/2.jpg",
    title: "Fresh\nSnacks & Sweets",
    discountPercentage: 20,
    link: "shop-left-sidebar.html",
  },
  {
    id: 3,
    image: "/assets/img/product-banner/3.jpg",
    title: "Fresh & healthy\nOrganic Fruits",
    discountPercentage: 35,
    link: "shop-left-sidebar.html",
  },
  {
    id: 4,
    image: "/assets/img/product-banner/4.jpg",
    title: "Fresh & healthy\nOrganic Fruits",
    discountPercentage: 35,
    link: "shop-left-sidebar.html",
  },
];

const ProductsBanner = () => {
  return (
    <div>
      <section className="section-product-banner pb-[100px] max-[1199px]:pb-[70px] relative">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-[12px]">
              <Swiper
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, FreeMode]}
                className="cr-banner-slider"
              >
                {bannerData.map((banner) => (
                  <SwiperSlide
                    key={banner.id}
                    // data-aos="fade-up"
                    // data-aos-duration={2000}
                  >
                    <div className="cr-product-banner-image relative">
                      <Image
                        src={banner.image}
                        alt="product-banner"
                        className="w-full rounded-[5px]"
                        width={100}
                        height={100}
                      />
                      <div className="cr-product-banner-contain p-[24px] absolute top-[0] left-[0] right-[0] text-left h-full flex flex-col items-baseline justify-center">
                        <h5 className="mb-[15px] font-Manrope text-[20px] font-bold leading-[1.2] capitalize text-[#2b2b2d] max-[1399px]:text-[18px] max-[991px]:text-[16px] max-[767px]:text-[20px] max-[520px]:text-[18px] max-[360px]:mb-[8px] max-[360px]:text-[16px]">
                          {banner.title.length > 20
                            ? banner.title.split("\n").map((line, index) => (
                                <React.Fragment key={index}>
                                  {line}
                                  {index <
                                    banner.title.split("\n").length - 1 && (
                                    <br />
                                  )}
                                </React.Fragment>
                              ))
                            : banner.title}
                        </h5>
                        <p className="pb-[15px] font-Poppins text-[14px] leading-[1.2] text-[#777] max-[360px]:pb-[10px]">
                          <span className="percent mr-[5px] text-[20px] font-bold text-[#64b496]">
                            {banner.discountPercentage}%
                          </span>{" "}
                          Off{" "}
                          <span className="text text-[14px] leading-[1.2] text-[#777] max-[991px]:hidden">
                            on first order
                          </span>
                        </p>
                        <div className="cr-product-banner-buttons">
                          <Link
                            href={banner.link}
                            className="cr-button h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000] max-[991px]:h-[32px] max-[991px]:py-[8px] max-[991px]:px-[10px]"
                          >
                            shop now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsBanner;
