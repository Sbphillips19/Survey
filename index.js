// require- common JS modules on server side
// node JS only has support for common JS modules
// allows to share code between files
const express = require('express');

// ES 2015 modules- exp import express from 'express'
// node doesn't have support for that
// react has this so can use import syntax for react

// generates new express app
const app = express();

// create route handler and associate with given route
// app- express app to register this route handler with
// get- watch for incoming requests with this method- GET method
//    can also use app.get, post, put, delete, patch
// /- watch for requests trying to access the /
// req- object representing the incoming request
// res- object representing the outgoing response
// res.send({ hi: 'there' });- immediately send some JSON back to who ever made the requests
//    closes response and immediately sends back
// arrow function called anytime that the route is called
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// constant that should not be changed lightly
// looks at underlying environment and sees what port to use
// use with heroku
// if no environment variable defined by heroku just use 5000
// uses 5000 for development environment and whatever heroku uses for production
const PORT = process.env.PORT || 5000;
// tells node to listen on port 5000
// express tells node
app.listen(PORT);
