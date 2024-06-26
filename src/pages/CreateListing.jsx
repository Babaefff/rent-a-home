import BookingDates from "../components/BookingDates";
import Maps from "../components/Map";

const CreateListing = () => {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Share Home</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-6 ">
          <div className="flex flex-col flex-1 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border p-3 rounded-lg"
              id="name"
              maxLength="62"
              minLength="3"
              required
            />
            <textarea
              type="text"
              placeholder="Description"
              className="border p-3 rounded-lg"
              id="description"
              required
            />
            <Maps />
            <div className="flex flex-wrap gap-6 justify-center lg:justify-stretch">
              <div className="flex gap-2">
                <input type="checkbox" name="" id="sale" className="w-5" />
                <span>Sell</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="" id="rent" className="w-5" />
                <span>Rent</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="" id="parking" className="w-5" />
                <span>Parking</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="" id="bath" className="w-5" />
                <span>Bath</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 items-center sm:items-stretch">
              <div className=" flex items-center gap-2">
                <input
                  type="number"
                  name=""
                  id="rooms"
                  min="1"
                  max="10"
                  required
                  className="p-3 border border-gray-300 rounded-lg"
                />
                <p>Rooms</p>
              </div>
              <div className=" flex items-center gap-2">
                <input
                  type="number"
                  name=""
                  id="bedrooms"
                  min="1"
                  max="10"
                  required
                  className="p-3 border border-gray-300 rounded-lg"
                />
                <p>Beds</p>
              </div>
              <div className=" flex items-center gap-2">
                <input
                  type="number"
                  name=""
                  id="price"
                  min="1"
                  max="10"
                  required
                  className="p-3 border border-gray-300 rounded-lg"
                />
                <div className=" flex flex-col items-center">
                  <p>Price</p>
                  <span className="text-xs">($ / month)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-4 items-center">
            <p className="font-semibold">
              Images:
              <span className="font-normal text-gray-600 ml-2">
                The first image will be the cover (max 6){" "}
              </span>
            </p>
            <div className=" flex gap-4  ">
              <input
                className="p-3 border border-gray-300 rounded w-full"
                type="file"
                name=""
                id="images"
                accept="image/*"
                multiple
              />
              <button className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80">
                Upload
              </button>
            </div>
            <BookingDates />
          </div>
        </div>
        <button className="p-3 mt-5   w-48 mx-auto sm:w-96  bg-slate-700 text-white rounded-lg hover:opacity-95 disabled-opacity-80">
          Create Home
        </button>
      </form>
    </main>
  );
};

export default CreateListing;
