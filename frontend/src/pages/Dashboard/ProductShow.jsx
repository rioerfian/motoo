import React, { useEffect, useRef, useState } from "react";
import instance from "../../axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import TextInput from "../../components/TextInput";
import InputLabel from "../../components/InputLabel";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";


export default function ProductShow() {
  //ini state
  
  const [products, setProducts] = useState([]);
  //destruct ID
  const { id } = useParams();
  const navigate = useNavigate();
  //define method
  const fetchDataProducts = async () => {
    //fetch data from API with Axios
    await instance.get(`/products/${id}`).then((response) => {
      setProducts(response.data.data[0]);
      console.log(response);
    });
  };

  const deleteProducts = async (id) =>{
     await instance.delete(`/products/${id}`).then(() => {
      navigate('/dashboard');
    });  
  };

  //run hook useEffect
  useEffect(() => {
    //call method "fetchDataPosts"
    fetchDataProducts();
  }, []);

  return (
    <>
      <div className="relative md:ml-64 bg-gray-200 p-6 shadow-xl">
        <div className="px-8 py-4 bg-white">
          <h2 className="text-xl py-3 font-bold">Products / Application</h2>
          <h4 className="my-4 border-b-2 border-red-600 py-1 font-semibold">
            Application Information
          </h4>
          
          <div className="grid md:grid-cols-2 md:gap-2">
            <div className="relative z-0 w-full group my-2">
              <InputLabel
                htmlFor="nameProduct"
                value="Name product"
                className="text-xs italic"
              />

              <TextInput
                id="nameProduct"
                type="text"
                name="nameProduct"
                value={products.name}
                className="mt-1 w-full block bg-gray-200 p-1 text-gray-500"
                disabled={true}
              />
            </div>
            <div className="relative z-0 w-full group my-2">
              <InputLabel
                htmlFor="urlProduct"
                value="url"
                className="text-xs italic"
              />
              <TextInput
                id="urlProduct"
                type="text"
                name="urlProduct"
                value={products.url}
                className="mt-1 w-full block bg-gray-200 p-1 text-gray-500"
                disabled={true}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-4 md:gap-2">
            <div className="relative z-0 w-full group my-2">
              <InputLabel
                htmlFor="status"
                value="status"
                className="text-xs italic"
              />
              <TextInput
                id="status"
                type="text"
                name="status"
                value={products.status}
                className="mt-1 w-full block bg-gray-200 p-1 text-gray-500"
                disabled={true}
              />
            </div>
            <div className="relative z-0 w-full group my-2">
              <InputLabel
                htmlFor="businessUser"
                value="Business user"
                className="text-xs italic"
              />

              <TextInput
                id="businessUser"
                type="text"
                name="businessUser"
                value={products.business_user}
                className="mt-1 w-full block bg-gray-200 p-1 text-gray-500"
                disabled={true}
              />
            </div>
            <div className="relative z-0 w-full group my-2">
              <InputLabel
                htmlFor="category"
                value="Category"
                className="text-xs italic"
              />
              <TextInput
                type="text"
                name="category"
                id="category"
                value={products.category}
                className="mt-1 w-full block bg-gray-200 p-1 text-gray-500"
                disabled={true}
              />
            </div>
            <div className="relative z-0 w-full group my-2">
              <InputLabel
                htmlFor="turunan"
                value="Turunan"
                className="text-xs italic"
              />
              <TextInput
                id="turunan"
                type="text"
                name="turunan"
                value={products.turunan}
                className="mt-1 w-full block bg-gray-200 p-1 text-gray-500"
                disabled={true}
              />
            </div>
            <div className="relative z-0 w-full group my-2">
              <InputLabel
                htmlFor="loginApp"
                value="loginApp"
                className="text-xs italic"
              />
              <TextInput
                id="loginApp"
                type="text"
                name="loginApp"
                value={products.login_app}
                className="mt-1 w-full block bg-gray-200 p-1 text-gray-500"
                disabled={true}
              />
            </div>
            <div className="relative z-0 w-full group my-2">
              <InputLabel
                htmlFor="platform"
                value="Platform"
                className="text-xs italic"
              />
              <TextInput
                id="platform"
                type="text"
                name="platform"
                value={products.platform}
                className="mt-1 w-full block bg-gray-200 p-1 text-gray-500"
                disabled={true}
              />
            </div>
            <div className="relative z-0 w-full group my-2">
              <InputLabel
                htmlFor="group"
                value="Group Area"
                className="text-xs italic"
              />
              <TextInput
                id="group"
                type="text"
                name="group"
                value={products.group}
                className="mt-1 w-full block bg-gray-200 p-1 text-gray-500"
                disabled={true}
              />
            </div>
          </div>

          <h4 className="my-4 border-b-2 border-red-600 py-1 font-semibold">
            PIC Information
          </h4>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full group my-2">
              <InputLabel
                htmlFor="picSISI"
                value="PIC SISI"
                className="text-xs italic"
              />
              <TextInput
                id="picSISI"
                type="text"
                name="picSISI"
                value={products.PIC}
                className="mt-1 w-full block bg-gray-200 p-1 text-gray-500"
                disabled={true}
              />
            </div>
            <div className="relative z-0 w-full group my-2">
              <InputLabel
                htmlFor="picICT"
                value="PIC ICT"
                className="text-xs italic"
              />
              <TextInput
                id="picICT"
                type="text"
                name="picICT"
                value={products.PIC}
                className="mt-1 w-full block bg-gray-200 p-1 text-gray-500"
                disabled={true}
              />
            </div>
          </div>

          <div className="flex items-center justify-end">
            <Link
              type="submit"
              to={"edit"}
              className=" bg-yellow-400 font-medium rounded-lg text-sm flex items-center py-2 px-4 my-2 mr-2"
            >
              <FaEdit />
              &nbsp;Edit
            </Link>
            <Link
              onClick={() => deleteProducts(products.id)}
              className="bg-red-500 font-medium rounded-lg text-sm flex items-center py-2 px-4 my-2"
            >
              <FaTrash />
              &nbsp;Delete
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
