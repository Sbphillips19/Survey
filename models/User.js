const mongoose = require('mongoose');

// code below can be condensed down
// ES 2016 syntax
// take mongoose property schema and create variable named schema
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

// can freely add or subtract properties as needed
const userSchema = new Schema({
  googleId: String
});

// create a new collection called users
// mongoose will not override existing collections
// would only add in if doesn't exit
mongoose.model('users', userSchema);
