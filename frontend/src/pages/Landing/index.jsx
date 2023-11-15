import React, { useEffect, useState } from "react";
import instance from "../../axios";
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard";
import { FaSearch } from "react-icons/fa";
import Footer from "../../components/Footer";

export default function LandingPage() {
  //ini state
  const [products, setProducts] = useState([]);

  //define method
  const fetchDataProducts = async () => {
    //fetch data from API with Axios
    await instance.get("/products").then((response) => {
      setProducts(response.data.data);
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
      <Sidebar />
      <main className="relative md:ml-64 bg-gray-300">
        <div className="flex justify-end px-4 py-2">
          {/* Form */}
          <form className="">
            <div>
              <input
                type="text"
                placeholder="Search"
                className="px-3 py-2 border-2 text-sm border-gray-300 placeholder-gray-500 text-gray-600 bg-white rounded shadow-none outline-none w-full"
              />
            </div>
          </form>
          <a
            href="/"
            className="block py-2 px-3 text-xL font-bold rounded text-gray-100 bg-red-600 "
          >
            <FaSearch />
          </a>
        </div>
        <div className="w-full px-8 mx-auto items-start">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 mb-4 py-2">
            {products.length > 0 ? (
              products.map((products, index) => (
                <ProductCard
                  name={products.name}
                  key={products.id}
                  id={products.id}
                  image={products.image}
                  url={products.url}
                  status={products.status}
                  category={products.category}
                  login_app={products.login_app}
                />
              ))
            ) : (
              <div className="text-red-600 mb-0">
                Data Belum Tersedia!
              </div>
            )}

          </div>
        </div>
        <Footer/>
      </main>
    </>
  );
}
