import SectionHead from "@/components/ui/SectionHead";
import Container from "@/components/ui/Container";

import QuickViewCard from "./QuickViewCard";

// FeaturedProducts img
import FeaturedProductsimg1 from "@/assets/images/quickVIew/featuredProducts/img1.png";
import FeaturedProductsimg2 from "@/assets/images/quickVIew/featuredProducts/img2.png";
import FeaturedProductsimg3 from "@/assets/images/quickVIew/featuredProducts/img3.png";

// onSaleProducts img
import onSaleProductsimg1 from "@/assets/images/quickVIew/onSaleProducts/img1.png";
import onSaleProductsimg2 from "@/assets/images/quickVIew/onSaleProducts/img2.png";
import onSaleProductsimg3 from "@/assets/images/quickVIew/onSaleProducts/img3.png";

// topSellingProducts
import topSellingProductsimg1 from "@/assets/images/quickVIew/topSellingProducts/img1.png";
import topSellingProductsimg2 from "@/assets/images/quickVIew/topSellingProducts/img2.png";
import topSellingProductsimg3 from "@/assets/images/quickVIew/topSellingProducts/img3.png";

// Array of featured products

function QuickView() {
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

  // Array of onSale products

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

  // Array of topSelling products
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
  <div className="w-full">
    <SectionHead>Featured Products</SectionHead>
    <ul className="mt-4 lg:mt-7 flex flex-col justify-start items-center md:items-start">
      {FeaturedProducts.map((product) => (
        <QuickViewCard key={product.id} product={product} />
      ))}
    </ul>
  </div>
  <div className="w-full">
    <SectionHead>onSale products</SectionHead>
    <ul className="mt-4 lg:mt-7 flex flex-col justify-start items-center md:items-start">
      {onSaleProducts.map((product) => (
        <QuickViewCard key={product.id} product={product} />
      ))}
    </ul>
  </div>
  <div className="w-full">
    <SectionHead>top rated products</SectionHead>
    <ul className="mt-4 lg:mt-7 flex flex-col justify-start items-center md:items-start">
      {topSellingProducts.map((product) => (
        <QuickViewCard key={product.id} product={product} />
      ))}
    </ul>
  </div>
</Container>

  );
}

export default QuickView;
