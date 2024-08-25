import { BiLogoLinkedin } from "react-icons/bi";
import { FaFacebookF, FaPaypal, FaTwitter } from "react-icons/fa6";
import { MdOutlineRssFeed } from "react-icons/md";
import { RiMastercardFill } from "react-icons/ri";
import { SiVisa } from "react-icons/si";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TiSocialGooglePlus } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="text-gray-600 pt-8">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        <div className=" mb-6 md:mb-0">
          <h1 className="text-3xl font-bold">
            electro<span className="text-yellow-300">.</span>
          </h1>
          <div className=" my-6 md:mb-0">
            <div className=" flex justify-start items-center mb-7">
              <TfiHeadphoneAlt
                className=" text-yellow-300 scale-x-[-1]"
                size={50}
              />
              <div className="ml-4">
                <p className="text-xs">Got questions? Call us 24/7!</p>
                <p className="font-semibold text-black">
                  (800) 8001-8588, (0600) 874 548
                </p>
              </div>
            </div>
            <div className="">
              <p className="font-medium">contact info</p>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
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
              <a href="#" className="hover:underline">
                <BiLogoLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className=" md:w-1/4 mb-6 md:mb-0">
          <h5 className="font-bold mb-2">Find it Fast</h5>
          <div className="flex justify-between items-center ">
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
        <div className=" md:w-1/4 mb-6 md:mb-0">
          <h5 className="font-bold mb-2">Customer Care</h5>
          <ul>
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
            <li>
              <a href="#" className="hover:underline">
                Returns/Exchange Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" mx-auto flex justify-between items-center mt-8 bg-gray-200 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <p>
            © <strong>Electro</strong> - All Rights Reserved
          </p>
          <div className="flex space-x-4 text-xl">
            <RiMastercardFill />
            <SiVisa />
            <FaPaypal />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
