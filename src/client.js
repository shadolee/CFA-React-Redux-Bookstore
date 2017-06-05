"use strict"
// REACT
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// REACT ROUTER
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { applyMiddleware, createStore } from 'redux'; // import these methods from Redux
import logger from 'redux-logger'; // makes console data more colourful and detailed
import thunk from 'redux-thunk';

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';

// IMPORT ACTIONS
import { addToCart } from './actions/cartActions';
// import { postBooks, deleteBooks, updateBooks } from './actions/booksActions';


// STEP 1 create the store
const middleware = applyMiddleware(thunk, logger );
// WE WILL PASS INITIAL STATE FROM SERVER STORE
const initialState = window.INITIAL_STATE;
// INITIAL_STATE is a global variable we use to capture the "initial state" from the Redux Store in the server and pass it on to the Store in the Client
const store = createStore(reducers, initialState, middleware);



import routes from './routes'

const Routes = (
    <Provider store={store}>
      {routes}
    </Provider>
)

render(
  Routes, document.getElementById('app')
);

// STEP 2 create and dispatch action
// store.dispatch(postBooks(
//
// ))

// DELETE a book

// store.dispatch(deleteBooks(
//    {id: 1}
// ))

// UPDATE a book

// store.dispatch(updateBooks(
//   {
//     id: 2,
//     title: 'Learn React in 24h'
//   }
// ))

// CART ACTIONS
// Add to Cart

// store.dispatch(addToCart([{id: 1}]))
