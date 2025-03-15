const Footer = () => {
  return (
    <div>
      <footer className="footer pt-[100px] max-[1199px]:pt-[70px] bg-off-white bg-[#f7f7f8] relative border-t-[1px] border-solid border-[#e9e9e9]">
        <div className="footer-container flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full footer-top pb-[100px] max-[1199px]:pb-[70px]">
            <div className="min-[1200px]:w-[33.33%] min-[992px]:w-[50%] min-[576px]:w-full w-full px-[12px] cr-footer-border">
              <div className="cr-footer-logo max-w-[400px] mb-[15px] pb-[0]">
                <div className="image pb-[15px]">
                  <img
                    src="assets/img/logo/logo.png"
                    alt="logo"
                    className="logo w-[100px] block"
                  />
                  <img
                    src="assets/img/logo/dark-logo.png"
                    alt="logo"
                    className="dark-logo w-[100px] hidden"
                  />
                </div>
                <p className="font-Poppins text-[14px] text-[#7a7a7a] mb-[0] leading-[1.75]">
                  Carrot is the biggest market of grocery products. Get your
                  daily needs from our store.
                </p>
              </div>
              <div className="cr-footer">
                <h4 className="cr-sub-title cr-title-hidden relative hidden max-[991px]:block font-Manrope text-[18px] max-[991px]:text-[15px] font-bold leading-[1.3] text-[#000] mb-[15px] max-[991px]:py-[15px] max-[991px]:mb-[0] max-[991px]:border-b-[1px] max-[991px]:border-solid max-[991px]:border-[#e9e9e9]">
                  Contact us
                  <span className="cr-heading-res hidden" />
                </h4>
                <ul className="cr-footer-links max-[991px]:hidden cr-footer-dropdown max-[1199px]:max-w-[500px] max-[991px]:mt-[24px]">
                  <li className="location-icon font-Poppins mb-[12px] text-[14px] leading-[26px] text-[#777] relative mt-[24px] pl-[30px] max-[1399px]:mt-[20px] mt-[-5px] mb-[12px]">
                    51 Green St.Huntington ohaio beach ontario, NY 11746 KY
                    4783, USA.
                  </li>
                  <li className="mail-icon mb-[12px] font-Poppins text-[14px] leading-[26px] text-[#777] relative pl-[30px] max-[1399px]:mt-[20px] max-[991px]:mt-[15px]">
                    <a
                      href="javascript:void(0)"
                      className="transition-all duration-[0.3s] ease-in-out relative font-Poppins text-[14px] leading-[26px] text-[#777] hover:text-[#64b496]"
                    >
                      example@email.com
                    </a>
                  </li>
                  <li className="phone-icon font-Poppins text-[14px] leading-[26px] text-[#777] relative pl-[30px] mb-[0] max-[1399px]:mt-[20px] max-[991px]:mt-[15px]">
                    <a
                      href="javascript:void(0)"
                      className="transition-all duration-[0.3s] ease-in-out relative font-Poppins text-[14px] leading-[26px] text-[#777] hover:text-[#64b496]"
                    >
                      {" "}
                      +91 123 4567890
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="min-[1200px]:w-[16.66%] min-[992px]:w-[25%] min-[576px]:w-full w-full px-[12px] cr-footer-border">
              <div className="cr-footer">
                <h4 className="cr-sub-title font-Manrope relative text-[18px] font-bold leading-[1.3] text-[#000] mb-[15px] max-[991px]:py-[15px] max-[991px]:mb-[0] max-[991px]:text-[15px] max-[991px]:border-b-[1px] max-[991px]:border-solid max-[991px]:border-[#e9e9e9]">
                  Company
                  <span className="cr-heading-res hidden" />
                </h4>
                <ul className="cr-footer-links max-[991px]:hidden cr-footer-dropdown max-[991px]:mt-[24px]">
                  <li className="mb-[12px] font-Poppins text-[14px] leading-[26px] text-[#777] relative max-[991px]:my-[12px] max-[991px]:mt-[-5px]">
                    <a
                      href="about.html"
                      className="transition-all duration-[0.3s] ease-in-out relative font-Poppins text-[14px] leading-[26px] text-[#777] hover:text-[#64b496]"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mb-[12px] font-Poppins text-[14px] leading-[26px] text-[#777] relative max-[991px]:my-[12px]">
                    <a
                      href="track-order.html"
                      className="transition-all duration-[0.3s] ease-in-out relative font-Poppins text-[14px] leading-[26px] text-[#777] hover:text-[#64b496]"
                    >
                      Delivery Information
                    </a>
                  </li>
                  <li className="mb-[12px] font-Poppins text-[14px] leading-[26px] text-[#777] relative max-[991px]:my-[12px]">
                    <a
                      href="policy.html"
                      className="transition-all duration-[0.3s] ease-in-out relative font-Poppins text-[14px] leading-[26px] text-[#777] hover:text-[#64b496]"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-[12px] font-Poppins text-[14px] leading-[26px] text-[#777] relative max-[991px]:my-[12px]">
                    <a
                      href="terms.html"
                      className="transition-all duration-[0.3s] ease-in-out relative font-Poppins text-[14px] leading-[26px] text-[#777] hover:text-[#64b496]"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li className="mb-[12px] font-Poppins text-[14px] leading-[26px] text-[#777] relative max-[991px]:my-[12px]">
                    <a
                      href="contact-us.html"
                      className="transition-all duration-[0.3s] ease-in-out relative font-Poppins text-[14px] leading-[26px] text-[#777] hover:text-[#64b496]"
                    >
                      contact Us
                    </a>
                  </li>
                  <li className="font-Poppins text-[14px] leading-[26px] text-[#777] relative max-[991px]:mt-[12px]">
                    <a
                      href="faq.html"
                      className="transition-all duration-[0.3s] ease-in-out relative font-Poppins text-[14px] leading-[26px] text-[#777] hover:text-[#64b496]"
                    >
                      Support Center
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="min-[1200px]:w-[16.66%] min-[992px]:w-[25%] min-[576px]:w-full w-full px-[12px] cr-footer-border">
              <div className="cr-footer">
                <h4 className="cr-sub-title font-Manrope relative text-[18px] font-bold leading-[1.3] text-[#000] mb-[15px] max-[991px]:py-[15px] max-[991px]:mb-[0] max-[991px]:text-[15px] max-[991px]:border-b-[1px] max-[991px]:border-solid max-[991px]:border-[#e9e9e9]">
                  Category
                  <span className="cr-heading-res hidden" />
                </h4>
                <ul className="cr-footer-links max-[991px]:hidden cr-footer-dropdown max-[991px]:mt-[24px]">
                  <li className="mb-[12px] font-Poppins text-[14px] leading-[26px] text-[#777] relative max-[991px]:my-[12px] max-[991px]:mt-[-5px]">
                    <a
                      href="shop-left-sidebar.html"
                      className="transition-all duration-[0.3s] ease-in-out relative font-Poppins text-[14px] leading-[26px] text-[#777] hover:text-[#64b496]"
                    >
                      Dairy &amp; Bakery
                    </a>
                  </li>
                  <li className="mb-[12px] font-Poppins text-[14px] leading-[26px] text-[#777] relative max-[991px]:my-[12px]">
                    <a
                      href="shop-left-sidebar.html"
                      className="transition-all duration-[0.3s] ease-in-out relative font-Poppins text-[14px] leading-[26px] text-[#777] hover:text-[#64b496]"
                    >
                      Fruits &amp; Vegetable
                    </a>
                  </li>
                  <li className="mb-[12px] font-Poppins text-[14px] leading-[26px] text-[#777] relative max-[991px]:my-[12px]">
                    <a
                      href="shop-left-sidebar.html"
                      className="transition-all duration-[0.3s] ease-in-out relative font-Poppins text-[14px] leading-[26px] text-[#777] hover:text-[#64b496]"
                    >
                      Snack &amp; Spice
                    </a>
                  </li>
                  <li className="mb-[12px] font-Poppins text-[14px] leading-[26px] text-[#777] relative max-[991px]:my-[12px]">
                    <a
                      href="shop-left-sidebar.html"
                      className="transition-all duration-[0.3s] ease-in-out relative font-Poppins text-[14px] leading-[26px] text-[#777] hover:text-[#64b496]"
                    >
                      Juice &amp; Drinks
                    </a>
                  </li>
                  <li className="mb-[12px] font-Poppins text-[14px] leading-[26px] text-[#777] relative max-[991px]:my-[12px]">
                    <a
                      href="shop-left-sidebar.html"
                      className="transition-all duration-[0.3s] ease-in-out relative font-Poppins text-[14px] leading-[26px] text-[#777] hover:text-[#64b496]"
                    >
                      Chicken &amp; Meat
                    </a>
                  </li>
                  <li className="font-Poppins text-[14px] leading-[26px] text-[#777] relative max-[991px]:mt-[12px]">
                    <a
                      href="shop-left-sidebar.html"
                      className="transition-all duration-[0.3s] ease-in-out relative font-Poppins text-[14px] leading-[26px] text-[#777] hover:text-[#64b496]"
                    >
                      Fast Food
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="min-[1200px]:w-[33.33%] min-[992px]:w-full w-full px-[12px] cr-footer-border">
              <div className="cr-footer cr-newsletter max-[1199px]:mt-[50px] max-[1199px]:pt-[50px] max-[1199px]:border-t-[1px] max-[1199px]:border-solid max-[1199px]:border-[#e1dfdf] max-[991px]:mt-[0] max-[991px]:pt-[0] max-[991px]:border-[0]">
                <h4 className="cr-sub-title font-Manrope relative text-[18px] font-bold leading-[1.3] text-[#000] mb-[15px] max-[991px]:py-[15px] max-[991px]:mb-[0] max-[991px]:text-[15px] max-[991px]:border-b-[1px] max-[991px]:border-solid max-[991px]:border-[#e9e9e9]">
                  Subscribe Our Newsletter
                  <span className="cr-heading-res hidden" />
                </h4>
                <div className="cr-footer-links max-[991px]:hidden cr-footer-dropdown max-[1199px]:max-w-[500px] max-[991px]:mt-[24px]">
                  <form className="cr-search-footer relative">
                    <input
                      className="search-input w-full h-[44px] py-[5px] px-[15px] border-[1px] border-solid border-[#e9e9e9] outline-[0] rounded-[5px]"
                      type="text"
                      placeholder="Search here..."
                    />
                    <a
                      href="javascript:void(0)"
                      className="search-btn w-[50px] absolute right-[0] top-[0] bottom-[0] flex items-center justify-center"
                    >
                      <i className="ri-send-plane-fill text-[21px] text-[#000]" />
                    </a>
                  </form>
                </div>
                <div className="cr-social-media my-[22px] mx-[-2px] flex flex-row max-[991px]:mt-[40px] max-[991px]:mr-[0] max-[991px]:mb-[24px] max-[991px]:ml-[0] max-[991px]:flex-wrap">
                  <span className="m-[2px] font-Poppins text-[17px] font-normal leading-[1.625] text-[#000]">
                    <a
                      href="javascript:void(0)"
                      className="transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] flex items-center justify-center leading-[11px] bg-[#fff] border-[1px] border-solid border-[#e1dfdf] rounded-[5px] text-[#000] hover:text-[#64b496]"
                    >
                      <i className="ri-facebook-line" />
                    </a>
                  </span>
                  <span className="m-[2px] font-Poppins text-[17px] font-normal leading-[1.625] text-[#000]">
                    <a
                      href="javascript:void(0)"
                      className="transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] flex items-center justify-center leading-[11px] bg-[#fff] border-[1px] border-solid border-[#e1dfdf] rounded-[5px] text-[#000] hover:text-[#64b496]"
                    >
                      <i className="ri-twitter-x-line" />
                    </a>
                  </span>
                  <span className="m-[2px] font-Poppins text-[17px] font-normal leading-[1.625] text-[#000]">
                    <a
                      href="javascript:void(0)"
                      className="transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] flex items-center justify-center leading-[11px] bg-[#fff] border-[1px] border-solid border-[#e1dfdf] rounded-[5px] text-[#000] hover:text-[#64b496]"
                    >
                      <i className="ri-dribbble-line" />
                    </a>
                  </span>
                  <span className="m-[2px] font-Poppins text-[17px] font-normal leading-[1.625] text-[#000]">
                    <a
                      href="javascript:void(0)"
                      className="transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] flex items-center justify-center leading-[11px] bg-[#fff] border-[1px] border-solid border-[#e1dfdf] rounded-[5px] text-[#000] hover:text-[#64b496]"
                    >
                      <i className="ri-instagram-line" />
                    </a>
                  </span>
                </div>
                <div className="cr-payment">
                  <div className="cr-insta-slider swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <a href="#" className="cr-payment-image relative flex">
                          <img
                            src="assets/img/insta/1.jpg"
                            alt="insta"
                            className="w-full rounded-[5px]"
                          />
                          <div className="payment-overlay transition-all duration-[0.3s] ease-in-out rounded-[5px] w-full h-full absolute top-[0] left-[0]" />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="#" className="cr-payment-image relative flex">
                          <img
                            src="assets/img/insta/2.jpg"
                            alt="insta"
                            className="w-full rounded-[5px]"
                          />
                          <div className="payment-overlay transition-all duration-[0.3s] ease-in-out rounded-[5px] w-full h-full absolute top-[0] left-[0]" />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="#" className="cr-payment-image relative flex">
                          <img
                            src="assets/img/insta/3.jpg"
                            alt="insta"
                            className="w-full rounded-[5px]"
                          />
                          <div className="payment-overlay transition-all duration-[0.3s] ease-in-out rounded-[5px] w-full h-full absolute top-[0] left-[0]" />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="#" className="cr-payment-image relative flex">
                          <img
                            src="assets/img/insta/4.jpg"
                            alt="insta"
                            className="w-full rounded-[5px]"
                          />
                          <div className="payment-overlay transition-all duration-[0.3s] ease-in-out rounded-[5px] w-full h-full absolute top-[0] left-[0]" />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="#" className="cr-payment-image relative flex">
                          <img
                            src="assets/img/insta/5.jpg"
                            alt="insta"
                            className="w-full rounded-[5px]"
                          />
                          <div className="payment-overlay transition-all duration-[0.3s] ease-in-out rounded-[5px] w-full h-full absolute top-[0] left-[0]" />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="#" className="cr-payment-image relative flex">
                          <img
                            src="assets/img/insta/6.jpg"
                            alt="insta"
                            className="w-full rounded-[5px]"
                          />
                          <div className="payment-overlay transition-all duration-[0.3s] ease-in-out rounded-[5px] w-full h-full absolute top-[0] left-[0]" />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="#" className="cr-payment-image relative flex">
                          <img
                            src="assets/img/insta/7.jpg"
                            alt="insta"
                            className="w-full rounded-[5px]"
                          />
                          <div className="payment-overlay transition-all duration-[0.3s] ease-in-out rounded-[5px] w-full h-full absolute top-[0] left-[0]" />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="#" className="cr-payment-image relative flex">
                          <img
                            src="assets/img/insta/8.jpg"
                            alt="insta"
                            className="w-full rounded-[5px]"
                          />
                          <div className="payment-overlay transition-all duration-[0.3s] ease-in-out rounded-[5px] w-full h-full absolute top-[0] left-[0]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cr-last-footer w-full py-[20px] border-t-[1px] border-solid border-[#e9e9e9] text-center">
            <p className="font-Poppins text-[14px] text-[#000] leading-[1.2] ">
              © <span id="copyright_year" />{" "}
              <a href="index.html" className="text-[#64b496]">
                Carrot
              </a>
              , All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
