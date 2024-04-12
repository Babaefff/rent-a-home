import { FaBars, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.jpg"; // Assuming the assets folder is in the src directory
import { MdLocationOn } from "react-icons/md";
 

const Header = () => {
  return (
    <header className="shadow-md" style={{ backgroundColor: "#AB6F43" }}>
  <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
    <Link to="/">
      <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
        <span className="text-white">Rent A Home</span>
      </h1>
    </Link>
    <form className="bg-slate-100 p-3 rounded-lg  items-center hidden sm:flex">
      <input
        type="text"
        name=""
        id=""
        placeholder="Search.."
        className="bg-transparent focus:outline-none w-24 sm:w-64"
      />
      <FaSearch className="text-slate-600" />
    </form>

    <ul className="flex gap-5 items-center">
      <div className="hidden md:flex items-center gap-1 p-2">
        <MdLocationOn className="h-6 w-6 text-green-700" />
        <p className="text-sm text-white truncate w-full hover:underline">
          Baku, Azerbaijan
        </p>
      </div>
      <Link to="about">
        <li className="hidden md:inline text-white hover:underline">
          About
        </li>
      </Link>
      <Link to="signin">
        <li className="hidden md:inline text-white hover:underline">Sign In</li>
      </Link>
      <Link to="/profile">
        <img
          className="rounded-full h-9 w-9 object-cover md:hidden"
          src={avatar}
          alt="profile"
        />
      </Link>
      <div className="md:hidden">
        <FaBars className="text-white" />
      </div>
    </ul>
  </div>
</header>

  );
};

export default Header;
