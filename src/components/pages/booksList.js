"use strict"
import React from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../actions/booksActions';
import { bindActionCreators } from 'redux';
import { Carousel, Grid, Col, Row, Button } from 'react-bootstrap';

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
        <Col xs={12} sm={6} md={12} key={booksArr._id}>
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
          <Carousel>
            <Carousel.Item>
              <img width={900} height={300} alt="900x300" src="https://www.derby.ac.uk/online/sites/online2/files/banner-guardian-landing-psychology.jpg"/>
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={300} alt="900x300" src="http://psychologyschools.com/uploads/digital_asset/file/1159/psychologyschoolscom-main-image_900x300.jpg"/>
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={300} alt="900x300" src="http://www.akinsford.com/blog/wp-content/uploads/2015/09/small-graduation-people.jpg"/>
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>

        <h4>Bachelor of Counselling - Year 1 Textbooks</h4>

        <Row>
          <Cart />
        </Row>
        <Row style={{marginTop: '15px'}}>

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
