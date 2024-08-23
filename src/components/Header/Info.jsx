import { CiLocationOn, CiMail } from "react-icons/ci";
import Container from "@/components/ui/Container";
import { IoIosCall } from "react-icons/io";
import { FaRegUser, FaTruckFast } from "react-icons/fa6";

function Info() {
  return (
    <div className="border-b-2 border-gray-200 pb-2">
      <Container className="items-center justify-between text-sm pt-2 font-medium h-10">
        {/* contact /left */}
        <div className="flex justify-center items-center gap-4">
          <p className="px-2">
            <IoIosCall
              size={15}
              className="mr-2 text-yellow-300 inline-block font-medium  "
            />{" "}
            +123 456 789
          </p>
          <p>
            <CiMail
              size={15}
              className="mr-2 text-yellow-300 inline-block font-medium "
            />
            lXG4D@example.com
          </p>
        </div>
        {/* store /right */}
        <div className="flex justify-center items-center gap-4">
          <p className="border-r-2 border-gray-400 px-2">
            <CiLocationOn
              size={15}
              className="mr-2 text-gray-500 inline-block font-medium "
            />
            Store Locator
          </p>
          <p className="border-r-2 border-gray-400 px-2">
            <FaTruckFast
              size={15}
              className="mr-2 text-gray-500 inline-block font-medium "
            />
            track your order
          </p>
          <p className="border-r-2 border-gray-400 px-2">$ Dollar(USD)</p>
          <p>
            <FaRegUser
              size={15}
              className="mr-2 text-gray-400 inline-block font-medium "
            />
            Register or sign in
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Info;
