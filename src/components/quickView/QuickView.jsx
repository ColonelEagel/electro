// Import images for featured products, on sale products, and top selling products
// Featured products
import FeaturedProductsimg1 from "@/assets/images/quickVIew/featuredProducts/img1.png"; // tablet
import FeaturedProductsimg2 from "@/assets/images/quickVIew/featuredProducts/img2.png"; // laptop
import FeaturedProductsimg3 from "@/assets/images/quickVIew/featuredProducts/img3.png"; // headphones

// On sale products
import onSaleProductsimg1 from "@/assets/images/quickVIew/onSaleProducts/img1.png"; // game console
import onSaleProductsimg2 from "@/assets/images/quickVIew/onSaleProducts/img2.png"; // tablet
import onSaleProductsimg3 from "@/assets/images/quickVIew/onSaleProducts/img3.png"; // audio system

// Top selling products
import topSellingProductsimg1 from "@/assets/images/quickVIew/topSellingProducts/img1.png"; // ultrabook
import topSellingProductsimg2 from "@/assets/images/quickVIew/topSellingProducts/img2.png"; // laptop
import topSellingProductsimg3 from "@/assets/images/quickVIew/topSellingProducts/img3.png"; // smartphones


// Import components
import SectionHead from "@/components/ui/SectionHead";
import Container from "@/components/ui/Container";

import QuickViewCard from "./QuickViewCard";

function QuickView() {
  // Featured products
  // An array of objects, each representing a product
  const FeaturedProducts = [
    {
      id: 1,
      title: "Tablet Thin EliteBook Revolve 810 G6",
      price: "$1,300.00",
      imgUrl: FeaturedProductsimg1,
    },
    {
      id: 2,
      title: "Notebook Widescreen Z51-70 40K6013UPB",
      price: "$1,300.00",
      imgUrl: FeaturedProductsimg2,
    },
    {
      id: 3,
      title: "Smartphone 6S 128GB LTE",
      price: "$750.00",
      imgUrl: FeaturedProductsimg3,
    },
  ];


  // On sale products
  // An array of objects, each representing a product
  const onSaleProducts = [
    {
      id: 1,
      title: "Game Console Controller + USB 3.0 Cable",
      price: "$99.00",
      imgUrl: onSaleProductsimg1,
    },
    {
      id: 2,
      title: "Tablet Thin EliteBook Revolve 810 G6",
      price: "$1,300.00",
      imgUrl: onSaleProductsimg2,
    },
    {
      id: 3,
      title: "Wireless Audio System Multiroom 360",
      price: "$750.00",
      imgUrl: onSaleProductsimg3,
    },
  ];


  // Top selling products
  // An array of objects, each representing a product
  const topSellingProducts = [
    {
      id: 1,
      title: "Ultrabook UX305CA-FC050T",
      price: "$99.00",
      imgUrl: topSellingProductsimg1,
    },
    {
      id: 2,
      title: "Apple MacBook Pro MF841HN/A 13-inch Laptop",
      price: "$1,300.00",
      imgUrl: topSellingProductsimg2,
    },
    {
      id: 3,
      title: "Notebook Black Spire V Nitro VN7-591G",
      price: "$750.00",
      imgUrl: topSellingProductsimg3,
    },
  ];

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-8 w-full">
      {/* featured products section */}
      <div className="w-full">
        <SectionHead>Featured Products</SectionHead>
        <ul className="mt-4 lg:mt-7 flex flex-col justify-start items-center md:items-start">
          {/* map over the array of featured products and render a QuickViewCard component for each one */}
          {FeaturedProducts.map((product) => (
            <QuickViewCard key={product.id} product={product} />
          ))}
        </ul>
      </div>

      {/* onSale products section */}
      <div className="w-full">
        <SectionHead>onSale products</SectionHead>
        <ul className="mt-4 lg:mt-7 flex flex-col justify-start items-center md:items-start">
          {/* map over the array of onSale products and render a QuickViewCard component for each one */}
          {onSaleProducts.map((product) => (
            <QuickViewCard key={product.id} product={product} />
          ))}
        </ul>
      </div>

      {/* top rated products section */}
      <div className="w-full">
        <SectionHead>top rated products</SectionHead>
        <ul className="mt-4 lg:mt-7 flex flex-col justify-start items-center md:items-start">
          {/* map over the array of topSellingProducts and render a QuickViewCard component for each one */}
          {topSellingProducts.map((product) => (
            <QuickViewCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </Container>

  );
}

export default QuickView;
