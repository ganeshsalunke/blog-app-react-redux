import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Step 1: Create a Redux Store
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // npm i redux-logger
import thunk from 'redux-thunk';  //npm i redux-thunk

//Step 10.1
import { Provider } from 'react-redux';

import rootReducers from './reducers';  //step 9.1
import { fetchAllPosts } from './services/postsService';

// Step2: this needs a special argument called 'reducer'
const store = createStore( rootReducers, applyMiddleware(thunk, logger) );  //Step 9.2

// Step3: So, create reducers folder and add the postReducer.js file

//To Setup Initial Loading -- for diplaying something at first load -- from rest api call
store.dispatch(fetchAllPosts());

//Step 10: add Provider as below
//Definition: The Provider component uses something 
//called as React Context which allows you to pass the 
//store object to any components 
//that needs to access it without the need to pass props.
//Provider should be imported from react-redux 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Step 11: to dispatch action, let's write form submit in PostForm.js
