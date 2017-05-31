"use strict"
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { applyMiddleware, createStore } from 'redux'; // import these methods from Redux
import logger from 'redux-logger'; // makes console data more colourful and detailed

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';

// IMPORT ACTIONS
import { addToCart } from './actions/cartActions';
import { postBooks, deleteBooks, updateBooks } from './actions/booksActions';


// STEP 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);


import BooksList from './components/pages/booksList';
import Menu from './components/menu';
import Footer from './components/footer';

render(
  <Provider store={store}>
    <div>
      <Menu />
      <BooksList />
      <Footer />
    </div>

  </Provider>, document.getElementById('app')
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
