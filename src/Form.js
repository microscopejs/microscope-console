/**
 * THIS CLASS IS NOT USE FOR NOW
 * WAITING FOR NODE.JS ES6 FULL SUPPORT
 */

// Imports
var vfs      = require('vinyl-fs');
var inquirer = require('inquirer');
require('colors');

// Blackboard Form
class Form {

	// Form constructor
	constructor(){
		this.displayBanner();
	}

	// getter for model
	get model(){
		return [];
	}

	// render form prompt using inquirer and callback answer to this.response
	render(){
		inquirer.prompt(this.model, this.response.bind(this));
	}

	// Default logo
	get banner(){
		return 'MICROSCOPE-CONSOLE';
	}

	// display logo with colors
	displayBanner(){
		var banner = this.banner;
		console.log('\n');
		console.log(banner.cyan);
	}

	response(){}
}

// Add vinyl-fs function to Form prototype
Form.prototype.src = vfs.src;
Form.prototype.dest = vfs.dest;

module.exports = Form;