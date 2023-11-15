import React, { useEffect, useRef, useState } from "react";
import instance from "../../axios";
import { Link, useParams } from "react-router-dom";
import TextInput from "../../components/TextInput";
import InputLabel from "../../components/InputLabel";
import { FaEdit, FaTrash } from "react-icons/fa";
import InputError from "../../components/InputError";

export default function ProductEdit() {
  //ini state
  const [products, setProducts] = useState([]);
  const [name, setName] = useState(products.name);
  //destruct ID
  const { id } = useParams();
  function handleChange(event) {
    // gives the value of the targetted element
    let value = event.target.value;
    let inputName = event.target.name;
    if (inputName == "nameProduct") {
      setName(value);
    }
  }

  //define method
  const fetchDataProducts = async () => {
    //fetch data from API with Axios
    await instance.get(`/products/${id}`).then((response) => {
      console.log(response);
      setProducts(response.data.data[0]);
    });
  };
  // console.log(products);

  //run hook useEffect
  useEffect(() => {
    //call method "fetchDataPosts"
    fetchDataProducts();
  }, []);

  return (
    <>
      <div className="relative md:ml-64 bg-gray-200 p-6 shadow-xl">
        <div className="px-8 py-4 bg-white">
          <h2 className="text-xl py-3 font-bold">
            Edit Products / Application
          </h2>
          <h4 className="my-4 border-b-2 border-red-600 py-1 font-semibold">
            Application Information
          </h4>
          <form className="mt-4">
            <div className="grid md:grid-cols-2 md:gap-6">
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
                  defaultValue={products.name}
                  className="mt-1 w-full block"
                  onChange={handleChange}
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
                  defaultValue={products.url}
                  className="mt-1 w-full block"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 md:gap-2">
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
                  defaultValue={products.business_user}
                  className="mt-1 w-full block"
                />
              </div>
              <div className="relative z-0 w-full group my-2">
                <InputLabel
                  htmlFor="category"
                  value="Category"
                  className="text-xs italic"
                />
                <select
                  className="block w-full mt-1 border-b-2 border-gray-300"
                  name="category"
                  id="category"
                >
                  <option value={products.category}>{products.category}</option>
                  {products.category === "Non SAP" ? (
                    <option value="SAP">SAP</option>
                  ) : (
                    <option value="Non SAP">Non SAP</option>
                  )}
                </select>
              </div>
              <div className="relative z-0 w-full group my-2">
                <InputLabel
                  htmlFor="turunan"
                  value="Turunan"
                  className="text-xs italic"
                />
                <select
                  className="block w-full mt-1 border-b-2 border-gray-300 "
                  name="turunan"
                  id="turunan"
                >
                  <option defaultValue={products.turunan}>{products.turunan}</option>
                  {products.turunan === "Turunan" ? (
                    <option value="Non Turunan">Non Turunan</option>
                  ) : (
                    <option value="Turunan">Turunan</option>
                  )}
                </select>
              </div>
              <div className="relative z-0 w-full group my-2">
                <InputLabel
                  htmlFor="loginApp"
                  value="loginApp"
                  className="text-xs italic"
                />
                <select
                  className="block w-full mt-1 border-b-2 border-gray-300 "
                  name="loginApp"
                  id="loginApp"
                >
                  <option defaultValue={products.login_app}>
                    {products.login_app}
                  </option>
                  {products.login_app === "AD" ? (
                    <option value="Non AD">Non AD</option>
                  ) : (
                    <option value="AD">AD</option>
                  )}
                </select>
              </div>
              <div className="relative z-0 w-full group my-2">
                <InputLabel
                  htmlFor="platform"
                  value="Platform"
                  className="text-xs italic"
                />
                <select
                  className="block w-full mt-1 border-b-2 border-gray-300 "
                  name="platform"
                  id="platform"
                >
                  <option defaultValue={products.platform}>{products.platform}</option>
                  {products.platform === "Web" ? (
                    <>
                      <option value="Mobile">Mobile</option>
                      <option value="Dekstop">Dekstop</option>
                    </>
                  ) : (
                    <>
                      <option value="Web">Web</option>
                      {products.platform === "Mobile" ? (
                        <option value="Dekstop">Dekstop</option>
                      ) : (
                        <option value="Mobile">Mobile</option>
                      )}
                    </>
                  )}
                </select>
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
                  defaultValue={products.group}
                  className="mt-1 w-full block"
                />
              </div>
              <div className="relative z-0 w-full group my-2">
                <InputLabel
                  htmlFor="status"
                  value="status"
                  className="text-xs italic"
                />
                <select
                  className="block w-full mt-1 border-b-2 border-gray-300 "
                  name="status"
                  id="status"
                >
                  <option defaultValue={products.status}>{products.status}</option>
                  {products.status === "UP" ? (
                    <option value="DOWN">DOWN</option>
                  ) : (
                    <option value="UP">UP</option>
                  )}
                </select>
              </div>
              <div className="relative z-0 w-full group my-2">
                <InputLabel
                  htmlFor="image"
                  value="Image"
                  className="text-xs italic"
                />

                <TextInput
                  id="image"
                  type="text"
                  name="image"
                  defaultValue={products.image}
                  className="mt-1 w-full block"
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
                  defaultValue={products.PIC}
                  className="mt-1 w-full block"
                  
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
                  defaultValue={products.PIC}
                  className="mt-1 w-full block"
                />
              </div>
            </div>

            <div className="flex items-center justify-end">
              <Link
                type="submit"
                className=" bg-blue-500 font-medium rounded-lg text-sm flex items-center py-2 px-4 my-2 mr-2"
              >
                <FaEdit />
                &nbsp;Submit
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
