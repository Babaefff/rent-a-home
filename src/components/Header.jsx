import { FaBars, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.jpg"; // Assuming the assets folder is in the src directory
import { MdLocationOn } from "react-icons/md";
import { useEffect, useState } from "react";
const APIKEY = import.meta.env.VITE_MAP_API_KEY;
console.log(APIKEY)

const Header = () => {
  const [locationName, setLocationName] = useState(null);
  useEffect(() => {
    const getUserLocation = async () => {
      try {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;
        await getPlaceAndName(latitude, longitude);
      } catch (error) {
        console.error("Error getting user location:", error);
      }
    };

    getUserLocation();
  }, []);

  const getCurrentPosition = () =>
    new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    );

  const getPlaceAndName = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${APIKEY}`
      );
      const data = await response.json();
      setLocationName(data.results[0].formatted_address);
    } catch (error) {
      console.error("Error getting place and name:", error);
    }
  };

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
              {locationName}
            </p>
          </div>
          <Link to="about">
            <li className="hidden md:inline text-white hover:underline">
              About
            </li>
          </Link>
          <Link to="signin">
            <li className="hidden md:inline text-white hover:underline">
              Sign In
            </li>
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
