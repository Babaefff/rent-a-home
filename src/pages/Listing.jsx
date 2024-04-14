import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import {
  FaBath,
  FaBed,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
} from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import avatar from "../assets/avatar.jpg";

const Listing = () => {
  //swipper ne isledecek
  SwiperCore.use(Navigation);

  // xerite load
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
  });

  //location state ile listingi getirmek
  const location = useLocation();
  const { listing } = location.state;
  console.log(listing.location)

  //stateler
  const [locationName, setLocationName] = useState(null);
  const [copied, setCopied] = useState(false);
  const [activeMarker, setActiveMarker] = useState(null);

  //location name almaq
  const listingLocation = listing.location;
  const getPlaceAndName = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${
          import.meta.env.VITE_MAP_API_KEY
        }`
      );
      const data = await response.json();
      setLocationName(data.results[0].formatted_address);
    } catch (error) {
      console.error("Error getting place and name:", error);
    }
  };

  //id ni paramsdan almaq
  const params = useParams();
  useEffect(() => {
    getPlaceAndName(listingLocation.lat, listingLocation.lng);
  }, [params.listingId]);
  let username = "Ilkin Baba"

  return (
    <main>
      {listing && (
        <div>
          <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className="h-[550px] max-w-6xl mx-auto rounded-xl mt-4"
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer">
            <FaShare
              className="text-slate-500"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            />
          </div>
          {copied && (
            <p className="fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2">
              Link copied!
            </p>
          )}
          <div className="flex flex-col max-w-6xl mx-auto p-3 my-7 gap-4 items-center  sm:items-stretch">
            <p className="text-4xl font-bold mx-auto">
              {listing.name} - $ {listing.regularPrice.toLocaleString("en-US")}
              {listing.type === "rent" && " / month"}
            </p>
            <div className="py-6 flex">
              <Link to="/profile" className="flex gap-4 items-center px-1">
                <img
                  className="rounded-full h-8  w-8  sm:w-12  sm:h-12  object-cover  "
                  src={avatar}
                  alt="profile"
                />
                <p className="text-2xl font-semibold">{username}</p>
              </Link>
            </div>
            <p className="flex items-center mt-6 gap-2 text-slate-600  text-sm">
              Location:<FaMapMarkerAlt className="text-green-700" />
              {locationName}
            </p>
            <div
              style={{ height: "38vh" }}
              className="my-4 w-full sm:max-w-2xl  flex flex-col items-center sm:items-stretch"
            >
              {isLoaded ? (
                <GoogleMap
                  center={listingLocation}
                  zoom={14}
                  mapContainerStyle={{
                    width: "80%",
                    height: "36vh",
                  }}
                >
                  {listingLocation && (
                    <MarkerF
                      key={1}
                      position={listingLocation}
                      onClick={() => setActiveMarker(1)}
                    >
                      {activeMarker === 1 && (
                        <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                          <div>
                            <p>{locationName}</p>
                          </div>
                        </InfoWindowF>
                      )}
                    </MarkerF>
                  )}
                </GoogleMap>
              ) : null}
            </div>
            <div className="flex gap-4">
              <p className="bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md px-8 sm:px-0">
                {listing.type === "rent" ? "For Rent" : "For Sale"}
              </p>
            </div>
            <p className="text-slate-800 text-xl py-4 mx-auto px-4 sm:px-0">
              <span className="font-semibold text-black">Description - </span>
              {listing.description}
            </p>
            <ul className="text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6 py-4" >
              <li className="flex items-center gap-1 whitespace-nowrap ">
                <MdMeetingRoom className="text-lg" />
                {listing.rooms > 1
                  ? `${listing.rooms} rooms `
                  : `${listing.rooms} room `}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap ">
                <FaBed className="text-lg" />
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} beds `
                  : `${listing.bedrooms} bed `}
              </li>

              <li className="flex items-center gap-1 whitespace-nowrap ">
                <FaParking className="text-lg" />
                {listing.parking ? "Parking spot" : "No Parking"}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap ">
                <FaBath className="text-lg" />
                {listing.bathrooms ? "Bath" : "Without Bath"}
              </li>
            </ul>
            <button className="bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3">
              Əlaqə saxla
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Listing;
