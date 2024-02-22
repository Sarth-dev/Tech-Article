/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

function Techtopic() {
  return (
    <>
      <div className="w-full flex h-screen  bg-white">
        <div className="w-2/5 h-3/4 mt-12 ml-16 transition ease-in-out delay-10  hover:-translate-y-1 hover:scale-[.9] hover: duration-300 ">
          <a href="https://www.wired.com/story/google-deepmind-gemini-pro-ai-upgrade/">
            <img
              className="w-full h-4/5"
              src="./Google-Deepmind-Business-1353069623.webp"
              alt="Google Flagship"
            />
            <h2 className="text-xl mt-2 font-semibold">
              Google's Flagship AI Model
            </h2>
            <p className="  py-1 font-lighter">
              Just two months after Alphabet made its Gemini AI model public,it
              <a className="decoration-none text-blue-600" href="https://www.wired.com/story/google-deepmind-gemini-pro-ai-upgrade/">
                Read More
              </a>
            </p>
          </a>
          <p>FEB 6,2024</p>
        </div>

        <div
          className="w-2/5 h-3/4 mt-12 ml-32 
            transition ease-in-out delay-10  hover:-translate-y-1 hover:scale-[.9] hover: duration-300"
        >
          <a href="#">
            <img
              className="w-full h-4/5"
              src="./13chatgpt-memory-jumbo.webp"
              alt="Google Flagship"
            />
            <h2 className="text-xl mt-2 font-semibold">
              OpenAI is giving ChatGPT a better memory
            </h2>
            <p className="  py-1 font-lighter">
              The San Francisco artificial intelligence start-up said on Tuesday
              that it was releasing,
              <a className="decoration-none text-blue-600" href="#">
                Read More
              </a>
            </p>
          </a>
          <p>FEB 5,2024</p>
        </div>
      </div>

      <div className="w-full flex h-screen  bg-white">
        <div className="w-2/5 h-3/4 mt-8 ml-16 transition ease-in-out delay-10  hover:-translate-y-1 hover:scale-[.9] hover: duration-300 ">
          <a href="Demo.html">
            <img
              className="w-full h-4/5"
              src="./Growing-animal-muscle-and-fat-cells-inside-rice-grains-1-CREDIT-Yonsei-University.webp"
              alt="Beef Rice"
            />
            <h2 className="text-xl mt-2 font-semibold">
              Scientists swear their lab-grown 'beef rice'
            </h2>
            <p className="  py-1 font-lighter">
              The whole point of lab-grown meat, by and large..
              <a className="decoration-none text-blue-600" href="#">
                Read More
              </a>
            </p>
          </a>
          <p>FEB 14,2024</p>
        </div>

        <div
          className="w-2/5 h-3/4 mt-8 ml-32 
            transition ease-in-out delay-10  hover:-translate-y-1 hover:scale-[.9] hover: duration-300"
        >
          <a href="#">
            <img
              className="w-full h-4/5"
              src="./CERT-dog-1.webp"
              alt="Robodog"
            />
            <h2 className="text-xl mt-2 font-semibold">
              A four-legged 'Robodog' is patrolling
            </h2>
            <p className="  py-1 font-lighter">
              Traversing through the dark, underground areas of the Large Hadron
              Collider (LHC) in Geneva, Switzerland.
              <a className="decoration-none text-blue-600" href="#">
                Read More
              </a>
            </p>
          </a>
          <p>FEB 8,2024</p>
        </div>
      </div>
      
    </>
  );
}

export default Techtopic;
