import AllDepartments from "@/components/Navbar/AllDepartments";
import Container from "@/components/ui/Container";
import NavLinks from "@/components/Navbar/NavLinks";

function Navbar() {
  return (
    <Container className="flex flex-col md:flex-row items-center justify-between py-4">
      {/* All Departments */}
      <AllDepartments />
      {/* Nav Links */}
      <NavLinks />
      {/* Shipping Offer */}
      <span className="mt-4 md:mt-0 md:ml-auto text-sm md:text-base">
        Free Shipping on Orders $50+
      </span>
    </Container>
  );
}

export default Navbar;
