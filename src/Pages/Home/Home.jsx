import React from "react";
import Banner from "../../Components/Banner/Banner";
import Main from "../../Components/Main/Main";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="p-5">
      <Banner></Banner>
      <Main></Main>
      <Services></Services>
    </div>
  );
};

export default Home;
