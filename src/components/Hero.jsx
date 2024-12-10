import React from "react";
import heroimg from '../assets/hero.png'

const Hero = () => {

   

  return (
    <div id="hero" className="w-full grid md:grid-cols-2 grid-cols-1 lg:px-24 px-6 lg:py-20 py-8 font-cormorant "  >
      <div  data-aos="zoom-in"  data-aos-delay='100' className="text-center md:text-start flex flex-col justify-center items-center md:me-20 " >
        <h1 className="  text-3xl lg:text-6xl  font-extrabold leading-[40px] lg:leading-[75px] ">Building digital products & brands.</h1>
        <p className="text-gray-500 mt-4 " >This free and open-source landing page template was built using the utility classes from Tailwind CSS and based on the components from the Flowbite Library and the Blocks System.</p>
        <button className=" md:me-auto mt-7 lg:p-4 p-3 bg-amber-300 rounded-lg font-semibold text-md  " >Get A Quote</button>
        
      </div>
      <div data-aos="zoom-in"  data-aos-delay='300' className="flex items-center justify-center" >
        <img src={heroimg} alt="" className=" md:w-[90%] lg:w-[75%] w-[100%] pt-5 "  />
      </div>
    </div>
  );
};

export default Hero;
