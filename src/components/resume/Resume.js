import React, { useState } from 'react';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';

const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
   const [achievementData, setAchievementData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black flex flex-col items-center">
      <div className="flex justify-center items-center text-center mb-8">
        {/* Add your title component or text here */}
      </div>
      <div className="w-full flex justify-center">
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
              setAchievementData(false);
            }}
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
              setAchievementData(false);
            }}
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setAchievementData(true);
            }}
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-center mt-8">
        {educationData && <Education />}
        {skillData && <Skills />}
        {achievementData && <Achievement />}
      </div>
    </section>
  );
}

export default Resume;
