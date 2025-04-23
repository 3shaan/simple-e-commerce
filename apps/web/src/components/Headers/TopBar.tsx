import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";

const TopBar = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <div className="top-header py-[20px] flex flex-row gap-[10px] justify-between border-b-[1px] border-solid border-[#e9e9e9] relative z-[4] max-[575px]:py-[15px] max-[575px]:block">
              <Link
                href="/"
                className="cr-logo max-[575px]:mb-[15px] max-[575px]:flex max-[575px]:justify-center"
              >
                <Image
                  src="/assets/img/logo/logo.png"
                  alt="logo"
                  className="logo block h-[35px] w-[115px] max-[575px]:w-[100px]"
                  width={100}
                  height={100}
                />
                <Image
                  src="/assets/img/logo/dark-logo.png"
                  alt="logo"
                  className="dark-logo hidden h-[35px] w-[115px] max-[575px]:w-[100px]"
                  width={100}
                  height={100}
                />
              </Link>

              <SearchBar />

              <div className="cr-right-bar flex max-[991px]:hidden">
                {/* <ul className="navbar-nav m-auto relative z-[3]">
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
                  </ul> */}
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
    </div>
  );
};

export default TopBar;
