import { FaCartArrowDown } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { FaCodeCompare } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

import { cn } from "@/lib/utils";
function ProductCard({
  type,
  description,
  price,
  oldPrice,
  onSale,
  imageUrl,
  isLarge,
  className,
}) {
  return (
    <div
      className={cn(
        "relative group text-xs bg-white hover:shadow-2xl p-4 w-full flex flex-col justify-between items-center",
        isLarge ? "h-full lg:col-span-2" : "h-auto", // Adjust height and col-span for large cards
        className
      )}
    >
      <div className="w-full">
        {/* head */}
        <div className="text-sm">
          <span className="text-gray-400">{type}</span>
          <p
            className={`text-blue-600 font-bold break-words ${
              isLarge ? "text-xl" : ""
            }`}
          >
            {description}
          </p>
        </div>
        {/* image */}
        <div
          className={`flex justify-center items-center w-full ${
            isLarge ? "w-full" : "h-48"
          }`}
        >
          <img
            src={imageUrl}
            alt=""
            draggable="false"
            className="object-contain w-full h-full"
          />
        </div>
        {/* price */}
        <div className="pb-2 flex justify-between items-center w-full">
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
          <Button
            className={`p-3 text-center rounded-full bg-gray-300 group-hover:bg-yellow-400 ${
              isLarge ? "text-lg" : ""
            }`}
          >
            <FaCartArrowDown className="text-white" />
          </Button>
        </div>
      </div>

      {/* footer */}
      <div className="pt-2 w-full">
        {/* compare add to wishlist */}
        <div className="absolute left-0 hidden group-hover:block py-8 px-4 h-auto w-full z-20 bg-white">
          <div className="w-full flex justify-between items-center gap-2 pt-3 border-yellow-200 border-t-2">
            <p className="flex justify-center items-center text-xs cursor-pointer">
              <FaCodeCompare className="rotate-[70deg] mr-2" size={15} />
              Compare {isLarge && "Add to Cart"}
            </p>
            <p className="flex justify-end items-center cursor-pointer">
              <CiHeart className="mr-1" /> Add to Wishlist
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
