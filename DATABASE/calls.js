const mongoose = require('mongoose');
var dbName = 'UnityPlayers';
mongoose.connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true});
var Schema = mongoose.Schema;

//form for each recommended home according to data displayed on widget
//_________________________________________________
let userSchema = new Schema({
  "_id" : Number, 
  "name" : {
    "firstName": String, // required
    "middleName": String, // optional
    "lastName": String // required
  },
  "institution": String, // reference to Institution document
  "classrooms": Array, // array of references to classroomConnections 
  "teamName": String, //placeholder and artificial entry for server-side testing
  "loggedIn": Boolean // initialize before room join for auth layer (more to come later)
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
