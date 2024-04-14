const APIKEY = import.meta.env.VITE_MAP_API_KEY;

import { Fragment, useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import _ from "lodash";
const libraries = ["places"];

export default function Maps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: APIKEY,
    libraries: libraries,
  });

  const inputRef = useRef();
  const inputStyle = {
    boxShadow: "inset 0 0 10px #eee !important",
    border: "2px solid #eee",
    width: "456px",
    height: "40px",
    marginLeft: "16px",
    borderRadius: "20px",
    fontWeight: "300 !important",
    outline: "none",
    padding: "10px 20px",
    marginBottom: "10px",
  };
  if (isLoaded) {
    const autoComplete = new window.google.maps.places.Autocomplete(
      inputRef.current,
      {
        types: ["establishment"],
        fields: ["geometry"],
      }
    );
    autoComplete.addListener("place_changed", () => {
      const place = autoComplete.getPlace();
      if (!place || !place.geometry || !place.geometry.location) {
        alert("This location is not available");
        return;
      }
      // Do something with the valid place object

      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      setPlace({ lat: lat, lng: lng });
    });
  }

  const [activeMarker, setActiveMarker] = useState(null);
  const [place, setPlace] = useState(null);
  const [locationName, setLocationName] = useState(null);

  useEffect(() => {
    const getUserLocation = async () => {
      try {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;
        setPlace({ lat: latitude, lng: longitude });
        await getPlaceAndName(latitude, longitude);
      } catch (error) {
        console.error("Error getting user location:", error);
      }
    };

    getUserLocation();
  }, []);

  const debouncedGetPlaceAndName = _.debounce((latitude, longitude) => {
    getPlaceAndName(latitude, longitude);
  }, 300);

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

  const handleMapClick = (event) => {
    const newPlace = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setPlace(newPlace);
    debouncedGetPlaceAndName(newPlace.lat, newPlace.lng);
    setActiveMarker(null);
  };

  return (
    <Fragment>
      <div className="container flex flex-col items-center sm:items-stretch ">
        <label className="px-7">Location</label>
        <input
          placeholder="type your location"
          ref={inputRef}
          style={inputStyle}
        />
        <div style={{ height: "32vh", width: "100%" }} className="m-4">
          {isLoaded ? (
            <GoogleMap
              center={place}
              zoom={14}
              onClick={handleMapClick}
              mapContainerStyle={{
                width: "80%",
                height: "27vh",
                margin: "auto",
              }}
            >
              {place && (
                <MarkerF
                  key={1}
                  position={place}
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
          <p className="ml-14 my-3">{locationName}</p>
        </div>
      </div>
    </Fragment>
  );
}
