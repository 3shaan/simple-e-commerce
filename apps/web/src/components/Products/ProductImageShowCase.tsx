"use client";
import Image from "next/image";
import { useState } from "react";
import ImageZoom from "./ImageZoom";
// Import Swiper components and styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductImageShowCase = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const productImages = [
    {
      id: 1,
      image: "/assets/img/product/9.jpg",
    },
    {
      id: 2,
      image: "/assets/img/product/10.jpg",
    },
    {
      id: 3,
      image: "/assets/img/product/11.jpg",
    },
    {
      id: 4,
      image: "/assets/img/product/12.jpg",
    },
    {
      id: 5,
      image: "/assets/img/product/13.jpg",
    },
    {
      id: 6,
      image: "/assets/img/product/14.jpg",
    },
  ];

  return (
    <div className="w-full md:w-1/2 lg:w-5/12 xl:w-1/3 px-3 mb-6">
      <div className="h-full">
        <div className="sticky top-[30px]">
          <div className="mb-[15px]">
            <Swiper
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="product-images-slider"
            >
              {productImages.map((img) => (
                <SwiperSlide key={img.id}>
                  <div className="flex items-center text-center border border-solid border-[#e9e9e9] bg-[#f7f7f8] rounded-[5px]">
                    <ImageZoom
                      src={img.image}
                      alt={`product-${img.id}`}
                      className="product-image w-full block m-auto"
                      width={1000}
                      height={1000}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="thumb-images-slider"
          >
            {productImages.map((img) => (
              <SwiperSlide key={img.id}>
                <div className="cursor-pointer">
                  <div className="thumbImg border border-solid border-[#e9e9e9] rounded-[5px] flex justify-center items-center">
                    <Image
                      src={img.image}
                      alt={`product-thumb-${img.id}`}
                      className="w-full p-[2px] rounded-[5px]"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductImageShowCase;
