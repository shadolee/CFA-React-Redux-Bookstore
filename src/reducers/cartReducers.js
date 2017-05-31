"use strict"

// CART REDUCERS
export function cartReducers(state={cart: []}, action) {
  switch(action.type) {
    case "ADD_TO_CART":
    return {...state,
      cart: action.payload
    }
    break;
    case "UPDATE_CART":
    // create a copy of the current array of books
    const currentBookToUpdate = [...state.cart]
    // determine at which index in books array is the book to be deleted
    const indexToUpdate = currentBookToUpdate.findIndex(
      function(book) {
        return book._id === action._id;
      }
    )
    // create a new book object with the new values and with the same array index of the item we want
    // to replace. To achieve this we will use ...spread but we could use concat methods too
    const newBookToUpdate = {
      ...currentBookToUpdate[indexToUpdate],
      quantity: currentBookToUpdate[indexToUpdate].quantity + action.unit
    }
    // use slice to remove the book at the specified index, replace with the new object
    // and concatenate with the rest of the items in the array
    let cartUpdate = [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
    ...currentBookToUpdate.slice(indexToUpdate + 1)]
    return {...state,
      cart:cartUpdate
    }
    break;
    case "DELETE_CART_ITEM":
    return {...state,
      cart: action.payload
    }
    break;
  }
  return state
}
