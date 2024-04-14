import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import { MdLocationOn } from "react-icons/md";

export default function Home() {
  //swipper used things
  SwiperCore.use([Navigation, Autoplay, Pagination]);

  //offerlisting static data
  let offerListing = [
    {
      id: 1,
      location: { lat: 38.746422, lng: 48.838066 },
      address: "Baku",
      bathrooms: 1,
      bedrooms: 1,
      description:
        "wqidhpqdiqhdpwodo qdpwqodjqd [pqodwjq [wdoquiwd pqw9oduq pwdiqwud qpwiduq doqiwudq pwd9iuqw dpq9wudq pw9duqw dpq9wdu ",
      discountPrice: 0,
      imageUrls: [
        "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
        "https://assets.site-static.com/userFiles/2470/image/blogs/2022/IlluminateVintageLLC-170904-Minimalist-Interior-Design-image1.jpg",
      ],
      name: "bag evi",
      offer: false,
      parking: false,
      regularPrice: "50000",
      type: "sale",
    },
    {
      id: 2,
      location: { lat: 40.409264, lng: 49.867092 },
      address: "Sumgait",
      bathrooms: 4,
      bedrooms: 2,
      rooms: 5,
      description: "bomba",
      discountPrice: 200,
      imageUrls: [
        "https://img.freepik.com/premium-photo/big-american-house-generative-ai_170984-9624.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712620800&semt=sph",
      ],
      name: "Bag evi",
      offer: true,
      parking: true,
      regularPrice: "50000",
      type: "rent",
    },
    {
      id: 3,
      location: { lat: 40.979858, lng: 47.847832 },
      address: "Qazax",
      bathrooms: 1,
      bedrooms: 1,
      description: "bomba",
      discountPrice: 0,
      imageUrls: [
        "https://s3-ap-southeast-1.amazonaws.com/homebyhitcheed-staging/images/cd7a642c-3ce9-43a1-9369-e3f9028551c8/thumbs/0932_1.jpg?1574234618",
      ],
      name: "bag evi",
      offer: false,
      parking: false,
      regularPrice: "50000",
      type: "sale",
    },
    {
      id: 4,
      location: { lat: 40.979858, lng: 47.847832 },
      address: "Sumgait",
      bathrooms: 1,
      bedrooms: 1,
      description: "bomba",
      discountPrice: 0,
      imageUrls: [
        "https://assets.site-static.com/userFiles/2470/image/blogs/2022/IlluminateVintageLLC-170904-Minimalist-Interior-Design-image1.jpg",
      ],
      name: "bag evi",
      offer: false,
      parking: false,
      regularPrice: "50000",
      type: "sale",
    },
    {
      id: 5,
      location: { lat: 40.409264, lng: 49.867092 },
      address: "Harasa",
      bathrooms: 1,
      bedrooms: 1,
      description: "bomba",
      discountPrice: 0,
      imageUrls: [
        "https://assets.site-static.com/userFiles/2470/image/blogs/2022/IlluminateVintageLLC-170904-Minimalist-Interior-Design-image1.jpg",
      ],
      name: "bag evi",
      offer: false,
      parking: false,
      regularPrice: 50000,
      type: "sale",
    },
    {
      id: 8,
      location: { lat: 38.746422, lng: 48.838066 },
      address: "Bura",
      bathrooms: 2,
      bedrooms: 2,
      description: "bomba",
      discountPrice: 0,
      imageUrls: [
        "https://assets.site-static.com/userFiles/2470/image/blogs/2022/IlluminateVintageLLC-170904-Minimalist-Interior-Design-image1.jpg",
      ],
      name: "bag evi",
      offer: false,
      parking: false,
      regularPrice: 30000,
      type: "rent",
    },
  ];

  return (
    <div>
      <div className="flex flex-col gap-6 py-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Kiraye evlerin <span style={{ color: "#AB6F43" }}>unikal</span> <br />
          mekani
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          Rent a Home kiraye evler tapmaq ve sahibleri ile elaqe saxlamaq ucun
          unikal bir yerdir.
          <br />
          Bizde her novde evler var
        </div>
        <Link
          to="/create-listing"
          className="text-xs sm:text-sm text-orange-800 font-bold hover:underline"
        >
          Ev kiraye ver
        </Link>
      </div>

      <div className="flex flex-col max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl pl-4 ">
          Sənə ən yaxinlar{" "}
        </h1>
        <div className="flex items-center w-full lg:max-w-6xl mx-auto p-3 ">
          <Swiper
            navigation
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            className="relative"
          >
            {offerListing &&
              offerListing.length > 0 &&
              offerListing.map((listing) => (
                <div
                  key={listing.id}
                  className="shadow-lg flex flex-col justify-center"
                >
                  <SwiperSlide key={listing.id}>
                    <Link to={`/listing/${listing.id}`} state={{ listing }}>
                      <div
                        style={{
                          background: `url(${listing.imageUrls[0]}) center no-repeat `,
                          backgroundSize: "cover",
                          // Adjust this value as needed
                          margin: "0 auto",
                        }}
                        className="h-[500px] rounded-t-xl"
                      ></div>

                      <div className="bg-white shadow-md mb-4 hover:shadow-lg  transition-shadow overflow-hidden rounded-b-xl w-full  mx-auto p-5 flex flex-col gap-3 items-center sm:items-stretch ">
                        <div className="flex flex-col sm:flex-row">
                          <div className=" flex flex-col gap-5 mx-12 w-40 sm:w-96 items-center ">
                            <h2 className="text-4xl font-bold">
                              {listing.name}
                            </h2>
                            <div className="flex items-center gap-1 text-2xl">
                              <MdLocationOn className="h-8 w-8 text-green-700" />
                              <p className=" text-gray-600 truncate w-full">
                                {listing.address}
                              </p>
                            </div>

                            <p className="text-2xl text-gray-600 line-clamp-1 w-48 text-center">
                              {listing.description}
                            </p>
                          </div>
                          <div className="flex flex-col gap-3  sm:w-96 lg:mx-28 items-center mx-6 my-6 sm:pb-8 text-center">
                            <p className="text-slate-500 mt-2 font-semibold text-3xl">
                              ${listing.regularPrice.toLocaleString("en-US")}
                              {listing.type === "rent" && " / month"}
                            </p>
                            <div className="text-slate-700 flex gap-4 ">
                              <div className="font-bold text-xl">
                                {listing.bedrooms > 1
                                  ? `${listing.bedrooms} beds `
                                  : `${listing.bedrooms} bed `}
                              </div>
                              <div className="font-bold text-xl">
                                {listing.bathrooms > 1
                                  ? `${listing.bathrooms} baths `
                                  : `${listing.bathrooms} bath `}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                </div>
              ))}
          </Swiper>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-6 my-10">
        {offerListing && offerListing.length > 0 && (
          <div className="">
            <div className="my-3 sm:mx-0 md:mx-10 lg:mx-0">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent Offers
              </h2>
              <Link
                to="/search?offer=true"
                className="text-sm text-blue-800 hover:underline"
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 my-4 justify-evenly ">
              {offerListing.map((listing) => (
                <ListingItem listing={listing} key={listing.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
