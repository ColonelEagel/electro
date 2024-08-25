function NavLinks() {
  return (
    <ul className="flex flex-wrap gap-4 justify-center text-sm md:text-base">
      <li className="px-4 py-2">
        <a href="#" className="text-red-500 hover:text-red-900 font-bold">
          Super Deals
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
