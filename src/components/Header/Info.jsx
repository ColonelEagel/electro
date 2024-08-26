// React Icons
import { IoIosCall } from "react-icons/io"; // phone icon
import { CiLocationOn, CiMail } from "react-icons/ci"; // location icon and mail icon
import { FaRegUser, FaTruckFast } from "react-icons/fa6"; // user icon and truck icon

// Components
import Container from "@/components/ui/Container"; // container component from UI folder

function Info() {
  return (
    <div className="lg:border-b-2 lg:border-gray-200">
      <Container className="flex flex-col md:flex-row items-center justify-between text-sm p-2 font-medium">
        {/* Contact / Left */}
        <div className="flex flex-col md:flex-row md:gap-4">
          <p className="px-2 flex items-center">
            <IoIosCall size={15} className="mr-2 text-yellow-300" />
            +123 456 789
          </p>
          <p className="flex items-center">
            <CiMail size={15} className="mr-2 text-yellow-300" />
            lXG4D@example.com
          </p>
        </div>

        {/* Store / Right */}
        <div className="flex flex-col md:flex-row md:gap-4 mt-2 md:mt-0">
          <p className="lg:border-r-2 lg:border-gray-400 px-2 flex items-center">
            <CiLocationOn size={15} className="mr-2 text-gray-500" />
            Store Locator
          </p>
          <p className="lg:border-r-2 lg:border-gray-400 px-2 flex items-center">
            <FaTruckFast size={15} className="mr-2 text-gray-500" />
            Track Your Order
          </p>
          <p className="lg:border-r-2 lg:border-gray-400 px-2">Dollar (USD)</p>
          <p className="flex items-center">
            <FaRegUser size={15} className="mr-2 text-gray-400" />
            Register or Sign In
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Info;
