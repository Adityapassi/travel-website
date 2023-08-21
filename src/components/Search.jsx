import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";

const Search = () => {
  return (
    <div
      name="book"
      className="max-w-[1170px] mx-auto grid lg:grid-cols-3 gap-6 px-4 py-16"
    >
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2 className="py-2 font-bold md:text-3xl">
            LUXURY INCLUDED VACATIONS FOR TWO PEOPLE
          </h2>
          <p className="py-4">
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at BEACHES Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. If you are planning a wedding, BEACHES is
            the leader in Caribbean destination weddings and honeymoon packages.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button className="btn">
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2 md:text-xl">LEADING SERVICE</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button className="btn">
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border text-center p-2">
          <p>GET AN ADDITIONAL 10% OFF</p>
          <p className="py-2">12 HOURS LEFT</p>
          <p className="py-2 bg-gray-900 text-white m-3">BOOK NOW AND SAVE</p>
        </div>
        <form className="py-2">
          <div className="mb-2">
            <label className="block py-1">Destination</label>
            <select className="w-full border rounded-md p-2 focus:outline-black/20">
              <option>Grande Antigua</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="block py-1">Check In</label>
            <input
              type="date"
              className="w-full border rounded-md p-2 focus:outline-black/20"
            />
          </div>
          <div className="mb-2">
            <label className="block py-1">Check Out</label>
            <input
              type="date"
              className="w-full border rounded-md p-2 focus:outline-black/20"
            />
          </div>
          <div>
            <button className="btn w-full"> Rates & Availabilities</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
