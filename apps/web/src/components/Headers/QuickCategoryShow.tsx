const QuickCategoryShow = () => {
  return (
    <div>
      <div className="cr-category-icon-block py-[10px] max-[991px]:hidden">
        {/* <div className="cr-category-menu relative">
                  <div className="cr-category-toggle w-[35px] h-[35px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] cursor-pointer flex items-center justify-center">
                    <i className="ri-menu-2-line text-[22px] text-[#2b2b2d] leading-[14px] block" />
                  </div>
                </div> */}
        {/* <div className="cr-cat-dropdown transition-all duration-[0.3s] ease-in-out w-[600px] mt-[15px] p-[15px] absolute bg-[#fff] opacity-0 invisible left-[12px] z-[10] rounded-[5px] border-[1px] border-solid border-[#e9e9e9]">
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
                </div> */}
      </div>
    </div>
  );
};

export default QuickCategoryShow;
