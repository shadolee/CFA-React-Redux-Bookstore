var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup - not using view engines in this app
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// API's //////////////
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookshop');

var Books = require('./models/books.js');

// ----->>> POST BOOKS <<<------
app.post('/books', function(req, res){ // http POST request on /books, will pass array of books
  var book = req.body; // copy books array to this variable

  Books.create(book, function(err, books){ // pass 'book' array as first argument using mongoose .create method, this will save to database
    if(err){ // we get response from mongo db
      throw err; // if error it will advise error
    }
    res.json(books); // otherwise returns json dataset of submitted books
  })
});

// ------>>> GET BOOKS <<<---------
app.get('/books', function(req, res){ // GET request for /books
  Books.find(function(err, books){ // find all books in catalogue
    if(err){ // callback to handle MongoDB response
      throw err; // show error if there is one
    }
    res.json(books); // otherwise return json list of books
  })
});

// ------>>>> DELETE BOOKS <<<<<-----
app.delete('/books/:_id', function(req, res){ // DELETE request for /books with _id as parametre so app knows which book to delete
  var query = {_id: req.params._id}; // this variable holds the id of book to be deleted

  Books.remove(query, function(err, books){ // pass variable to .remove method
    if(err){
      throw err;   // show error if there is one
    }
    res.json(books);  // otherwise return json list of books
  })
});

// ------>>>> UPDATE BOOKS <<<<----------
app.put('/books/:_id', function(req, res){ // specify url of book id we wish to update
  var book = req.body; // capture the book id containing the updates
  var query = req.params._id; // capture id from params as part of update criteria
  // if the field doesn't exist $set will set a new field
  var update = { // replace old book values with new ones from req.body
    '$set':{
      title:book.title,
      description:book.description,
      image:book.image,
      price:book.price
    }
  };
  // when true, return the updated document
  var options = {new: true}; // true so we get new record in response rather than original

  Books.findOneAndUpdate(query, update, options, function(err, books){
    if(err){ // findOneAndUpdate method, passing update criteria, actions & options
      throw err; // if error, throw error
    }
    res.json(books); // if no error return json list of books with update
  })
})

// END API's ///////////


app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
