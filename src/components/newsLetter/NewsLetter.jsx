/**
 * Newsletter component
 *
 * @returns {ReactElement} The JSX element to be rendered.
 */
// Import components
import Container from "@/components/ui/Container"; // Container component from UI folder
import NewsForm from "./NewsForm"; // NewsForm component from same folder

// Import React Icons
import { GrSend } from "react-icons/gr"; // send icon 

/**
 * NewsLetter component
 */
function NewsLetter() {
  return (
    <div className="bg-yellow-300 ">
      <Container className=" flex-col md:flex-row justify-between items-center py-4 my-5 gap-4">
        {/* Call to action */}
        <div className=" flex justify-center items-center">
          <GrSend className="text-3xl mr-3" />
          <p className="uppercase ">sign up to newsletter</p>
        </div>
        {/* Description */}
        <p className="text-sm">
          ...and receive{" "}
          <span className="font-bold ">$20 coupon for first shopping</span>
        </p>
        {/* Form component */}
        <NewsForm />
      </Container>
    </div>
  );
}

export default NewsLetter;

