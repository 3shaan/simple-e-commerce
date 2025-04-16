const CheckoutPage = () => {
  return (
    <section className="cr-checkout-section py-24 lg:py-24">
      <div className="flex flex-wrap justify-between relative items-center mx-auto 2xl:max-w-[1500px] xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] xs:max-w-[540px]">
        <div className="flex flex-wrap w-full mb-[-24px]">
          {/* Right Side - Summary and Payment */}
          <div className="cr-checkout-rightside lg:w-1/3 md:w-full w-full px-3 mb-6">
            {/* Summary Section */}
            <div className="cr-sidebar-wrap border border-solid border-[#e9e9e9] mb-8 p-4 bg-white rounded-md">
              <div className="cr-sidebar-block">
                <div className="cr-sb-title">
                  <h3 className="cr-sidebar-title text-xl font-semibold tracking-[0] mb-0 relative text-black leading-tight">
                    Summary
                  </h3>
                </div>
                <div className="cr-sb-block-content mb-0 mt-4">
                  <div className="cr-checkout-summary">
                    <div className="flex justify-between items-center mb-2.5">
                      <span className="text-left text-[#7a7a7a] text-sm leading-6 tracking-[0]">
                        Sub-Total
                      </span>
                      <span className="text-right text-black text-sm leading-6 font-medium">
                        $80.00
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2.5">
                      <span className="text-left text-[#7a7a7a] text-sm leading-6 tracking-[0]">
                        Delivery Charges
                      </span>
                      <span className="text-right text-black text-sm leading-6 font-medium">
                        $80.00
                      </span>
                    </div>
                    <div className="cr-checkout-summary-total flex justify-between items-center mb-0 border-t border-solid border-[#e9e9e9] pt-5 mt-4">
                      <span className="text-left font-medium text-base font-semibold text-[#2b2b2d] leading-6 tracking-[0]">
                        Total Amount
                      </span>
                      <span className="text-right font-medium text-base font-semibold text-[#2b2b2d] leading-6 tracking-[0]">
                        $80.00
                      </span>
                    </div>
                  </div>

                  {/* Product Display */}
                  <div className="cr-checkout-pro mt-8">
                    <div className="w-full mb-4">
                      <div className="cr-product-inner flex flex-row items-center">
                        <div className="cr-pro-image-outer w-20 mr-4">
                          <div className="cr-pro-image overflow-hidden">
                            <a
                              href="product-left-sidebar.html"
                              className="image"
                            >
                              <img
                                className="main-image w-full"
                                src="assets/img/product/10.jpg"
                                alt="Product"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="cr-pro-content cr-product-details justify-start w-[calc(100%-143px)] p-0 flex flex-col border-0">
                          <h5 className="cr-pro-title text-left mb-2 pr-4 text-sm leading-tight lg:mb-0">
                            <a
                              href="product-left-sidebar.html"
                              className="text-sm text-black font-medium leading-tight"
                            >
                              Dates Value Pack Pouch
                            </a>
                          </h5>
                          <div className="cr-pro-rating mb-1 text-left">
                            <i className="ri-star-fill text-sm text-[#f4a263]"></i>
                            <i className="ri-star-fill text-sm text-[#f4a263]"></i>
                            <i className="ri-star-fill text-sm text-[#f4a263]"></i>
                            <i className="ri-star-fill text-sm text-[#f4a263]"></i>
                            <i className="ri-star-line text-sm text-[#f4a263]"></i>
                          </div>
                          <p className="cr-price font-medium text-base leading-normal text-[#7a7a7a] text-left lg:text-sm">
                            <span className="new-price text-[#64b496] font-bold">
                              $120.25
                            </span>
                            <span className="old-price ml-1 text-sm line-through lg:text-xs">
                              $123.25
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="cr-product-inner flex flex-row items-center">
                        <div className="cr-pro-image-outer w-20 mr-4">
                          <div className="cr-pro-image overflow-hidden">
                            <a
                              href="product-left-sidebar.html"
                              className="image"
                            >
                              <img
                                className="main-image w-full"
                                src="assets/img/product/12.jpg"
                                alt="Product"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="cr-pro-content cr-product-details justify-start w-[calc(100%-143px)] p-0 flex flex-col border-0">
                          <h5 className="cr-pro-title text-left mb-2 pr-4 text-sm leading-tight lg:mb-0">
                            <a
                              href="product-left-sidebar.html"
                              className="text-sm text-black font-medium leading-tight"
                            >
                              Smoked Honey Spiced Nuts
                            </a>
                          </h5>
                          <div className="cr-pro-rating mb-1 text-left">
                            <i className="ri-star-fill text-sm text-[#f4a263]"></i>
                            <i className="ri-star-fill text-sm text-[#f4a263]"></i>
                            <i className="ri-star-fill text-sm text-[#f4a263]"></i>
                            <i className="ri-star-fill text-sm text-[#f4a263]"></i>
                            <i className="ri-star-line text-sm text-[#f4a263]"></i>
                          </div>
                          <p className="cr-price font-medium text-base leading-normal text-[#7a7a7a] text-left lg:text-sm">
                            <span className="new-price text-[#64b496] font-bold">
                              $120.25
                            </span>
                            <span className="old-price ml-1 text-sm line-through lg:text-xs">
                              $123.25
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Method Section */}
            <div className="cr-sidebar-wrap cr-checkout-del-wrap border border-solid border-[#e9e9e9] mb-8 p-4 bg-white rounded-md">
              <div className="cr-sidebar-block">
                <div className="cr-sb-title">
                  <h3 className="cr-sidebar-title text-xl font-semibold tracking-[0] mb-0 relative text-black leading-tight">
                    Delivery Method
                  </h3>
                </div>
                <div className="cr-sb-block-content mb-0 mt-4">
                  <div className="cr-checkout-del">
                    <div className="cr-del-desc text-[#7a7a7a] text-sm font-normal leading-6 mb-4 block tracking-[0]">
                      Please select the preferred shipping method to use on this
                      order.
                    </div>
                    <form action="#">
                      <span className="cr-del-option flex">
                        <span className="w-1/2">
                          <span className="cr-del-opt-head text-[#2b2b2d] text-sm font-medium tracking-[0] leading-none mb-2.5 block">
                            Free Shipping
                          </span>
                          <input
                            type="radio"
                            id="del1"
                            name="radio-group"
                            defaultChecked
                          />
                          <label
                            htmlFor="del1"
                            className="relative pl-6 cursor-pointer leading-4 text-sm inline-block text-[#7a7a7a] tracking-[0] mb-4"
                          >
                            Rate - $0.00
                          </label>
                        </span>
                        <span className="w-1/2">
                          <span className="cr-del-opt-head text-[#2b2b2d] text-sm font-medium tracking-[0] leading-none mb-2.5 block">
                            Flat Rate
                          </span>
                          <input type="radio" id="del2" name="radio-group" />
                          <label
                            htmlFor="del2"
                            className="relative pl-6 cursor-pointer leading-4 text-sm inline-block text-[#7a7a7a] tracking-[0] mb-4"
                          >
                            Rate - $5.00
                          </label>
                        </span>
                      </span>
                      <span className="cr-del-commemt mt-3 block">
                        <span className="cr-del-opt-head mb-2 text-[#2b2b2d] text-sm font-medium tracking-[0] leading-none block">
                          Add Comments About Your Order
                        </span>
                        <textarea
                          name="your-commemt"
                          placeholder="Comments"
                          className="bg-transparent border border-solid border-[#e9e9e9] text-[#2b2b2d] h-24 py-2.5 px-4 mb-0 w-full outline-0 text-sm block rounded-md"
                        ></textarea>
                      </span>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method Section */}
            <div className="cr-sidebar-wrap cr-checkout-pay-wrap border border-solid border-[#e9e9e9] mb-8 p-4 bg-white rounded-md">
              <div className="cr-sidebar-block">
                <div className="cr-sb-title">
                  <h3 className="cr-sidebar-title text-xl font-semibold tracking-[0] mb-0 relative text-black leading-tight">
                    Payment Method
                  </h3>
                </div>
                <div className="cr-sb-block-content mb-0 mt-4">
                  <div className="cr-checkout-pay">
                    <div className="cr-pay-desc text-[#7a7a7a] text-sm font-light leading-6 mb-4 block tracking-[0]">
                      Please select the preferred payment method to use on this
                      order.
                    </div>
                    <form action="#" className="payment-options flex flex-col">
                      <span className="cr-pay-option mb-2.5">
                        <span>
                          <input
                            type="radio"
                            id="pay1"
                            name="radio-group"
                            defaultChecked
                          />
                          <label
                            htmlFor="pay1"
                            className="mb-0 relative pl-6 cursor-pointer leading-4 inline-block text-[#7a7a7a] tracking-[0] text-sm"
                          >
                            Cash On Delivery
                          </label>
                        </span>
                      </span>
                      <span className="cr-pay-option mb-2.5">
                        <span>
                          <input type="radio" id="pay2" name="radio-group" />
                          <label
                            htmlFor="pay2"
                            className="mb-0 relative pl-6 cursor-pointer leading-4 inline-block text-[#7a7a7a] tracking-[0] text-sm"
                          >
                            UPI
                          </label>
                        </span>
                      </span>
                      <span className="cr-pay-option">
                        <span>
                          <input type="radio" id="pay3" name="radio-group" />
                          <label
                            htmlFor="pay3"
                            className="mb-0 relative pl-6 cursor-pointer leading-4 inline-block text-[#7a7a7a] tracking-[0] text-sm"
                          >
                            Bank Transfer
                          </label>
                        </span>
                      </span>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method Image Section */}
            <div className="cr-sidebar-wrap cr-check-pay-img-wrap border border-solid border-[#e9e9e9] mb-0 p-4 bg-white rounded-md">
              <div className="cr-sidebar-block">
                <div className="cr-sb-title text-xl font-semibold tracking-[0] mb-0 relative text-black leading-tight">
                  <h3 className="cr-sidebar-title">Payment Method</h3>
                </div>
                <div className="cr-sb-block-content mb-0 mt-4">
                  <div className="cr-check-pay-img-inner flex justify-between w-full flex-wrap">
                    <div className="cr-check-pay-img">
                      <img
                        src="assets/img/banner/payment.png"
                        alt="payment"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Side - Checkout Forms */}
          <div className="cr-checkout-leftside lg:w-2/3 md:w-full w-full px-3 mb-6">
            <div className="cr-checkout-content">
              <div className="cr-checkout-inner">
                {/* New Customer Section */}
                <div className="cr-checkout-wrap p-6 border border-solid border-[#e9e9e9] bg-white rounded-md mb-8">
                  <div className="cr-checkout-block cr-check-new mb-8">
                    <h3 className="cr-checkout-title text-xl font-semibold tracking-[0] mb-6 relative block text-[#2b2b2d] leading-none sm:text-lg">
                      New Customer
                    </h3>
                    <div className="cr-check-block-content">
                      <div className="cr-check-subtitle mb-3.5 text-[#2b2b2d] text-sm font-medium tracking-[0] leading-none">
                        Checkout Options
                      </div>
                      <form action="#">
                        <span className="cr-new-option">
                          <span className="mr-12">
                            <input
                              type="radio"
                              id="account1"
                              name="radio-group"
                              defaultChecked
                            />
                            <label
                              htmlFor="account1"
                              className="relative pl-6 cursor-pointer leading-4 text-sm inline-block text-[#7a7a7a] tracking-[0] mb-4"
                            >
                              Register Account
                            </label>
                          </span>
                          <span className="mr-12">
                            <input
                              type="radio"
                              id="account2"
                              name="radio-group"
                            />
                            <label
                              htmlFor="account2"
                              className="relative pl-6 cursor-pointer leading-4 text-sm inline-block text-[#7a7a7a] tracking-[0] mb-4"
                            >
                              Guest Account
                            </label>
                          </span>
                        </span>
                      </form>
                      <div className="cr-new-desc relative leading-6 text-sm text-[#7a7a7a] tracking-[0] max-w-[60%] sm:max-w-full">
                        By creating an account you will be able to shop faster,
                        be up to date on an order's status, and keep track of
                        the orders you have previously made.
                      </div>
                      <span>
                        <button
                          className="mt-8 cr-button h-10 font-bold transition-all duration-300 ease-in-out py-2 px-5 text-sm capitalize leading-tight bg-[#64b496] text-white border border-solid border-[#64b496] rounded-md flex items-center justify-center hover:bg-black hover:border-black"
                          type="submit"
                        >
                          Continue
                        </button>
                      </span>
                    </div>
                  </div>

                  {/* Returning Customer Section */}
                  <div className="cr-checkout-block cr-check-login">
                    <h3 className="cr-checkout-title text-xl font-semibold tracking-[0] mb-6 relative block text-[#2b2b2d] leading-none sm:text-lg">
                      Returning Customer
                    </h3>
                    <div className="cr-check-login-form">
                      <form action="#" method="post" className="flex flex-col">
                        <span className="cr-check-login-wrap">
                          <label className="mb-3 inline-block text-[#2b2b2d] text-sm font-medium tracking-[0] leading-none">
                            Email Address
                          </label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter your email address"
                            className="h-12 bg-transparent border border-solid border-[#e9e9e9] text-[#2b2b2d] text-sm mb-4 px-4 w-full outline-0 rounded-md"
                            required
                          />
                        </span>
                        <span className="cr-check-login-wrap">
                          <label className="mb-3 inline-block text-[#2b2b2d] text-sm font-medium tracking-[0] leading-none">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="h-12 bg-transparent border border-solid border-[#e9e9e9] text-[#2b2b2d] text-sm mb-4 px-4 w-full outline-0 rounded-md"
                            required
                          />
                        </span>
                        <span className="cr-check-login-wrap cr-check-login-btn flex items-center mt-3.5">
                          <button
                            className="mr-4 cr-button h-10 font-bold transition-all duration-300 ease-in-out py-2 px-5 text-sm capitalize leading-tight bg-[#64b496] text-white border border-solid border-[#64b496] rounded-md flex items-center justify-center hover:bg-black hover:border-black"
                            type="submit"
                          >
                            Login
                          </button>
                          <a
                            className="cr-check-login-fp text-[#2b2b2d] font-semibold tracking-wider underline text-sm leading-6 cursor-pointer"
                            href="#"
                          >
                            Forgot Password?
                          </a>
                        </span>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Billing Details Section */}
                <div className="cr-checkout-wrap p-6 border border-solid border-[#e9e9e9] bg-white rounded-md">
                  <div className="cr-checkout-block cr-check-bill">
                    <h3 className="cr-checkout-title text-xl font-semibold tracking-[0] mb-6 relative block text-[#2b2b2d] leading-tight sm:text-lg">
                      Billing Details
                    </h3>
                    <div className="cr-bl-block-content">
                      <div className="cr-check-subtitle mb-2.5 text-[#2b2b2d] text-sm font-medium tracking-[0] leading-none">
                        Checkout Options
                      </div>
                      <span className="cr-bill-option mb-6 block">
                        <span className="mr-12">
                          <input type="radio" id="bill1" name="radio-group" />
                          <label
                            htmlFor="bill1"
                            className="relative pl-6 cursor-pointer leading-4 text-sm inline-block text-[#7a7a7a] tracking-[0] mb-4"
                          >
                            I want to use an existing address
                          </label>
                        </span>
                        <span className="mr-12">
                          <input
                            type="radio"
                            id="bill2"
                            name="radio-group"
                            defaultChecked
                          />
                          <label
                            htmlFor="bill2"
                            className="relative pl-6 cursor-pointer leading-4 text-sm inline-block text-[#7a7a7a] tracking-[0] mb-4"
                          >
                            I want to use new address
                          </label>
                        </span>
                      </span>
                      <div className="cr-check-bill-form mb-[-24px]">
                        <form
                          action="#"
                          method="post"
                          className="flex flex-row flex-wrap mx-[-15px]"
                        >
                          <span className="cr-bill-wrap cr-bill-half w-1/2 sm:w-full px-4">
                            <label className="mb-2 inline-block text-[#2b2b2d] text-sm font-medium tracking-[0] leading-none">
                              First Name*
                            </label>
                            <input
                              type="text"
                              name="firstname"
                              placeholder="Enter your first name"
                              className="h-12 bg-transparent border border-solid border-[#e9e9e9] text-[#2b2b2d] text-sm mb-6 px-4 w-full outline-0 rounded-md"
                              required
                            />
                          </span>
                          <span className="cr-bill-wrap cr-bill-half w-1/2 sm:w-full px-4">
                            <label className="mb-2 inline-block text-[#2b2b2d] text-sm font-medium tracking-[0] leading-none">
                              Last Name*
                            </label>
                            <input
                              type="text"
                              name="lastname"
                              placeholder="Enter your last name"
                              className="h-12 bg-transparent border border-solid border-[#e9e9e9] text-[#2b2b2d] text-sm mb-6 px-4 w-full outline-0 rounded-md"
                              required
                            />
                          </span>
                          <span className="cr-bill-wrap w-full px-4">
                            <label className="mb-2 inline-block text-[#2b2b2d] text-sm font-medium tracking-[0] leading-none">
                              Address
                            </label>
                            <input
                              type="text"
                              name="address"
                              className="h-12 bg-transparent border border-solid border-[#e9e9e9] text-[#2b2b2d] text-sm mb-6 px-4 w-full outline-0 rounded-md"
                              placeholder="Address Line 1"
                            />
                          </span>
                          <span className="cr-bill-wrap cr-bill-half w-1/2 sm:w-full px-4">
                            <label className="mb-2 inline-block text-[#2b2b2d] text-sm font-medium tracking-[0] leading-none">
                              City *
                            </label>
                            <span className="cr-bl-select-inner relative flex w-full h-12 border border-solid border-[#e9e9e9] text-sm p-0 mb-6 rounded-md">
                              <select
                                name="cr_select_city"
                                id="cr-select-city"
                                className="cr-bill-select appearance-none outline-0 border-0 bg-white flex-1 px-2.5 text-[#7a7a7a] cursor-pointer rounded-md"
                              >
                                <option selected disabled>
                                  City
                                </option>
                                <option value="1">City 1</option>
                                <option value="2">City 2</option>
                                <option value="3">City 3</option>
                                <option value="4">City 4</option>
                                <option value="5">City 5</option>
                              </select>
                            </span>
                          </span>
                          <span className="cr-bill-wrap cr-bill-half w-1/2 sm:w-full px-4">
                            <label className="mb-2 inline-block text-[#2b2b2d] text-sm font-medium tracking-[0] leading-none">
                              Post Code
                            </label>
                            <input
                              type="text"
                              name="postalcode"
                              className="h-12 bg-transparent border border-solid border-[#e9e9e9] text-[#2b2b2d] text-sm mb-6 px-4 w-full outline-0 rounded-md"
                              placeholder="Post Code"
                            />
                          </span>
                          <span className="cr-bill-wrap cr-bill-half w-1/2 sm:w-full px-4">
                            <label className="mb-2 inline-block text-[#2b2b2d] text-sm font-medium tracking-[0] leading-none">
                              Country *
                            </label>
                            <span className="cr-bl-select-inner relative flex w-full h-12 border border-solid border-[#e9e9e9] text-sm p-0 mb-6 rounded-md">
                              <select
                                name="cr_select_country"
                                id="cr-select-country"
                                className="cr-bill-select appearance-none outline-0 border-0 bg-white flex-1 px-2.5 text-[#7a7a7a] cursor-pointer rounded-md"
                              >
                                <option selected disabled>
                                  Country
                                </option>
                                <option value="1">Country 1</option>
                                <option value="2">Country 2</option>
                                <option value="3">Country 3</option>
                                <option value="4">Country 4</option>
                                <option value="5">Country 5</option>
                              </select>
                            </span>
                          </span>
                          <span className="cr-bill-wrap cr-bill-half w-1/2 sm:w-full px-4">
                            <label className="mb-2 inline-block text-[#2b2b2d] text-sm font-medium tracking-[0] leading-none">
                              Region State
                            </label>
                            <span className="cr-bl-select-inner relative flex w-full h-12 border border-solid border-[#e9e9e9] text-sm p-0 mb-6 rounded-md">
                              <select
                                name="cr_select_state"
                                id="cr-select-state"
                                className="cr-bill-select appearance-none outline-0 border-0 bg-white flex-1 px-2.5 text-[#7a7a7a] cursor-pointer rounded-md"
                              >
                                <option selected disabled>
                                  Region/State
                                </option>
                                <option value="1">Region/State 1</option>
                                <option value="2">Region/State 2</option>
                                <option value="3">Region/State 3</option>
                                <option value="4">Region/State 4</option>
                                <option value="5">Region/State 5</option>
                              </select>
                            </span>
                          </span>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Place Order Button */}
                <span className="cr-check-order-btn flex justify-end p-0">
                  <a
                    className="mt-8 cr-button h-10 font-bold transition-all duration-300 ease-in-out py-2 px-5 text-sm capitalize leading-tight bg-[#64b496] text-white border border-solid border-[#64b496] rounded-md flex items-center justify-center hover:bg-black hover:border-black"
                    href="#"
                  >
                    Place Order
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
