import React from "react";
import Header from "../../Components/Header/Header";
import "./Contact.css"
import Contact from "../../Components/Contact/Contact"
import Container from "../../Components/Container/Container"

const Home = () => {
  return (
    <div>
      <Container
      id="contact">
      <Header><h3 className="h3">Contact</h3></Header>
    <Contact></Contact>
    </Container>
      
    </div>
  );
};
export default Home;