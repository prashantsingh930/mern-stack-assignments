import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className='bg-[#000] justify-between px-4 py-2 flex flex-row div'>
        <span className='logo'>
          <NavLink>
            <img
              className='w-20'
              src={
                "https://scontent.cdninstagram.com/v/t51.82787-19/534328043_17844181797555787_4618783143570821934_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=109&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=rJxGXa4_Dl4Q7kNvwEIX6Im&_nc_oc=AdrakRT2kFL_-cKgBB-Wz0PogCeUhF9Wmp3LufBVZd1raE6hpyekMb9r954xrsPhCSo&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=gda_sx6w4bLYDy8vlVktRg&_nc_ss=7ba8c&oh=00_AQEscwix6AP7pkwLEDgulK_FLJViTyv_GsabaqEaPcTNiA&oe=6A7BA4D6"
              }
            ></img>
          </NavLink>
        </span>
        <NavLink className='text-rose-100 mt-5 font-semibold' to={"/main"}>
          Home
        </NavLink>
        <span className='gap-5 p-2 justify-evenly mt-5'>
          <NavLink
            className='bg-green-600 h-8 p-2 m-1 text-rose-100 font-semibold'
            to={"/login"}
          >
            Login
          </NavLink>
          <NavLink
            className='bg-green-600 h-8 p-2 m-1 text-rose-100 font-semibold'
            to={"/register"}
          >
            Sign-up
          </NavLink>
        </span>
      </div>
    </>
  );
};

export default Header;
