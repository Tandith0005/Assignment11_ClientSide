import React from "react";
import "../App.css";
import Banner from "../Components/HomeComponents/Banner";
import TopFoods from "../Components/HomeComponents/TopFoods";
import Accordion from "../Components/HomeComponents/Accordion";

const Home = () => {
  return (
    <>
      <header>
      <Banner></Banner>
    </header>
    <main>
      <TopFoods></TopFoods>
      <Accordion></Accordion>
    </main>
    </>
    
  );
};

export default Home;