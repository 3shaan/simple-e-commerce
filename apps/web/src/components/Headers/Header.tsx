"use client";
import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "@web/utils/trpc";
import MobileNavbar from "./MobileNavbar";
import QuickCategoryShow from "./QuickCategoryShow";
import TopBar from "./TopBar";

const Header = () => {
  const trpc = useTRPC();
  const { data: menuList } = useQuery({
    ...trpc.menuRouter.findAll.queryOptions(),
    staleTime: 4000,
    placeholderData: [],
  });
  console.log(menuList);
  return (
    <div className="bg-red-500">
      <header className="h-[142px] max-[991px]:h-[133px] max-[575px]:h-[173px] bg-[#fff] border-b-[1px] border-solid border-[#e9e9e9]">
        <TopBar />
        <div className="cr-fix" id="cr-main-menu-desk">
          <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div className="cr-menu-list w-full px-[12px] relative flex items-center flex-row justify-between">
              <QuickCategoryShow />
              <nav className="justify-between relative flex flex-wrap items-center max-[991px]:w-full max-[991px]:py-[10px]">
                <MobileNavbar />
                <div
                  className="min-[992px]:flex min-[992px]:basis-auto grow-[1] items-center hidden"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav flex min-[992px]:flex-row items-center m-auto relative z-[3] min-[992px]:flex-row max-[1199px]:mr-[-5px] max-[991px]:m-[0]">
                    <li className="nav-item    relative mr-[25px] max-[1399px]:mr-[20px] max-[1199px]:mr-[30px]">
                      <a
                        className="nav-link  font-Poppins text-[14px] font-medium block text-[#000] z-[1] flex items-center relative py-[11px] px-[8px] max-[1199px]:py-[8px] max-[1199px]:px-[0]"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item dropdown relative mr-[25px] max-[1399px]:mr-[20px] max-[1199px]:mr-[30px]">
                      <a
                        className="nav-link dropdown-toggle font-Poppins text-[14px] font-medium block text-[#000] z-[1] flex items-center relative py-[11px] px-[8px] max-[1199px]:py-[8px] max-[1199px]:px-[0]"
                        href="/"
                      >
                        Category
                      </a>
                    </li>
                    <li className="nav-item dropdown relative mr-[25px] max-[1399px]:mr-[20px] max-[1199px]:mr-[30px]">
                      <a
                        className="nav-link dropdown-toggle font-Poppins text-[14px] font-medium block text-[#000] z-[1] flex items-center relative py-[11px] px-[8px] max-[1199px]:py-[8px] max-[1199px]:px-[0]"
                        href="/"
                      >
                        Products
                      </a>
                      {/* <ul className="dropdown-menu transition-all duration-[0.3s] ease-in-out py-[8px] min-w-[160px] mt-[35px] absolute text-left opacity-0 invisible left-auto bg-[#fff] rounded-[5px] block z-[9] border-[1px] border-solid border-[#e9e9e9]">
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
                      </ul> */}
                    </li>

                    <li className="nav-item dropdown relative mr-[25px] max-[1399px]:mr-[20px] max-[1199px]:mr-[30px]">
                      <a
                        className="nav-link dropdown-toggle font-Poppins text-[14px] font-medium block text-[#000] z-[1] flex items-center relative py-[11px] px-[8px] max-[1199px]:py-[8px] max-[1199px]:px-[0]"
                        href="/"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="nav-item dropdown relative">
                      <a
                        className="nav-link dropdown-toggle font-Poppins text-[14px] font-medium block text-[#000] z-[1] flex items-center relative py-[11px] px-[8px] max-[1199px]:py-[8px] max-[1199px]:px-[0]"
                        href="/"
                      >
                        Gallery
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="cr-calling flex justify-end items-center max-[1199px]:hidden">
                <i className="ri-phone-line pr-[5px] text-[20px]" />
                <a
                  href="tel:+8801780086945"
                  className="text-[15px] font-medium"
                >
                  +8801780086945
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
