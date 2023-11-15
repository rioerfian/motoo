import { FaExclamationTriangle, FaTicketAlt } from "react-icons/fa";
import Navbar from "./components/Navbar";
import UpperCard from "./components/UpperCard";

export default function Report() {
  return (
    <>
      <div className="relative md:ml-64 bg-gray-200 pl-2">
        <Navbar header="Report" />
        {/* Header */}
        <div className="relative md:pt-20 pb-32">
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
            <div className="w-full lg:w-6/12 lg:mb-0 mb-2 lg:px-2">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="rounded-t mb-0 px-4 py-3 bg-red-500 text-white">
                  <div className="flex flex-wrap items-center">
                    <div className="flex w-full max-w-full flex-1 items-center">
                      <FaTicketAlt className="text-xl"/>&emsp;
                      <h3 className="font-bold">Request</h3>
                    </div>
                    <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                      <button
                        className="bg-white text-black text-xs font-bold uppercase px-3 py-1 rounded mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        20
                      </button>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  {/* Projects table */}
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr className="text-left">
                        <th className="text-gray-500 align-middle py-3 px-4 text-xs uppercase">
                          Application
                        </th>
                        <th className="text-gray-500 align-middle py-3 px-4 text-xs uppercase">
                          url
                        </th>

                        <th className="text-gray-500 align-middle py-3 px-4 text-xs uppercase">
                          Login
                        </th>
                        <th className="text-gray-500 align-middle py-3 px-4 text-xs uppercase">
                          category
                        </th>
                        <th className="text-gray-500 align-middle py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {products.map((products, index) => (
                        <tr key={index}>
                          <th className="px-6 align-middle text-xs text-left">
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
                          <td className=" px-6 align-middle text-xs p-4">
                            {products.url}
                          </td>

                          <td className=" px-6 align-middle text-xs p-4">
                            {products.login_app}
                          </td>
                          <td className=" px-6 align-middle text-xs p-4">
                            {products.category}
                          </td>
                          <td className=" px-6 align-middle items-center text-xs p-4">
                            <Link className="" to={"/products/" + products.id}>
                              <FaEdit className="text-lg text-blue-500 " />
                            </Link>
                          </td>
                        </tr>
                      ))} */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 lg:mb-0 mb-2 lg:px-2">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg">
              <div className="rounded-t mb-0 px-4 py-3 bg-red-800 text-white">
                  <div className="flex flex-wrap items-center">
                    <div className="flex w-full max-w-full flex-1 items-center">
                      <FaExclamationTriangle className="text-xl"/>&emsp;
                      <h3 className="font-bold">Incident</h3>
                    </div>
                    <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                      <button
                        className="bg-white text-black text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        20
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="block w-full overflow-x-auto">
                  {/* Projects table */}
                  <table className="items-center w-full ">
                    <thead>
                      <tr className="text-left">
                        <th className="text-gray-500 align-middle py-3 px-4 text-xs uppercase">
                          Application
                        </th>
                        <th className="text-gray-500 align-middle py-3 px-4 text-xs uppercase">
                          url
                        </th>

                        <th className="text-gray-500 align-middle py-3 px-4 text-xs uppercase">
                          Login
                        </th>
                        <th className="text-gray-500 align-middle py-3 px-4 text-xs uppercase">
                          category
                        </th>
                        <th className="text-gray-500 align-middle py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {products.map((products, index) => (
                        <tr key={index}>
                          <th className="px-6 align-middle text-xs text-left">
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
                          <td className=" px-6 align-middle text-xs p-4">
                            {products.url}
                          </td>

                          <td className=" px-6 align-middle text-xs p-4">
                            {products.login_app}
                          </td>
                          <td className=" px-6 align-middle text-xs p-4">
                            {products.category}
                          </td>
                          <td className=" px-6 align-middle items-center text-xs p-4">
                            <Link className="" to={"/products/" + products.id}>
                              <FaEdit className="text-lg text-blue-500 " />
                            </Link>
                          </td>
                        </tr>
                      ))} */}
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
