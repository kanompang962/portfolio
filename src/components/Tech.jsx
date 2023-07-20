import React from "react";

const Tech = ({ isCerrent, data }) => {
  return (
    <div>
      <div className="text-sm flex flex-row gap-x-2">
        {data.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className={`px-2 py-1 rounded-sm ${
              isCerrent ? "bg-white" : "bg-gray-200 "
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
