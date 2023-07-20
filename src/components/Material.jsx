import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Material = ({ icon, link }) => {
  return (
    <a href={link} target="_blank">
      <FontAwesomeIcon
        className="cursor-pointer hover:text-gray-500 transition-all ease-out duration-300"
        icon={icon}
      />
    </a>
  );
};

export default Material;
