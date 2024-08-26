import Container from "@/components/ui/Container";
import NewsForm from "./NewsForm";
import { GrSend } from "react-icons/gr";

function NewsLetter() {
  return (
    <div className="bg-yellow-300 ">
      <Container className=" flex-col md:flex-row justify-between items-center py-4 my-5 gap-4">
        <div className=" flex justify-center items-center">
          <GrSend className="text-3xl mr-3" />
          <p className="uppercase ">sign up to newsletter</p>
        </div>
        <p className="text-sm">
          ...and receive{" "}
          <span className="font-bold ">$20 coupon for first shopping</span>
        </p>
        <NewsForm />
      </Container>
    </div>
  );
}

export default NewsLetter;
