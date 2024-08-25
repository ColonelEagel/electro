import { FaCartArrowDown } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { FaCodeCompare } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

function BestSellersCard({
  type,
  description,
  price,
  oldPrice,
  onSale,
  imageUrl,
}) {
  return (
    <div className="relative group text-xs bg-white hover:shadow-2xl p-4 md:p-6 rounded-3xl w-full">
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div className="h-auto max-w-full">
          <img src={imageUrl} alt={description} />
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-4">
          <div>
            <span className="text-sm text-gray-400">{type}</span>
            <p className="text-blue-800 font-bold break-words">{description}</p>
          </div>
          <div className="pb-2 flex justify-between items-center">
            <div>
              {onSale ? (
                <div className="text-red-600 text-lg font-bold">
                  {price}
                  <span className="text-gray-500 line-through mx-2 text-xs">
                    {oldPrice}
                  </span>
                </div>
              ) : (
                <div className="text-gray-800 text-lg font-semibold">
                  {price}
                </div>
              )}
            </div>
            <Button className="p-3 text-center rounded-full bg-gray-300 group-hover:bg-yellow-400">
              <FaCartArrowDown className="text-white" />
            </Button>
          </div>
        </div>
      </div>
      <div className="pt-2 hidden group-hover:block">
        <div className="flex justify-between items-center gap-2 pt-3 border-yellow-200 border-t-2">
          <p className="flex items-center text-xs cursor-pointer">
            <FaCodeCompare className="rotate-[70deg] mr-2" size={15} />
            Compare
          </p>
          <p className="flex items-center cursor-pointer">
            <CiHeart className="mr-1" /> Wishlist
          </p>
        </div>
      </div>
    </div>
  );
}

export default BestSellersCard;
