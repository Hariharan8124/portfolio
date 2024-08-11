// src/components/LeftBanner.js
import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaAws, FaDocker, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Cloud", "Networking."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Hariharan S</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I'm a networking enthusiast focused on cloud technologies and CCNA certification, with a strong background in Python programming.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
          <div className="flex gap-4">
            <a href="https://github.com/Hariharan8124" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/hariharan-s-67056a27a/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">BEST SKILL ON</h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaDocker />
            </span>
            <span className="bannerIcon">
              <FaAws />
            </span>
            <span className="bannerIcon">
              <SiKubernetes />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
