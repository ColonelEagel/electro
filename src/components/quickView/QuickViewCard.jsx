/**
 * QuickViewCard component
 * 
 * This component renders a single quick view card in the QuickView component.
 * It takes a product object as a prop and renders the product image, title and price.
 * The component is a list item with a flex layout.
 * @param {Object} props The component props.
 * @param {Object} props.product The product object to be rendered.
 * @returns {ReactElement} The JSX element to be rendered.
 */
function QuickViewCard({ product }) {
  return (
    <li className="flex gap-4 h-24   lg:justify-center items-center w-full">
      {/* Product image */}
      <img
        src={product?.imgUrl}
        alt={product?.title}
        className="aspect-square h-full object-contain"
      />

      {/* Product title and price */}
      <div className="">
        <p className="font-bold text-blue-500 text-wrap break-words">
          {/* Product title */}
          {product?.title}
        </p>
        <p>{product?.price}</p>
      </div>
    </li>
  );
}

export default QuickViewCard;