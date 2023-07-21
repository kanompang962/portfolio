import React, { useEffect, useState } from "react";
import FormatDate from "./FormatDate";
import Picture from "./Picture";
import TitleLink from "./TitleLink";
import Material from "./Material";
import Description from "./Description";
import Tech from "./Tech";

const ContentContainer = ({
  addSectionIds,
  title: sectiontitle = "",
  data = [],
}) => {
  const [isCerrent, setIsCerrent] = useState({});
  const id = `${sectiontitle}-section`;

  useEffect(() => {
    // addSectionIds(id);
  }, []);

  return (
    <div id={id} className="scroll-m-14">
      {/* Title */}
      <div className="font-medium ">{sectiontitle}</div>
      {data.map(
        (
          {
            date = "",
            title = "",
            link = "",
            materials = [],
            descriptions = [],
            skills = [],
            picture = "",
          },
          index
        ) => (
          <div
            key={`${id}-${title.split(" ").join("")}-${index}`}
            className={`grid grid-cols-[25%_75%] px-2 py-6 rounded-sm transition-all shadow-sm ${
              isCerrent[`${id}-${index}`]
                ? "bg-gray-200 lg:scale-110 transition duration-1000 ease-out"
                : ""
            }`}
            onMouseEnter={() => setIsCerrent({ [`${id}-${index}`]: true })}
            onMouseLeave={() => setIsCerrent({ [`${id}-${index}`]: false })}
          >
            {/* Image */}
            <div>
              <FormatDate>{date}</FormatDate>
              <Picture src={picture} alt={title} />
            </div>
            {/* Description */}
            <div className="flex flex-col gap-y-4">
              <TitleLink
                isCerrent={isCerrent[`${id}-${index}`]}
                tile={title}
                link={link}
              />
              {materials.length != 0 && (
                <div className="flex gap-x-4 text-xl items-center">
                  {materials.map((item, i) => (
                    <Material
                      key={`${item}-materials-${i}`}
                      icon={item.type}
                      link={item.link}
                    />
                  ))}
                </div>
              )}
              {descriptions.map((item, i) => (
                <Description
                  key={`${item}-descriptions-${i}`}
                  description={item}
                />
              ))}
              {skills.map((item, i) => (
                <Tech
                  key={`${item}-skills-${i}`}
                  isCerrent={isCerrent[`${id}-${index}`]}
                  data={item}
                />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ContentContainer;
