var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

var app = express();

// view engine setup - not using view engines in this app
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// API's //////////////
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookshop');

var db = mongoose.connection; // db will hold our connection
db.on('error', console.error.bind(console, '# MongoDB - connection error: ')); // this will identify any errors with mongo conection

// ---->>>>> SET UP SESSIONS <<<<<<--------
app.use(session({
  secret: 'mySecretString', // secret used to sign session ID cookie, prevent attacker from guessing session id
  saveUninitialized: false, // we want to only save a session if a user adds a item to the cart
  resave: false, // false so session won't be re-saved if it doesn't change
  store: new MongoStore({mongooseConnection: db, ttl: 2 * 24 * 60 * 60}) // set it to save session data in MongoDB and set expiry timing
  // ttl (time to leave) = 2 days x 24 hours x 60 mins x 60 secs
}))
// --->>>>> SAVE SESSION CART API <<<<--------
app.post('/cart', function(req, res){ // http POST request for /cart
  var cart = req.body;
  req.session.cart = cart;
  req.session.save(function(err){ // to store/save cart data from the session
    if(err){
      throw err;
    }
    res.json(req.session.cart); // if no errors respond with cart data
  })
})
// ----->>>>>> GET SESSION CART API <<<<<-----
app.get('/cart', function(req, res){ // http GET request tp /cart
  if(typeof req.session.cart !== 'undefined'){ // if there is any cart data in the session
    res.json(req.session.cart);  // respond with cart data
  }
})
// ----->>>> END of SESSION SET UP <<<<----

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
      console.log('# API DELETE BOOKS: ', err); // show error if there is one
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

// --->>> GET BOOKS IMAGES API <<<------
app.get('/images', function(req, res){
  const imgFolder = __dirname + '/public/images/';
 // REQUIRE FILE SYSTEM
  const fs = require('fs');
 //READ ALL FILES IN THE DIRECTORY
  fs.readdir(imgFolder, function(err, files){
    if(err){
      return console.error(err);
    }
 //CREATE AN EMPTY ARRAY
   const filesArr = [];
   var i = 1;
 // ITERATE ALL IMAGES IN THE DIRECTORY AND ADD TO THE THE ARRAY
   files.forEach(function(file){
     filesArr.push({name: file});
     i++
   });
 // SEND THE JSON RESPONSE WITH THE ARRAY
   res.json(filesArr);
   })
})

// END API's ///////////

app.listen(3001, function(err){
  if(err){
    return console.log(err);
  }
  console.log('API Server is listening on http://localhost:3001');
})
