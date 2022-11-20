import { useState } from "react";
import { SkillsObj } from "../../pages";
import Card from "./Card";

const Framework = () => {
  const [AllSkill, SetAllSkill] = useState<SkillsObj[]>([
    { Name: "NextJs", Image: "/nextjss.png" },
    { Name: "ReactJs", Image: "/physics.png" },
    { Name: "Asp.Net", Image: "/website.png" },
  ]);

  return (
    <>
      <div className="w-full   h-full items-center flex justify-center    p-2">
        <div className="w-full h-[30%] grid grid-cols-4 justify-center  gap-2">
          {AllSkill.map((Skill: SkillsObj) => (
            <Card Title={Skill.Name} ImageSrc={Skill.Image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Framework;
