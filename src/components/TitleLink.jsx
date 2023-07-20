import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TitleLink = ({ isCerrent, tile: title, link }) => {
  if (!link) {
    return (
      <div
        className={`duration-300" ${isCerrent ? "font-bold" : "font-semibold"}`}
      >
        {title.toUpperCase()}
      </div>
    );
  }
  return (
    <a href={link} target="_blank">
      <div
        className={`cursor-pointer duration-300 " ${
          isCerrent ? "font-bold" : "font-semibold"
        }`}
      >
        {title.toUpperCase()}
        <FontAwesomeIcon
          className={`text-xs -rotate-45 ${
            isCerrent ? "translate-x-1 -translate-y-1" : ""
          }`}
          icon={faArrowRight}
        />
      </div>
    </a>
  );
};

export default TitleLink;
