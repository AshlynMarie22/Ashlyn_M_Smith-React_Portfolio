import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Body from "./Components/Body/Body";
import Nav from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
// import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <>
        <Body>
          <Nav/>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          <Footer />
        </Body>
      </>
    </BrowserRouter>
  );
}

export default App;
