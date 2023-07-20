import React from "react";

const Picture = ({ src, alt }) => {
  if (!src) {
    return null;
  }
  return (
    <div>
      <img className=" w-5/6 max-h-[65px] border-2" src={src} alt={alt} />
    </div>
  );
};

export default Picture;
