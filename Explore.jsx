/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'


function Explore() {
  return (
    <>
   <div class="w-full h-screen relative m-auto -mt-8">
        <img className='w-full h-screen cover ' src="./unsplahs.jpg" alt="Indian big" loading="lazy"/>
        <div class="absolute bottom-0 left-0 w-full text-white bg-[#000000] opacity-80 px-32 py-64 top-0  text-center box-border">
            <h1 className='text-9xl font-bold -mt-14'>Discover</h1>
            <p className='text-xl font-bold leading-9 mt-2'>Explore the Latest Tech Trends</p>
           <a className='decoration-none text-white' href="Latest.html">
           <button className='text-xl border-2 mt-9 rounded px-16 py-3 border-red-800 hover:bg-red-700 bg-red-800 text-white'>Read</button>
           </a>
        </div>
    </div>
    </>
  )
}

export default Explore;
