import Tab from "@/components/ui/Tab";
import ProductCard from "@/components/ui/ProductCard";
import Container from "@/components/ui/Container";

// import images
import img1 from "@/assets/images/bestDeals/img1.png"; // speakers
import img2 from "@/assets/images/bestDeals/img2.png"; // laptops
import img3 from "@/assets/images/bestDeals/img3.png"; // headphones
import img4 from "@/assets/images/bestDeals/img4.png"; // smartphones
import img5 from "@/assets/images/bestDeals/img5.png"; // cameras

function BestDealsGrid() {
  const tabs = [
    "Best Deals",
    "TV & Video",
    "Cameras",
    "Audio",
    "Cell Phones",
    "GPS & Navi",
    "Computers",
    "Portable Audio",
    "Accessories",
  ];

  return (
    <Container className="block mx-auto w-full">
      <div className="flex space-x-4 border-b pb-2 mb-4 w-full justify-between">
        {tabs.map((tab, index) => (
          <Tab key={index} index={index}>
            {tab}
          </Tab>
        ))}
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-4 gap-4">
        <div className="lg:col-span-1">
          <ProductCard
            imageUrl={img1}
            type="smartwatchs"
            description="Smartwatch 2.0 LTE Wifi"
            price="$399.00"
          />
          <ProductCard
            imageUrl={img2}
            type="computer components"
            description="Nerocool EN5677 Dead Silence Gaming Cube Case"
            price="$180.00"
          />
        </div>
        <div className="lg:col-span-2">
          <ProductCard
            imageUrl={img3}
            type="tvs"
            description="Widescreen 4K SUHD TV"
            price="$2,999.00"
            oldPrice="$3,299.00"
            isLarge={true}
            onSale={true}
          />
        </div>
        <div className="lg:col-span-1">
          <ProductCard
            imageUrl={img4}
            type="tablets"
            description="Galaxy Tablet S2 WiFi 62GB LTE Internet"
            price="$428.00"
          />
          <ProductCard
            imageUrl={img5}
            type="cameras"
            description="Camera C430W 4K with Waterproof Cover"
            price="$782.00"
          />
        </div>
      </div>
    </Container>
  );
}

export default BestDealsGrid;
