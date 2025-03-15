const ProductCategory = () => {
  return (
    <div>
      <section className="section-categories pb-[100px] max-[1199px]:pb-[70px] relative">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full mb-[-24px]">
            <div className="min-[992px]:w-[33.33%] w-full px-[12px] mb-[24px]">
              <div className="cr-categories">
                <ul
                  className="nav nav-tabs max-[991px]:mb-[-5px] flex flex-wrap justify-between mb-[-5px]"
                  id="myCategoriesTab"
                >
                  <li className="nav-item transition-all duration-[0.3s] ease-in-out w-full max-[991px]:w-[calc(50%-12px)] max-[420px]:w-full flex justify-center bg-[#f7f7f8] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] py-[24px] max-[1599px]:py-[18px] max-[1399px]:py-[16px] hover:text-[#64b496] cursor-pointer mb-[5px]">
                    <a
                      href="#cake_milk"
                      className="w-full flex flex-col items-center font-Poppins font-medium text-[15px]"
                    >
                      Cake &amp; Milk{" "}
                      <span className="text-[11px] font-normal text-[#7a7a7a] mt-[5px] align-top">
                        (65 items)
                      </span>
                    </a>
                  </li>
                  <li className="nav-item transition-all duration-[0.3s] ease-in-out w-full max-[991px]:w-[calc(50%-12px)] max-[420px]:w-full flex justify-center bg-[#f7f7f8] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] py-[24px] max-[1599px]:py-[18px] max-[1399px]:py-[16px] hover:text-[#64b496] cursor-pointer mb-[5px]">
                    <a
                      href="#meat"
                      className="w-full flex flex-col items-center font-Poppins font-medium text-[15px]"
                    >
                      Fresh Meat{" "}
                      <span className="text-[11px] font-normal text-[#7a7a7a] mt-[5px] align-top">
                        (30 items)
                      </span>
                    </a>
                  </li>
                  <li className="nav-item transition-all duration-[0.3s] ease-in-out w-full max-[991px]:w-[calc(50%-12px)] max-[420px]:w-full flex justify-center bg-[#f7f7f8] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] py-[24px] max-[1599px]:py-[18px] max-[1399px]:py-[16px] hover:text-[#64b496] cursor-pointer mb-[5px]">
                    <a
                      href="#Vegetables"
                      className="w-full flex flex-col items-center font-Poppins font-medium text-[15px]"
                    >
                      Vegetables{" "}
                      <span className="text-[11px] font-normal text-[#7a7a7a] mt-[5px] align-top">
                        (25 items)
                      </span>
                    </a>
                  </li>
                  <li className="nav-item transition-all duration-[0.3s] ease-in-out w-full max-[991px]:w-[calc(50%-12px)] max-[420px]:w-full flex justify-center bg-[#f7f7f8] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] py-[24px] max-[1599px]:py-[18px] max-[1399px]:py-[16px] hover:text-[#64b496] cursor-pointer mb-[5px]">
                    <a
                      href="#Custard"
                      className="w-full flex flex-col items-center font-Poppins font-medium text-[15px]"
                    >
                      Apple &amp; Mango{" "}
                      <span className="text-[11px] font-normal text-[#7a7a7a] mt-[5px] align-top">
                        (45 items)
                      </span>
                    </a>
                  </li>
                  <li className="nav-item transition-all duration-[0.3s] ease-in-out w-full max-[991px]:w-[calc(50%-12px)] max-[420px]:w-full flex justify-center bg-[#f7f7f8] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] py-[24px] max-[1599px]:py-[18px] max-[1399px]:py-[16px] hover:text-[#64b496] cursor-pointer mb-[5px]">
                    <a
                      href="#Strawberry"
                      className="w-full flex flex-col items-center font-Poppins font-medium text-[15px]"
                    >
                      Strawberry{" "}
                      <span className="text-[11px] font-normal text-[#7a7a7a] mt-[5px] align-top">
                        (68 items)
                      </span>
                    </a>
                  </li>
                  <li className="nav-item transition-all duration-[0.3s] ease-in-out w-full max-[991px]:w-[calc(50%-12px)] max-[420px]:w-full flex justify-center bg-[#f7f7f8] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] py-[24px] max-[1599px]:py-[18px] max-[1399px]:py-[16px] hover:text-[#64b496] cursor-pointer mb-[5px]">
                    <a
                      href="#Vegetables"
                      className="w-full flex flex-col items-center font-Poppins font-medium text-[15px]"
                    >
                      Vegetables{" "}
                      <span className="text-[11px] font-normal text-[#7a7a7a] mt-[5px] align-top">
                        (25 items)
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="min-[992px]:w-[66.66%] w-full  mb-[24px]">
              <div className="tab-content" id="myTabContent">
                <div className="tab-categories-pane" id="cake_milk">
                  <div className="flex flex-wrap w-full mb-[-24px]">
                    <div className="w-[50%] max-[420px]:w-full cr-categories-box px-[12px] mb-[24px]">
                      <div className="cr-side-categories relative overflow-hidden rounded-[5px] z-[5] max-[991px]:h-[400px] max-[575px]:h-[350px] max-[480px]:h-[300px] max-[420px]:h-[380px]">
                        <div className="categories-inner w-full h-full absolute top-[0] left-[0] p-[20px] z-[5]">
                          <h4 className="m-[0] font-Manrope text-[54px] font-bold uppercase leading-[1.2] text-[#fff] inline-flex max-[1399px]:text-[48px] max-[1199px]:text-[42px] max-[575px]:text-[34px]">
                            50
                            <span className="py-[10px] pl-[5px]">
                              <small className="block text-[19px] font-normal text-[#fff] max-[1399px]:text-[17px] max-[1199px]:text-[14px] max-[575px]:text-[12px]">
                                %
                              </small>
                              <small className="block text-[19px] font-normal text-[#fff] max-[1399px]:text-[17px] max-[1199px]:text-[14px] max-[575px]:text-[12px]">
                                Off
                              </small>
                            </span>
                          </h4>
                        </div>
                        <div className="categories-contain w-full p-[30px] absolute bottom-[0] left-[0] z-[5]">
                          <div className="categories-text flex justify-center items-center">
                            <h5 className="mb-[12px] font-Manrope text-[22px] font-bold leading-[1.2] text-[#fff] max-[575px]:mb-[10px] max-[575px]:text-[18px]">
                              Cake
                            </h5>
                          </div>
                          <div className="categories-button flex justify-center items-center">
                            <a
                              href="shop-left-sidebar.html"
                              className="cr-button h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]"
                            >
                              shop now
                            </a>
                          </div>
                        </div>
                        <img
                          src="assets/img/categories/3.jpg"
                          alt="categories-3"
                          className="min-w-full h-full max-w-[max-content]"
                        />
                      </div>
                    </div>
                    <div className="w-[50%] max-[420px]:w-full cr-categories-box px-[12px] mb-[24px]">
                      <div className="cr-side-categories relative overflow-hidden rounded-[5px] z-[5] max-[991px]:h-[400px] max-[575px]:h-[350px] max-[480px]:h-[300px] max-[420px]:h-[380px]">
                        <div className="categories-inner w-full h-full absolute top-[0] left-[0] p-[20px] z-[5]">
                          <h4 className="m-[0] font-Manrope text-[54px] font-bold uppercase leading-[1.2] text-[#fff] inline-flex max-[1399px]:text-[48px] max-[1199px]:text-[42px] max-[575px]:text-[34px]">
                            40
                            <span className="py-[10px] pl-[5px]">
                              <small className="block text-[19px] font-normal text-[#fff] max-[1399px]:text-[17px] max-[1199px]:text-[14px] max-[575px]:text-[12px]">
                                %
                              </small>
                              <small className="block text-[19px] font-normal text-[#fff] max-[1399px]:text-[17px] max-[1199px]:text-[14px] max-[575px]:text-[12px]">
                                Off
                              </small>
                            </span>
                          </h4>
                        </div>
                        <div className="categories-contain w-full p-[30px] absolute bottom-[0] left-[0] z-[5]">
                          <div className="categories-text flex justify-center items-center">
                            <h5 className="mb-[12px] font-Manrope text-[22px] font-bold leading-[1.2] text-[#fff] max-[575px]:mb-[10px] max-[575px]:text-[18px]">
                              Milk
                            </h5>
                          </div>
                          <div className="categories-button flex justify-center items-center">
                            <a
                              href="shop-left-sidebar.html"
                              className="cr-button h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]"
                            >
                              shop now
                            </a>
                          </div>
                        </div>
                        <img
                          src="assets/img/categories/4.jpg"
                          alt="categories-4"
                          className="min-w-full h-full max-w-[max-content]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-categories-pane" id="meat">
                  <div className="flex flex-wrap w-full mb-[-24px]">
                    <div className="w-[50%] max-[420px]:w-full cr-categories-box px-[12px] mb-[24px]">
                      <div className="cr-side-categories relative overflow-hidden rounded-[5px] z-[5] max-[991px]:h-[400px] max-[575px]:h-[350px] max-[480px]:h-[300px] max-[420px]:h-[380px]">
                        <div className="categories-inner w-full h-full absolute top-[0] left-[0] p-[20px] z-[5]">
                          <h4 className="m-[0] font-Manrope text-[54px] font-bold uppercase leading-[1.2] text-[#fff] inline-flex max-[1399px]:text-[48px] max-[1199px]:text-[42px] max-[575px]:text-[34px]">
                            35
                            <span className="py-[10px] pl-[5px]">
                              <small className="block text-[19px] font-normal text-[#fff] max-[1399px]:text-[17px] max-[1199px]:text-[14px] max-[575px]:text-[12px]">
                                %
                              </small>
                              <small className="block text-[19px] font-normal text-[#fff] max-[1399px]:text-[17px] max-[1199px]:text-[14px] max-[575px]:text-[12px]">
                                Off
                              </small>
                            </span>
                          </h4>
                        </div>
                        <div className="categories-contain w-full p-[30px] absolute bottom-[0] left-[0] z-[5]">
                          <div className="categories-text flex justify-center items-center">
                            <h5 className="mb-[12px] font-Manrope text-[22px] font-bold leading-[1.2] text-[#fff] max-[575px]:mb-[10px] max-[575px]:text-[18px]">
                              Fish Meat
                            </h5>
                          </div>
                          <div className="categories-button flex justify-center items-center">
                            <a
                              href="shop-left-sidebar.html"
                              className="cr-button h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]"
                            >
                              shop now
                            </a>
                          </div>
                        </div>
                        <img
                          src="assets/img/categories/1.jpg"
                          alt="categories-1"
                          className="min-w-full h-full max-w-[max-content]"
                        />
                      </div>
                    </div>
                    <div className="w-[50%] max-[420px]:w-full cr-categories-box px-[12px] mb-[24px]">
                      <div className="cr-side-categories relative overflow-hidden rounded-[5px] z-[5] max-[991px]:h-[400px] max-[575px]:h-[350px] max-[480px]:h-[300px] max-[420px]:h-[380px]">
                        <div className="categories-inner w-full h-full absolute top-[0] left-[0] p-[20px] z-[5]">
                          <h4 className="m-[0] font-Manrope text-[54px] font-bold uppercase leading-[1.2] text-[#fff] inline-flex max-[1399px]:text-[48px] max-[1199px]:text-[42px] max-[575px]:text-[34px]">
                            24
                            <span className="py-[10px] pl-[5px]">
                              <small className="block text-[19px] font-normal text-[#fff] max-[1399px]:text-[17px] max-[1199px]:text-[14px] max-[575px]:text-[12px]">
                                %
                              </small>
                              <small className="block text-[19px] font-normal text-[#fff] max-[1399px]:text-[17px] max-[1199px]:text-[14px] max-[575px]:text-[12px]">
                                Off
                              </small>
                            </span>
                          </h4>
                        </div>
                        <div className="categories-contain w-full p-[30px] absolute bottom-[0] left-[0] z-[5]">
                          <div className="categories-text flex justify-center items-center">
                            <h5 className="mb-[12px] font-Manrope text-[22px] font-bold leading-[1.2] text-[#fff] max-[575px]:mb-[10px] max-[575px]:text-[18px]">
                              Fresh Meat
                            </h5>
                          </div>
                          <div className="categories-button flex justify-center items-center">
                            <a
                              href="shop-left-sidebar.html"
                              className="cr-button h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]"
                            >
                              shop now
                            </a>
                          </div>
                        </div>
                        <img
                          src="assets/img/categories/2.jpg"
                          alt="categories-2"
                          className="min-w-full h-full max-w-[max-content]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-categories-pane" id="Vegetables">
                  <div className="flex flex-wrap w-full mb-[-24px]">
                    <div className="w-[50%] max-[420px]:w-full cr-categories-box px-[12px] mb-[24px]">
                      <div className="cr-side-categories relative overflow-hidden rounded-[5px] z-[5] max-[991px]:h-[400px] max-[575px]:h-[350px] max-[480px]:h-[300px] max-[420px]:h-[380px]">
                        <div className="categories-inner w-full h-full absolute top-[0] left-[0] p-[20px] z-[5]">
                          <h4 className="m-[0] font-Manrope text-[54px] font-bold uppercase leading-[1.2] text-[#fff] inline-flex max-[1399px]:text-[48px] max-[1199px]:text-[42px] max-[575px]:text-[34px]">
                            45
                            <span className="py-[10px] pl-[5px]">
                              <small className="block text-[19px] font-normal text-[#fff] max-[1399px]:text-[17px] max-[1199px]:text-[14px] max-[575px]:text-[12px]">
                                %
                              </small>
                              <small className="block text-[19px] font-normal text-[#fff] max-[1399px]:text-[17px] max-[1199px]:text-[14px] max-[575px]:text-[12px]">
                                Off
                              </small>
                            </span>
                          </h4>
                        </div>
                        <div className="categories-contain w-full p-[30px] absolute bottom-[0] left-[0] z-[5]">
                          <div className="categories-text flex justify-center items-center">
                            <h5 className="mb-[12px] font-Manrope text-[22px] font-bold leading-[1.2] text-[#fff] max-[575px]:mb-[10px] max-[575px]:text-[18px]">
                              Coriander
                            </h5>
                          </div>
                          <div className="categories-button flex justify-center items-center">
                            <a
                              href="shop-left-sidebar.html"
                              className="cr-button h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]"
                            >
                              shop now
                            </a>
                          </div>
                        </div>
                        <img
                          src="assets/img/categories/5.jpg"
                          alt="categories-5"
                          className="min-w-full h-full max-w-[max-content]"
                        />
                      </div>
                    </div>
                    <div className="w-[50%] max-[420px]:w-full cr-categories-box px-[12px] mb-[24px]">
                      <div className="cr-side-categories relative overflow-hidden rounded-[5px] z-[5] max-[991px]:h-[400px] max-[575px]:h-[350px] max-[480px]:h-[300px] max-[420px]:h-[380px]">
                        <div className="categories-inner w-full h-full absolute top-[0] left-[0] p-[20px] z-[5]">
                          <h4 className="m-[0] font-Manrope text-[54px] font-bold uppercase leading-[1.2] text-[#fff] inline-flex max-[1399px]:text-[48px] max-[1199px]:text-[42px] max-[575px]:text-[34px]">
                            20
                            <span className="py-[10px] pl-[5px]">
                              <small className="block text-[19px] font-normal text-[#fff] max-[1399px]:text-[17px] max-[1199px]:text-[14px] max-[575px]:text-[12px]">
                                %
                              </small>
                              <small className="block text-[19px] font-normal text-[#fff] max-[1399px]:text-[17px] max-[1199px]:text-[14px] max-[575px]:text-[12px]">
                                Off
                              </small>
                            </span>
                          </h4>
                        </div>
                        <div className="categories-contain w-full p-[30px] absolute bottom-[0] left-[0] z-[5]">
                          <div className="categories-text flex justify-center items-center">
                            <h5 className="mb-[12px] font-Manrope text-[22px] font-bold leading-[1.2] text-[#fff] max-[575px]:mb-[10px] max-[575px]:text-[18px]">
                              Broccoli
                            </h5>
                          </div>
                          <div className="categories-button flex justify-center items-center">
                            <a
                              href="shop-left-sidebar.html"
                              className="cr-button h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]"
                            >
                              shop now
                            </a>
                          </div>
                        </div>
                        <img
                          src="assets/img/categories/6.jpg"
                          alt="categories-6"
                          className="min-w-full h-full max-w-[max-content]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-categories-pane" id="Custard">
                  <div className="flex flex-wrap w-full mb-[-24px]">
                    <div className="w-[50%] max-[420px]:w-full cr-categories-box px-[12px] mb-[24px]">
                      <div className="cr-side-categories relative overflow-hidden rounded-[5px] z-[5] max-[991px]:h-[400px] max-[575px]:h-[350px] max-[480px]:h-[300px] max-[420px]:h-[380px]">
                        <div className="categories-inner w-full h-full absolute top-[0] left-[0] p-[20px] z-[5]">
                          <h4 className="m-[0] font-Manrope text-[54px] font-bold uppercase leading-[1.2] text-[#fff] inline-flex max-[1399px]:text-[48px] max-[1199px]:text-[42px] max-[575px]:text-[34px]">
                            30
                            <span className="py-[10px] pl-[5px]">
                              <small className="block text-[19px] font-normal text-[#fff] max-[1399px]:text-[17px] max-[1199px]:text-[14px] max-[575px]:text-[12px]">
                                %
                              </small>
                              <small className="block text-[19px] font-normal text-[#fff] max-[1399px]:text-[17px] max-[1199px]:text-[14px] max-[575px]:text-[12px]">
                                Off
                              </small>
                            </span>
                          </h4>
                        </div>
                        <div className="categories-contain w-full p-[30px] absolute bottom-[0] left-[0] z-[5]">
                          <div className="categories-text flex justify-center items-center">
                            <h5 className="mb-[12px] font-Manrope text-[22px] font-bold leading-[1.2] text-[#fff] max-[575px]:mb-[10px] max-[575px]:text-[18px]">
                              Apple
                            </h5>
                          </div>
                          <div className="categories-button flex justify-center items-center">
                            <a
                              href="shop-left-sidebar.html"
                              className="cr-button h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]"
                            >
                              shop now
                            </a>
                          </div>
                        </div>
                        <img
                          src="assets/img/categories/7.jpg"
                          alt="categories-7"
                          className="min-w-full h-full max-w-[max-content]"
                        />
                      </div>
                    </div>
                    <div className="w-[50%] max-[420px]:w-full cr-categories-box px-[12px] mb-[24px]">
                      <div className="cr-side-categories relative overflow-hidden rounded-[5px] z-[5] max-[991px]:h-[400px] max-[575px]:h-[350px] max-[480px]:h-[300px] max-[420px]:h-[380px]">
                        <div className="categories-inner w-full h-full absolute top-[0] left-[0] p-[20px] z-[5]">
                          <h4 className="m-[0] font-Manrope text-[54px] font-bold uppercase leading-[1.2] text-[#fff] inline-flex max-[1399px]:text-[48px] max-[1199px]:text-[42px] max-[575px]:text-[34px]">
                            25
                            <span className="py-[10px] pl-[5px]">
                              <small className="block text-[19px] font-normal text-[#fff] max-[1399px]:text-[17px] max-[1199px]:text-[14px] max-[575px]:text-[12px]">
                                %
                              </small>
                              <small className="block text-[19px] font-normal text-[#fff] max-[1399px]:text-[17px] max-[1199px]:text-[14px] max-[575px]:text-[12px]">
                                Off
                              </small>
                            </span>
                          </h4>
                        </div>
                        <div className="categories-contain w-full p-[30px] absolute bottom-[0] left-[0] z-[5]">
                          <div className="categories-text flex justify-center items-center">
                            <h5 className="mb-[12px] font-Manrope text-[22px] font-bold leading-[1.2] text-[#fff] max-[575px]:mb-[10px] max-[575px]:text-[18px]">
                              Mango
                            </h5>
                          </div>
                          <div className="categories-button flex justify-center items-center">
                            <a
                              href="shop-left-sidebar.html"
                              className="cr-button h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]"
                            >
                              shop now
                            </a>
                          </div>
                        </div>
                        <img
                          src="assets/img/categories/8.jpg"
                          alt="categories-8"
                          className="min-w-full h-full max-w-[max-content]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-categories-pane" id="Strawberry">
                  <div className="flex flex-wrap w-full mb-[-24px]">
                    <div className="w-[50%] max-[420px]:w-full cr-categories-box px-[12px] mb-[24px]">
                      <div className="cr-side-categories relative overflow-hidden rounded-[5px] z-[5] max-[991px]:h-[400px] max-[575px]:h-[350px] max-[480px]:h-[300px] max-[420px]:h-[380px]">
                        <div className="categories-inner w-full h-full absolute top-[0] left-[0] p-[20px] z-[5]">
                          <h4 className="m-[0] font-Manrope text-[54px] font-bold uppercase leading-[1.2] text-[#fff] inline-flex max-[1399px]:text-[48px] max-[1199px]:text-[42px] max-[575px]:text-[34px]">
                            33
                            <span className="py-[10px] pl-[5px]">
                              <small className="block text-[19px] font-normal text-[#fff] max-[1399px]:text-[17px] max-[1199px]:text-[14px] max-[575px]:text-[12px]">
                                %
                              </small>
                              <small className="block text-[19px] font-normal text-[#fff] max-[1399px]:text-[17px] max-[1199px]:text-[14px] max-[575px]:text-[12px]">
                                Off
                              </small>
                            </span>
                          </h4>
                        </div>
                        <div className="categories-contain w-full p-[30px] absolute bottom-[0] left-[0] z-[5]">
                          <div className="categories-text flex justify-center items-center">
                            <h5 className="mb-[12px] font-Manrope text-[22px] font-bold leading-[1.2] text-[#fff] max-[575px]:mb-[10px] max-[575px]:text-[18px]">
                              Strawberry
                            </h5>
                          </div>
                          <div className="categories-button flex justify-center items-center">
                            <a
                              href="shop-left-sidebar.html"
                              className="cr-button h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]"
                            >
                              shop now
                            </a>
                          </div>
                        </div>
                        <img
                          src="assets/img/categories/9.jpg"
                          alt="categories-9"
                          className="min-w-full h-full max-w-[max-content]"
                        />
                      </div>
                    </div>
                    <div className="w-[50%] max-[420px]:w-full cr-categories-box px-[12px] mb-[24px]">
                      <div className="cr-side-categories relative overflow-hidden rounded-[5px] z-[5] max-[991px]:h-[400px] max-[575px]:h-[350px] max-[480px]:h-[300px] max-[420px]:h-[380px]">
                        <div className="categories-inner w-full h-full absolute top-[0] left-[0] p-[20px] z-[5]">
                          <h4 className="m-[0] font-Manrope text-[54px] font-bold uppercase leading-[1.2] text-[#fff] inline-flex max-[1399px]:text-[48px] max-[1199px]:text-[42px] max-[575px]:text-[34px]">
                            15
                            <span className="py-[10px] pl-[5px]">
                              <small className="block text-[19px] font-normal text-[#fff] max-[1399px]:text-[17px] max-[1199px]:text-[14px] max-[575px]:text-[12px]">
                                %
                              </small>
                              <small className="block text-[19px] font-normal text-[#fff] max-[1399px]:text-[17px] max-[1199px]:text-[14px] max-[575px]:text-[12px]">
                                Off
                              </small>
                            </span>
                          </h4>
                        </div>
                        <div className="categories-contain w-full p-[30px] absolute bottom-[0] left-[0] z-[5]">
                          <div className="categories-text flex justify-center items-center">
                            <h5 className="mb-[12px] font-Manrope text-[22px] font-bold leading-[1.2] text-[#fff] max-[575px]:mb-[10px] max-[575px]:text-[18px]">
                              Strawberry
                            </h5>
                          </div>
                          <div className="categories-button flex justify-center items-center">
                            <a
                              href="shop-left-sidebar.html"
                              className="cr-button h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]"
                            >
                              shop now
                            </a>
                          </div>
                        </div>
                        <img
                          src="assets/img/categories/10.jpg"
                          alt="categories-10"
                          className="min-w-full h-full max-w-[max-content]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCategory;
