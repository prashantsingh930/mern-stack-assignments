import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className='h-screen gap-4'>
      <h1 className='mt-10 p-4 justify-center flex'>404 Not Found</h1>
      <p className='justify-center p-4 flex'>
        Please navigate to authorised links
      </p>
      <br />
      <br />
      <NavLink
        className='justify-center flex bg-[#4b5562] h-8 p-1 px-2 m-1 text-rose-100  font-semibold'
        to={"/dashboard"}
      >
        Dashboard
      </NavLink>
    </div>
  );
}

export default NotFound;
