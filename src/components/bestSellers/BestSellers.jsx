import Container from "@/components/ui/Container";
import BestSellersHeader from "./BestSellersHeader";
import BestSellersCard from "./BestSellersCard";

import img1 from "@/assets/images/bestSellers/img1.jpg";
import img2 from "@/assets/images/bestSellers/img2.jpg";
import img3 from "@/assets/images/bestSellers/img3.jpg";
import img4 from "@/assets/images/bestSellers/img4.jpg";
import img5 from "@/assets/images/bestSellers/img5.jpg";
import img6 from "@/assets/images/bestSellers/img6.jpg";

const products = [
  {
    id: 1,
    type: "tablets",
    description: "tablet Tablet Air 3 WiFi 64GB Gold ",
    price: "$629,00",
    imageUrl: img1,
    imgALt: "tablet",
  },
  {
    id: 2,
    type: "laptops & computers",
    description: "Tablet White EliteBook  Revolve 810 G2 ",
    price: "$1 299,00",
    imageUrl: img2,
    imgALt: "laptop",
  },
  {
    id: 3,
    type: "Accesories",
    description: "Pendrive USB 3.0 Flash 64 GB",
    price: "$110,00",
    imageUrl: img3,
    imgALt: "pendrive",
  },
  {
    id: 4,
    type: "Smartwatches",
    description: "Smartwatch 2.0 LTE Wifi",
    price: "$129,00",
    oldPrice: "$449,00",
    imageUrl: img4,
    imgALt: "smartwatch",
    onSale: true,
  },
  {
    id: 5,
    type: "Smartwatches",
    description: "Gear Virtual Reality",
    price: "$799,00",
    imageUrl: img5,
    imgALt: "vr",
    onSale: true,
  },
  {
    id: 6,
    type: "Gadgets",
    description: "External SSD USB 3.1 750 GB",
    price: "$385,00",
    imageUrl: img6,
    imgALt: "ssd",
  },
];

function BestSellers() {
  return (
    <Container className=" flex-col  p-2 lg:p-8  md:w-full xl:w-3/4 justify-center items-center">
      <BestSellersHeader />
      {/* BestSellersCard */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {products.map((product) => (
          <BestSellersCard
            key={product.id}
            type={product.type}
            description={product.description}
            price={product.price}
            oldPrice={product.onSale ? product.oldPrice : null}
            onSale={product.onSale}
            imageUrl={product.imageUrl}
            imgALt={product.imgALt}
          />
        ))}
      </div>
    </Container>
  );
}

export default BestSellers;
