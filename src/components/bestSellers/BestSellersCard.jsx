// Import react icons
import { FaCartArrowDown } from "react-icons/fa"; // cart icon
import { FaCodeCompare } from "react-icons/fa6"; // compare icon
import { CiHeart } from "react-icons/ci"; // heart icon

// Import components
import Button from "@/components/ui/Button"; // button component
/**
 * A component that renders a single best sellers card.
 *
 * @param {Object} props The component props.
 * @param {string} props.type The type of product.
 * @param {string} props.description The description of the product.
 * @param {string} props.price The price of the product.
 * @param {string} [props.oldPrice] The old price of the product if it's on sale.
 * @param {boolean} [props.onSale] Whether the product is on sale or not.
 * @param {string} props.imageUrl The URL of the image to be rendered.
 * @returns {ReactElement} The JSX element to be rendered.
 */
function BestSellersCard({
  type,
  description,
  price,
  oldPrice,
  onSale,
  imageUrl,
}) {
  return (
    <div className="relative group text-xs bg-white hover:shadow-2xl p-4 md:p-6 w-full">
      {/* header */}
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div className="h-auto max-w-full">
          {/* image */}
          <img src={imageUrl} alt={description} />
        </div>
        <div className="mt-8 sm:ml-4">
          {/* text */}
          <div>
            <span className="text-sm text-gray-400">{type}</span>
            <p className="text-blue-800 font-bold break-words">{description}</p>
          </div>
          {/* price and buttons */}
          <div className="pb-2 flex justify-between items-center mt-4">
            {/* price */}
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
            {/* cart button */}
            <Button className="p-3 text-center rounded-full bg-gray-300 group-hover:bg-yellow-400">
              <FaCartArrowDown className="text-white" />
            </Button>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="pt-2 w-full ">
        {/* compare add to wishlist */}
        <div className="absolute left-0 hidden group-hover:block py-8 px-4 h-auto w-full z-20 bg-white">
          <div className="w-full flex justify-between items-center gap-2 pt-3 border-yellow-200 border-t-2">
            {/* compare button */}
            <p className="flex justify-center items-center text-xs cursor-pointer">
              <FaCodeCompare className="rotate-[70deg] mr-2" size={15} />
              Compare
            </p>
            {/* wishlist button */}
            <p className="flex justify-end items-center cursor-pointer">
              <CiHeart className="mr-1" /> Add to Wishlist
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSellersCard;
