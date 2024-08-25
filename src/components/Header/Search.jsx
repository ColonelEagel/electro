import { CiSearch } from "react-icons/ci";

function Search() {
  return (
    <form className="flex w-full lg:w-2/3 border-yellow-300 border-2 rounded-full">
      <input
        type="text"
        placeholder="Search for products "
        className="border-0 px-9 py-1  w-full outline-none rounded-l-full "
      />
      <div className="flex gap-7">
        <select
          name="allCategories outline-none focus:outline-none focus:border-0"
          id=""
        >
          <option value="allCategories">All Categories</option>
          <option value="mobile"> Mobile </option>
          <option value="laptop">Laptop</option>
          <option value="watch">Watch</option>
          <option value="tv">Tv</option>
        </select>
        <button
          type="submit"
          className="bg-yellow-300 px-9 py-1  rounded-r-full w-full "
        >
          <CiSearch />
        </button>
      </div>
    </form>
  );
}

export default Search;
