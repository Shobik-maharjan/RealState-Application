import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import Select from "react-select";

const Search = ({ selectedOption, setSelectedOption }) => {
  const handleSelectedOption = (option) => {
    setSelectedOption(option);
  };

  const cities = [
    { value: "Sunsari", label: "Sunsari" },
    { value: "Udayapur", label: "Udayapur" },
    { value: "Okhaldhunga", label: "Okhaldhunga" },
    { value: "Solukhumbu", label: "Solukhumbu" },
    { value: "Khotang", label: "Khotang" },
    { value: "Dolakha", label: "Dolakha" },
    { value: "Ramechhap", label: "Ramechhap" },
    { value: "Rukum", label: "Rukum" },
    { value: "Dolpa", label: "Dolpa" },
    { value: "Humla", label: "Humla" },
    { value: "Mugu", label: "Mugu" },
    { value: "Jajarkot", label: "Jajarkot" },
    { value: "Surkhet", label: "Surkhet" },
    { value: "Dang", label: "Dang" },
    { value: "Rolpa", label: "Rolpa" },
    { value: "Pyuthan", label: "Pyuthan" },
    { value: "Arghakhanchi", label: "Arghakhanchi" },
    { value: "Syangja", label: "Syangja" },
    { value: "Lamjung", label: "Lamjung" },
    { value: "Manang", label: "Manang" },
    { value: "Mustang", label: "Mustang" },
    { value: "Kaski", label: "Kaski" },
    { value: "Saptari", label: "Saptari" },
    { value: "Bhojpur", label: "Bhojpur" },
    { value: "Rupandehi", label: "Rupandehi" },
    { value: "Nawalparasi", label: "Nawalparasi" },
    { value: "Panchthar", label: "Panchthar" },
    { value: "Taplejung", label: "Taplejung" },
    { value: "Illam", label: "Illam" },
    { value: "Dhankuta", label: "Dhankuta" },
    { value: "Terhathum", label: "Terhathum" },
    { value: "Sindhuli", label: "Sindhuli" },
    { value: "Sankhuwasabha", label: "Sankhuwasabha" },
    { value: "Chadani", label: "Chadani" },
    { value: "Bardiya", label: "Bardiya" },
    { value: "Gorkha", label: "Gorkha" },
    { value: "Baitadi", label: "Baitadi" },
    { value: "Rasuwa", label: "Rasuwa" },
    { value: "Sindhupalchok", label: "Sindhupalchok" },
    { value: "Chandrapur", label: "Chandrapur" },
    { value: "Bishal Nagar", label: "Bishal Nagar" },
    { value: "Chhetrapati", label: "Chhetrapati" },
    { value: "Pokhara Metropolitan", label: "Pokhara Metropolitan" },
    { value: "Patan (Lalitpur)", label: "Patan (Lalitpur)" },
    { value: "Banepa", label: "Banepa" },
    { value: "Suryabinayak", label: "Suryabinayak" },
    { value: "Bhadrapur", label: "Bhadrapur" },
    { value: "Baglung", label: "Baglung" },
    { value: "Hetauda", label: "Hetauda" },
    { value: "Purnabas", label: "Purnabas" },
    { value: "Kalaiya", label: "Kalaiya" },
    { value: "Shree Harsha", label: "Shree Harsha" },
    { value: "Kavre", label: "Kavre" },
    { value: "Tandi", label: "Tandi" },
    { value: "Panchgani", label: "Panchgani" },
    { value: "Mahakali", label: "Mahakali" },
    { value: "Sati", label: "Sati" },
    { value: "Buddhaneelkantha", label: "Buddhaneelkantha" },
    { value: "Dharmasthali", label: "Dharmasthali" },
    { value: "Madi", label: "Madi" },
    { value: "Madhyapur Thimi", label: "Madhyapur Thimi" },
    { value: "Bansbari", label: "Bansbari" },
    { value: "Bharatpur", label: "Bharatpur" },
    { value: "Kathmandu Valley", label: "Kathmandu Valley" },
    { value: "Gaur", label: "Gaur" },
    { value: "Jaleshwor", label: "Jaleshwor" },
    { value: "Kirtipur", label: "Kirtipur" },
    { value: "Chuchchech", label: "Chuchchech" },
    { value: "Brahmapuri", label: "Brahmapuri" },
  ];

  const [selectedCityOption, setSelectedCityOption] = useState(cities[0]);
  const [selectedPropertyStatusOption, setSelectedPropertyStatusOption] =
    useState(null);
  const [selectedBhkOption, setSelectedBhkOption] = useState(null);
  const [selectedAvailabilityOption, setSelectedAvailabilityOption] =
    useState(null);
  const [selectedPropertyTypeOption, setSelectedPropertyTypeOption] =
    useState(null);
  const bhkType = [
    { value: "1 RK", label: "1 RK" },
    { value: "2 BHK", label: "2 BHK" },
    { value: "3 BHK", label: "3 BHK" },
    { value: "4 BHK", label: "4 BHK" },
    { value: "4+ BHK", label: "4+ BHK" },
  ];

  const propertyStatus = [
    { value: "Under Construction", label: "Under Construction" },
    { value: "Ready", label: "Ready" },
  ];

  const availability = [
    {
      value: "Immediate",
      label: "Immediate",
    },
    {
      value: "Within 15 Days",
      label: "Within 15 Days",
    },
    {
      value: "Within 30 Days",
      label: "Within 30 Days",
    },
    {
      value: "After 30 Days",
      label: "After 30 Days",
    },
  ];

  const propertyType = [
    {
      value: "Office Space",
      label: "Office Space",
    },
    {
      value: "Co-Working",
      label: "Co-Working",
    },
    {
      value: "Restaurant/Cafe",
      label: "Restaurant/Cafe",
    },
    {
      value: "Shop",
      label: "Shop",
    },
    {
      value: "Showroom",
      label: "Showroom",
    },
    {
      value: "Industrial Building",
      label: "Industrial Building",
    },
    {
      value: "Industrial Shed",
      label: "Industrial Shed",
    },
    {
      value: "Gowdown/Warehouse",
      label: "Gowdown/Warehouse",
    },
    {
      value: "Other business",
      label: "Other business",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center md:px-10">
        <div className="flex flex-col gap-4 mt-2 md:mx-0 w-full pt-4">
          <div className="text-3xl font-normal text-center text-[#787676] hidden md:block">
            Nepal's Largest NESTATE Property Site
          </div>

          <div className="md:flex hidden bg-[rgba(252,178,68,0.2)] h-14 gap-2 md:w-fit w-full mx-auto md:p-4 p-2 py-3 text-xs justify-center text-[#464646]">
            <div className="flex items-center">
              {selectedOption === "Buy" ? (
                <>
                  <Link to="/home-interiors" className="flex items-center">
                    <img
                      src="home/HomeInteriorHome.svg"
                      alt=""
                      className="mr-2"
                    />
                    Home Interiors
                  </Link>
                </>
              ) : (
                <>
                  <Link to="rental-agreement" className="flex items-center">
                    <img src="home/RAIcon.svg" alt="" className="mr-2" />
                    Rental Agreement
                  </Link>
                </>
              )}
            </div>
            <div className="mr-1 border  border-stone-500"></div>
            <div className="flex items-center">
              {selectedOption === "Buy" ? (
                <>
                  <img
                    src="	home/HomeInteriorDeliveryHome.svg"
                    alt=""
                    className="mr-2"
                  />
                  45-Days Guarantee
                </>
              ) : (
                <Link to="rental-agreement" className="flex items-center">
                  <img src="	home/deliveryIcon.svg" alt="" className="mr-2" />
                  Next Day Delivery
                  </Link>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center opacity-40 font-semibold text-sm justify-center">
            <div>100% Owner properties</div>
            <div className="mx-2 border border-black h-4"></div>
            <div>Zero Brokerage</div>
          </div>

          <div className="grid grid-cols-3 items-center md:border border-zinc-200 md:w-[400px] w-full mx-auto text-center text-sm">
            <div
              className={`p-2 cursor-pointer ${
                selectedOption === "Buy"
                  ? "border-b-4 border-[#ff5800] font-semibold"
                  : "md:border-r border-zinc-200"
              } `}
              onClick={() => handleSelectedOption("Buy")}
            >
              <Link
                className={`no-underline ${
                  selectedOption === "Buy"
                    ? " text-[#ff5800] font-semibold"
                    : "text-zinc-400"
                }`}
              >
                Buy
              </Link>
            </div>
            <div
              className={` p-2 cursor-pointer ${
                selectedOption === "Rent"
                  ? "border-b-4  text-[#ff5800] font-semibold"
                  : "md:border-x border-zinc-200"
              } `}
              onClick={() => handleSelectedOption("Rent")}
            >
              <Link
                className={`no-underline ${
                  selectedOption === "Rent"
                    ? "  text-[#ff5800] font-semibold"
                    : "text-zinc-400"
                }`}
              >
                Rent
              </Link>
            </div>
            <div
              className={` p-2 cursor-pointer ${
                selectedOption === "Commercial"
                  ? "border-b-4  text-[#ff5800] font-semibold"
                  : "md:border-l border-zinc-200"
              } `}
              onClick={() => handleSelectedOption("Commercial")}
            >
              <Link
                className={`no-underline ${
                  selectedOption === "Commercial"
                    ? "  text-[#ff5800] font-semibold"
                    : "text-zinc-400"
                }`}
              >
                Commercial
              </Link>
            </div>
          </div>

          <div className="relative md:hidden">
            <div className="p-4 border border-black rounded-xl opacity-40 ">
              Search by locality or landmark
            </div>
            <div className="w-fit absolute top-2 right-2 bg-[#ff5800] text-white flex items-center text-lg px-3 py-2 cursor-pointer rounded-xl hover:bg-[#d03c3c]">
              <BiSearch className="text-2xl" />
            </div>
          </div>

          <div className="flex md:hidden items-center justify-between gap-2 bg-gradient-to-br from-[#452f22] to-[#574435] p-4 rounded-xl text-white text-sm">
            <div className="flex flex-col gap-1 min-w-fit">
              <div className="opacity-90">Looking for Tenants / Buyers ?</div>
              <div>
                <div></div>
                <div className="text-xs opacity-70">
                  Faster & Verified Tenants/Buyers
                </div>
              </div>
              <div>
                <div></div>
                <div className="text-xs opacity-70">Pay ZERO brokerage</div>
              </div>
              <button className="p-3 w-fit mt-4 rounded-md bg-[#ff5800] font-semibold">
                Post FREE Property Ad
              </button>
            </div>

            <img
              src="/home/homePage.png"
              alt=""
              className="bg-no-repeat bg-contain m-0 min-w-24 w-32"
            />
          </div>
        </div>

        <div className="w-full lg:w-10/12 xl:w-9/12 md:flex hidden flex-col">
          <div className="flex md:flex-row flex-col">
            <Select
              defaultValue={selectedCityOption}
              onChange={setSelectedCityOption}
              options={cities}
              className="min-w-44 text-sm"
              isSearchable={false}
              styles={{
                control: (base) => ({
                  ...base,
                  minHeight: "50px", // Set a fixed height\
                  // minWidth: "150px",
                  padding: "0 10px", // Add horizontal padding instead
                  border: "1px solid #d1d5db", // Adjust border color
                }),
              }}
            />
            <input
              type="search"
              name="search"
              id="search"
              className="border border-zinc-200 px-4 text-sm w-full outline-none"
              placeholder="Search upto 3 localities or landmarks"
            />
            <div className="w-fit bg-[#ff5800] text-white flex items-center text-lg px-10 cursor-pointer hover:bg-[#d03c3c]">
              <BiSearch className="text-xl opacity-80" />
              <button type="submit">Search</button>
            </div>
          </div>

          {/* for Buy */}
          {selectedOption === "Buy" ? (
            <div className="flex flex-col md:flex-row gap-2 border border-zinc-200  p-2.5 items-center text-sm">
              <div className="flex gap-2">
                <div>
                  <input
                    type="radio"
                    name="land_type"
                    id="full_house"
                    value="full_house"
                    checked
                  />
                  <label
                    htmlFor="full_house"
                    className="ml-1 text-[13px] cursor-pointer"
                  >
                    Full House
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="land_type"
                    id="land_plot"
                    value="land_plot"
                  />
                  <label
                    htmlFor="land_plot"
                    className="ml-1 cursor-pointer text-[13px]"
                  >
                    Land/Plot
                  </label>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Select
                  placeholder="BHK Type"
                  options={bhkType}
                  isMulti
                  defaultValue={selectedBhkOption}
                  onChange={setSelectedBhkOption}
                  isSearchable={false}
                  styles={{
                    control: (base) => ({
                      ...base,
                      fontSize: "11px",
                      padding: "0 10px", // Add horizontal padding instead
                      minWidth: "100px",
                      border: "1px solid #d1d5db", // Adjust border color
                    }),
                  }}
                />

                <Select
                  placeholder="Property Status"
                  options={propertyStatus}
                  defaultValue={selectedPropertyStatusOption}
                  onChange={setSelectedPropertyStatusOption}
                  className="min-w-fit"
                  isSearchable={false}
                  styles={{
                    control: (base) => ({
                      ...base,
                      fontSize: "11px",
                      padding: "0 10px", // Add horizontal padding instead
                      border: "1px solid #d1d5db", // Adjust border color
                    }),
                  }}
                />
                <div className="border border-[#d1d5db] flex gap-2 px-2.5 py-1.5 items-center">
                  <input type="checkbox" name="new_project" id="new_project" />
                  <label for="new_project" className="text-xs">
                    New Builder Projects
                  </label>
                </div>
              </div>
            </div>
          ) : // for Rent
          selectedOption === "Rent" ? (
            <div className="flex md:flex-row flex-col gap-2 border border-zinc-200  p-2.5 items-center text-sm">
              <div className="flex gap-2">
                <div>
                  <input
                    type="radio"
                    name="land_type"
                    id="full_house"
                    value="full_house"
                    checked
                  />
                  <label
                    htmlFor="full_house"
                    className="ml-1 cursor-pointer text-[13px]"
                  >
                    Full House
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="land_type"
                    id="land_plot"
                    value="land_plot"
                  />
                  <label
                    htmlFor="land_plot"
                    className="ml-1 cursor-pointer text-[13px]"
                  >
                    Land/Plot
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="land_type"
                    id="flatmates"
                    value="flatmates"
                  />
                  <label
                    htmlFor="flatmates"
                    className="ml-1 cursor-pointer text-[13px]"
                  >
                    Flatmates
                  </label>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Select
                  placeholder="BHK Type"
                  options={bhkType}
                  isMulti
                  defaultValue={selectedBhkOption}
                  onChange={setSelectedBhkOption}
                  isSearchable={false}
                  styles={{
                    control: (base) => ({
                      ...base,
                      fontSize: "11px",
                      padding: "0 10px", // Add horizontal padding instead
                      minWidth: "100px",
                      border: "1px solid #d1d5db", // Adjust border color
                    }),
                  }}
                />

                <Select
                  placeholder="Availability"
                  options={availability}
                  defaultValue={selectedAvailabilityOption}
                  onChange={setSelectedAvailabilityOption}
                  className="min-w-fit"
                  isSearchable={false}
                  styles={{
                    control: (base) => ({
                      ...base,
                      fontSize: "11px",
                      padding: "0 10px", // Add horizontal padding instead
                      minWidth: "100px",
                      border: "1px solid #d1d5db", // Adjust border color
                    }),
                  }}
                />
              </div>
            </div>
          ) : // for Commercial
          selectedOption === "Commercial" ? (
            <div className="flex md:flex-row flex-col gap-2 border border-zinc-200  p-2.5 items-center text-sm">
              <div className="flex gap-2">
                <div>
                  <input
                    type="radio"
                    name="land_type"
                    id="rent"
                    value="rent"
                    checked
                  />
                  <label
                    htmlFor="full_house"
                    className="ml-1 cursor-pointer text-[13px]"
                  >
                    Rent
                  </label>
                </div>
                <div>
                  <input type="radio" name="land_type" id="buy" value="buy" />
                  <label
                    htmlFor="buy"
                    className="ml-1 cursor-pointer text-[13px]"
                  >
                    Buy
                  </label>
                </div>
              </div>
              <Select
                placeholder="Property Type"
                options={propertyType}
                defaultValue={selectedPropertyTypeOption}
                onChange={setSelectedPropertyTypeOption}
                className="min-w-fit"
                isSearchable={false}
                styles={{
                  control: (base) => ({
                    ...base,
                    fontSize: "11px",
                    padding: "0 10px", // Add horizontal padding instead
                    minWidth: "100px",
                    border: "1px solid #d1d5db", // Adjust border color
                  }),
                }}
              />
            </div>
          ) : null}
        </div>

        <div className="md:flex hidden flex-col gap-4 items-center">
          <div className="flex flex-nowrap items-center gap-2 mt-10">
            <hr className="border opacity-20 w-20" />
            <span className="text-sm opacity-80">
              Are you a Property Owner?
            </span>
            <hr className="border opacity-20  w-20" />
          </div>
          <button
            className="px-4 py-2.5 w-fit hover:bg-teal-700"
            style={{ backgroundColor: "#004953" }}
          >
            <Link to="/post-property" className="text-white">
              Post Free Property Ad
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
