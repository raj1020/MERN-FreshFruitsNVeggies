import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";



import Navbar from "./components/navbar.component"
import AboutUs from "./components/about-us";
import HomePage from "./components/homepage";
import AvailableProducts from "./components/available-products";
import Contact from "./components/contact";
import CheckOut from "./components/checkout";

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <br/>
      <Route path="/" exact component={HomePage} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/products" component={AvailableProducts} />
      <Route path="/contact" component={Contact} />
      <Route path="/checkout" component={CheckOut} />
      </div>
    </Router>
  );
}

export default App;
