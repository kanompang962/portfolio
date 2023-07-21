import React, { useEffect } from "react";
import ContentContainer from "../components/ContentContainer";
import { data as experienceData } from "../contents/experience";
import { data as coursesData } from "../contents/courses";

const Experience = ({ addSectionIds }) => {
  const id = "Education";

  useEffect(() => {
    addSectionIds(id);
  }, []);

  const handleClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id={id} className="lg:section">
      <div className="container h-full mx-auto relative ">
        <div className="flex flex-col lg:flex-row h-full justify-center items-center gap-x-24 text-center lg:text-left lg:pt-28">
          {/* text */}
          <div className="flex-1 flex flex-col pt-28 pb-4 lg:pb-12 lg:pt-0 lg:w-auto z-10 justify-center items-center lg:items-start">
            <h1 className="h1">{id}</h1>
            <p className="mb-4 lg:max-w-md ">
              Used to train as Web Developer at Kingbangkok Intertrade Co. Ltd.
              Design and development of product warranty registration system
              <br />
              <br />
              Graduated from Mahasarakham University Faculty of Information
              Sciences computer science Related courses are as follows.
            </p>
            <div className="w-full mb-4">
              <ContentContainer title="" data={experienceData} />
            </div>
            <button
              onClick={() => handleClick("Home")}
              className="btn hover:-translate-y-1 transition duration-300 ease-out"
            >
              back to home
            </button>
          </div>
          {/* Exp */}
          <div className="flex-1 text-start order-2 lg:order-none mt-4 pl-4 lg:ml-0 lg:mt-0">
            <ul>
              {coursesData.map((item, index) => (
                <li
                  key={index}
                  className="hover:-translate-x-4 transition duration-300 ease-out cursor-default mb-4 flex items-center gap-x-2"
                >
                  <span className="text-[8px]">⚫️</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
