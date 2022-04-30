import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div>
      <Header />
      <About />
      {/* <Work /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;