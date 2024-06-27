import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection"
import { homeObjFive, homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} id={"about"} />
      <InfoSection {...homeObjTwo} id={"discover"} />
      <Services />
      <InfoSection {...homeObjThree} id={"services"} />
      <InfoSection {...homeObjFour} id={"history"} />
      <InfoSection {...homeObjFive} id ={""} />
      <Footer />
    </>
  );
};

export default Home;
