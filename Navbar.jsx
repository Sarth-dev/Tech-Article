/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";

function Navbar() {
  return (
    <>
      <div className="w-full h-28 -mt-2 leading-none">
        <div className="  bg-transparent">
          <a className="text-white decoration-none" href="index.html">
            <h1 className="text-xl tracking-tight ml-6 mt-2 px-15 py-5 uppercase text-black font-[Founders_Grotesk]">
              Tech Article
            </h1>
          </a>
        </div>
        <div className="flex ml-96 justify-end -mt-20 font-[Founders_Grotesk] text-md text-md text-black">
          <a className="text-black  decoration-none" href="index.html">
            <h5 className="Text-md px-4 py-1 underline underline-offset-4 decoration-slate-400 hover:no-underline font-light tracking-tight leading-none ">
              Home
            </h5>
          </a>
          <a className="text-black  decoration-none" href="Blog.html">
            <h5 className="Text-md px-4 py-1 underline underline-offset-4 decoration-slate-400 hover:no-underline font-light tracking-tight leading-none ">
              Blog
            </h5>
          </a>
          <a className="text-black  decoration-none" href="Contact.html">
            <h5 className="Text-md px-4 py-1 underline underline-offset-4 decoration-slate-400 hover:no-underline font-light tracking-tight leading-none ">
              Contact
            </h5>
          </a>
          <a className="text-black  decoration-none" href="Login.html">
            <h5 className="Text-md px-4 py-1 underline underline-offset-4 decoration-slate-400 hover:no-underline font-light tracking-tight leading-none ">
              Login
            </h5>
          </a>
        </div>
      </div>

      
    </>
  );
}

export default Navbar;
