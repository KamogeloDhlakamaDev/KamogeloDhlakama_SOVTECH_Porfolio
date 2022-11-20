import { useState } from "react";
import { SkillsObj } from "../../pages";
import Card from "./Card";

const Design = () => {
   
   
    const [AllSkill, SetAllSkill] = useState<SkillsObj[]>([
        { Name: "AdobeXD", Image: "/xd.png" },
        { Name: "UI/UX", Image:  "/ux.png" },
        { Name: "Photoshop", Image:  "/photoshop.png" },
        { Name: "TailwindCSS", Image:  "/tailwind.png" },
        { Name: "CSS", Image:  "/css.png" },
       
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
}

export default Design;