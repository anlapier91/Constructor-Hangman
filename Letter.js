// Creates a Letter Constructor
var Letter = function(letter) {
	this.visible = true;
	this.char = letter;
	this.placeholder = '_';
};

Letter.prototype.testLetter = function() {
	if (visible === true) {
		console.log(this.char);
	} else {
		console.log(this.placeholder);
	}
};

module.exports = Letter;
