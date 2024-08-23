import { MdOutlineShoppingBag } from "react-icons/md";
import Container from "@/components/ui/Container";
import { CiHeart} from "react-icons/ci";
import { FaCodeCompare } from "react-icons/fa6";
import Search from "@/components/Header/Search";

function Shopping() {
  return (
    <Container className="justify-between items-center p-12">
      {/* Logo /Left */}
      <div className="">
        {/* <img src="/logo.svg" alt="electro. logo" /> */}
        <h1 className="text-3xl font-bold">
          electro<span className="text-yellow-300">.</span>
        </h1>
      </div>
      {/* Search /Center */}
     <Search />
      {/* Cart /Right */}
      <div className=" flex gap-4 justify-center">
        <FaCodeCompare className="rotate-[70deg] " size={15} />
        <CiHeart />
        <MdOutlineShoppingBag />
      </div>
    </Container>
  );
}

export default Shopping;
