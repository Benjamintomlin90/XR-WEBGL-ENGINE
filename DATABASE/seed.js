const mongoose = require('mongoose');
var dbName = 'UnityPlayers'

//-------------establish connection---------------------
mongoose.connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open", function() {
console.log("*** MongoDB connected ***");
console.log(`Our Current Database Name : ${connection.db.databaseName}`);
});
//------------------------------------------------------
//import model
const { User } = require('./calls');

//___________generates fakes______
const { faker}  = require('@faker-js/faker');
//________________________________


//populate the database with 100 random entries with id's 1 - 100
//_________________________________________________

handleError = function(err) {

  console.log('\n');
  console.log('Database error log below:');
  console.log('\n');
  console.error(err);
  console.log('\n');
  throw new Error('full database population and/or re-seeding failed.\n');

}

populate = function() {

  //drop database for re-seeding
  connection.once("open", function() {
    mongoose.connection.db.dropDatabase(
    console.log(`clearing current entries`)
    );
  });

  for (var i = 1; i < 100; i++) {

    //defining type of user
    var name = faker.internet.userName();
    var loggedIn = false;
    var teamTypes = ['red', 'green', 'blue']
    var teamRandom = Math.floor(Math.random() * 3);
    var teamColor = teamTypes[teamRandom];
 
    //_________________________________________________

    var user = new User({
        index: i,
        name: name,
        loggedIn: loggedIn,
        team: teamColor,
    });

    user.save(function (err) {
      if (err) {
        return handleError(err);
      }
    });

  //gives time to throw error and stop process
  setTimeout(() => {
    console.log('database seeded.');
    process.exit();
  }, 2000);

}};

populate();