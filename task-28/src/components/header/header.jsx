import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className='bg-[#000] justify-between px-4 py-2 flex flex-row div'>
        <span className='logo'>
          <NavLink to={"/"}>
            <img
              className='w-20'
              src={
                "https://blobcdn.same.energy/a/33/f5/33f53e20823c0de238580848e4cca784a6780a3d"
              }
            ></img>
          </NavLink>
        </span>
        <NavLink className='text-rose-100 mt-5 font-semibold' to={"/dashboard"}>
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
            to={"/signup"}
          >
            Sign-up
          </NavLink>
        </span>
      </div>
    </>
  );
};

export default Header;
