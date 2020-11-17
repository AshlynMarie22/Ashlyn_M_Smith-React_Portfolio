import React from "react";
import Header from "../../Components/Header/Header";
import "./Home.css"
import AboutMe from "../../Components/AboutMe/AboutMe"
import Container from "../../Components/Container/Container"

const Home = () => {
  return (
    <div>
      <Container
      id="aboutme">
      <Header><h1 class="h1">About Me</h1></Header>
    <AboutMe></AboutMe>
    </Container>
      
    </div>
  );
};
export default Home;
