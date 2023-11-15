import React from "react";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import instance from "../../axios";
import {
  FaAppStore,
  FaArrowDown,
  FaArrowUp,
  FaEdit,
  FaRemoveFormat,
  FaTasks,
  FaTicketAlt,
  FaTrash,
  FaUserCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import UpperCard from "./components/UpperCard";

export default function Dashboard() {
  //ini state
  const [products, setProducts] = useState([]);
  const [technician, setTechnician] = useState([]);

  //define method
  const fetchDataProducts = async () => {
    //fetch data from API with Axios
    await instance.get("/testapi").then((response) => {
      setProducts(response.data.product);
    });
  };
  const fetchDataTechnician = async () => {
    //fetch data from API with Axios
    await instance.get("/testapi").then((response) => {
      setTechnician(response.data.user);
    });
  };
  console.log(technician);

  //run hook useEffect
  useEffect(() => {
    //call method "fetchDataPosts"
    fetchDataProducts();
    fetchDataTechnician();
  }, []);
  return (
    <>
      <div className="relative md:ml-64 bg-gray-100 pl-2">
        <Navbar header="Dashboard" />
        {/* Header */}
        <div className="relative md:pt-20 pt-4 pb-32">
          <div className="mx-auto w-full">
            {/* Card stats */}
            <div className="flex flex-wrap">
              <UpperCard />
              <UpperCard />
              <UpperCard />
              <UpperCard />
            </div>
          </div>
        </div>
        <div className="px-2 mx-auto w-full -m-28">
          <div className="flex flex-wrap mt-4">
            <div className="w-full lg:w-8/12 lg:mb-0 mb-2 lg:px-1">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 bg-red-800 text-white">
                  <div className="flex flex-wrap items-center">
                    <div className="flex items-center w-full max-w-full flex-grow flex-1">
                      <FaTasks className="text-xl" />
                      &emsp;
                      <h3 className="font-bold">List Task</h3>
                    </div>
                    <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                      <button
                        className="bg-white text-black text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        See all
                      </button>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  {/* Projects table */}
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr className="text-left">
                        <th className="align-middle text-xs uppercase p-2  text-center">
                          Application
                        </th>
                        <th className="align-middle text-xs uppercase p-2  text-center">
                          url
                        </th>

                        <th className="align-middle text-xs uppercase p-2  text-center">
                          Login
                        </th>
                        <th className="align-middle text-xs uppercase p-2  text-center">
                          category
                        </th>
                        <th className="text-gray-500 align-middle py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((products, index) => (
                        <tr key={index}>
                          <th className="p-2 align-middle text-xs text-left">
                            <sup
                              className={
                                products.status === "UP"
                                  ? "p-1 bg-green-600 text-white"
                                  : "p-1 bg-red-600 text-white"
                              }
                            >
                              {products.status}
                            </sup>
                            &emsp;{products.name}
                          </th>
                          <td className="align-middle text-xs p-2 text-center">
                            {products.url}
                          </td>

                          <td className="align-middle text-xs p-2 text-center">
                            {products.login_app}
                          </td>
                          <td className="align-middle text-xs p-2 text-center">
                            {products.category}
                          </td>
                          <td className=" px-6 align-middle items-center text-xs p-4">
                            <Link className="" to={"/products/" + products.id}>
                              <FaEdit className="text-lg text-gray-800 hover:text-red-600 " />
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-4/12 lg:mb-0 mb-2 lg:px-1">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 bg-red-500 text-white">
                  <div className="flex flex-wrap items-center">
                    <div className="flex items-center w-full max-w-full flex-grow flex-1">
                      <FaTicketAlt className="text-xl" />
                      &emsp;
                      <h3 className="font-bold">List Tickets</h3>
                    </div>
                    <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                      <button
                        className="bg-white text-black text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        See all
                      </button>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  {/* Projects table */}
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr className="text-left">
                        <th className="align-middle text-xs uppercase p-2  text-center">
                          Application
                        </th>
                        <th className="align-middle text-xs uppercase p-2  text-center">
                          url
                        </th>

                        
                        <th className="align-middle text-xs uppercase p-2  text-center">
                          category
                        </th>
                        <th className="text-gray-500 align-middle py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((products, index) => (
                        <tr key={index}>
                          <th className="p-2 align-middle text-xs text-left">
                            <sup
                              className={
                                products.status === "UP"
                                  ? "p-1 bg-green-600 text-white"
                                  : "p-1 bg-red-600 text-white"
                              }
                            >
                              {products.status}
                            </sup>
                            &emsp;{products.name}
                          </th>
                          <td className="align-middle text-xs p-2 text-center">
                            {products.url}
                          </td>

                         
                          <td className="align-middle text-xs p-2 text-center">
                            {products.category}
                          </td>
                          <td className=" px-6 align-middle items-center text-xs p-4">
                            <Link className="" to={"/products/" + products.id}>
                              <FaEdit className="text-lg text-gray-800 hover:text-red-600 " />
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="w-full lg:mb-0 mb-2 lg:px-1">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 bg-red-500 text-white">
                  <div className="flex flex-wrap items-center">
                    <div className="flex w-full max-w-full flex-grow items-center flex-1">
                      <FaAppStore className="text-xl" />
                      &emsp;
                      <h3 className="font-bold"> List Applications</h3>
                    </div>
                    <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                      <button
                        className="bg-white text-black text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        See all
                      </button>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  {/* Projects table */}
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr className="text-left">
                        <th className="align-middle text-xs uppercase p-2  text-center">
                          Application
                        </th>
                        <th className="align-middle text-xs uppercase p-2  text-center">
                          url
                        </th>

                        <th className="align-middle text-xs uppercase p-2  text-center">
                          Login
                        </th>
                        <th className="align-middle text-xs uppercase p-2  text-center">
                          category
                        </th>
                        <th className="text-gray-500 align-middle py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((products, index) => (
                        <tr key={index}>
                          <th className="py-2 px-4 align-middle text-xs text-left">
                            <sup
                              className={
                                products.status === "UP"
                                  ? "p-1 bg-green-600 text-white"
                                  : "p-1 bg-red-600 text-white"
                              }
                            >
                              {products.status}
                            </sup>
                            &emsp;{products.name}
                          </th>
                          <td className="align-middle text-xs p-2 text-center">
                            {products.url}
                          </td>

                          <td className="align-middle text-xs p-2 text-center">
                            {products.login_app}
                          </td>
                          <td className="align-middle text-xs p-2 text-center">
                            {products.category}
                          </td>
                          <td className=" px-6 align-middle items-center text-xs p-4">
                            <Link className="" to={"/products/" + products.id}>
                              <FaEdit className="text-lg text-gray-800 hover:text-red-600 " />
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <footer className="block py-4">
            <div className="container mx-auto px-4">
              <hr className="mb-4 border-b-1 border-gray-200" />
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full px-4">
                  <div className="text-sm text-gray-500 font-semibold py-1">
                    Copyright © {new Date().getFullYear()}{" "}
                    <a
                      href="/"
                      className="text-gray-500 hover:text-gray-700 text-sm font-semibold py-1"
                    >
                      PT Sinergi Informatika Semen Indonesia
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
