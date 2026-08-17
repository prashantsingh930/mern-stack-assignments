import React from "react";

const Login = () => {
  return (
    <>
      <div className='login flex items-center justify-center h-screen bg-[#f0f0f0]'>
        <div className='p-6 w-80 form bg-[#fff]'>
          <h2 className='font-bold text-3xl mb-10  justify-self-center'>
            Login
          </h2>
          <form className='p-2'>
            <laber for='mail' className='m-2'>
              Email
            </laber>
            <input
              className='m-2 border-2 p-2 w-55'
              id='mail'
              type='email'
              placeholder='Enter Your Email Address'
              required
            ></input>

            <laber for='pass' className='m-2'>
              Password
            </laber>
            <br></br>
            <input
              className='m-2 border-2 p-2 w-55'
              id='pass'
              type='password'
              placeholder='Password'
              required
            ></input>
            <br></br>
            <button
              type='submit'
              className='bg-green-600 m-2 p-2 w-55 cursor-pointer'
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
