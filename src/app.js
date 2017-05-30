"use strict"
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

// store.subscribe(function() {
//   console.log('current state is: ',  store.getState() );
//   // console.log('current price is: ',  store.getState()[1].price );
//
// })

// STEP 2 create and dispatch action
store.dispatch(postBooks(
 [{
    id: 1,
    title: 'this is the book title',
    description: 'this is the book description',
    price: 33.33
  },
  {
    id: 2,
    title: 'this is the 2nd book title',
    description: 'this is the 2nd book description',
    price: 50
  }]
))

// DELETE a book
store.dispatch(deleteBooks(
   {id: 1}
))

// UPDATE a book
store.dispatch(updateBooks(
  {
    id: 2,
    title: 'Learn React in 24h'
  }
))

// CART ACTIONS
// Add to Cart
store.dispatch(addToCart([{id: 1}]))
