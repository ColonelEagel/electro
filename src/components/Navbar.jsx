import AllDepartments from "./ui/AllDepartments";
import Container from "./ui/Container";
import NavLinks from "./ui/NavLinks";

function Navbar() {
  return (
    <Container>
      {/* All Departments */}
      <AllDepartments />
      {/* Nav Links */}
      <NavLinks />
      {/* offer */}
      <span className="ml-auto">Free Shipping on Orders $50+</span>
    </Container>
  );
}

export default Navbar;
