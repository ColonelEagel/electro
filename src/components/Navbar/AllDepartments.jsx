// import react hooks
import { useState } from "react";

// import react icons
import { IoList } from "react-icons/io5";

function AllDepartments() {
  const [open, setOpen] = useState(false);

  const departments = ["Mobiles", "Laptops", "Watches", "Tvs"];
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-start px-4 py-2 rounded-t-md text-sm md:text-base text-left bg-yellow-300 focus:outline-none hover:bg-yellow-400 transition duration-150 ease-in-out"
      >
        <IoList /> <span className="ml-2">All Departments</span>
      </button>
      {open && (
        <div className="p-4 absolute bg-white w-full md:w-[200px] mt-1 rounded-md shadow-lg z-30 transition duration-150 ease-in-out">
          <ul>
            {departments.map((department) => (
              <li key={department}>
                <a
                  href="#"
                  className="text-sm md:text-base text-gray-600 hover:text-gray-900 hover:bg-gray-100 font-bold block p-2 border-b-2 last:border-b-0"
                >
                  {department}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AllDepartments;
