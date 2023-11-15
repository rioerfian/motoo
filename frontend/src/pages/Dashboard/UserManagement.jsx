import { FaUserCog, FaEdit } from "react-icons/fa";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import instance from "../../axios";
import { Link } from "react-router-dom";

export default function UserManagement() {
  const [user, setuser] = useState([]);

  //define method
  const fetchDatauser = async () => {
    //fetch data from API with Axios
    await instance.get("/users").then((response) => {
      setuser(response.data.data);
    });
  };
  console.log(user);

  //run hook useEffect
  useEffect(() => {
    fetchDatauser();
  }, []);
  return (
    <>
      <div className="relative md:ml-64 bg-gray-100 p-6 ">
        <Navbar header="User Management" />
        <div className="px-2 mx-auto w-full mt-4 md:mt-14">
          <div className="flex flex-wrap mt-4">
            <div className="w-full lg:mb-0 mb-2 lg:px-1">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0 bg-red-500 text-white">
                  <div className="flex flex-wrap items-center">
                    <div className="flex items-center w-full max-w-full flex-grow flex-1 px-2">
                      <FaUserCog className="text-xl" />
                      &emsp;
                      <h3 className="font-bold text-xl">Users</h3>
                    </div>
                    <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                      <div
                        className=" text-lg font-bold uppercase px-3 py-1 rounded mr-1"
                        style={{ transition: "all .15s ease" }}
                      >
                        {user.length}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  {/* Projects table */}
                  <table className="items-center w-full border-collapse">
                    <thead>
                      <tr>
                        <td className="text-gray-500 align-middle py-3 text-xs uppercase text-center font-semibold">
                          Name
                        </td>
                        <td className="text-gray-500 align-middle py-3 text-xs uppercase text-center font-semibold">
                          Job
                        </td>
                        <td className="text-gray-500 align-middle py-3 text-xs uppercase text-center font-semibold">
                          role
                        </td>
                        <td className="text-gray-500 align-middle py-3 text-xs uppercase text-center font-semibold">
                          team
                        </td>
                        <td className="text-gray-500 align-middle py-3 text-xs uppercase text-center font-semibold">
                          phone
                        </td>
                        <td className="text-gray-500 align-middle py-3 text-xs uppercase text-center font-semibold"></td>
                      </tr>
                    </thead>
                    <tbody>
                      {user.map((user, index) => (
                        <tr key={index}>
                          <td className="align-middle text-xs whitespace-nowrap p-2 text-center">
                            {user.name}
                          </td>
                          <td className="align-middle text-xs whitespace-nowrap p-2 text-center">
                            {user.job}
                          </td>
                          <td className="align-middle text-xs whitespace-nowrap p-2 text-center">
                            {user.role}
                          </td>
                          <td className="align-middle text-xs whitespace-nowrap p-2 text-center">
                            {user.team}
                          </td>

                          <td className="align-middle text-xs whitespace-nowrap p-2 text-center">
                            {user.phone}
                          </td>
                          <td className="align-middle text-xs whitespace-nowrap p-2 text-center">
                            <Link className="" to={"/products/" + user.id}>
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
