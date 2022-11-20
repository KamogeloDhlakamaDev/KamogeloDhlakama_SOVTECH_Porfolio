import { useState } from "react";
import { SkillsObj } from "../../pages";
import Card from "./Card";

const Programming = () => {
  const [AllSkill, SetAllSkill] = useState<SkillsObj[]>([
    { Name: "Java", Image:  "/java.png" },
    { Name: "C++", Image:  "/cplus.png" },
    { Name: "C#", Image:  "/csharp.png" },
    { Name: "Microsoft SQL", Image:  "/sql-server.png" },
    { Name: "Typescript", Image:  "/typescript.png" },
    { Name: "Assembly", Image:  "/assembly.png" },
  ]);
  return (
    <>
      <div className="w-full   h-full items-center flex justify-center    p-2">
        <div className="w-full h-[30%] grid grid-cols-4 justify-center items-center gap-2">
          {AllSkill.map((Skill: SkillsObj) => (
            <Card Title={Skill.Name} ImageSrc={Skill.Image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Programming;
