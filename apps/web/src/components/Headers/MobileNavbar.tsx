const MobileNavbar = () => {
  return (
    <>
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
    </>
  );
};

export default MobileNavbar;
