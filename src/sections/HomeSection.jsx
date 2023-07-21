import React, { useContext, useEffect } from "react";
import profile from "../img/home/profile.png";
import Resume from "../assets/resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLine } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowDown,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
// animation
import { motion } from "framer-motion";
import { transition } from "../transition";

const HomeSection = ({ addSectionIds }) => {
  const id = "Home";

  useEffect(() => {
    addSectionIds(id);
  }, []);

  return (
    <section id={id} className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col  h-full justify-center  text-center lg:text-left lg:pt-28">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition}
            className="w-full pt-28 lg:pt-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">
              Thianchai
              <br /> & Chamnan
            </h1>
            {/* <p className="text-[26px] lg:text-[36px] font-primary mb-4">
              Front End Developer
            </p> */}
            {/* Contact */}
            <div className="grid lg:grid-cols-2 gap-x-6 mb-12">
              <div>
                <div className="flex flex-row items-center gap-x-2">
                  <FontAwesomeIcon icon={faGithub} />
                  <a href="https://github.com/kanompang962" target="_blank">
                    https://github.com/kanompang962
                  </a>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <FontAwesomeIcon icon={faMailBulk} />
                  <p>thianchaichamnan@gmail.com</p>
                </div>
              </div>
              <div>
                <div className="flex flex-row items-center gap-x-2">
                  <FontAwesomeIcon icon={faLine} />
                  <p>ID:kanompang962</p>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <FontAwesomeIcon icon={faPhone} />
                  <p>0931177457</p>
                </div>
              </div>
            </div>
            <div>
              <a href={Resume} target="_blank" rel="noopener noreferrer">
                <button className="btn mb-[30px] hover:-translate-y-1 transition duration-300 ease-out">
                  View Resume
                </button>
              </a>
            </div>
          </motion.div>
          {/* Image */}
          <div className="flex justify-end  max-h-96 lg:max-h-max lg:overflow-hidden">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition}
              className="relative lg:-right-40 overflow-hidden"
            >
              <img
                className="hover:scale-110 transition duration-300 ease-out"
                src={profile}
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
