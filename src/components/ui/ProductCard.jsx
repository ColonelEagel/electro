import { FaCartArrowDown } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { FaCodeCompare } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

function ProductCard({
  type,
  description,
  price,
  oldPrice,
  onSale,
  imageUrl,
  isLarge,
}) {
  return (
    <div className="relative group text-xs bg-white hover:shadow-2xl p-4 rounded-3xl w-full  h-auto">
      <div className="">
        {/* head */}
        <div className="text-sm">
          <span className=" text-gray-400">{type}</span>
          <p className="text-blue-600 font-bold w-2/3 break-words">
            {description}
          </p>
        </div>
        {/* image */}
        <div className="w-full">
          <img src={imageUrl} alt="" draggable="false" />
        </div>
        {/* price */}
        <div className=" pb-2 flex justify-between items-center">
          <div>
            {onSale && (
              <div className="text-red-600 text-lg font-bold">
                {price}
                <span className="text-gray-500 line-through ml-2">
                  {oldPrice}
                </span>
              </div>
            )}
            {!onSale && (
              <div className="text-gray-800 text-lg font-semibold">{price}</div>
            )}
          </div>
          <Button className="p-3 text-center rounded-full bg-gray-300 group-hover:bg-yellow-400">
            <FaCartArrowDown className="text-white" />
          </Button>
        </div>
      </div>

      {/* footer */}
      <div className="pt-2">
        {/* compare add to wishlist */}
        <div className=" absolute left-0 visible hidden  items-center group-hover:block  py-8 px-4 h-auto w-full z-20 bg-white">
          <div className="w-11/12 flex justify-between items-center gap-2 pt-3 border-yellow-200 border-t-2  ">
            <p className="flex justify-center items-center text-xs cursor-pointer">
              <FaCodeCompare className="rotate-[70deg] mr-2" size={15} />
              Compare {isLarge && "Add to Cart"}
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

export default ProductCard;
