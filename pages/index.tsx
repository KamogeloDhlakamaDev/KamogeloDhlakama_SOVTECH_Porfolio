import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import Programming from "../Components/Skills/Programming";
import All from "../Components/Skills/All";
import Design from "../Components/Skills/Design";
import styles from "../styles/Home.module.css";
import Framework from "../Components/Skills/Framework";

export interface SkillsObj {
  Name: string;
  Image: String;
}

export default function Home() {
  //Setting my state values for each navigation

  const HomeSection = useRef(null);
  const SkillSection = useRef(null);
  const WhySection = useRef(null);
  const EduSection = useRef(null);

  const ScrollToSection = (elemenRef: any) => {
    window.scrollTo({
      top: elemenRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const [TempHome, SetTempHome] = useState<boolean>(true);
  const [TempSkills, SetTempSkills] = useState<boolean>(false);
  const [TempWhy, SetTempWhy] = useState<boolean>(false);
  const [TempEducation, SetTempEducation] = useState<boolean>(false);
  const [TempMore, SetTempMore] = useState<boolean>(false);

  const HomeNav: String = "Home";
  const SkillsNav: String = "Skills";
  const WhyNav: String = "Why";
  const EduNav: String = "Edu";
  const MoreNav: String = "More";

  const AllCat: String = "All";
  const ProgrammingCat: String = "Programming";
  const DesignCat: String = "Design";
  const FrameWorkCat: String = "Framework";

  const [ToggleAll, SetToggleAll] = useState<boolean>(true);
  const [ToggleProgramming, SetToggleProgramming] = useState<boolean>(false);
  const [ToggleDesign, SetToggleDesign] = useState<boolean>(false);
  const [ToggleFramework, SetToggleFramework] = useState<boolean>(false);

  const ToggleSkills = (Skillls: String) => {
    if (Skillls == AllCat) {
      SetToggleAll(true);
      SetToggleProgramming(false);
      SetToggleDesign(false);
      SetToggleFramework(false);
    } else if (Skillls == ProgrammingCat) {
      SetToggleAll(false);
      SetToggleProgramming(true);
      SetToggleDesign(false);
      SetToggleFramework(false);
    } else if (Skillls == DesignCat) {
      SetToggleAll(false);
      SetToggleProgramming(false);
      SetToggleDesign(true);
      SetToggleFramework(false);
    } else if (Skillls == FrameWorkCat) {
      SetToggleAll(false);
      SetToggleProgramming(false);
      SetToggleDesign(false);
      SetToggleFramework(true);
    }
  };

  //Setting my toggle states for each navigation
  const SetToggle = (ToggleMyNav: String) => {
    if (ToggleMyNav == HomeNav) {
      SetTempHome(true);
      SetTempSkills(false);
      SetTempWhy(false);
      SetTempEducation(false);
      SetTempMore(false);
    } else if (ToggleMyNav == SkillsNav) {
      SetTempHome(false);
      SetTempSkills(true);
      SetTempWhy(false);
      SetTempEducation(false);
      SetTempMore(false);
    } else if (ToggleMyNav == WhyNav) {
      SetTempHome(false);
      SetTempSkills(false);
      SetTempWhy(true);
      SetTempEducation(false);
      SetTempMore(false);
    } else if (ToggleMyNav == EduNav) {
      SetTempHome(false);
      SetTempSkills(false);
      SetTempWhy(false);
      SetTempEducation(true);
      SetTempMore(false);
    } else if (ToggleMyNav == MoreNav) {
      SetTempHome(false);
      SetTempSkills(false);
      SetTempWhy(false);
      SetTempEducation(false);
      SetTempMore(true);
    }
  };

  const Display = () => {
    if (ToggleAll == true) {
      return (
        <>
          <All />
        </>
      );
    } else if (ToggleProgramming == true) {
      return (
        <>
          <Programming />
        </>
      );
    } else if (ToggleDesign == true) {
      return (
        <>
          <Design />
        </>
      );
    } else if (ToggleFramework == true) {
      return (
        <>
          <Framework />
        </>
      );
    }
  };
  return (
    <>
      <Head>
        <title>KamogeloDev. | Home</title>
      </Head>
      <div className="w-full h-full   flex flex-col relative ">
        {/* Navigation Bar */}
        <div className="w-full shadow-md h-16 flex gap-2 py-2 px-20 z-20 fixed  justify-between bg-white   ">
          {/* Name tag */}

          <Link href={"/"}>
            <div className="w-[40%]  h-full  p-1 text-2xl font-semibold flex items-center text-[#FB6B90]">
              <h1>KamogeloDev.</h1>
            </div>
          </Link>
          {/* Menu Items */}

          <div className="w-[50%] h-full  p-1 px-2 grid grid-cols-4  text-lg gap-2 items-center justify-evenly">
            {/* Home */}
            <div
              onClick={() => {
                SetToggle(HomeNav);
                ScrollToSection(HomeSection);
              }}
              className={
                TempHome
                  ? "w-full cursor-pointer  h-full justify-center gap-1  text-xs flex flex-col items-center font-semibold"
                  : "w-full cursor-pointer  h-full justify-center gap-1  text-xs flex flex-col items-center "
              }
            >
              <p>Home</p>
              <div
                className={
                  TempHome
                    ? "w-[20%] h-[1.5px] bg-black "
                    : "w-[20%] h-[1.5px] bg-black hidden "
                }
              ></div>
            </div>
            {/* Skills */}

            <div
              onClick={() => {
                SetToggle(SkillsNav);
                ScrollToSection(SkillSection);
              }}
              className={
                TempSkills
                  ? "w-full cursor-pointer  h-full justify-center gap-1  text-xs flex flex-col items-center font-semibold"
                  : "w-full cursor-pointer  h-full justify-center gap-1  text-xs flex flex-col items-center "
              }
            >
              <p>Skills</p>
              <div
                className={
                  TempSkills
                    ? "w-[20%] h-[1.5px] bg-black "
                    : "w-[20%] h-[1.5px] bg-black hidden "
                }
              ></div>
            </div>
            {/* Why SovTech */}
            <div
              onClick={() => {
                SetToggle(WhyNav);
                ScrollToSection(WhySection);
              }}
              className={
                TempWhy
                  ? "w-full cursor-pointer  h-full justify-center gap-1  text-xs flex flex-col items-center font-semibold"
                  : "w-full cursor-pointer  h-full justify-center gap-1  text-xs flex flex-col items-center "
              }
            >
              <p>Why</p>
              <div
                className={
                  TempWhy
                    ? "w-[20%] h-[1.5px] bg-black "
                    : "w-[20%] h-[1.5px] bg-black hidden "
                }
              ></div>
            </div>
            {/* Education */}
            <div
              onClick={() => {
                SetToggle(EduNav);
                ScrollToSection(EduSection);
              }}
              className={
                TempEducation
                  ? "w-full cursor-pointer  h-full justify-center gap-1  text-xs flex flex-col items-center font-semibold"
                  : "w-full cursor-pointer  h-full justify-center gap-1  text-xs flex flex-col items-center "
              }
            >
              <p>Education</p>
              <div
                className={
                  TempEducation
                    ? "w-[20%] h-[1.5px] bg-black "
                    : "w-[20%] h-[1.5px] bg-black hidden "
                }
              ></div>
            </div>

            {/* More+ */}
            {/* <div
              onClick={() => {
                SetToggle(MoreNav);
              }}
              className={
                TempMore
                  ? "w-full cursor-pointer  h-full justify-center gap-1  text-xs flex flex-col items-center font-semibold"
                  : "w-full cursor-pointer  h-full justify-center gap-1  text-xs flex flex-col items-center "
              }
            >
              <p>More+</p>
              <div
                className={
                  TempMore
                    ? "w-[20%] h-[1.5px] bg-black "
                    : "w-[20%] h-[1.5px] bg-black hidden "
                }
              ></div>
            </div> */}
          </div>

          {/* Contact */}
          <div className="w-[10%]  gap-2 h-full  p-1 flex justify-between items-center">
            {/* Social Links */}

            <div className="w-full  flex items-center justify-end gap-1 h-6 ">
              <div className="w-6  h-full relative cursor-pointer">
                <Link href={"https://github.com/KamogeloDhlakamaDev"}>
                  <Image
                    src="/github-sign.png"
                    alt="kamogelogithub"
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="w-6  h-full relative cursor-pointer">
                <Link
                  href={
                    "https://www.linkedin.com/in/kamogelo-dhlakama-73a74b1a1/"
                  }
                >
                  <Image
                    src="/linkedin.png"
                    alt="kamogelolinkedin"
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>

            {/* Button to contact form */}
            {/* <div className="w-full h-full flex items-center">
              <button className="w-full bg-[#FB6B90] rounded-md h-full text-xs text-white hover:border-2 hover:border-[#FB6B90] hover:text-[#FB6B90] hover:bg-white">
                Contact Me
              </button>
            </div> */}
          </div>
        </div>

        <footer className="bg-[#FB6B90] shadow h-16 mt-28 w-full absolute bottom-0 left-0 right-0 z-40 px-20 py-5 flex items-center justify-center gap-1 flex-col ">
          <p className="font-semibold text-white">
            Email: Kamogelodhlakama@gmail.com{" "}
          </p>

          <p className="text-sm opacity-80">Copyright &copy; 2022</p>
        </footer>

        {/* Hero Section  */}

        <div
          ref={HomeSection}
          className="w-full  h-[100vh] flex relative items-end  "
        >
          <div className="w-[100vw] h-[100vh] absolute -z-10 top-0 right-0 bg-blue-100">
            <div className="w-full relative h-full  bg-white flex">
              <Image
                src="/BackgroundHero.svg"
                alt="Kamogelo Dhlakama"
                objectFit="cover"
                layout="fill"
                loading="lazy"
              />
            </div>
          </div>

          <div className="w-full   md:h-[91%] xl:h-[93%] grid grid-cols-2 items-center justify-center ">
            {/* Short Description */}
            <div className="w-full  h-full  flex flex-col gap-2 items-center justify-center px-20">
              <div className="w-full h-[50%] flex flex-col gap-2 mt-16 ">
                <div className="w-full h-12 flex flex-col   justify-center text-xl">
                  <h1>
                    Hi, I am{" "}
                    <span className="text-2xl font-semibold">
                      Kamogelo Dhlakama
                    </span>
                  </h1>
                </div>
                <div className="w-full h-12  items-center flex  text-3xl text-[#FB6B90] font-bold">
                  <h1>An Aspiring Software Engineer</h1>
                </div>

                <div className="w-full h-full  text-sm  mt-2">
                  <p>
                    Kamogelo is final year student at the University of
                    Johannesburg trying to navigate his way into the tech world.
                    Throughout his degree he has been honing his technical
                    skills and he has found himself using his creative ability
                    to design and solve problems. He hopes to become a valuable
                    Frontend Engineer one day for an organization that solves
                    problems in africa using technology.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full h-full relative  flex justify-center items-center">
              <div className="w-[80%] h-[80%]   relative items-center flex justify-center">
                <Image
                  src="/KamogeloDhla.png"
                  alt="Kamogelo Dhlakama"
                  width={750}
                  height={650}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Image */}
        </div>

        {/* My Skills Section */}

        <div
          ref={SkillSection}
          className="w-full h-[100vh]  flex flex-col gap-2 items-center py-12 relative  "
        >
          <div className="w-[100vw] h-[30vh] absolute  top-0 right-0 bg-blue-100 items-center flex">
            <div className="w-full relative h-full  bg-white flex justify-center ">
              <Image
                src="/SkillsBackground.svg"
                alt="Skills"
                objectFit="cover"
                width={1350}
                height={0}
              />
            </div>
          </div>

          <div className="w-full h-full absolute top-0 left-0 bg-white -z-10"></div>
          <div className="w-full z-10  px-20 flex items-center justify-center py-3 text-7xl   font-semibold text-white ">
            <h1>My Skills</h1>
          </div>

          <div className="w-full h-[80%] flex px-20 gap-2 p-2 items-center z-10">
            {/* All */}
            {/* Design */}
            {/* Programming */}
            {/* Framework */}

            <div className="w-[80%]   h-full flex p-2">{Display()}</div>

            {/* Side Toggle */}
            <div className="w-[20%] h-full flex   items-center p-2">
              {/* Toggle Items */}

              <div className="w-full h-[70%]  grid grid-cols-1 gap-1 items-center text-sm">
                {/* All */}
                <div
                  onClick={() => ToggleSkills(AllCat)}
                  className="w-full  h-12 flex gap-2 items-center px-2 cursor-pointer "
                >
                  <div
                    className={
                      ToggleAll
                        ? "w-5 h-5 bg-[#FB6B90] rounded-full  "
                        : "w-5 h-5 border-2 border-[#FB6B90] rounded-full"
                    }
                  ></div>
                  <div
                    className={
                      ToggleAll
                        ? "w-[80%] h-full  justify-center flex items-center font-bold  text-[#FB6B90]"
                        : "w-[80%] h-full  justify-center flex items-center  text-[#FB6B90]  "
                    }
                  >
                    <p>All</p>
                  </div>
                </div>

                {/* Design */}
                <div
                  onClick={() => ToggleSkills(DesignCat)}
                  className="w-full  h-12 flex gap-2 items-center px-2 cursor-pointer "
                >
                  <div
                    className={
                      ToggleDesign
                        ? "w-5 h-5 bg-[#FB6B90] rounded-full  "
                        : "w-5 h-5 border-2 border-[#FB6B90] rounded-full"
                    }
                  ></div>
                  <div
                    className={
                      ToggleDesign
                        ? "w-[80%] h-full  justify-center flex items-center font-bold  text-[#FB6B90]"
                        : "w-[80%] h-full  justify-center flex items-center text-[#FB6B90]"
                    }
                  >
                    <p>Design</p>
                  </div>
                </div>
                {/* Programming */}
                <div
                  onClick={() => ToggleSkills(ProgrammingCat)}
                  className="w-full  h-12 flex gap-2 items-center px-2 cursor-pointer "
                >
                  <div
                    className={
                      ToggleProgramming
                        ? "w-5 h-5 bg-[#FB6B90] rounded-full  "
                        : "w-5 h-5 border-2 border-[#FB6B90] rounded-full"
                    }
                  ></div>
                  <div
                    className={
                      ToggleProgramming
                        ? "w-[80%] h-full  justify-center flex items-center font-semibold  text-[#FB6B90]"
                        : "w-[80%] h-full  justify-center flex items-center text-[#FB6B90]"
                    }
                  >
                    <p>Programming</p>
                  </div>
                </div>
                {/* Framework */}
                <div
                  onClick={() => ToggleSkills(FrameWorkCat)}
                  className="w-full  h-12 flex gap-2 items-center px-2 cursor-pointer "
                >
                  <div
                    className={
                      ToggleFramework
                        ? "w-5 h-5 bg-[#FB6B90] rounded-full  "
                        : "w-5 h-5 border-2 border-[#FB6B90] rounded-full"
                    }
                  ></div>
                  <div
                    className={
                      ToggleFramework
                        ? "w-[80%] h-full  justify-center flex items-center font-semibold text-[#FB6B90]"
                        : "w-[80%] h-full  justify-center flex items-center text-[#FB6B90]"
                    }
                  >
                    <p>Framework</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Section */}

        <div
          ref={WhySection}
          className="w-full h-[100vh]  flex flex-col gap-5 items-center py-12 relative bg-[#FB6B90] "
        >
          <div className="w-full  px-20 flex items-center justify-center py-3 text-7xl font-semibold text-white ">
            <h1>Why SovTech?</h1>
          </div>

          <div className="w-full h-[80%] flex justify-center items-center  px-20 ">
            <div className="w-[70%] rounded-md bg-white shadow-md h-[70%] p-4 flex items-center text-base font-light">
              <p>
                The SovTech Spex is what captured me the most. The SovTech
                values are what I view as key components for a software
                developer to thrive and grow. I want to be a developer at
                SovTech because I see myself growing in the company with the way
                it values people who can adapt in a changing environment,
                understand that results are a key part of growth and getting
                things done for those who value our solution. And being a person
                who loves technology I love the tech stack the company is using
                to build custom software, it shows that the company is well in
                tune with how the tech industry is moving and I genuinely want
                to be a part of a company that builds solutions to real life
                problems using great software tools. Being a developer at
                SovTech means that I get to learn quickly and be in a
                environment where I can take the first key steps to being the
                Software Engineer I have always envisioned.{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div
          ref={EduSection}
          className="w-full h-[100vh]   flex flex-col gap-5 items-center py-12 relative "
        >
          <div className="w-[100vw] h-[100vh] absolute  top-0 right-0 bg-blue-100">
            <div className="w-full relative h-full  bg-white flex">
              <Image
                src="/Education.svg"
                alt="Skills"
                objectFit="cover"
                layout="fill"
                loading="lazy"
              />
            </div>
          </div>

          <div className="w-full  px-20 flex z-10 items-center justify-center py-3 text-7xl font-semibold text-white ">
            <h1>Education</h1>
          </div>

          <div className="w-full  h-[80%] px-20 items-center  flex justify-center">
            <div className="w-[70%]  h-full grid grid-cols-2 gap-2 p-10 items-center justify-center">
              {/* Card High School */}

              <div className="w-full h-full  [perspective:1000px] group ">
                <div className="w-full h-full bg-white rounded-lg shadow-md flex flex-col p-2 gap-2 relative [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-all duration-500">
                  {/* Front face */}
                  <div className="w-full h-full top-0 left-0 absolute flex flex-col gap-2 rounded-lg p-2">
                    <div className="w-full relative border rounded-md h-[80%] flex justify-center items-center">
                      <Image
                        src="/KSS.jpg"
                        alt="KSS"
                        width={280}
                        height={280}
                        objectFit="cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="w-full h-[20%]  flex flex-col gap-2 p-1 justify-center items-center">
                      <p className="font-medium">Kensington Secondary School</p>
                      <p className="text-sm">2013 - 2017</p>
                    </div>
                  </div>

                  {/* Back face */}
                  <div className="w-full h-full absolute inset-0 flex flex-col rounded-lg bg-white [transform:rotateY(180deg)] [backface-visibility:hidden] p-4 gap-2">
                    <h1 className="font-semibold">
                      Kensington Secondary School
                    </h1>

                    <p className="text-sm">
                      KSS is located in Johannesburg, Bezhuidenhout Valley. This
                      is a place I first gained insight into the programming
                      world. I did the science stream because I saw really
                      interested in things related to science and it developed
                      my curiousity to know more. I was a Head of House in the
                      school and I used to play rugby for the school. My
                      favourite subjects were Life Science and Mathematics.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Varsity */}
              <div className="w-full h-full  [perspective:1000px] group ">
                <div className="w-full h-full bg-white rounded-lg shadow-md flex flex-col p-2 gap-2 relative [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-all duration-500">
                  {/* Front face */}
                  <div className="w-full h-full top-0 left-0 absolute flex flex-col gap-2 rounded-lg p-2">
                    <div className="w-full relative border rounded-md h-[80%] flex justify-center items-center">
                      <Image
                        src="/UJ.jpg"
                        alt="KSS"
                        width={280}
                        height={280}
                        objectFit="cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="w-full h-[20%]  flex flex-col gap-2 p-1 justify-center items-center">
                      <p className="font-medium">University of Johannesburg</p>
                      <p className="text-sm">2019 - 2022</p>
                    </div>
                  </div>

                  {/* Back face */}
                  <div className="w-full h-full absolute inset-0 flex flex-col rounded-lg bg-white [transform:rotateY(180deg)] [backface-visibility:hidden] p-4 gap-2">
                    <h1 className="font-semibold">
                      University of Johannesburg
                    </h1>

                    <p className="text-sm">
                      I am currently a final year student at UJ. I am doing a
                      Bachelor of Science in IT in Computer Science and
                      Informatics. I chose to this because I enjoy programming
                      and since high school I have always wanted to create
                      something innovative using code and now I am here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
