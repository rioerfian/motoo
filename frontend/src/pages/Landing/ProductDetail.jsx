import React, { useEffect, useState } from "react";
import instance from "../../axios";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowDown,
  FaArrowUp,
  FaChevronLeft,
  FaFile,
  FaFileArchive,
  FaFolderOpen,
  FaHeart,
  FaServer,
} from "react-icons/fa";
import Modal from "../../components/Modal";

export default function ProductDetail() {
  //ini state
  const [products, setProducts] = useState([]);
  //destruct ID
  const { id } = useParams();

  //define method
  const fetchDataProducts = async () => {
    //fetch data from API with Axios
    await instance.get(`/products/${id}`).then((response) => {
      console.log(response);
      setProducts(response.data.data[0]);
    });
  };
  console.log(products);

  //run hook useEffect
  useEffect(() => {
    //call method "fetchDataPosts"
    fetchDataProducts();
  }, []);
  return (
    <>
      <main className="">
        <section className="relative py-2 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-2">
              <div className="p-4 bg-red-600 text-white">
                <Link to="/welcome">
                  <FaChevronLeft />
                </Link>
              </div>

              <div className="px-6 my-4">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-8/12 px-4 lg:order-2 justify-center">
                    <div className="text-center px-2 py-4">
                      <div className="flex items-center justify-center">
                        <img
                          alt={"/img/" + products.image}
                          src={"/img/" + products.image}
                          style={{ maxWidth: "10em", maxHeight: "10em" }}
                          className="items-center"
                        />
                        <h3 className="text-3xl font-bold leading-normal text-gray-800 p-4">
                          {products.name}
                        </h3>
                      </div>

                      <div className="m-4 text-gray-700">
                        <table className="table-auto mx-auto text-center">
                          <thead>
                            <tr>
                              <th className="p-2">Business User</th>
                              <th className="p-2">Login User</th>
                              <th className="p-2">Category</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{products.business_user}</td>
                              <td>{products.login_app}</td>
                              <td>{products.category}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="flex justify-center mb-2 text-gray-700 ">
                        <div className="flex items-center bg-cyan-400 m-1 p-1 rounded-lg hover:bg-gray-300">
                          <FaFile />&nbsp;
                          <a className="text-md font-bold " href="/">
                            User Guide
                          </a>
                        </div>
                        <div className="flex items-center bg-yellow-400 m-1 p-1 rounded-lg hover:bg-gray-300">
                          <FaFileArchive />&nbsp;
                          <a className="text-md font-bold" href="/">
                            Technical Document
                          </a>
                        </div>
                      </div>
                      <div className="text-center pb-8 pt-4">
                        <div className="flex flex-wrap justify-center">
                          <p className="mb-8 text-lg text-gray-800">
                            {products.description}
                          </p>
                        </div>
                        <div className="flex justify-center">
                          <Link
                            href={products.url}
                            className="flex items-center font-xl px-8 font-bold border-red-600 text-white  py-2 bg-red-600 rounded-lg active:bg-gray-600 active:text-white"
                          >
                            <FaFolderOpen />&emsp;
                            Open Application
                          </Link>
                          {"  "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-2 justify-center">
                    <div className="p-4 ">
                      <table className="mx-auto text-sm" cellPadding={8}>
                        <thead>
                          <tr>
                            <th
                              colSpan={2}
                              className="text-lg py-2 px-4 bg-red-600 text-white"
                            >
                              Technical Information
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <th>Platform</th>
                            <td>{products.platform}</td>
                          </tr>
                          <tr>
                            <th>DB PROD</th>
                            <td>{products.db_prod}</td>
                          </tr>
                          <tr>
                            <th>Server DEV</th>
                            <td>{products.server_dev}</td>
                          </tr>
                          <tr>
                            <th>DB DEV</th>
                            <td>{products.db_dev}</td>
                          </tr>
                          <tr>
                            <th>Server DEV</th>
                            <td>{products.server_dev}</td>
                          </tr>
                          <tr>
                            <th>Environment</th>
                            <td>{products.environment}</td>
                          </tr>
                          <tr>
                            <th>User login</th>
                            <td>{products.user_login}</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>
                              <Link className="flex items-center justify-center text-md px-8 py-2 bg-gray-300 rounded-lg">
                                <FaServer /> &emsp;virtualname
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr className="mt-4">
                            <th
                              colSpan={2}
                              className="text-lg py-2 px-4 bg-red-600 text-white"
                            >
                              Technician
                            </th>
                          </tr>
                          <tr>
                            <th>PIC ICT</th>
                            <td>{products.PIC}</td>
                          </tr>
                          <tr>
                            <th>PIC SISI</th>
                            <td>{products.PIC}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <Modal />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
