"use strict"
import React from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../actions/booksActions';
import { bindActionCreators } from 'redux';
import { Grid, Col, Row, Button } from 'react-bootstrap';

import BookItem from './bookItem';
import BooksForm from './booksForm';
import Cart from './cart';

class BooksList extends React.Component {
  componentDidMount(){
    this.props.getBooks()
    // getBooks(this.props.refreshBooks)
  }
  render() {
    // console.log("booksList.render");
    const booksList = this.props.books.map(function(booksArr){
      return(
        <Col xs={12} sm={6} md={4} key={booksArr._id}>
          <BookItem
            _id = { booksArr._id }
            title = { booksArr.title }
            description = { booksArr.description }
            images= { booksArr.images }
            price = { booksArr.price } />
        </Col>
      )
    })
    return(
      <Grid>
        <Row>
          <Cart />
        </Row>
        <Row>

          { booksList }
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  // console.log("Hello", state.books.books);
  return{
    books: state.books.books
  }
}

function mapDispatchToProps(dispatch){
  // return {
  //   refreshBooks: (books) => dispatch({ type: "GET_BOOKS", books })
  //
  // }

  return bindActionCreators({
    getBooks:getBooks,
  }, dispatch)
}

// this connects the component to the store
// the component is subscribing to the store, in doing so, returns an updated state to our local component
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
