import { useState } from "react";
import { SkillsObj } from "../../pages";
import Card from "./Card";

const All: React.FC<any> = () => {
  //Setting Category
  const AllCat: String = "All";
  const ProgrammingCat: String = "Programming";
  const DesignCat: String = "Design";
  const FrameWorkCat: String = "Framework";

  const [AllSkill, SetAllSkill] = useState<SkillsObj[]>([
    { Name: "AdobeXD", Image: "/xd.png" },
    { Name: "UI/UX", Image: "/ux.png" },
    { Name: "Photoshop", Image: "/photoshop.png" },
    { Name: "TailwindCSS", Image: "/tailwind.png" },
    { Name: "CSS", Image: "/css.png" },
    { Name: "NextJs", Image: "/nextjss.png" },
    { Name: "ReactJs", Image: "/physics.png" },
    { Name: "Asp.Net", Image: "/website.png" },
    { Name: "Java", Image: "/java.png" },
    { Name: "C++", Image: "/cplus.png" },
    { Name: "C#", Image: "/csharp.png" },
    { Name: "Microsoft SQL", Image: "/sql-server.png" },
    { Name: "Typescript", Image: "/typescript.png" },
    { Name: "Assembly", Image: "/assembly.png" },
  ]);

  return (
    <>
      <div className="w-full   h-full items-center flex justify-center    p-2">
        <div className="w-full h-[50%] grid grid-cols-4 justify-center  gap-2">
          {AllSkill.map((Skill: SkillsObj) => (
            <Card Title={Skill.Name} ImageSrc={Skill.Image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default All;
