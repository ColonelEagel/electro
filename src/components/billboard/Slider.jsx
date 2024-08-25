import Container from "@/components/ui/Container";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleSlide from "./SingleSlide";

// Import images directly
import img1 from "@/assets/images/billboard/img1.png";
import img2 from "@/assets/images/billboard/img2.png";
import img3 from "@/assets/images/billboard/img3.png";
import CustomDot from "@/components/ui/CustomDot";

// Array of images
const images = [
  { id: 1, img: img1, alt: "smart watch" },
  { id: 2, img: img2, alt: "smart phone" },
  { id: 3, img: img3, alt: "smart speaker" },
];
function Slider() {
  return (
    <Container className="lg:w-[calc(100%*2/3-200px)]  relative">
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        centerMode={false}
        className=""
        containerClass="container h-[420px]"
        customDot={<CustomDot />}
        dotListClass="mr-auto w-20 mb-4"
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
            items: 1,
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
            items: 1,
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
        {images.map((image) => (
          <SingleSlide key={image.id} imageUrl={image.img} alt={image.alt} />
        ))}
      </Carousel>
    </Container>
  );
}

export default Slider;
