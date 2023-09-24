import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

//components
import Feeling from '../Feedback/Feeling';
import Header from '../Header/Header';
import Understanding from '../Feedback/Understanding';

function App() {

  return (
    <div className='App'>
      <Header />
      <Feeling />
      <Understanding />

    </div>
  );
}

export default App;
