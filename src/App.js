import React from 'react';
import About from './components/About';
import { BrowserRouter, Switch,  Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/" exact component ={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/portfolio" exact component={Portfolio}></Route>
        <Route path="/contact" exact component={Contact}></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
