import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018- 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sona College Of Technology (2021 - 2025)"
            subTitle="B.Tech in Artificial Intelligence And DataScience"
            percentage="6.8%"
          />
          <ResumeCard
            title="SKV Higher Secondary School (2020 - 2021)"
            subTitle="81.82%"
          />
          <ResumeCard
            title="SRK Matric Higher Secondary School (2018 - 2019)"
            subTitle="73%"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
