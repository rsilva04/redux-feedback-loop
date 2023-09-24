import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

//components
import Feeling from '../Feedback/Feeling';
import Header from '../Header/Header';
import Understanding from '../Feedback/Understanding';
import Support from '../Feedback/Support';

function App() {

  return (
    <div className='App'>

      <Router>
        <Route exact path="/" />
        <Header />
      </Router>

      <Router>
        <Route exact path="/feeling" />
        <Feeling />
      </Router>

      <Router>
        <Route exact path="/understanding" />
        <Understanding />
      </Router>


      <Router>
        <Route exact path="/support" />
        <Support />
      </Router>

    </div>
  );
}

export default App;
