/**
 * THIS CLASS IS NOT USE FOR NOW
 * WAITING FOR NODE.JS ES6 FULL SUPPORT
 */

// Imports
var vfs      = require('vinyl-fs');
var inquirer = require('inquirer');
require('colors');

/**
 * Form class
 */
class Form {

	// Form constructor
	constructor(){
		this.displayBanner();
		this.render();
	}

	// render form prompt using inquirer and callback answer to this.response
	render(){
		inquirer.prompt(this.model, this.response.bind(this));
	}

	// display logo with colors
	displayBanner(){
		var banner = this.banner;
		console.log('\n');
		console.log(banner.cyan);
	}

	response(){}
}

Form.prototype.model = [];
Form.prototype.banner = 'MICROSCOPE-CONSOLE';
Form.prototype.src = vfs.src;
Form.prototype.dest = vfs.dest;

module.exports = Form;