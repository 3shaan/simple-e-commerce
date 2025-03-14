const Header = () => {
  return (
    <div className="bg-red-500">
      <header className="h-[142px] max-[991px]:h-[133px] max-[575px]:h-[173px] bg-[#fff] border-b-[1px] border-solid border-[#e9e9e9]">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-[12px]">
              <div className="top-header py-[20px] flex flex-row gap-[10px] justify-between border-b-[1px] border-solid border-[#e9e9e9] relative z-[4] max-[575px]:py-[15px] max-[575px]:block">
                <a
                  href="index.html"
                  className="cr-logo max-[575px]:mb-[15px] max-[575px]:flex max-[575px]:justify-center"
                >
                  <img
                    src="assets/img/logo/logo.png"
                    alt="logo"
                    className="logo block h-[35px] w-[115px] max-[575px]:w-[100px]"
                  />
                  <img
                    src="assets/img/logo/dark-logo.png"
                    alt="logo"
                    className="dark-logo hidden h-[35px] w-[115px] max-[575px]:w-[100px]"
                  />
                </a>
                <form className="cr-search relative max-[575px]:max-w-[350px] max-[575px]:m-auto">
                  <input
                    className="search-input w-[600px] h-[45px] pl-[15px] pr-[175px] border-[1px] border-solid border-[#64b496] rounded-[5px] outline-[0] max-[1399px]:w-[400px] max-[991px]:max-w-[350px] max-[575px]:w-full max-[420px]:pr-[45px]"
                    type="text"
                    placeholder="Search For items..."
                  />
                  <select
                    className="form-select mr-[10px] w-[120px] h-[calc(100%-2px)] border-[0] tracking-[0] absolute top-[1px] pt-[0.375rem] pb-[0.375rem] pl-[0.5rem] outline-[0] right-[45px] text-[13px] border-l-[1px] border-solid border-[#64b496] rounded-[0] max-[420px]:hidden"
                    aria-label="Default select example"
                  >
                    <option selected="">All Categories</option>
                    <option value={1}>Mens</option>
                    <option value={2}>Womens</option>
                    <option value={3}>Electronics</option>
                  </select>
                  <a
                    href="javascript:void(0)"
                    className="search-btn w-[45px] bg-[#64b496] absolute right-[0] top-[0] bottom-[0] rounded-r-[5px] flex items-center justify-center"
                  >
                    <i className="ri-search-line text-[14px] text-[#fff]" />
                  </a>
                </form>
                <div className="cr-right-bar flex max-[991px]:hidden">
                  <ul className="navbar-nav m-auto relative z-[3]">
                    <li className="nav-item dropdown relative">
                      <a
                        className="nav-link dropdown-toggle cr-right-bar-item transition-all duration-[0.3s] ease-in-out flex items-center relative text-[14px] font-medium text-[#000] z-[1] relative py-[11px] pr-[30px] pl-[8px] max-[1199px]:py-[8px]"
                        href="javascript:void(0)"
                      >
                        <i className="ri-user-3-line pr-[5px] text-[21px] leading-[17px]" />
                        <span className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[15px] leading-[15px] text-[15px] font-medium text-[#000] tracking-[0.03rem]">
                          Account
                        </span>
                      </a>
                      <ul className="dropdown-menu transition-all duration-[0.3s] ease-in-out py-[8px] min-w-[160px] mt-[35px] absolute text-left opacity-0 invisible left-auto bg-[#fff] rounded-[5px] block z-[9] border-[1px] border-solid border-[#e9e9e9]">
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out py-[7px] px-[20px] bg-[#fff] relative capitalize block w-full text-[#777] text-[13px] font-normal"
                            href="register.html"
                          >
                            Register
                          </a>
                        </li>
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out py-[7px] px-[20px] bg-[#fff] relative capitalize block w-full text-[#777] text-[13px] font-normal"
                            href="checkout.html"
                          >
                            Checkout
                          </a>
                        </li>
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out py-[7px] px-[20px] bg-[#fff] relative capitalize block w-full text-[#777] text-[13px] font-normal"
                            href="login.html"
                          >
                            Login
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <a
                    href="wishlist.html"
                    className="cr-right-bar-item pr-[30px] transition-all duration-[0.3s] ease-in-out flex items-center"
                  >
                    <i className="ri-heart-3-line pr-[5px] text-[21px] leading-[17px]" />
                    <span className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[15px] leading-[15px] font-medium text-[#000]">
                      Wishlist
                    </span>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="cr-right-bar-item Shopping-toggle transition-all duration-[0.3s] ease-in-out flex items-center"
                  >
                    <i className="ri-shopping-cart-line pr-[5px] text-[21px] leading-[17px]" />
                    <span className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[15px] leading-[15px] font-medium text-[#000]">
                      Cart
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cr-fix" id="cr-main-menu-desk">
          <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div className="cr-menu-list w-full px-[12px] relative flex items-center flex-row justify-between">
              <div className="cr-category-icon-block py-[10px] max-[991px]:hidden">
                <div className="cr-category-menu relative">
                  <div className="cr-category-toggle w-[35px] h-[35px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] cursor-pointer flex items-center justify-center">
                    <i className="ri-menu-2-line text-[22px] text-[#2b2b2d] leading-[14px] block" />
                  </div>
                </div>
                <div className="cr-cat-dropdown transition-all duration-[0.3s] ease-in-out w-[600px] mt-[15px] p-[15px] absolute bg-[#fff] opacity-0 invisible left-[12px] z-[10] rounded-[5px] border-[1px] border-solid border-[#e9e9e9]">
                  <div className="cr-cat-block">
                    <div className="cr-cat-tab flex">
                      <ul
                        className="cr-tab-list nav flex-column nav-pills min-w-[180px] mr-[12px] rounded-[5px] flex flex-wrap flex-col justify-center"
                        id="myTab"
                      >
                        <li className="transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] flex items-center cursor-pointer mb-[5px]">
                          <a
                            href="#v-pills-home"
                            className="text-[13px] text-[#4b5966] tracking-[0] font-medium text-left capitalize"
                          >
                            Dairy &amp; Bakery
                          </a>
                        </li>
                        <li className="transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] flex items-center cursor-pointer mb-[5px]">
                          <a
                            href="#v-pills-profile"
                            className="text-[13px] text-[#4b5966] tracking-[0] font-medium text-left capitalize"
                          >
                            Fruits &amp; Vegetable
                          </a>
                        </li>
                        <li className="transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] flex items-center cursor-pointer mb-[5px]">
                          <a
                            href="#v-pills-messages"
                            className="text-[13px] text-[#4b5966] tracking-[0] font-medium text-left capitalize"
                          >
                            Snack &amp; Spice
                          </a>
                        </li>
                        <li className="transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] flex items-center cursor-pointer mb-[5px]">
                          <a
                            href="#v-pills-settings"
                            className="text-[13px] text-[#4b5966] tracking-[0] font-medium text-left capitalize"
                          >
                            Juice &amp; Drinks
                          </a>
                        </li>
                        <li className="transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] flex items-center cursor-pointer mb-[5px]">
                          <a
                            href="#v-pills-profile"
                            className="text-[13px] text-[#4b5966] tracking-[0] font-medium text-left capitalize"
                          >
                            Fruits &amp; Vegetable
                          </a>
                        </li>
                      </ul>
                      <div
                        className="tab-content transition-all duration-[0.3s] ease-in-out w-full"
                        id="myTabContent1"
                      >
                        <div className="tab-pane" id="v-pills-home">
                          <div className="tab-list flex flex-wrap w-full">
                            <div className="grow-[1] px-[12px]">
                              <h6 className="cr-col-title h-auto mb-[10px] pb-[5px] text-[#64b496] text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#e9e9e9]">
                                Dairy
                              </h6>
                              <ul className="cat-list">
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Milk
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Ice cream
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Cheese
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Frozen custard
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Frozen yogurt
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="grow-[1] pl-[12px]">
                              <h6 className="cr-col-title h-auto mb-[10px] pb-[5px] text-[#64b496] text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#e9e9e9]">
                                Bakery
                              </h6>
                              <ul className="cat-list">
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Cake and Pastry
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Rusk Toast
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Bread &amp; Buns
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Chocolate Brownie
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Cream Roll
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="v-pills-profile">
                          <div className="tab-list flex flex-wrap w-full">
                            <div className="grow-[1]">
                              <h6 className="cr-col-title h-auto mb-[10px] pb-[5px] text-[#64b496] text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#e9e9e9]">
                                Fruits
                              </h6>
                              <ul className="cat-list">
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Cauliflower
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Bell Peppers
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Broccoli
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Cabbage
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Tomato
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="grow-[1]">
                              <h6 className="cr-col-title h-auto mb-[10px] pb-[5px] text-[#64b496] text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#e9e9e9]">
                                Vegetable
                              </h6>
                              <ul className="cat-list">
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Cauliflower
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Bell Peppers
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Broccoli
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Cabbage
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Tomato
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="v-pills-messages">
                          <div className="tab-list flex flex-wrap w-full">
                            <div className="grow-[1]">
                              <h6 className="cr-col-title h-auto mb-[10px] pb-[5px] text-[#64b496] text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#e9e9e9]">
                                Snacks
                              </h6>
                              <ul className="cat-list">
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Frenchfries
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    potatochips
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Biscuits &amp;Cookies
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Popcorn
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Rice Cakes
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="grow-[1]">
                              <h6 className="cr-col-title h-auto mb-[10px] pb-[5px] text-[#64b496] text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#e9e9e9]">
                                Spice
                              </h6>
                              <ul className="cat-list">
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Cinnamon Powder
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Cumin Powder
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Fenugreek Powder
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Pepper Powder
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Long Pepper
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="v-pills-settings">
                          <div className="tab-list flex flex-wrap w-full">
                            <div className="grow-[1]">
                              <h6 className="cr-col-title h-auto mb-[10px] pb-[5px] text-[#64b496] text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#e9e9e9]">
                                Juice
                              </h6>
                              <ul className="cat-list">
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Mango Juice
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Coconut Water
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Tetra Pack
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Apple Juices
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Lychee Juice
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="grow-[1]">
                              <h6 className="cr-col-title h-auto mb-[10px] pb-[5px] text-[#64b496] text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#e9e9e9]">
                                soft drink
                              </h6>
                              <ul className="cat-list">
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Breizh Cola
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Green Cola
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Jolt Cola
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Mecca Cola
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[26px] font-normal text-[13px] block border-[0]"
                                  >
                                    Topsia Cola
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="justify-between relative flex flex-wrap items-center max-[991px]:w-full max-[991px]:py-[10px]">
                <a
                  href="javascript:void(0)"
                  className="navbar-toggler py-[7px] px-[14px] hidden text-[16px] leading-[1] max-[991px]:flex max-[991px]:p-[0] max-[991px]:border-[0]"
                >
                  <i className="ri-menu-3-line max-[991px]:text-[20px]" />
                </a>
                <div className="cr-header-buttons hidden max-[991px]:flex max-[991px]:items-center">
                  <ul className="navbar-nav relative z-[3] m-auto max-[1199px]:mr-[-5px] max-[991px]:m-[0] flex flex-col">
                    <li className="nav-item dropdown relative">
                      <a
                        className="nav-link py-[11px] px-[8px] text-[14px] font-medium text-[#000] z-[1] relative max-[1199px]:py-[8px] max-[1199px]:px-[0] max-[991px]:mr-[20px]"
                        href="javascript:void(0)"
                      >
                        <i className="ri-user-3-line text-[20px]" />
                      </a>
                      <ul className="dropdown-menu transition-all duration-[0.3s] ease-in-out py-[8px] min-w-[160px] mt-[35px] absolute text-left opacity-0 invisible left-auto right-0 bg-[#fff] rounded-[5px] block z-[9] border-[1px] border-solid border-[#e9e9e9]">
                        <li className="w-full">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out w-full block py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777]"
                            href="register.html"
                          >
                            Register
                          </a>
                        </li>
                        <li className="w-full">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out w-full block py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777]"
                            href="checkout.html"
                          >
                            Checkout
                          </a>
                        </li>
                        <li className="w-full">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out w-full block py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777]"
                            href="login.html"
                          >
                            Login
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <a
                    href="wishlist.html"
                    className="cr-right-bar-item transition-all duration-[0.3s] ease-in-out mr-[16px] max-[991px]:mr-[20px]"
                  >
                    <i className="ri-heart-line text-[20px]" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="cr-right-bar-item Shopping-toggle transition-all duration-[0.3s] ease-in-out mr-[16px] max-[991px]:m-[0]"
                  >
                    <i className="ri-shopping-cart-line text-[20px]" />
                  </a>
                </div>
                <div
                  className="min-[992px]:flex min-[992px]:basis-auto grow-[1] items-center hidden"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav flex min-[992px]:flex-row items-center m-auto relative z-[3] min-[992px]:flex-row max-[1199px]:mr-[-5px] max-[991px]:m-[0]">
                    <li className="nav-item dropdown relative mr-[25px] max-[1399px]:mr-[20px] max-[1199px]:mr-[30px]">
                      <a
                        className="nav-link dropdown-toggle font-Poppins text-[14px] font-medium block text-[#000] z-[1] flex items-center relative py-[11px] px-[8px] max-[1199px]:py-[8px] max-[1199px]:px-[0]"
                        href="javascript:void(0)"
                      >
                        Home
                      </a>
                      <ul className="dropdown-menu transition-all duration-[0.3s] ease-in-out py-[8px] min-w-[160px] mt-[35px] absolute text-left opacity-0 invisible left-auto bg-[#fff] rounded-[5px] block z-[9] border-[1px] border-solid border-[#e9e9e9]">
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="index.html"
                          >
                            Grocery
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="demo-2.html"
                          >
                            Fashion
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown relative mr-[25px] max-[1399px]:mr-[20px] max-[1199px]:mr-[30px]">
                      <a
                        className="nav-link dropdown-toggle font-Poppins text-[14px] font-medium block text-[#000] z-[1] flex items-center relative py-[11px] px-[8px] max-[1199px]:py-[8px] max-[1199px]:px-[0]"
                        href="javascript:void(0)"
                      >
                        Category
                      </a>
                      <ul className="dropdown-menu transition-all duration-[0.3s] ease-in-out py-[8px] min-w-[160px] mt-[35px] absolute text-left opacity-0 invisible left-auto bg-[#fff] rounded-[5px] block z-[9] border-[1px] border-solid border-[#e9e9e9]">
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="shop-left-sidebar.html"
                          >
                            Shop Left sidebar
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="shop-right-sidebar.html"
                          >
                            Shop Right sidebar
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="shop-full-width.html"
                          >
                            Full Width
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown relative mr-[25px] max-[1399px]:mr-[20px] max-[1199px]:mr-[30px]">
                      <a
                        className="nav-link dropdown-toggle font-Poppins text-[14px] font-medium block text-[#000] z-[1] flex items-center relative py-[11px] px-[8px] max-[1199px]:py-[8px] max-[1199px]:px-[0]"
                        href="javascript:void(0)"
                      >
                        Products
                      </a>
                      <ul className="dropdown-menu transition-all duration-[0.3s] ease-in-out py-[8px] min-w-[160px] mt-[35px] absolute text-left opacity-0 invisible left-auto bg-[#fff] rounded-[5px] block z-[9] border-[1px] border-solid border-[#e9e9e9]">
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="product-left-sidebar.html"
                          >
                            product Left sidebar{" "}
                          </a>
                        </li>
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="product-right-sidebar.html"
                          >
                            product Right sidebar{" "}
                          </a>
                        </li>
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="product-full-width.html"
                          >
                            Product Full Width{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown relative mr-[25px] max-[1399px]:mr-[20px] max-[1199px]:mr-[30px]">
                      <a
                        className="nav-link dropdown-toggle font-Poppins text-[14px] font-medium block text-[#000] z-[1] flex items-center relative py-[11px] px-[8px] max-[1199px]:py-[8px] max-[1199px]:px-[0]"
                        href="javascript:void(0)"
                      >
                        Pages
                      </a>
                      <ul className="dropdown-menu transition-all duration-[0.3s] ease-in-out py-[8px] min-w-[160px] mt-[35px] absolute text-left opacity-0 invisible left-auto bg-[#fff] rounded-[5px] block z-[9] border-[1px] border-solid border-[#e9e9e9]">
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="about.html"
                          >
                            About Us
                          </a>
                        </li>
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="contact-us.html"
                          >
                            Contact Us
                          </a>
                        </li>
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="cart.html"
                          >
                            Cart
                          </a>
                        </li>
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="checkout.html"
                          >
                            Checkout
                          </a>
                        </li>
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="track-order.html"
                          >
                            Track Order
                          </a>
                        </li>
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="wishlist.html"
                          >
                            Wishlist
                          </a>
                        </li>
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="faq.html"
                          >
                            Faq
                          </a>
                        </li>
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="login.html"
                          >
                            Login
                          </a>
                        </li>
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="register.html"
                          >
                            Register
                          </a>
                        </li>
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="policy.html"
                          >
                            Policy
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown relative mr-[25px] max-[1399px]:mr-[20px] max-[1199px]:mr-[30px]">
                      <a
                        className="nav-link dropdown-toggle font-Poppins text-[14px] font-medium block text-[#000] z-[1] flex items-center relative py-[11px] px-[8px] max-[1199px]:py-[8px] max-[1199px]:px-[0]"
                        href="javascript:void(0)"
                      >
                        Blog
                      </a>
                      <ul className="dropdown-menu transition-all duration-[0.3s] ease-in-out py-[8px] min-w-[160px] mt-[35px] absolute text-left opacity-0 invisible left-auto bg-[#fff] rounded-[5px] block z-[9] border-[1px] border-solid border-[#e9e9e9]">
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="blog-left-sidebar.html"
                          >
                            Left Sidebar
                          </a>
                        </li>
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="blog-right-sidebar.html"
                          >
                            Right Sidebar
                          </a>
                        </li>
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="blog-full-width.html"
                          >
                            Full Width
                          </a>
                        </li>
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="blog-detail-left-sidebar.html"
                          >
                            Detail Left Sidebar
                          </a>
                        </li>
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="blog-detail-right-sidebar.html"
                          >
                            Detail Right Sidebar
                          </a>
                        </li>
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="blog-detail-full-width.html"
                          >
                            Detail Full Width
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown relative">
                      <a
                        className="nav-link dropdown-toggle font-Poppins text-[14px] font-medium block text-[#000] z-[1] flex items-center relative py-[11px] px-[8px] max-[1199px]:py-[8px] max-[1199px]:px-[0]"
                        href="javascript:void(0)"
                      >
                        Elements
                      </a>
                      <ul className="dropdown-menu transition-all duration-[0.3s] ease-in-out py-[8px] min-w-[160px] mt-[35px] absolute text-left opacity-0 invisible left-auto bg-[#fff] rounded-[5px] block z-[9] border-[1px] border-solid border-[#e9e9e9]">
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="elements-products.html"
                          >
                            Products
                          </a>
                        </li>
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="elements-typography.html"
                          >
                            Typography
                          </a>
                        </li>
                        <li className="w-full mr-[0]">
                          <a
                            className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                            href="elements-buttons.html"
                          >
                            Buttons
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="cr-calling flex justify-end items-center max-[1199px]:hidden">
                <i className="ri-phone-line pr-[5px] text-[20px]" />
                <a
                  href="javascript:void(0)"
                  className="text-[15px] font-medium"
                >
                  +123 ( 456 ) ( 7890 )
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
