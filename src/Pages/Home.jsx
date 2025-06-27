import React from "react";
import "../App.css";
import { FaQuestion, FaBlog } from "react-icons/fa";
import { FaCakeCandles } from "react-icons/fa6";
import { MdQuestionAnswer } from "react-icons/md";
import { GiStairsCake, GiCakeSlice } from "react-icons/gi";
import { ImBlog } from "react-icons/im";
import Banner from "../Components/HomeComponents/Banner";
import TopFoods from "../Components/HomeComponents/TopFoods";
import Accordion from "../Components/HomeComponents/Accordion";
import Blog from "../Components/HomeComponents/Blog";

const Home = () => {
  return (
    <>
      <header>
      <Banner></Banner>
    </header>
    <main>
      <div className="divider divider-secondary"><GiStairsCake size={100}/> <FaCakeCandles size={80}/><GiCakeSlice size={90}/></div>
      <TopFoods></TopFoods>
      <div className="divider divider-secondary"><FaQuestion size={40}/> <MdQuestionAnswer size={100}/><FaQuestion size={40}/></div>
      <Accordion></Accordion>
    </main>
    <footer>
      <div className="divider divider-secondary mt-10 md:mt-20"><ImBlog size={70}/><ImBlog size={70}/><ImBlog size={70}/></div>
      <Blog></Blog>
    </footer>
    </>
    
  );
};

export default Home;