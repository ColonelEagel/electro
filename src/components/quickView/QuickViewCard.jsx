import React from "react";

function QuickViewCard({ product }) {
  return (
    <li className="flex gap-4 h-24   lg:justify-center items-center w-full">
      <img
        src={product?.imgUrl}
        alt={product?.title}
        className="aspect-square h-full object-contain"
      />
      <div className="">
        <p className="font-bold text-blue-500 text-wrap break-words">
          {product?.title}
        </p>
        <p>{product?.price}</p>
      </div>
    </li>
  );
}

export default QuickViewCard;
