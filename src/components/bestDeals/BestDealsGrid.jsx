/**
 * A component that renders a grid of best deals.
 *
 * @returns {ReactElement} The JSX element to be rendered.
 */

// Import components
import Tab from "@/components/ui/Tab";
import ProductCard from "@/components/ui/ProductCard";
import Container from "@/components/ui/Container";

// Import images
// The images are used in the best deals section in the homepage.
import img1 from "@/assets/images/bestDeals/img1.png"; // speakers
import img2 from "@/assets/images/bestDeals/img2.png"; // laptops
import img3 from "@/assets/images/bestDeals/img3.png"; // headphones
import img4 from "@/assets/images/bestDeals/img4.png"; // smartphones
import img5 from "@/assets/images/bestDeals/img5.png"; // cameras
/**
 * A component that renders a grid of best deals.
 *
 * @returns {ReactElement} The JSX element to be rendered.
 */
function BestDealsGrid() {
  /**
   * An array of tabs for the best deals section.
   *
   * @type {Array<string>}
   */
  const tabs = [
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
    <div className="bg-gray-100 py-9">
      <Container className="block mx-auto w-full ">
        {/* header */}
        <div className="flex flex-wrap space-x-4 border-b pb-2 mb-4 w-full justify-between items-center">
          <div className="w-full xl:w-auto text-xl text-center mb-4 xl:mb-0 self-start relative after:contents-[''] after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:h-[2px] after:bg-yellow-300 after:hidden after:xl:block">
            Best Deals
          </div>
          <div className="flex flex-wrap justify-center gap-2 xl:gap-4 w-full xl:w-auto">
            {tabs.map((tab, index) => (
              <Tab key={index} index={index} className="text-sm xl:text-base">
                {tab}
              </Tab>
            ))}
          </div>
        </div>

        {/* products grid */}
        <div className="grid grid-cols-1  lg:grid-cols-4 gap-4">
          {/* left column */}
          <div className="lg:col-span-1">
            <ProductCard
              imageUrl={img1}
              type="smartwatchs"
              description="Smartwatch 2.0 LTE Wifi"
              price="$399.00"
              className="mb-6"
            />
            <ProductCard
              imageUrl={img2}
              type="computer components"
              description="Nerocool EN5677 Dead Silence Gaming Cube Case"
              price="$180.00"
            />
          </div>
          {/* middle column */}
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
          {/* right column */}
          <div className="lg:col-span-1">
            <ProductCard
              imageUrl={img4}
              type="tablets"
              description="Galaxy Tablet S2 WiFi 62GB LTE Internet"
              price="$428.00"
              className="mb-6"
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
    </div>
  );
}

export default BestDealsGrid;
