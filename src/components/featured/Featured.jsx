// Import components
import Container from "@/components/ui/Container";
import SpecialOfferCard from "./SpecialOfferCard";
import ProductCard from "../ui/ProductCard";

// Import images
import img1 from "@/assets/images/featured/img-1.jpg"; // speakers
import img2 from "@/assets/images/featured/img2.jpg"; // laptops
import img3 from "@/assets/images/featured/img3.jpg"; // headphones
import img4 from "@/assets/images/featured/img4.jpg"; // smartphones
import img5 from "@/assets/images/featured/img5.jpg"; // cameras
import img6 from "@/assets/images/featured/img6.jpg"; // printers

// Array of featured products
/**
 * Featured Products Component
 *
 * This component renders all the featured products from the server
 * with a special offer card at the top and the products in a grid below
 *
 */
const products = [
  {
    id: 1,
    type: "speakers",
    description: "wireless audio system multiroom 360 ",
    price: "$685,00",
    imageUrl: img1,
  },
  {
    id: 2,
    type: "laptops",
    description: "tablet white eliteBook revolve 810 g2 ",
    price: "$685,00",
    imageUrl: img2,
  },
  {
    id: 3,
    type: "headphones",
    description: "purple solo 2 wirelesss",
    price: "$248,99",
    imageUrl: img3,
  },
  {
    id: 4,
    type: "smartphones",
    description: "smartphone 65 32GB LTE",
    price: "$1 215,00",
    imageUrl: img4,
  },
  {
    id: 5,
    type: "cameras",
    description: "widescreen NX ,ini f1 SMART NX",
    price: "$559,00",
    imageUrl: img5,
  },
  {
    id: 6,
    type: "printers",
    description: "full laserjet pro m452dn",
    price: "$685,00",
    imageUrl: img6,
  },
];

function Featured() {
  return (
    <Container className="flex flex-col md:flex-row p-2 lg:p-8 md:w-full xl:w-3/4 justify-center items-center">
      {/* special offer card */}
      <div className="">
        <SpecialOfferCard />
      </div>
      {/* Featured Products */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3  flex-1 md:order-1 lg:order-2">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            type={product.type}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </Container>
  );
}

export default Featured;
