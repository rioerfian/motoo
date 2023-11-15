import React, { useEffect, useRef, useState } from "react";
import instance from "../../axios";
import { Link, useParams } from "react-router-dom";
import TextInput from "../../components/TextInput";
import InputLabel from "../../components/InputLabel";
import { FaEdit, FaTrash } from "react-icons/fa";
import InputError from "../../components/InputError";

export default function UserEdit() {
  //ini state
  const [users, setUsers] = useState([]);
  const [name, setName] = useState(users.name);
  //destruct ID
  const { id } = useParams();
  function handleChange(event) {
    // gives the value of the targetted element
    let value = event.target.value;
    let inputName = event.target.name;
    if (inputName == "nameUser") {
      setName(value);
    }
  }

  //define method
  const fetchDataUsers = async () => {
    //fetch data from API with Axios
    await instance.get(`/users/${id}`).then((response) => {
      console.log(response);
      setUsers(response.data.data[0]);
    });
  };
  console.log(users);

  //run hook useEffect
  useEffect(() => {
    //call method "fetchDataPosts"
    fetchDataUsers();
  }, []);

  return (
    <>
      <div className="relative md:ml-64 bg-gray-200 p-6 shadow-xl">
        <div className="px-8 py-4 bg-white">
          <h2 className="text-xl py-3 font-bold">
            Edit User
          </h2>
          <h4 className="my-4 border-b-2 border-red-600 py-1 font-semibold">
            Application Information
          </h4>
          <form className="mt-4">
            <div className="grid md:grid-cols-4 md:gap-6">
              <div className="relative z-0 w-full group my-2">
                <InputLabel
                  htmlFor="nameUser"
                  value="Name User"
                  className="text-xs italic"
                />

                <TextInput
                  id="nameUser"
                  type="text"
                  name="nameUser"
                  defaultValue={users.name}
                  className="mt-1 w-full block"
                  onChange={handleChange}
                />
                
              </div>
              
            </div>

            <div className="grid md:grid-cols-3 md:gap-2">
              <div className="relative z-0 w-full group my-2">
                
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
