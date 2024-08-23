import { IoIosArrowDown } from "react-icons/io";

function NavLinks() {
  return (
    <ul className="flex gap-4 justify-center">
      <li className="px-4 py-2">
        <a href="#" className=" text-red-500 hover:text-red-900 font-bold">
          Super Deals <IoIosArrowDown className="inline" />
        </a>
      </li>

      <li className="px-4 py-2 hover:font-bold">
        <a href="#">Featured Brands</a>
      </li>
      <li className="px-4 py-2 hover:font-bold">
        <a href="#">Trending Styles</a>
      </li>

      <li className="px-4 py-2 hover:font-bold">
        <a href="#">Gift Cards</a>
      </li>
    </ul>
  );
}

export default NavLinks;
