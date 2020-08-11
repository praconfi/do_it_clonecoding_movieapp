import React from "react";
// import Home from './routes/Home';
import './App.css';
import {HashRouter, Route} from 'react-router-dom'
import About from './routes/About'
import Home from './routes/Home'

function App(){
  return (
    <HashRouter>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
  // <Home />;
}

export default App;
