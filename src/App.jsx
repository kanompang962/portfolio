import "./App.css";

// import MyRoutes from "./MyRoutes";
import Header from "./components/Header";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import Portfolio from "./sections/Portfolio";
import { useEffect, useState } from "react";
import Experience from "./sections/Experience";

function App() {
  const [sectionIds, setSectionIds] = useState([]);
  const [navbarItems, setNavbarItems] = useState([]);
  const [currentSections, setCurrentSections] = useState("");

  // function
  const addSectionIds = (sectionId) => {
    const elementId = document.getElementById(sectionId).id;
    setSectionIds((prev) => [...new Set([...prev, elementId])]);
    setNavbarItems((prev) => [...new Set([...prev, sectionId])]);
  };

  const handleScrollSections = () => {
    for (let index = 0; index < sectionIds.length; index++) {
      const element = sectionIds[index];

      const elOffsetTop = document
        .getElementById(element)
        .getClientRects()[0].y;

      const elHeight = document
        .getElementById(element)
        .getClientRects()[0].height;

      const viewHeight = window.innerHeight * 0.5;

      if (elOffsetTop <= 0) {
        if (elOffsetTop + elHeight > viewHeight) {
          setCurrentSections(element);
        }
      } else if (elOffsetTop > 0 && elOffsetTop < viewHeight) {
        setCurrentSections(element);
      }
    }
  };

  useEffect(() => {
    if (sectionIds.length > 0) {
      setCurrentSections(sectionIds[0]);
    }
  }, [sectionIds]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollSections);
    return () => {
      window.removeEventListener("scroll", handleScrollSections);
    };
  }, [sectionIds]);

  return (
    <>
      <Header navbarItems={navbarItems} currentSections={currentSections} />
      <HomeSection addSectionIds={addSectionIds} />
      <AboutSection addSectionIds={addSectionIds} />
      <Portfolio addSectionIds={addSectionIds} />
      <Experience addSectionIds={addSectionIds} />
    </>
  );
}

export default App;
