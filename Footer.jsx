/* eslint-disable no-unused-vars */
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";

function Footer() {
  return (
    <>
      <div className="w-full h-2/4 bg-[#FFF8DC]">
        <div className="w-full flex h-72 bg-[#FFF8DC]">
          <div className="w-fit  h-3/4  mt-16 ml-4">
            <h3 className="text-xl font-semibold">
              Subscribe to Our newsletter
            </h3>
            <p className="text-md px-0 mt-4 font-normal">Email Address</p>
            <input
              className="w-[470px] h-12 border-2 rounded-md"
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
            />
            <div>
              <button className="text-xl bg-red-700 text-white border-2 border-red-700 hover:bg-red-600 mt-4 px-6 py-3 rounded-[4px]">
                Submit
              </button>
            </div>
          </div>
          <div className="w-fit h-2/4  mt-16 ml-40">
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className="text-md font-normal mt-4">techarticle@gmail.com</p>
            <p>+91 8090567342</p>
          </div>
          <div className="w-fit h-2/4 mt-16 ml-40">
            <h3 className="text-xl font-semibold">Socials</h3>
            <div className="flex">
              <a href="#">
                <AiFillInstagram className="text-2xl  mt-4 " />
              </a>
              <a href="#">
                <TiSocialFacebookCircular className="text-2xl ml-1 mt-4" />
              </a>
              <a href="#">
                <TiSocialTwitter className="text-2xl ml-1 mt-4" />
              </a>{" "}
              <a href="#">
                <TiSocialLinkedinCircular className="text-2xl ml-1 mt-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
