import BigDealsCard from "./bigDealsCard";
import Container from "../ui/Container";
import img1 from "@/assets/images/bigDeals/img1.png";
import img2 from "@/assets/images/bigDeals/img2.jpg";
import img3 from "@/assets/images/bigDeals/img3.jpg";

function BigDeals() {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto p-8">
      <BigDealsCard imageUrl={img1} imageAlt="Camera" buttonText="shop now">
        catch big <br /> <strong>deals</strong> on the <br /> camera
      </BigDealsCard>

      <BigDealsCard imageUrl={img2} imageAlt="laptop" discount="70">
        tablets, <br /> smartphones <br />
        <strong>and more</strong>
      </BigDealsCard>
      <BigDealsCard imageUrl={img3} imageAlt="desktop" buttonText="shop now">
        shope the <br />
        <strong> hottest</strong>
        <br /> products
      </BigDealsCard>
    </Container>
  );
}

export default BigDeals;
