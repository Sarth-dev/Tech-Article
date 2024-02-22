/* eslint-disable no-unused-vars */
import React from "react";

function Contact() {
  return (
    <>
      <div className=" w-full h-fit">
       <div className="flex">
       <form action="index.html" method="post">
          <h1 className="text-6xl leading-none mt-3 ml-6
           font-semibold text-red-700">Contact Us</h1>
          <div className="h-fit w-full ml-20 ">
            <div className="px-4 ml-6 py-10">
            <p className="text-md">Name</p>
            <input className="border-2 w-96 h-10 rounded-md" type="text" placeholder="Your Name"/>
            </div>
            <div className="px-4 ml-6 -mt-8 py-8">
            <p className="text-md">Email</p>
            <input className="border-2 w-96 h-10 rounded-md" type="text" placeholder="Your email address" required/>
            </div>
            <div className="px-4 ml-6 -mt-8 py-8">
            <p className="text-md">Message</p>
            <textarea className="w-96 h-20 rounded-md border-2" name="text" id="text" cols="80" rows="40" placeholder="Your Message" required></textarea>
            
            </div>
            <button className="text-md border-2 px-4 border-red-700 hover:bg-red-600  py-2 rounded-md bg-red-700 text-white ml-44 -mt-8">Submit</button>
          </div>
        </form>
       </div>
        <div className="w-full -ml-9 mt-[-480px] px-2  justify-end h-screen flex bg-white">
          <div
            className="w-2/5 h-3/4 mt-8 ml-32 
            transition ease-in-out delay-10  hover:-translate-y-1 hover:scale-[.9] hover: duration-300"
          >
            <a href="https://www.healthday.com/health-news/general-health/big-cats-can-tell-familiar-voices-from-strangers#:~:text=Investigators%20found%20consistent%20evidence%20of,whether%20their%20names%20were%20used.">
              <img
                className="w-full h-4/5"
                src="./lions.webp"
                alt="lions"
              />
              <h2 className="text-xl mt-2 font-semibold">
              Captive big cats can tell voices apart
              </h2>
              <p className="  py-1 font-lighter">
              Domesticated animals like cats, dogs, horses, and pigs can recognize their names when called by human caregivers. Some {" "}
                <a className="decoration-none text-blue-600" href="#">
                  Read More
                </a>
              </p>
            </a>
            <p>FEB 15,2024</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
