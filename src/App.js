import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Body from "./Components/Body/Body";
import Nav from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
// import "./App.css"

function App() {
  return (
    <Router>
      <>
        <Body>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/home" component={Home} /> */}
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </Body>
      </>
    </Router>
  );
}

export default App;
