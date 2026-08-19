import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className='bg-[#2d3746] footer text-rose-50 justify-between px-3 py-2 flex flex-row'>
        <p className='text-sm mx-4'> 2024 XYZ All Rights Reserved </p>

        <NavLink
          className='bg-[#4b5562] h-8 p-1 px-2 m-1 text-rose-100  font-semibold'
          to={"/signup"}
        >
          Register For Free
        </NavLink>
      </div>
    </>
  );
};

export default Footer;
