import { FaCartArrowDown } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { FaCodeCompare } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

function BestSellersCard({ type, description, price, imageUrl }) {
  return (
    <div className="relative group text-xs bg-white hover:shadow-2xl p-6 rounded-3xl w-full  h-auto">
      <div className="flex justify-center items-center">
        {/* image */}
        <div className="h-auto max-w-full">
          <img src={imageUrl} alt="" />
        </div>
        <div className="">
          {/* head */}
          <div className="">
            <span className="text-sm text-gray-400">{type}</span>
            <p className="text-blue-800 font-bold w-2/3 break-words">
              {description}
            </p>
          </div>
          {/* price */}
          <div className=" pb-2 flex justify-between items-center">
            <p>{price}</p>
            <Button className="p-3 text-center rounded-full bg-gray-300 group-hover:bg-yellow-400">
              <FaCartArrowDown className="text-white" />
            </Button>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="pt-2">
        {/* compare add to wishlist */}
        <div className=" absolute left-0 visible hidden  items-center group-hover:block  py-8 px-4 h-auto w-full z-20 bg-white">
          <div className="w-11/12 flex justify-between items-center gap-2 pt-3 border-yellow-200 border-t-2  ">
            <p className="flex justify-center items-center text-xs cursor-pointer">
              <FaCodeCompare className="rotate-[70deg] mr-2" size={15} />
              Compare
            </p>
            <p className="flex justify-end items-center cursor-pointer text-nowrap">
              <CiHeart className="mr-1" /> Add to Wishlist
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSellersCard;
