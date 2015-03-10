// Imports
var vfs      = require('vinyl-fs');
var inquirer = require('inquirer');
require('colors');

// Blackboard Form
class Form {

	// Form constructor
	constructor(){
		this.displaylogo();
		this.render();
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
	get logo(){
		return [
			'\n',
			'================================',
			'           BlackBoard           ',
			'================================',
		].join('\n');
	}

	// display logo with colors
	displaylogo(){
		var logo = this.logo;
		console.log(logo.cyan);
	}

	response(){}
}

// Add vinyl-fs function to Form prototype
Form.prototype.src = vfs.src;
Form.prototype.dest = vfs.dest;

module.exports = Form;