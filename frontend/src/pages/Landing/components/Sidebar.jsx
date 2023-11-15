import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import AppLogo from "../../../components/AppLogo";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <aside className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-red-500 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6 ">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        {/* Toggler */}
        <button
          className="cursor-pointer text-black md:hidden px-2 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
          type="button"
          onClick={() => setCollapseShow("bg-red-500 m-2 py-3 px-6")}
        >
          <FaBars className="text-white"/>
        </button>
        {/* Brand */}
        <Link
          className="md:block text-center md:pb-2 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold"
          to="/welcome"
        >
          <AppLogo height="50px" />
        </Link>
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
          <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-200">
            <div className="flex flex-wrap">
              <div className="w-6/12">
                <button
                  type="button"
                  className=" text-black md:hidden rounded border-2 border-gray-900 p-2"
                  onClick={() => setCollapseShow("hidden")}
                >
                  <FaBars />
                </button>
              </div>
              <div className="w-6/12 justify-end flex">
                <Link
                  className="md:block text-left md:pb-2 mr-0 inline-block whitespace-nowrap mx-auto"
                  to="/"
                >
                  <img
                    src="logo.png"
                    className="h-12 md:h-14"
                    alt="motoo Logo"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <h6 className="md:min-w-full text-white text-sm uppercase font-bold block py-2 no-underline ">
            Platform
          </h6>
          <ul className="md:flex-col md:min-w-full flex flex-col list-none ml-2">
            <li className="flex items-center py-1">
              <input type="checkbox" className="mr-2 text-red-600" />
              <label className="block text-sm text-white" htmlFor="" value="">
                Web
              </label>
            </li>
            <li className="flex items-center py-1">
              <input type="checkbox" className="mr-2 text-red-600" />
              <label className="block text-sm text-white" htmlFor="" value="">
                Dekstop
              </label>
            </li>
            <li className="flex items-center py-1">
              <input type="checkbox" className="mr-2 text-red-600" />
              <label className="block text-sm text-white" htmlFor="" value="">
                Mobile
              </label>
            </li>
          </ul>
          <h6 className="md:min-w-full text-white text-sm uppercase font-bold block py-2 no-underline">
            Category
          </h6>
          <ul className="md:flex-col md:min-w-full flex flex-col list-none ml-2">
            <li className="flex items-center py-1">
              <input type="checkbox" className="mr-2 text-red-600" />
              <label className="block text-sm text-white" htmlFor="" value="">
                SAP
              </label>
            </li>
            <li className="flex items-center py-1">
              <input type="checkbox" className="mr-2 text-red-600" />
              <label className="block text-sm text-white" htmlFor="" value="">
                Non SAP
              </label>
            </li>
          </ul>
          <h6 className="md:min-w-full text-white text-sm uppercase font-bold block py-2 no-underline">
            Group
          </h6>
          <ul className="md:flex-col md:min-w-full flex flex-col list-none ml-2">
            <li className="flex items-center py-1">
              <input type="checkbox" className="mr-2 text-red-600" />
              <label className="block text-sm text-white" htmlFor="" value="">
                Non ERP
              </label>
            </li>
            <li className="flex items-center py-1">
              <input type="checkbox" className="mr-2 text-red-600" />
              <label className="block text-sm text-white" htmlFor="" value="">
                Inbound
              </label>
            </li>
            <li className="flex items-center py-1">
              <input type="checkbox" className="mr-2 text-red-600" />
              <label className="block text-sm text-white" htmlFor="" value="">
                Outbond
              </label>
            </li>
          </ul>
          <h6 className="md:min-w-full text-white text-sm uppercase font-bold block py-2 no-underline">
            Turunan
          </h6>
          <ul className="md:flex-col md:min-w-full flex flex-col list-none ml-2">
            <li className="flex items-center py-1">
              <input type="checkbox" className="mr-2 text-red-600" />
              <label className="block text-sm text-white" htmlFor="" value="">
                Turunan
              </label>
            </li>
            <li className="flex items-center py-1">
              <input type="checkbox" className="mr-2 text-red-600" />
              <label className="block text-sm text-white" htmlFor="" value="">
                Non Turunan
              </label>
            </li>
          </ul>
          {/* Navigation */}
          <Link
            to="/"
            className="w-full md:mt-12 py-1 px-4 text-md text-center font-bold rounded text-red-500 bg-white mx-1"
          >
            Log in
          </Link>
        </div>
      </div>
    </aside>
  );
}
