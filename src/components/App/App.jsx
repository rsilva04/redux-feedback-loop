import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Import your components
import Feeling from '../Feedback/Feeling';
import Header from '../Header/Header';
import Understanding from '../Feedback/Understanding';
import Support from '../Feedback/Support';
import Comments from '../Feedback/Comments';
import Review from '../Review/Review';

function App() {
  return (
    <div className='App'>
      <Router>
        {/* Define your routes within this Router component */}
        <Route exact path="/" component={Header} />
        <Route exact path="/feeling" component={Feeling} />
        <Route exact path="/understanding" component={Understanding} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/review" component={Review} />
      </Router>
    </div>
  );
}

export default App;
