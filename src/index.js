import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import logger from 'redux-logger';


//REDUCERS
const feeling = (state = 0, action) => {
    //saving information sent about feelings
    if (action.type === 'SET_FEELING') {
        return action.payload;
    } else if (action.type === 'CLEAR') {
        return 0;
    }
    return state
}

const understanding = (state = 0, action) => {
    //saving information sent about understanding
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    } else if (action.type === 'CLEAR') {
        return 0;
    }
    return state
}

const support = (state = 0, action) => {
    //saving information sent about support
    if (action.type === 'SET_SUPPORT') {
        return action.payload;
    } else if (action.type === 'CLEAR') {
        return 0;
    }
    return state
} 

const comments = (state = '', action) => {
    //saving information sent about comments
    if (action.type === 'SET_COMMENTS') {
        return action.payload;
    } else if (action.type === 'CLEAR') {
        return 0;
    }
    return state
} 

const review = (state = '', action) => {
    // TODO - set book list with data from server
    if(action.type === 'SET_REVIEW') {
      return action.payload
    }
    return state;
  }
  

//Redux store
const storeInstance = createStore(
    combineReducers(
        {
            feeling,
            understanding,
            support,
            comments,
            review
        }
    ),
    // Setup logger
    // applyMiddleware(logger)
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
