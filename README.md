![cfa logo](https://cloud.githubusercontent.com/assets/24615235/26814882/1218dc62-4acc-11e7-9ebd-e8259481e5ee.jpeg)
# Javascript App: Major third term project as part of the Coder Factory Academy fast track bootcamp program.

This is the Term 3 major project as part of the Coder Factory Academy bootcamp due in the final week of term. 

The project outline was to:

####  Design, build, deploy and present an application built for a real world customer.

Meet with the business owner or organisation manager to find out what challenges they face. Find a problem that you can solve with anapplication and present your ideas to the client.

##### Problem:

My client is a small private college who offer tertiary qualifications focused in cognate areas such as psychology, counselling & social science. 

The problem was, the college directed students to purchase their textbooks from a 3rd party supplier. This caused anxiety, particularly from new students, about getting the correct textbooks/correct editions and caused the student administration team to handle high volumes of student enquiries regarding this one issue. Even after the college website was updated to include more details regarding obtaining textbooks, the number of student enquiries regarding this remained high.

##### Solution:

The solution is to have a textbook sales page on the college website so students will feel comfort and certainty they are purchasing the correct textbooks.

# Features:
- Users can browse textbooks only relevant to their course of study.
- Users can identify textbooks based on the subject they are enrolled in as well as the title and author.
- Users can add textbooks to a shopping cart and make a purchase.
- Users can delete books from their shopping cart.
- Users can increment/decrement the quantity of a book in their cart.
- Admin can add and delete a book.


# Client Technology and Development Tools:
  - [ReactJS](https://facebook.github.io/react/): a javascript library for building user interfaces.
  - [ReduxJS](http://redux.js.org/): a predictable state container for JavaScript apps.
  - [NodeJS](https://nodejs.org/en/): an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side.
  - [ExpressJS](https://expressjs.com/): a fast, unopinionated, minimalist web framework for Node.js.
  - [MongoDb](https://www.mongodb.com/): stores data in flexible, JSON-like documents.
 
Other libraries used:
- Path: used for handling and transforming file paths.
- Morgan: HTTP request logger middleware for node.js, Redux-logger is a middleware that capture all actions and logs nicely from the previous state and the next one, providing a great visibility on how the store is behaving.
- Http-Proxy: a full-featured http proxy for node.js.
- Requesthandler: handles http requests.
- Mongoose: a schema based solution to model application data. Creates an easy to use object reference (k:v) when interacting with MongoDb.
- Axios: promise based HTTP client for the browser and node.js.
- Cookie-Parser: will parse the Cookie header and handle cookie separation and encoding.
- Body-Parser: will take the body of your request and parse it to whatever you want your server to receive in POST/PUT requests.
- Connect-Mongo-Store: session store for connect using MongoDb.
- Express-Session: save data in session id.

# Future Improvements:
- Add Stripe payment functionality
- Refactor file structure to improve coder usability 
- Include every book for every course at the college

# Installation:

It is assumed you have Nodemon and Mongo installed on your machine.

```sh
$ git clone CFA-T3-Bookstore-Project
```
```sh
$ cd CFA-T3-Bookstore-Project
```
```sh
npm install
```
```sh
$ nodemon
```
In a separate terminal tab, start your local mongo database by running:
```sh
$ mongod --dbpath ~/__YOUR_MONGODB_PATH___ (or your own mongo database link)
```

![erd](https://cloud.githubusercontent.com/assets/24615235/26812783/22b3c05a-4abd-11e7-9484-9cb58bde6b66.jpg)
![userjourney](https://cloud.githubusercontent.com/assets/24615235/26813102/401245ac-4abf-11e7-9c31-6c05c629667f.jpg)
![wireframe1](https://cloud.githubusercontent.com/assets/24615235/26814839/d929ef40-4acb-11e7-93a0-750c5c10e1d2.jpg)
![wireframe2](https://cloud.githubusercontent.com/assets/24615235/26814840/d92b5740-4acb-11e7-9bab-99276f83f615.jpg)
![wireframe3](https://cloud.githubusercontent.com/assets/24615235/26814838/d9290742-4acb-11e7-8a74-b7cbbe0a59f4.jpg)


