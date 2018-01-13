var Letter = require('./Letter.js');
var Word = require('./Word.js');
var inquire = require('./inquirer');
var wordlist = require('./words');

//run the game
//create new instances, call methods that are chained as prototypes so each "instance" can be applied to that function
//test letters
//set true or false to letters
//we're going to iterate through the word

var WeatherAdmin = require('./WeatherAdmin');

// Hold the value whether someone is an "admin" or "user"
var loginType = process.argv[2];

// If they are a user... they will also need to provide a "name"
var userName = process.argv[3];

// And they will need to provide a "location"
var userLocation = process.argv[4];

// Create an instance of the WeatherAdmin. Remember WeatherAdmin is a constructor! Not an object.
var MyAdmin = new WeatherAdmin();

if (loginType === 'admin') {
	MyAdmin.getData();
} else {
	MyAdmin.newUserSearch(userName, userLocation);
}
