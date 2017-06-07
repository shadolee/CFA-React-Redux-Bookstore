var expect = require('chai').expect;
const request = require('supertest');
var app = require('../app');

if(!module.parent) {
  app.listen(3000);
}

describe ('simple test', function() {
  it ('always true', function() {
      expect(true).to.be.true;
  });
});

describe ('api tests', function() {
  it ('check /books', function(done) {
      request(app)
          .get('/books')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            done();
          });
      });
});
