import React, { useContext, useEffect } from "react";
import about from "../img/about/about.png";

// import { CursorContext } from '../context/CursorContext';

const AboutSection = ({ addSectionIds }) => {
  const id = "About";
  //   const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  useEffect(() => {
    addSectionIds(id);
  }, []);

  const handleClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id={id} className="lg:section">
      <div className="container h-full mx-auto relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* image */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={about} alt="" />
          </div>
          {/* text */}
          <div className=" flex-1 flex flex-col pt-28 pb-4 lg:pb-12 lg:pt-0 lg:w-auto z-10 justify-center items-center lg:items-start">
            <h1 className="h1">About Me</h1>
            <p className="mb-4 lg:max-w-lg">
              &nbsp;&nbsp;&nbsp;&nbsp; I am a computer science student with a
              passion for developing web applications.
              <b>
                I have a strong interest in web application design as well.{" "}
              </b>
              But currently my focus is on leveraging my theoretical knowledge
              to excel in practical web development projects. My goal is to
              build a career in web development. Using my knowledge to create
              innovative and powerful web solutions. I am constantly striving to
              expand my skills and knowledge in this dynamic field. Eager to
              seize every opportunity for growth and success.
            </p>
            {/* Skills */}
            <div className="flex flex-col gap-y-2">
              <div className="text-[26px] lg:text-[36px] font-primary mb-2">
                SKILLS
              </div>
              <div className="mb-12">
                HTML&nbsp;&nbsp;&nbsp;&nbsp; CSS&nbsp;&nbsp;&nbsp;&nbsp;
                JavaScript&nbsp;&nbsp;&nbsp;&nbsp;
                Express.js&nbsp;&nbsp;&nbsp;&nbsp;
                Node.js&nbsp;&nbsp;&nbsp;&nbsp; React.js&nbsp;&nbsp;&nbsp;&nbsp;
                PHP&nbsp;&nbsp;&nbsp;&nbsp; Flutter&nbsp;&nbsp;&nbsp;&nbsp;
                jQuery&nbsp;&nbsp;&nbsp;&nbsp; Bootstrap&nbsp;&nbsp;&nbsp;&nbsp;
                Tailwind&nbsp;&nbsp;&nbsp;&nbsp; MongoDB&nbsp;&nbsp;&nbsp;&nbsp;
                MySQL&nbsp;&nbsp;&nbsp;&nbsp; GitHub&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </div>
            <button
              onClick={() => handleClick("Portfolio")}
              className="btn hover:-translate-y-1 transition duration-300 ease-out"
            >
              View my work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
