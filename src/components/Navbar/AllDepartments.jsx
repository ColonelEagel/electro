import { useState } from "react";
import { IoList } from "react-icons/io5";
function AllDepartments() {
  const [open, setOpen] = useState(false);

  const departments = ["Mobiles", "Laptops", "Watches", "Tvs"];
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-start px-4 py-2 rounded-t-md text-sm text-left bg-yellow-300  focus:outline-none hover:bg-yellow-400 transition duration-150 ease-in-out w-[200px]"
      >
        <IoList /> <span className="ml-2">All Departments</span>
      </button>
      {open && (
        <div className="p-4  transition duration-150 ease-in-out font-medium z-30 absolute bg-white w-[200px]">
          <ul>
            {departments.map((department) => (
              <li key={department}>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 font-bold w-full block p-1 border-b-2"
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
