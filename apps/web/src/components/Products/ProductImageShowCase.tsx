"use client";
import Image from "next/image";
import { useState } from "react";
import ImageZoom from "./ImageZoom";

const ProductImageShowCase = () => {
  const [activeSlide, setActiveSlide] = useState(2);

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

  const handleSlideChange = (id: number) => {
    setActiveSlide(id);
  };
  console.log(activeSlide);
  const activeImage = productImages.find((img) => img.id === activeSlide);
  console.log(activeImage);
  return (
    <div className="w-full md:w-1/2 lg:w-5/12 xl:w-1/3 px-3 mb-6">
      {/* <ImageZoom
        src={activeImage?.image}
        alt={`product-tab-${activeSlide}`}
        width={100}
        height={100}
      /> */}
      <div className=" h-full">
        <div className=" sticky top-[30px]">
          <div className=" mb-[15px]">
            <div className="">
              <div className="  h-full flex items-center text-center border border-solid border-[#e9e9e9] bg-[#f7f7f8] rounded-[5px] cursor-pointer">
                <ImageZoom
                  src={activeImage?.image}
                  alt={`product-tab-${activeSlide}`}
                  className="product-image w-full block m-auto"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
          <div className="slider slider-nav thumb-image mx-[-6px] flex flex-wrap">
            {productImages.map((img, index) => (
              <div
                key={img.id}
                className="thumbnail-image cursor-pointer"
                onClick={() => handleSlideChange(img.id)}
                // onKeyDown={(e) => {
                //   handleSlideChange(img.id);
                // }}
              >
                <div
                  className={`thumbImg mx-[6px] border border-solid ${
                    activeSlide === img.id
                      ? "border-[#64b496]"
                      : "border-[#e9e9e9]"
                  } rounded-[5px] flex justify-center items-center`}
                >
                  <Image
                    src={img.image}
                    alt={`product-tab-${img.id}`}
                    className="w-full p-[2px] rounded-[5px]"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageShowCase;
