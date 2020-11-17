import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import "./Portfolio.css"
import PortfolioContainer from "../../Components/PortfolioContainer/PortfolioContainer"
import Container from "../../Components/Container/Container"
import ResourcesJSON from "../../portfolioInfo"

const Home = () => {
    const [allResources, setAllResources] = useState([]);

    useEffect(() => {
      loadJSON();
      // loadResources();
    }, []);
  
  const loadJSON = () => {
    setAllResources(ResourcesJSON)
  }
  return (
    <div>
      <Container
      id="portfolio">
          
      <Header><h2 class="h2">Portfolio</h2></Header>
      {allResources.map((resource) => {
              return <PortfolioContainer 
              key={resource.id}
              image={resource.image}
              github={resource.github}
              website={resource.website}
              name={resource.name}
              />;
              })}
    </Container>
      
    </div>
  );
};
export default Home;
