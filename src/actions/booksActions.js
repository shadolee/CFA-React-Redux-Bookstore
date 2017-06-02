"use strict"
import axios from 'axios'; //Axios is a Javascript library used to make http requests from node.js or XMLHttpRequests
// It basically provides a single API for dealing with XMLHttpRequests and node's http interface

// GET A BOOK
export function getBooks(){
  return function(dispatch){
    axios.get("/books")
      .then(function(response){
        dispatch({type:"GET_BOOKS", payload:response.data})
      })
      .catch(function(err){
        dispatch({type:"GET_BOOKS_REJECTED", payload:err})
      })
    }
}
// export function getBooks(cb) { console.log("Heeyeyey");
//   // return function(dispatch){
//     axios.get('/books') // send http GET request with axios to /books
//     .then(function(response){
//       console.log("1", response.data);
// //      dispatch({type:"GET_BOOKS", payload:response.data});
//         cb(response.data);
//       console.log("get books", response.data)
//     })
//     .catch(function(err){
// console.log("e");
//       // dispatch({type:"GET_BOOKS_REJECTED", payload:err})
//     })
//   }
// }

// POST A BOOK
export function postBooks(book) {
  return function(dispatch){
    axios.post('/books', book) // send http POST request with axios to /books, pass in book argument
    .then(function(response){
      dispatch({type:"POST_BOOK", payload:response.data})
    })
    .catch(function(err){
      dispatch({type:"POST_BOOK_REJECTED", payload:"there was an error while posting a new book"})
    })
  }
}

// DELETE A BOOK
export function deleteBooks(id) {
  return {
    type: "DELETE_BOOK",
    payload: id
  }
}


// UPDATE A BOOK
export function updateBooks(book) {
  return {
    type: "UPDATE_BOOK",
    payload: book
  }
}
