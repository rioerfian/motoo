import { Link } from "react-router-dom";
import { FaArrowDown, FaArrowUp, FaFileAlt, FaHeart } from 'react-icons/fa';

export default function ProductCard(props) {
  return (
    <div className="items-center justify-center">
      <div
        className="h-full bg-white hover:bg-gray-200 shadow-xl mx-auto p-4"
      >
        <div className="flex justify-end">
          <i
            className={
              props.status === "UP"
                ? "text-xs p-2 bg-green-600 text-white"
                : "text-xs p-2 bg-red-600 text-white"
            }
          >
            {props.status === "UP" ? <FaArrowUp/> :<FaArrowDown />}

          </i>
        </div>
        <Link to={"/product/" + props.id}>
          <img
            src={"img/" + props.image}
            alt={props.image}
            className="object-cover h-32 w-32 mx-auto mb-4"
          />
        </Link>

        <h2 className="card-title font-bold text-md p-0 uppercase text-center">
          {props.name}{" "}
        </h2>
        <i className="flex justify-center text-xs">{props.category}/{props.login_app}</i>
        <div className="flex justify-center mt-4">
          <Link href="/" className="p-2 mr-2">
            <FaFileAlt className="hover:text-red-600"/>
          </Link>
          <Link href="/" className="p-2 ml-2">
            <FaHeart className="hover:text-red-600"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
