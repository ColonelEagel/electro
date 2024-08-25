import Container from "@/components/ui/Container";

import CustomDot from "@/components/ui/CustomDot";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "@/components/ui/ProductCard";

// Import images
import img1 from "@/assets/images/featured/img-1.jpg"; // speakers
import img2 from "@/assets/images/featured/img2.jpg"; // laptops
import img3 from "@/assets/images/featured/img3.jpg"; // headphones
import img4 from "@/assets/images/featured/img4.jpg"; // smartphones
import img5 from "@/assets/images/featured/img5.jpg"; // cameras
import img6 from "@/assets/images/featured/img6.jpg"; // printers
import img7 from "@/assets/images/featured/img7.jpg"; // tablets
import img8 from "@/assets/images/featured/img8.jpg"; // laptops
import RecentlyViewedHeader from "./RecentlyViewedHeader";
// Array of images
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

function RecentlyViewed() {
  return (
    <Container className="md:w-full flex-col lg:w-3/4 container relative px-5">
      <RecentlyViewedHeader />
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        centerMode={false}
        className=""
        containerClass="container h-[420px]"
        customDot={<CustomDot />}
        dotListClass
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={true}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 6,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 3,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {products.map((image) => (
          <ProductCard
            key={image.id}
            imageUrl={image.imageUrl}
            type={image.type}
            description={image.description}
            price={image.price}
            alt={image.alt}
          />
        ))}
      </Carousel>
    </Container>
  );
}

export default RecentlyViewed;
