"use strict"

// BOOKS REDUCERS
export function booksReducers(state={
  books:[]
}, action) {
  switch(action.type) {
    case "GET_BOOKS":
    // console.log("Heyyy", action.books);
    // const s = {...state, books:[...action.books]}
    // console.log("Heyyy", s);
    // return s;
    // this will give a copy of state & copy of books array from the state
    return {...state, books:[...action.payload]}
    break;
    case "POST_BOOK":
    // let books = state.books.concat(action.payload);
    // return {books};
    return {...state, books: [...state.books, ...action.payload], msg: 'Saved! Click to continue',
    style: 'success', validation: 'success'}
    break;
    case "POST_BOOK_REJECTED":
    return {...state, msg: 'Please, try again',
    style: 'danger', validation: 'error'}
    break;
    case "RESET_BUTTON":
    return {...state, msg: 'null', style: 'primary', validation: null}
    break;
    case "DELETE_BOOK":
    // create a copy of the current array of books
    const currentBookToDelete = [...state.books]
    // determine at which index in books array is the book to be deleted
    const indexToDelete = currentBookToDelete.findIndex(
      function(book) {
        return book._id == action.payload;
      }
    )
    // use slice to remove the book at the specified index
    return {books: [...currentBookToDelete.slice(0, indexToDelete),
    ...currentBookToDelete.slice(indexToDelete + 1)]}
    break;

    case "UPDATE_BOOK":
    // create a copy of the current array of books
    const currentBookToUpdate = [...state.books]
    // determine at which index in books array is the book to be deleted
    const indexToUpdate = currentBookToUpdate.findIndex(
      function(book) {
        return book._id === action.payload._id;
      }
    )
    // create a new book object with the new values and with the same array index of the item we want
    // to replace. To achieve this we will use ...spread but we could use concat methods too
    const newBookToUpdate = {
      ...currentBookToUpdate[indexToUpdate],
      title: action.payload.title
    }
    // this log has the purpose to show what newBookToUpdate looks like
    console.log("what is newBookToUpdate", newBookToUpdate);
    // use slice to remove the book at the specified index, replace with the new object
    // and concatenate with the rest of the items in the array
    return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
    ...currentBookToUpdate.slice(indexToUpdate + 1)]}
    break;
  }
  return state
}
