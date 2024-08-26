// Import components
import Container from "@/components/ui/Container";
import Carousel from "react-multi-carousel";
import SingleSlide  from "./SingleSlide";
import "react-multi-carousel/lib/styles.css";

// Import images directly
// The images are used in the billboard slider.
// The images are in the public folder, so they can be imported directly.
import img1 from "@/assets/images/billboard/img1.png"; // smart watch
import img2 from "@/assets/images/billboard/img2.png"; // smart phone
import img3 from "@/assets/images/billboard/img3.png"; // smart speaker

// Array of images
const images = [
  // image 1
  { id: 1, img: img1, alt: "smart watch" },
  // image 2
  { id: 2, img: img2, alt: "smart phone" },
  // image 3
  { id: 3, img: img3, alt: "smart speaker" },
];

// Import custom dot component
import CustomDot from "@/components/ui/CustomDot";
/**
 * Billboard slider component
 *
 * @returns {ReactElement} The JSX element to be rendered
 */
function Slider() {
  // Carousel responsive settings
  const responsive = {
    desktop: {
      breakpoint: {
        min: 0,
        max: 3000,
      },
      items: 1,
    },
  };
  return (
    <Container
      className="xl:w-[calc(100%*2/3-200px)] justify-center items-center relative"
      // The container class is set to "container h-[420px]" to make sure the slider
      // has a fixed height, and the carousel will have the same height as the
      // container.
    >
      <Carousel
        // Configuration for the carousel
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
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {/* Loop through the array of images and render a SingleSlide component
         * for each one. The key prop is set to the id of each image, and the
         * imageUrl and alt props are passed to the SingleSlide component.
         */}
        {images.map((image) => (
          <SingleSlide
            key={image.id}
            imageUrl={image.img}
            alt={image.alt}
          />
        ))}
      </Carousel>
    </Container>
  );
}

export default Slider;
