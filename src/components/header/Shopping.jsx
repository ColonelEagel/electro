// import react icons
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaCodeCompare } from "react-icons/fa6";

// import components
import Container from "@/components/ui/Container";
import Search from "@/components/header/Search";

function Shopping() {
  return (
    <Container className="flex flex-col md:flex-row  justify-between items-center p-4 md:p-12">
      {/* Logo /Left */}
      <div className="text-2xl md:text-3xl font-bold">
        electro<span className="text-yellow-300">.</span>
      </div>
      {/* Search /Center */}
      <Search />
      {/* Cart /Right */}
      <div className="flex gap-4 mt-4 md:mt-0">
        <FaCodeCompare className="rotate-[70deg]" size={20} />
        <CiHeart size={20} />
        <MdOutlineShoppingBag size={20} />
      </div>
    </Container>
  );
}

export default Shopping;
