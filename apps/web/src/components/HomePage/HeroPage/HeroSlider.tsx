"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Define types for our slider content
interface SlideContent {
  tagline: string;
  taglineHighlight: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

// Data array containing slider content
const sliderData: SlideContent[] = [
  {
    tagline: "Organic Vegetables",
    taglineHighlight: "100%",
    title: "The best way to stuff your wallet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.",
    image: "/assets/img/banner/banner.jpg",
    buttonText: "shop now",
    buttonLink: "shop-left-sidebar.html",
  },
  {
    tagline: "Organic Fruits",
    taglineHighlight: "100%",
    title: "Explore fresh & juicy fruits.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.",
    image: "/assets/img/banner/banner-2.jpg",
    buttonText: "shop now",
    buttonLink: "shop-left-sidebar.html",
  },
];

const HeroSlider = () => {
  return (
    <section className="section-hero next pb-[100px] max-[1199px]:pb-[70px]">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        watchSlidesProgress={true}
        className="cr-slider"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`cr-hero-banner cr-banner-image-${
                index === 0 ? "two" : "one"
              } w-full
                bg-no-repeat bg-cover bg-center h-[80vh] max-[1199px]:h-[600px] max-[767px]:h-[500px] max-[480px]:h-[400px] max-[360px]:h-[350px] relative z-[1]
              `}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="flex hero-container flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                <div className="flex flex-wrap w-full">
                  <div className="w-full px-[12px]">
                    <div className="cr-left-side-contain max-w-[550px] h-[80vh] flex flex-col justify-center max-[1199px]:max-w-[400px] max-[1199px]:h-[600px] max-[767px]:max-w-[290px] max-[767px]:h-[500px] max-[480px]:max-w-[250px] max-[480px]:h-[400px] max-[360px]:max-w-[210px] max-[360px]:h-[350px] slider-animation">
                      <h5 className="mb-[20px] text-[20px] font-Poppins font-bold leading-[1.2] max-[991px]:mb-[15px] max-[767px]:text-[14px] max-[767px]:font-normal">
                        <span className="mr-[5px] text-[#64b496] border-b-[2px] border-solid border-[#64b496] font-bold">
                          {slide.taglineHighlight}
                        </span>{" "}
                        {slide.tagline}
                      </h5>
                      <h1 className="mb-[25px] text-[55px] font-Manrope font-extrabold leading-[68px] text-[#000] relative max-[1399px]:text-[48px] max-[1399px]:leading-[56px] max-[1199px]:text-[40px] max-[1199px]:leading-[46px] max-[991px]:text-[28px] max-[991px]:leading-[36px] max-[991px]:mb-[20px] max-[767px]:text-[24px] max-[480px]:mb-[0] max-[360px]:text-[20px] max-[360px]:leading-[26px] max-[320px]:text-[22px] max-[320px]:leading-[24px] max-[320px]:mb-[10px]">
                        {slide.title}
                      </h1>
                      <p className="mb-[0] text-[15px] font-Poppins text-[#7a7a7a] leading-[1.75] max-[767px]:text-[14px] max-[480px]:hidden">
                        {slide.description}
                      </p>
                      <div className="cr-last-buttons mt-[30px] flex max-[991px]:mt-[18px]">
                        <a
                          href={slide.buttonLink}
                          className="cr-button mr-[20px] h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]"
                        >
                          {slide.buttonText}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
