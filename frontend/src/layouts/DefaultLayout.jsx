import React, { useEffect } from "react";
import { Link, NavLink, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { FaBars, FaChartPie, FaFileAlt, FaTv, FaUserCog } from "react-icons/fa";
import AppLogo from "../components/AppLogo";
import Navbar from "../pages/Dashboard/components/Navbar";

export default function DefaultLayout() {
  // // if user is not logged in, blueirect to login page
  // const { user, setUser } = useAuth();
  // if (!user) {
  //   return <Navigate to="/" />;
  // } else {

  //   // check if user is logged in or not from server
  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const resp = await axios.get("/user");
  //         if (resp.status === 200) {
  //           setUser(resp.data.data);
  //         }
  //       } catch (error) {
  //         if (error.response.status === 401) {
  //           localStorage.removeItem("user");
  //           window.location.href = "/";
  //         }
  //       }
  //     })();
  //   }, []);
  // }

  // // logout user
  // const handleLogout = async () => {
  //   try {
  //     const resp = await axios.post("/logout");
  //     if (resp.status === 200) {
  //       localStorage.removeItem("user");
  //       window.location.href = "/";
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const [collapseShow, setCollapseShow] = React.useState("hidden");

  return (
    <>
      <aside className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-red-500 flex flex-wrap items-center relative md:w-64 z-10 py-4">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black md:hidden px-4 ml-4 py-1 text-xl leading-none "
            type="button"
            onClick={() => setCollapseShow("bg-red-500 m-2 py-3 px-6 border-4 border-red-800")}
          >
            <FaBars className="text-white"/>
          </button>
          {/* Brand */}
          <NavLink
            className="md:block justify-center  inline-block whitespace-nowrap mx-auto md:mb-4"
            to="/dashboard"
          >
            <AppLogo height="55px" />
          </NavLink>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              {/* <NotificationDropdown /> */}
            </li>
            <li className="inline-block relative">{/* <UserDropdown /> */}</li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4">
              <div className="flex flex-wrap">
                <div className="w-6/12 ">
                  <button
                    type="button"
                    className=" text-white md:hidden rounded border-2 border-white p-2 "
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <FaBars />
                  </button>
                </div>
                <div className="w-6/12 justify-end flex">
                  <NavLink
                    className="md:block text-left md:pb-2 mr-0 inline-block whitespace-nowrap mx-auto"
                    to="/dashboard"
                  >
                    <AppLogo height="40px" />
                  </NavLink>
                </div>
              </div>
            </div>
            {/* <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border-solid  border-gray-500 placeholder-gray-500  bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form> */}
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none font-bold md:mt-2 text-md">
              <li className="items-center">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                  isActive
                    ? "flex py-4 px-4 bg-gray-200 items-center"
                    : "flex py-3 px-4 hover:bg-gray-200 items-center text-white hover:text-black"
                }
                >
                  <FaTv className="text-lg" /> &emsp;Dashboard
                </NavLink>
              </li>

              <li className="items-center">
                <NavLink
                  to="/report"
                  className={({ isActive }) =>
                    isActive
                      ? "flex py-4 px-4 bg-gray-200 items-center"
                      : "flex py-3 px-4 hover:bg-gray-200 items-center text-white hover:text-black"
                  }
                >
                  <FaFileAlt className="text-lg" /> &emsp;Report
                </NavLink>
              </li>

              <li className="items-center">
                <NavLink
                  to="/chart"
                  className={({ isActive }) =>
                    isActive
                      ? "flex py-4 px-4 bg-gray-200 items-center"
                      : "flex py-3 px-4 hover:bg-gray-200 items-center text-white hover:text-black"
                  }
                >
                  <FaChartPie className="text-lg" /> &emsp;Chart
                </NavLink>
              </li>
              <li className="items-center">
                <NavLink
                  to="/users"
                  className={({ isActive }) =>
                    isActive
                      ? "flex py-4 px-4 bg-gray-200 items-center"
                      : "flex py-3 px-4 hover:bg-gray-200 items-center text-white hover:text-black"
                  }
                >
                  <FaUserCog className="text-lg" /> &emsp;User Management
                </NavLink>
              </li>
            </ul>
            {/* Heading */}
            <div className="md:mt-56 w-full pl-4 p-4">
              <h6 className="text-md uppercase font-bold py-2 text-white">
                {/* {user.name} */}Name
              </h6>
              <Link
                // onClick={handleLogout}
                href="/"
                className="w-full py-2 px-4 text-xs font-bold bg-gray-200 mr-2"
              >
                Profile
              </Link>
              <Link
                // onClick={handleLogout}
                href="/"
                className="w-full py-2 px-4 text-xs font-bold bg-gray-200"
              >
                Log out
              </Link>
            </div>
          </div>
        </div>
      </aside>
      <main>
        <Outlet />
      </main>
    </>
  );
}
