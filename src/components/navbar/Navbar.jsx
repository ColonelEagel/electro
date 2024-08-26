// Components
import Container from "@/components/ui/Container";
import AllDepartments from "@/components/navbar/AllDepartments";
import NavLinks from "@/components/navbar/NavLinks";

function Navbar() {
  return (
    <Container className="flex flex-col lg:flex-row items-center justify-between py-4">
      {/* All Departments */}
      <AllDepartments />
      {/* Nav Links */}
        <NavLinks />
      {/* Shipping Offer */}
      <span className="mt-4 lg:mt-0 lg:ml-4 text-sm md:text-base text-center w-full lg:w-auto">
        Free Shipping on Orders $50+
      </span>
    </Container>
  );
}

export default Navbar;
