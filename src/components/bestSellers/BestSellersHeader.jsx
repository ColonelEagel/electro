function BestSellersHeader() {
  return (
    <div className="flex justify-between py-2 border-b-2 border-gray-200 w-full">
      <div className="text-xl  text-center mb-4 self-start relative after:contents-[''] after:absolute after:bottom-[-26px] after:left-0 after:right-0 after:h-[2px] after:bg-yellow-300 ">
        Bestsellers
      </div>
      <div className="flex gap-8 items-center justify-center">
        <span className="rounded-full px-4  border-2 border-yellow-300 ">
          top 20
        </span>
        <span className="text-gray-600">phones & tablets</span>
        <span className="text-gray-600">laptops & computers</span>
        <span className="text-gray-600"> video cameras</span>
      </div>
    </div>
  );
}

export default BestSellersHeader;
