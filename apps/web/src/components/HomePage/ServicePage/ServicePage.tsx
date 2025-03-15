const ServicePage = () => {
  return (
    <div>
      <section className="section-services pb-[100px] max-[1199px]:pb-[70px] relative">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-[12px]">
              <div
                className="cr-services-border"
                data-aos="fade-up"
                data-aos-duration={2000}
              >
                <div className="cr-service-slider swiper-container">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="cr-services p-[24px] bg-[#f7f7f8] rounded-[5px] border-[1px] border-solid border-[#e9e9e9] flex flex-col max-[767px]:justify-center">
                        <div className="cr-services-image mt-auto mr-auto mb-[12px] ml-auto block">
                          <i className="ri-red-packet-line text-[43px] leading-[40px] text-[#64b496]" />
                        </div>
                        <div className="cr-services-contain max-[767px]:text-center">
                          <h4 className="mb-[5px] text-[18px] font-Poppins text-[#2b2b2d] leading-[1.667] font-semibold text-center max-[1399px]:text-[17px] max-[767px]:text-[15px]">
                            Product Packing
                          </h4>
                          <p className="font-Poppins text-[14px] leading-[22px] font-light text-center text-[#7a7a7a]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="cr-services p-[24px] bg-[#f7f7f8] rounded-[5px] border-[1px] border-solid border-[#e9e9e9] flex flex-col max-[767px]:justify-center">
                        <div className="cr-services-image mt-auto mr-auto mb-[12px] ml-auto block">
                          <i className="ri-customer-service-2-line text-[43px] leading-[40px] text-[#64b496]" />
                        </div>
                        <div className="cr-services-contain max-[767px]:text-center">
                          <h4 className="mb-[5px] text-[18px] font-Poppins text-[#2b2b2d] leading-[1.667] font-semibold text-center max-[1399px]:text-[17px] max-[767px]:text-[15px]">
                            24X7 Support
                          </h4>
                          <p className="font-Poppins text-[14px] leading-[22px] font-light text-center text-[#7a7a7a]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="cr-services p-[24px] bg-[#f7f7f8] rounded-[5px] border-[1px] border-solid border-[#e9e9e9] flex flex-col max-[767px]:justify-center">
                        <div className="cr-services-image mt-auto mr-auto mb-[12px] ml-auto block">
                          <i className="ri-truck-line text-[43px] leading-[40px] text-[#64b496]" />
                        </div>
                        <div className="cr-services-contain max-[767px]:text-center">
                          <h4 className="mb-[5px] text-[18px] font-Poppins text-[#2b2b2d] leading-[1.667] font-semibold text-center max-[1399px]:text-[17px] max-[767px]:text-[15px]">
                            Delivery in 5 Days
                          </h4>
                          <p className="font-Poppins text-[14px] leading-[22px] font-light text-center text-[#7a7a7a]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="cr-services p-[24px] bg-[#f7f7f8] rounded-[5px] border-[1px] border-solid border-[#e9e9e9] flex flex-col max-[767px]:justify-center">
                        <div className="cr-services-image mt-auto mr-auto mb-[12px] ml-auto block">
                          <i className="ri-money-dollar-box-line text-[43px] leading-[40px] text-[#64b496]" />
                        </div>
                        <div className="cr-services-contain max-[767px]:text-center">
                          <h4 className="mb-[5px] text-[18px] font-Poppins text-[#2b2b2d] leading-[1.667] font-semibold text-center max-[1399px]:text-[17px] max-[767px]:text-[15px]">
                            Payment Secure
                          </h4>
                          <p className="font-Poppins text-[14px] leading-[22px] font-light text-center text-[#7a7a7a]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing.
                          </p>
                        </div>
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

export default ServicePage;
