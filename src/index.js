import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


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
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    } else if (action.type === 'CLEAR') {
        return 0;
    }
    return state
} 

const comments = (state = 0, action) => {
    //saving information sent about comments
    if (action.type === 'SET_COMMENTS') {
        return action.payload;
    } else if (action.type === 'CLEAR') {
        return 0;
    }
    return state
} 

//Redux store
const storeInstance = createStore(
    combineReducers(
        {
            feeling,
            understanding,
            support,
            comments
        }
    ),
    // Setup logger
    applyMiddleware(logger)
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
