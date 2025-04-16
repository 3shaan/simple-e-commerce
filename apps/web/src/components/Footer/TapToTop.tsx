import { ArrowUp } from "lucide-react";

const TapToTop = () => {
  return (
    <div>
      <a
        href="#Top"
        className="back-to-top result-placeholder h-[38px] w-[38px] hidden fixed right-[15px] bottom-[15px] z-[10] cursor-pointer rounded-[20px] bg-[#fff] text-[#64b496] border-[1px] border-solid border-[#64b496] text-center text-[22px] leading-[1.6] hover:transition-all hover:duration-[0.3s] hover:ease-in-out"
      >
        <ArrowUp className="text-[20px]" />

        <div className="back-to-top-wrap">
          <svg
            viewBox="-1 -1 102 102"
            className="w-[36px] h-[36px] fixed right-[16px] bottom-[16px]"
          >
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              className="fill-transparent stroke-[#64b496] stroke-[5px]"
            />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default TapToTop;
