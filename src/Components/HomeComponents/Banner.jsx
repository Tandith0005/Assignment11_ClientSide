import React from 'react';
import { motion } from "framer-motion"; 
import cakeBanner1 from "../../assets/Images/CakeBanner1.jpg";
import cakeBanner2 from "../../assets/Images/CakeBanner2.jpg";
import cakeBanner3 from "../../assets/Images/CakeBanner3.jpg";
import cakeBanner4 from "../../assets/Images/CakeBanner4.jpg";

const Banner = () => {
    return (
        <>
      <div className=" md:py-28 md:px-18 bg-[#dfb0ab]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex flex-wrap items-center justify-center gap-4 relative h-[400px] w-full md:w-auto">
            {/* Top Row */}
            <div className="flex  w-full relative">
              <motion.img
                src={cakeBanner1}
                className="mask mask-heart w-[120px] h-[120px] md:w-[200px] md:h-[200px] mx-4 rotate-260 mt-20"
                animate={{ y: [0, 50, 0] }}
                transition={{ 
                  duration: 2, 
                  delay: 1.40, 
                  ease: 'easeInOut', 
                  repeat: Infinity 
                }}
              />
              <motion.img
                src={cakeBanner2}
                className="mask mask-heart w-[120px] h-[120px] md:w-[200px] md:h-[200px] mx-4"
                animate={{ y: [-30, -60, -30] }}
                transition={{ 
                  duration: 2, 
                  delay: 0.5, 
                  ease: 'easeInOut', 
                  repeat: Infinity 
                }}
              />
              <motion.img
                src={cakeBanner4} // Now 4th image is in the top row
                className="mask mask-heart w-[120px] h-[120px] md:w-[200px] md:h-[200px] mx-4 rotate-100 mt-20"
                animate={{ y: [0, 50, 0] }}
                transition={{ 
                  duration: 2, 
                  delay: 1.40, 
                  ease: 'easeInOut', 
                  repeat: Infinity 
                }}
              />
            </div>
            
            {/* Bottom Row - Just the 3rd image centered */}
            <div className="w-full flex justify-center absolute top-[70%] md:left-[20%] left-[5%]">
              <motion.img
                src={cakeBanner3} // 3rd image now below the 2nd
                className="mask mask-heart w-[120px] h-[120px] md:w-[200px] md:h-[200px] rotate-180 "
                animate={{ y: [20, -30, 20] }}
                transition={{ 
                  duration: 2, 
                  delay: 0.5, 
                  ease: 'easeInOut', 
                  repeat: Infinity 
                }}
              />
            </div>
          </div>
          
          <div className='text-[#cc3366]'>
            <h1 className="text-[25px] md:text-5xl ">
              Welcome to Cakey's Twisted Bakery
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </>
    );
};

export default Banner;