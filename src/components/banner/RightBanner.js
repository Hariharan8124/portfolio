// src/components/RightBanner.js
import React from 'react';
import aiImage from '../../assets/images/ai.png';

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[200px] h-[200px] lgl:w-[300px] lgl:h-[380px] z-10"
        src={aiImage}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[200px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner;
