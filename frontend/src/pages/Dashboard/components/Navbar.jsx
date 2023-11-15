import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-10 md:flex-row md:flex-nowrap md:justify-start flex items-center p-2">
        <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <div className=" text-lg uppercase hidden lg:inline-block font-bold ">
            {props.header}
          </div>
          {/* Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center mt-2">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal text-center text-gray-300 absolute bg-transparent rounded text-base items-center justify-center pl-3 py-3">
                <FaSearch className="text-gray-500" />
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-2 placeholder-gray-700 text-gray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form>
          
          {/* User */}
          {/* <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul> */}
        </div>
      </nav>
    </>
  );
}
