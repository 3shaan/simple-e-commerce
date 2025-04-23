import { Star } from "lucide-react";
import Image from "next/image";

const ProductReview = () => {
  return (
    <div>
      <div className="cr-tab-content-from pt-[30px]">
        <div className="post mb-[30px]">
          {/* Review 1 */}
          <div className="content flex sm:flex-row flex-col">
            <Image
              src="/assets/img/review/1.jpg"
              alt="review"
              className="h-[50px] w-[50px] mr-6 rounded-[5px] sm:mb-0 mb-6"
              width={100}
              height={100}
            />
            <div className="details flex flex-col">
              <span className="date mb-[10px] text-[13px] text-[#777]">
                Jan 08, 2024
              </span>
              <span className="name mb-[10px] font-medium text-[17px]">
                Oreo Noman
              </span>
            </div>
            <div className="cr-t-review-rating ml-auto mb-5 sm:ml-auto sm:mb-5 ml-0">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="text-[19px] text-[#f5885f] fill-[#f5885f]"
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="m-0 font-normal text-sm text-[#7a7a7a] leading-relaxed sm:pl-[74px] pl-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in
            vero sapiente doloribus debitis corporis, eaque dicta, repellat
            amet, illum adipisci vel perferendis dolor! quae vero in perferendis
            provident quis.
          </p>

          {/* Review 2 */}
          <div className="content mt-[30px] flex sm:flex-row flex-col">
            <Image
              src="/assets/img/review/2.jpg"
              alt="review"
              className="h-[50px] w-[50px] mr-6 rounded-[5px] sm:mb-0 mb-6"
              width={100}
              height={100}
            />
            <div className="details flex flex-col">
              <span className="date mb-[10px] text-[13px] text-[#777]">
                Mar 22, 2024
              </span>
              <span className="name mb-[10px] font-medium text-[17px]">
                Lina Wilson
              </span>
            </div>
            <div className="cr-t-review-rating ml-auto mb-5 sm:ml-auto sm:mb-5 ml-0">
              <div className="flex">
                {[1, 2, 3, 4].map((star) => (
                  <Star
                    key={star}
                    className="text-[19px] text-[#f5885f] fill-[#f5885f]"
                  />
                ))}
                <Star className="text-[19px] text-[#f5885f]" />
              </div>
            </div>
          </div>
          <p className="m-0 font-normal text-sm text-[#7a7a7a] leading-relaxed sm:pl-[74px] pl-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in
            vero sapiente doloribus debitis corporis, eaque dicta, repellat
            amet, illum adipisci vel perferendis dolor! quae vero in perferendis
            provident quis.
          </p>
        </div>

        {/* Add Review Form */}
        <h4 className="heading font-normal text-base font-medium leading-normal text-[#2b2b2d] pb-[10px] mb-2">
          Add a Review
        </h4>
        <form action="javascript:void(0)">
          <div className="cr-ratting-star flex">
            <span className="font-normal text-sm text-[#7a7a7a] leading-relaxed mr-[10px]">
              Your rating :
            </span>
            <div className="cr-t-review-rating mb-5">
              <div className="flex">
                {[1, 2].map((star) => (
                  <Star
                    key={star}
                    className="text-[19px] text-[#f5885f] fill-[#f5885f]"
                  />
                ))}
                {[3, 4, 5].map((star) => (
                  <Star key={star} className="text-[19px] text-[#f5885f]" />
                ))}
              </div>
            </div>
          </div>
          <div className="cr-ratting-input mb-[10px]">
            <input
              name="your-name"
              placeholder="Name"
              type="text"
              className="w-full h-[50px] py-[5px] px-5 outline-none border border-solid border-[#e9e9e9] rounded-[5px] text-[#777] text-sm"
            />
          </div>
          <div className="cr-ratting-input mb-[10px]">
            <input
              name="your-email"
              placeholder="Email*"
              type="email"
              required
              className="w-full h-[50px] py-[5px] px-5 outline-none border border-solid border-[#e9e9e9] rounded-[5px] text-[#777] text-sm"
            />
          </div>
          <div className="cr-ratting-input form-submit">
            <textarea
              name="your-commemt"
              placeholder="Enter Your Comment"
              className="w-full h-[150px] mb-4 p-5 bg-transparent text-sm border border-solid border-[#e9e9e9] rounded-[5px] text-[#777] outline-none"
            ></textarea>
            <button
              className="cr-button h-10 font-bold transition-all duration-300 ease-in-out py-2 px-5 text-sm font-normal capitalize leading-tight bg-[#64b496] text-white border border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-black hover:border-black"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductReview;
