import Tab from "@/components/ui/Tab";

function BestSellersHeader() {
  const tabs = [
    "top 20",
    "phones & tablets",
    "laptops & computers",
    "video cameras",
  ];

  return (
    <div className="flex flex-wrap justify-between py-2 border-b-2 border-gray-200 w-full">
      <div className="flex flex-wrap space-x-4 border-b pb-2 mb-4 w-full justify-between items-center">
        <div className="w-full xl:w-auto text-xl text-center mb-4 xl:mb-0 self-start relative after:contents-[''] after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:h-[2px] after:bg-yellow-300 after:hidden after:xl:block">
        Bestsellers
        </div>
        <div className="flex flex-wrap justify-center gap-2 xl:gap-4 w-full xl:w-auto">
          {tabs.map((tab, index) => (
            <Tab key={index} index={index} className="text-sm xl:text-base">
              {tab}
            </Tab>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestSellersHeader;
