import React, { useEffect } from "react";
import { data as projectData } from "../contents/project";
import ContentContainer from "../components/ContentContainer";
import certificate from "../assets/certificate.pdf";
const Portfolio = ({ addSectionIds }) => {
  const id = "Portfolio";

  useEffect(() => {
    addSectionIds(id);
  }, []);

  return (
    <section id={id}>
      <div className="container h-full mx-auto relative ">
        <div className="flex flex-col lg:flex-row h-full justify-center gap-x-24 text-center lg:text-left lg:pt-28">
          {/* text */}
          <div className=" flex-1 flex flex-col pt-20 pb-4 lg:pb-12 lg:pt-10 lg:w-auto z-10 items-center lg:items-start">
            <h1 className="h1">{id}</h1>
            <p className="mb-12 lg:max-w-md ">
              This portfolio is made to store different projects. both study,
              internship and work It will show details of each project, website
              link, GitHub. There are also projects that me can study by
              yourself through Judemi with certificate.
              <br />
              <br />
              <span>
                There are still some projects that I am currently studying and
                developing. I am ready to study and develop myself all the time
                without stopping.
              </span>
            </p>
            <a href={certificate} target="_blank">
              <button className="btn hover:-translate-y-1 transition duration-300 ease-out">
                View Certificate
              </button>
            </a>
          </div>
          {/* Project */}
          <div className="flex-1 text-start">
            <ContentContainer
              // addSectionIds={addSectionIds}
              title=""
              data={projectData}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
