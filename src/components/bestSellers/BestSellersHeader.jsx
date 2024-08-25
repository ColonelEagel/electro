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
      <div className="text-xl text-center mb-4 relative">
        Bestsellers
        <div className="absolute bottom-[-10px] left-0 right-0 h-[2px] bg-yellow-300" />
      </div>
      <div className="flex flex-wrap gap-2 items-center justify-center">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            index={index}
            className={`px-4 py-2 text-sm rounded-full ${
              index === 0 ? "border-2 border-yellow-300" : ""
            }`}
          >
            {tab}
          </Tab>
        ))}
      </div>
    </div>
  );
}

export default BestSellersHeader;
