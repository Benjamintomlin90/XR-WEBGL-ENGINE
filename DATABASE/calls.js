const mongoose = require('mongoose');
var dbName = 'UnityPlayers';
mongoose.connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true});
var Schema = mongoose.Schema;

//form for each recommended home according to data displayed on widget
//_________________________________________________
let userSchema = new Schema({
  index: Number,
  name: String,
  loggedIn: Boolean,
  team: String
},

  { typeKey: '$type' } //needed so that for when generating from a mongoose schema, it does not try to convert an object at a property to a string.

);

let User = mongoose.model('User', userSchema);


getUser = function(callback) {

  //grab random User
  var setIndex = Math.floor(Math.random() * 100)
  //_________________________________________________________________

  User.find().where('index').in(setIndex).exec((err, records) => {
    if (err) {
      console.log(err)
    }
    callback(null, records);
  });
}

module.exports = {getUser, User};
