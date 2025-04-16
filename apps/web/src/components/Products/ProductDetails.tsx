"use client";

import { Eye, Heart, Minus, Plus, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";

const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedSize, setSelectedSize] = useState("50kg");

  const productImages = [
    "assets/img/product/9.jpg",
    "assets/img/product/10.jpg",
    "assets/img/product/11.jpg",
    "assets/img/product/12.jpg",
    "assets/img/product/13.jpg",
    "assets/img/product/14.jpg",
    "assets/img/product/15.jpg",
    "assets/img/product/16.jpg",
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className="section-product pt-24 lg:pt-[100px]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1140px] xl:max-w-[1320px] 2xl:max-w-[1500px]">
        <div
          className="flex flex-wrap w-full mb-[-24px]"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="600"
        >
          <div className="w-full md:w-1/2 lg:w-5/12 xl:w-1/3 px-3 mb-6">
            <div className="vehicle-detail-banner banner-content clearfix h-full">
              <div className="banner-slider sticky top-[30px]">
                <div className="slider slider-for mb-[15px]">
                  {productImages.map((img, index) => (
                    <div
                      key={index}
                      className={`slider-banner-image ${
                        activeSlide === index ? "block" : "hidden"
                      }`}
                    >
                      <div className="zoom-image-hover h-full flex items-center text-center border border-solid border-[#e9e9e9] bg-[#f7f7f8] rounded-[5px] cursor-pointer">
                        <img
                          src={img}
                          alt={`product-tab-${index + 1}`}
                          className="product-image w-full block m-auto"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="slider slider-nav thumb-image mx-[-6px] flex flex-wrap">
                  {productImages.map((img, index) => (
                    <div
                      key={index}
                      className="thumbnail-image cursor-pointer"
                      onClick={() => handleSlideChange(index)}
                    >
                      <div
                        className={`thumbImg mx-[6px] border border-solid ${
                          activeSlide === index
                            ? "border-[#64b496]"
                            : "border-[#e9e9e9]"
                        } rounded-[5px] flex justify-center items-center`}
                      >
                        <img
                          src={img}
                          alt={`product-tab-${index + 1}`}
                          className="w-full p-[2px] rounded-[5px]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-7/12 xl:w-2/3 px-3 mb-6">
            <div className="cr-size-and-weight-contain border-b border-solid border-[#e9e9e9] pb-5 md:mt-0 mt-6">
              <h2 className="heading mb-4 block text-[#2b2b2d] text-lg md:text-xl lg:text-2xl leading-normal font-medium">
                Better Munch - Sweet Crunchy Nut Mix - Roasted Almonds, Dried
                Dates and Coconuts.
              </h2>
              <p className="mb-0 text-sm font-normal text-[#7a7a7a] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus sequi unde libero ea odio aperiam ex alias quod?
                Tempora, magnam? Reprehenderit incidunt repudiandae officia eius
                a ullam. Recusandae quia aliquid ratione est quis voluptatibus
                magni porro a. Necessitatibus, tenetur ducimus.
              </p>
            </div>
            <div className="cr-size-and-weight pt-5">
              <div className="cr-review-star flex">
                <div className="cr-star mr-[10px] flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="text-[16px] text-[#f5885f] fill-[#f5885f]"
                    />
                  ))}
                </div>
                <p className="mb-0 text-[15px] text-[#7a7a7a] leading-relaxed xs:hidden">
                  ( 75 Review )
                </p>
              </div>
              <div className="list">
                <ul className="mt-4 p-0 mb-4">
                  {[
                    { label: "Brand", value: "ESTA BETTERU CO" },
                    { label: "Flavour", value: "Super Saver Pack" },
                    { label: "Diet Type", value: "Vegetarian" },
                    { label: "Weight", value: "200 Grams" },
                    { label: "Speciality", value: "Gluten Free, Sugar Free" },
                    { label: "Info", value: "Egg Free, Allergen-Free" },
                    { label: "Items", value: "1" },
                  ].map((item, index) => (
                    <li key={index} className="py-[5px] text-[#777] flex">
                      <label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">
                        {item.label} <span>:</span>
                      </label>
                      {item.value}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cr-product-price pt-5">
                <span className="new-price font-normal text-xl md:text-2xl font-semibold leading-tight text-[#64b496]">
                  $120.25
                </span>
                <span className="old-price font-normal text-base line-through leading-normal text-[#7a7a7a] ml-2">
                  $123.25
                </span>
              </div>
              <div className="cr-size-weight flex items-center pt-5 xs:flex-col xs:justify-start xs:items-start">
                <h5 className="mb-0 font-normal text-base leading-normal text-[#2b2b2d] font-medium lg:min-w-[100px] lg:text-sm">
                  <span>Size</span>/<span>Weight</span> :
                </h5>
                <div className="cr-kg pl-[10px] xs:pl-0 xs:pt-[10px]">
                  <ul className="w-full p-0 m-0 flex flex-wrap">
                    {["50kg", "80kg", "120kg", "200kg"].map((size) => (
                      <li
                        key={size}
                        className={`transition-all duration-300 ease-in-out m-[2px] py-[5px] px-[10px] font-normal text-xs leading-none bg-white text-[#777] border border-solid 
                        ${
                          selectedSize === size
                            ? "border-[#64b496] bg-[#64b496] text-white"
                            : "border-[#e9e9e9]"
                        } rounded-[5px] cursor-pointer lg:mr-[5px]`}
                        onClick={() => handleSizeSelect(size)}
                      >
                        {size}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="cr-add-card flex pt-5">
                <div className="cr-qty-main h-full flex relative">
                  <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="quantity h-10 w-10 mr-[5px] text-center border border-solid border-[#e9e9e9] rounded-[5px]"
                  />
                  <button
                    type="button"
                    className="plus w-[18px] h-[18px] p-0 bg-white border border-solid border-[#e9e9e9] rounded-[5px] leading-none flex items-center justify-center"
                    onClick={handleIncreaseQuantity}
                  >
                    <Plus size={12} />
                  </button>
                  <button
                    type="button"
                    className="minus w-[18px] h-[18px] p-0 bg-white border border-solid border-[#e9e9e9] rounded-[5px] leading-none absolute bottom-0 right-0 flex items-center justify-center"
                    onClick={handleDecreaseQuantity}
                  >
                    <Minus size={12} />
                  </button>
                </div>
                <div className="cr-add-button ml-4 xs:hidden">
                  <button
                    type="button"
                    className="cr-button cr-shopping-bag h-10 font-bold transition-all duration-300 ease-in-out py-2 px-5 lg:px-4 text-sm font-normal capitalize leading-tight bg-[#64b496] text-white border border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-black hover:border-black"
                  >
                    <ShoppingBag className="mr-2" size={16} />
                    Add to cart
                  </button>
                </div>
                <div className="cr-card-icon flex ml-4">
                  <button className="wishlist m-0 p-0 bg-transparent">
                    <Heart className="transition-all duration-300 ease-in-out h-10 w-10 mr-[10px] flex items-center justify-center text-lg bg-white border border-solid border-[#e9e9e9] rounded-[5px] p-2 hover:bg-[#64b496] hover:text-white" />
                  </button>
                  <button className="model-oraganic-product m-0 p-0 bg-transparent cr-modal-toggle cursor-pointer">
                    <Eye className="transition-all duration-300 ease-in-out h-10 w-10 mr-[10px] flex items-center justify-center text-lg bg-white border border-solid border-[#e9e9e9] rounded-[5px] p-2 hover:bg-[#64b496] hover:text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-wrap w-full"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="600"
        >
          <div className="w-full px-3">
            <div className="cr-paking-delivery mt-10 p-6 bg-white border border-solid border-[#e9e9e9] rounded-[5px]">
              <ul
                className="nav nav-tabs border-b border-solid border-[#dee2e6] flex flex-wrap justify-left"
                id="mydeliveryTab"
              >
                {[
                  { id: "description", title: "Description" },
                  { id: "additional", title: "Information" },
                  { id: "review", title: "Review" },
                ].map((tab) => (
                  <li
                    key={tab.id}
                    className={`nav-item transition-all duration-300 ease-in-out mr-[30px] relative ${
                      activeTab === tab.id ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    <a
                      href={`#${tab.id}`}
                      className="mb-6 sm:mb-4 flex font-normal text-base sm:text-lg font-semibold leading-normal tracking-normal text-[#2b2b2d] text-left"
                      onClick={(e) => e.preventDefault()}
                    >
                      {tab.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="tab-content" id="myTabContent">
                {/* Description Tab */}
                <div
                  className={`tab-delivery-pane ${
                    activeTab === "description" ? "block" : "hidden"
                  }`}
                  id="description"
                >
                  <div className="cr-tab-content">
                    <div className="cr-description pt-[30px]">
                      <p className="text-sm text-left mb-0 font-normal text-[#7a7a7a] leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error in vero sapiente odio, error dolore vero
                        temporibus consequatur, nobis veniam odit dignissimos
                        consectetur quae in perferendis doloribusdebitis
                        corporis, eaque dicta, repellat amet, illum adipisci vel
                        perferendis dolor! Quis vel consequuntur repellat
                        distinctio rem. Corrupti ratione alias odio, error
                        dolore temporibus consequatur, nobis veniam odit laborum
                        dignissimos consectetur quae vero in perferendis
                        provident quis.
                      </p>
                    </div>
                    <h4 className="heading mb-0 pt-[30px] pb-5 font-normal text-base font-medium leading-normal text-left text-[#2b2b2d] border-b border-solid border-[#e9e9e9]">
                      Packaging & Delivery
                    </h4>
                    <div className="cr-description pt-[30px]">
                      <p className="text-sm text-left mb-0 font-normal text-[#7a7a7a] leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error in vero perferendis dolor! Quis vel consequuntur
                        repellat distinctio rem. Corrupti ratione alias odio,
                        error dolore temporibus consequatur, nobis veniam odit
                        laborum dignissimos consectetur quae vero in perferendis
                        provident quis.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Information Tab */}
                <div
                  className={`tab-delivery-pane ${
                    activeTab === "additional" ? "block" : "hidden"
                  }`}
                  id="additional"
                >
                  <div className="cr-tab-content">
                    <div className="cr-description pt-[30px]">
                      <p className="text-sm text-left mb-0 font-normal text-[#7a7a7a] leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error in vero sapiente doloribus debitis corporis, eaque
                        dicta, repellat amet, illum adipisci vel perferendis
                        dolor! Quis vel consequuntur repellat distinctio rem.
                        Corrupti ratione alias odio, error dolore temporibus
                        consequatur, nobis veniam odit laborum dignissimos
                        consectetur quae vero in perferendis provident quis.
                      </p>
                    </div>
                    <div className="list">
                      <ul className="mt-[30px] mb-[-5px] p-0">
                        {[
                          { label: "Brand", value: "ESTA BETTERU CO" },
                          { label: "Flavour", value: "Super Saver Pack" },
                          { label: "Diet Type", value: "Vegetarian" },
                          { label: "Weight", value: "200 Grams" },
                          {
                            label: "Speciality",
                            value: "Gluten Free, Sugar Free",
                          },
                          { label: "Info", value: "Egg Free, Allergen-Free" },
                          { label: "Items", value: "1" },
                        ].map((item, index) => (
                          <li key={index} className="py-[5px] text-[#777] flex">
                            <label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">
                              {item.label} <span>:</span>
                            </label>
                            {item.value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Review Tab */}
                <div
                  className={`tab-delivery-pane ${
                    activeTab === "review" ? "block" : "hidden"
                  }`}
                  id="review"
                >
                  <div className="cr-tab-content-from pt-[30px]">
                    <div className="post mb-[30px]">
                      {/* Review 1 */}
                      <div className="content flex sm:flex-row flex-col">
                        <img
                          src="assets/img/review/1.jpg"
                          alt="review"
                          className="h-[50px] w-[50px] mr-6 rounded-[5px] sm:mb-0 mb-6"
                        />
                        <div className="details flex flex-col">
                          <span className="date mb-[10px] text-[13px] text-[#777]">
                            Jan 08, 2024
                          </span>
                          <span className="name mb-[10px] font-medium text-[17px]">
                            Oreo Noman
                          </span>
                        </div>
                        <div className="cr-t-review-rating ml-auto mb-5 sm:ml-auto sm:mb-5 ml-0">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className="text-[19px] text-[#f5885f] fill-[#f5885f]"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="m-0 font-normal text-sm text-[#7a7a7a] leading-relaxed sm:pl-[74px] pl-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error in vero sapiente doloribus debitis corporis, eaque
                        dicta, repellat amet, illum adipisci vel perferendis
                        dolor! quae vero in perferendis provident quis.
                      </p>

                      {/* Review 2 */}
                      <div className="content mt-[30px] flex sm:flex-row flex-col">
                        <img
                          src="assets/img/review/2.jpg"
                          alt="review"
                          className="h-[50px] w-[50px] mr-6 rounded-[5px] sm:mb-0 mb-6"
                        />
                        <div className="details flex flex-col">
                          <span className="date mb-[10px] text-[13px] text-[#777]">
                            Mar 22, 2024
                          </span>
                          <span className="name mb-[10px] font-medium text-[17px]">
                            Lina Wilson
                          </span>
                        </div>
                        <div className="cr-t-review-rating ml-auto mb-5 sm:ml-auto sm:mb-5 ml-0">
                          <div className="flex">
                            {[1, 2, 3, 4].map((star) => (
                              <Star
                                key={star}
                                className="text-[19px] text-[#f5885f] fill-[#f5885f]"
                              />
                            ))}
                            <Star className="text-[19px] text-[#f5885f]" />
                          </div>
                        </div>
                      </div>
                      <p className="m-0 font-normal text-sm text-[#7a7a7a] leading-relaxed sm:pl-[74px] pl-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error in vero sapiente doloribus debitis corporis, eaque
                        dicta, repellat amet, illum adipisci vel perferendis
                        dolor! quae vero in perferendis provident quis.
                      </p>
                    </div>

                    {/* Add Review Form */}
                    <h4 className="heading font-normal text-base font-medium leading-normal text-[#2b2b2d] pb-[10px] mb-2">
                      Add a Review
                    </h4>
                    <form action="javascript:void(0)">
                      <div className="cr-ratting-star flex">
                        <span className="font-normal text-sm text-[#7a7a7a] leading-relaxed mr-[10px]">
                          Your rating :
                        </span>
                        <div className="cr-t-review-rating mb-5">
                          <div className="flex">
                            {[1, 2].map((star) => (
                              <Star
                                key={star}
                                className="text-[19px] text-[#f5885f] fill-[#f5885f]"
                              />
                            ))}
                            {[3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className="text-[19px] text-[#f5885f]"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="cr-ratting-input mb-[10px]">
                        <input
                          name="your-name"
                          placeholder="Name"
                          type="text"
                          className="w-full h-[50px] py-[5px] px-5 outline-none border border-solid border-[#e9e9e9] rounded-[5px] text-[#777] text-sm"
                        />
                      </div>
                      <div className="cr-ratting-input mb-[10px]">
                        <input
                          name="your-email"
                          placeholder="Email*"
                          type="email"
                          required
                          className="w-full h-[50px] py-[5px] px-5 outline-none border border-solid border-[#e9e9e9] rounded-[5px] text-[#777] text-sm"
                        />
                      </div>
                      <div className="cr-ratting-input form-submit">
                        <textarea
                          name="your-commemt"
                          placeholder="Enter Your Comment"
                          className="w-full h-[150px] mb-4 p-5 bg-transparent text-sm border border-solid border-[#e9e9e9] rounded-[5px] text-[#777] outline-none"
                        ></textarea>
                        <button
                          className="cr-button h-10 font-bold transition-all duration-300 ease-in-out py-2 px-5 text-sm font-normal capitalize leading-tight bg-[#64b496] text-white border border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-black hover:border-black"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
