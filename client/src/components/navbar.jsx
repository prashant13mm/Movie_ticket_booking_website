import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
//humne clear react use krke login page ka kaam kiya tha yaad rkhne ke liye likh raha hu main.jsx mai api key add kri hai yaad rkhna

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate=useNavigate()

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 py-5">
      <Link to="/" className="max-md:flex-1">
        <img src={assets.logo} alt="" className="w-36 h-auto" />
        {/* logo of the navbar spurcing yha se ki jaa rhi hai */}
      </Link>
      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium
      max-md:text-lg z-50 flex flex-col md:flex-row items-center 
      max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen
      min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border 
      border-gray-300/20 overflow-hidden transition-[width] duration-300 ${
        isOpen ? "max-md:w-full" : "max-md:w-0"
      }`}
      >
        {/* yeh upar css likhi hai for getting that rounded middle portion....dollar lgakr option diya hai khulne pr hi baar aaye */}
        <XIcon
          className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        {/* yeh upar use kiya hai to get the cross icon */}
        <Link
          onClick={() => {
            scrollTo(0, 0), setIsOpen(false);
          }}
          to="/"
        >
          Home
        </Link>
        {/* upar yeh on lcick isliye daala hai taaki jab bhi yeh option choose ho jaye toh uske baad yeh upar scroll bhi ho jaye aur band ho jaye  */}
        <Link
          onClick={() => {
            scrollTo(0, 0); setIsOpen(false);
          }}
          to="movies"
        >
          Movies
        </Link>
        <Link
          onClick={() => {
            scrollTo(0, 0); setIsOpen(false);
          }}
          to="/"
        >
          Theaters
        </Link>
        <Link
          onClick={() => {
            scrollTo(0, 0); setIsOpen(false);
          }}
          to="/"
        >
          Releases
        </Link>
        <Link
          onClick={() => {
            scrollTo(0, 0); setIsOpen(false);
          }}
          to="/fav"
        >
          Favorites
        </Link>
      </div>
      <div className="flex item-center gap-8">
        <SearchIcon className="max-md:hidden w-6 h-6 cursor-pointer" />
        {!user ? (
          <button
            onClick={openSignIn}
            className="px-4 py-1 sm:px-7 sm:py-2 bg-primary
            hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
          >
            Login
          </button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
                <UserButton.Action label="My Bookings" labelIcon={<TicketPlus width={15}/>} onClick={()=>navigate('/my-bookings')}/>
                    {/* yha upar wale se navhigate kiya gya hai ki kaha jana chaiye */}
            </UserButton.MenuItems>
          </UserButton>
          //yeh upar pura usebutton wala function ek aur option add krne ke liye kiya jaa rha hai clerk mai
        )}
      </div>
      <MenuIcon
        className="max-md:m1-4 md:hidden w-8 h-8 cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
    </div>
  );
};

export default navbar;
