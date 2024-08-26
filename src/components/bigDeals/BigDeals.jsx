/**
 * A component that renders a section of big deals.
 *
 * @returns {ReactElement} The JSX element to be rendered.
 */
import BigDealsCard from "./bigDealsCard";
import Container from "../ui/Container";

/**
 * Images for the big deals section.
 */
import img1 from "@/assets/images/bigDeals/img1.png"; // Camera
import img2 from "@/assets/images/bigDeals/img2.jpg"; // Laptop
import img3 from "@/assets/images/bigDeals/img3.jpg"; // Desktop

/**
 * The main BigDeals component.
 *
 * @returns {ReactElement} The JSX element to be rendered.
 */
function BigDeals() {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto p-8">
      {/* Camera deal */}
      <BigDealsCard imageUrl={img1} imageAlt="Camera" buttonText="shop now">
        catch big <br /> <strong>deals</strong> on the <br /> camera
      </BigDealsCard>

      {/* Laptop deal */}
      <BigDealsCard imageUrl={img2} imageAlt="Laptop" discount="70">
        tablets, <br /> smartphones <br />
        <strong>and more</strong>
      </BigDealsCard>

      {/* Desktop deal */}
      <BigDealsCard imageUrl={img3} imageAlt="Desktop" buttonText="shop now">
        shope the <br />
        <strong> hottest</strong>
        <br /> products
      </BigDealsCard>
    </Container>
  );
}

export default BigDeals;

