import AllDepartments from "@/components/Navbar/AllDepartments";
import Container from "@/components/ui/Container";
import NavLinks from "@/components/Navbar/NavLinks";

function Navbar() {
  return (
    <Container>
      {/* All Departments */}
      <AllDepartments />
      {/* Nav Links */}
      <NavLinks />
      {/*Shipping offer */}
      <span className="ml-auto">Free Shipping on Orders $50+</span>
    </Container>
  );
}

export default Navbar;
