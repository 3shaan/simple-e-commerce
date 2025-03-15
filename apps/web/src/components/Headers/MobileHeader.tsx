const MobileHeader = () => {
  return (
    <div>
      <>
        <div className="cr-sidebar-overlay w-full h-screen hidden fixed top-[0] left-[0] bg-[#000000b3] z-[21]" />
        <div
          id="cr_mobile_menu"
          className="cr-side-cart cr-mobile-menu transition-all duration-[0.5s] ease h-full p-[15px] fixed top-[0] bg-[#fff] z-[22] overflow-auto w-[400px] left-[-400px] max-[575px]:w-[300px] max-[575px]:left-[-300px] max-[420px]:w-[250px] max-[420px]:left-[-250px]"
        >
          <div className="cr-menu-title w-full mb-[10px] pb-[10px] flex flex-wrap justify-between border-b-[2px] border-solid border-[#e9e9e9]">
            <span className="menu-title text-[18px] font-semibold text-[#64b496]">
              My Menu
            </span>
            <button
              type="button"
              className="cr-close relative border-[0] text-[30px] leading-[1] text-[#999] bg-[#fff]"
            >
              ×
            </button>
          </div>
          <div className="cr-menu-inner">
            <div className="cr-menu-content">
              <ul>
                <li className="dropdown drop-list relative leading-[28px]">
                  <span className="menu-toggle h-[48px] absolute top-[0] right-[0] z-[-1] flex justify-center items-center cursor-pointer bg-transparent" />
                  <a
                    href="javascript:void(0)"
                    className="dropdown-list py-[12px] block capitalize text-[15px] font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                  >
                    Home
                  </a>
                  <ul className="sub-menu w-full mb-[0] p-[0] hidden min-w-auto opacity-[1]">
                    <li className="relative leading-[28px]">
                      <a
                        href="index.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        Grocery
                      </a>
                    </li>
                    <li className="relative leading-[28px]">
                      <a
                        href="demo-2.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        Fashion
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown drop-list relative leading-[28px]">
                  <span className="menu-toggle h-[48px] absolute top-[0] right-[0] z-[-1] flex justify-center items-center cursor-pointer bg-transparent" />
                  <a
                    href="javascript:void(0)"
                    className="dropdown-list py-[12px] block capitalize text-[15px] font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                  >
                    Category
                  </a>
                  <ul className="sub-menu w-full mb-[0] p-[0] hidden min-w-auto opacity-[1]">
                    <li className="relative leading-[28px]">
                      <a
                        href="shop-left-sidebar.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        Shop Left sidebar
                      </a>
                    </li>
                    <li className="relative leading-[28px]">
                      <a
                        href="shop-right-sidebar.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        Shop Right sidebar
                      </a>
                    </li>
                    <li className="relative leading-[28px]">
                      <a
                        href="shop-full-width.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        Full Width
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown drop-list relative leading-[28px]">
                  <span className="menu-toggle h-[48px] absolute top-[0] right-[0] z-[-1] flex justify-center items-center cursor-pointer bg-transparent" />
                  <a
                    href="javascript:void(0)"
                    className="dropdown-list py-[12px] block capitalize text-[15px] font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                  >
                    product
                  </a>
                  <ul className="sub-menu w-full mb-[0] p-[0] hidden min-w-auto opacity-[1]">
                    <li className="relative leading-[28px]">
                      <a
                        href="product-left-sidebar.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        product Left sidebar
                      </a>
                    </li>
                    <li className="relative leading-[28px]">
                      <a
                        href="product-right-sidebar.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        product Right sidebar
                      </a>
                    </li>
                    <li className="relative leading-[28px]">
                      <a
                        href="product-full-width.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        Product Full Width{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown drop-list relative leading-[28px]">
                  <span className="menu-toggle h-[48px] absolute top-[0] right-[0] z-[-1] flex justify-center items-center cursor-pointer bg-transparent" />
                  <a
                    href="javascript:void(0)"
                    className="dropdown-list py-[12px] block capitalize text-[15px] font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                  >
                    Pages
                  </a>
                  <ul className="sub-menu w-full mb-[0] p-[0] hidden min-w-auto opacity-[1]">
                    <li className="relative leading-[28px]">
                      <a
                        href="about.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="relative leading-[28px]">
                      <a
                        href="contact-us.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li className="relative leading-[28px]">
                      <a
                        href="cart.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        Cart
                      </a>
                    </li>
                    <li className="relative leading-[28px]">
                      <a
                        href="checkout.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        Checkout
                      </a>
                    </li>
                    <li className="relative leading-[28px]">
                      <a
                        href="track-order.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        Track Order
                      </a>
                    </li>
                    <li className="relative leading-[28px]">
                      <a
                        href="wishlist.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        Wishlist
                      </a>
                    </li>
                    <li className="relative leading-[28px]">
                      <a
                        href="faq.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        Faq
                      </a>
                    </li>
                    <li className="relative leading-[28px]">
                      <a
                        href="login.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        Login
                      </a>
                    </li>
                    <li className="relative leading-[28px]">
                      <a
                        href="register.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        Register
                      </a>
                    </li>
                    <li className="relative leading-[28px]">
                      <a
                        href="policy.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        Policy
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown drop-list relative leading-[28px]">
                  <span className="menu-toggle h-[48px] absolute top-[0] right-[0] z-[-1] flex justify-center items-center cursor-pointer bg-transparent" />
                  <a
                    href="javascript:void(0)"
                    className="dropdown-list py-[12px] block capitalize text-[15px] font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                  >
                    Blog
                  </a>
                  <ul className="sub-menu w-full mb-[0] p-[0] hidden min-w-auto opacity-[1]">
                    <li className="relative leading-[28px]">
                      <a
                        href="blog-left-sidebar.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        Left Sidebar
                      </a>
                    </li>
                    <li className="relative leading-[28px]">
                      <a
                        href="blog-right-sidebar.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        Right Sidebar
                      </a>
                    </li>
                    <li className="relative leading-[28px]">
                      <a
                        href="blog-full-width.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        Full Width
                      </a>
                    </li>
                    <li className="relative leading-[28px]">
                      <a
                        href="blog-detail-left-sidebar.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        Detail Left Sidebar
                      </a>
                    </li>
                    <li className="relative leading-[28px]">
                      <a
                        href="blog-detail-right-sidebar.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        Detail Right Sidebar
                      </a>
                    </li>
                    <li className="relative leading-[28px]">
                      <a
                        href="blog-detail-full-width.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        Detail Full Width
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown drop-list relative leading-[28px]">
                  <span className="menu-toggle h-[48px] absolute top-[0] right-[0] z-[-1] flex justify-center items-center cursor-pointer bg-transparent" />
                  <a
                    href="javascript:void(0)"
                    className="dropdown-list py-[12px] block capitalize text-[15px] font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                  >
                    Element
                  </a>
                  <ul className="sub-menu w-full mb-[0] p-[0] hidden min-w-auto opacity-[1]">
                    <li className="relative leading-[28px]">
                      <a
                        href="elements-products.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        Products
                      </a>
                    </li>
                    <li className="relative leading-[28px]">
                      <a
                        href="elements-typography.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        Typography
                      </a>
                    </li>
                    <li className="relative leading-[28px]">
                      <a
                        href="elements-buttons.html"
                        className="transition-all duration-[0.3s] ease-in-out pl-[20px] opacity-[0.8] text-[14px] py-[12px] block capitalize font-medium text-[#444] border-b-[1px] border-solid border-[#e9e9e9]"
                      >
                        Buttons
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default MobileHeader;
