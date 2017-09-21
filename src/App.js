import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-page';
import PhotoPage from './pages/photo-page';

const App = () => (
  <Router>
    <div className="app">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/photo/" component={PhotoPage} />
      </Switch>
    </div>

  </Router>
);

export default App;