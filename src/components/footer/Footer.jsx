// react icons
import { BiLogoLinkedin } from "react-icons/bi";
import { FaFacebookF, FaPaypal, FaTwitter } from "react-icons/fa6";
import { MdOutlineRssFeed } from "react-icons/md"; // rss feed
import { RiMastercardFill } from "react-icons/ri"; // mastercard
import { SiVisa } from "react-icons/si"; // visa
import { TfiHeadphoneAlt } from "react-icons/tfi"; // headphones
import { TiSocialGooglePlus } from "react-icons/ti"; // google plus

// components
import Container from "@/components/ui/Container";

const Footer = () => {
  return (
    <footer className="text-gray-600 pt-8">
      <Container className="container mx-auto flex flex-wrap justify-between items-start gap-6">
        {/* logo and contact info */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-3xl font-bold">
            electro<span className="text-yellow-300">.</span>
          </h1>

          <div className="my-6 md:mb-0">
            {/* phone number */}
            <div className="flex justify-start items-center mb-7">
              <TfiHeadphoneAlt
                className="text-yellow-300 scale-x-[-1]"
                size={50}
              />
              <div className="ml-4">
                <p className="text-xs">Got questions? Call us 24/7!</p>
                <p className="font-semibold text-black">
                  (800) 8001-8588, (0600) 874 548
                </p>
              </div>
            </div>

            {/* address */}
            <div className="">
              <p className="font-medium">contact info</p>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>

            {/* social media links */}
            <div className="flex space-x-4 mt-4 text-xl text-gray-500">
              <a href="#" className="hover:underline">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:underline">
                <FaTwitter />
              </a>
              <a href="#" className="hover:underline">
                <MdOutlineRssFeed />
              </a>
              <a href="#" className="hover:underline">
                <BiLogoLinkedin />
              </a>
              <a href="#" className="hover:underline">
                <TiSocialGooglePlus />
              </a>
            </div>
          </div>
        </div>

        {/* find it fast */}
        <div className="md:w-1/4 mb-6 md:mb-0">
          <h5 className="font-bold mb-2">Find it Fast</h5>
          <div className="flex justify-between items-center flex-wrap gap-4 ">
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Laptops & Computers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cameras & Photography
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Smart Phones & Tablets
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Video Games & Consoles
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  TV & Audio
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Headphones
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Wireless Speakers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Car Electronics
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* customer care */}
        <div className="md:w-1/4 mb-6 md:mb-0">
          <h5 className="font-bold mb-2">Customer Care</h5>

          {/* My Account and Wish List */}
          <ul className="mb-4">
            <li>
              <a href="#" className="hover:underline">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Wish List
              </a>
            </li>
          </ul>

          {/* order tracking and customer service */}
          <ul className="mb-4">
            <li>
              <a href="#" className="hover:underline">
                Track Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Customer Service
              </a>
            </li>
          </ul>

          {/* returns and exchange policy */}
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Returns/Exchange Policy
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="mx-auto flex justify-between items-center mt-8 bg-gray-200 p-6">
        <Container className="mx-auto flex justify-between items-center gap-2">
          {/* copyright information */}
          <p>
            &copy; <strong>Electro</strong> - All Rights Reserved
          </p>
          {/* accepted payments */}
          <div className="flex space-x-4 text-xl">
            {/* mastercard */}
            <RiMastercardFill />
            {/* visa */}
            <SiVisa />
            {/* paypal */}
            <FaPaypal />
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
