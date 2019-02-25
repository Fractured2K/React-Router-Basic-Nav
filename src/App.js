import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={Home} />
    <Route exact path="/contact" component={Home} />
    <Navigation />
  </div>
);

export default App;
