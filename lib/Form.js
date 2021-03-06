"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
 * THIS CLASS IS NOT USE FOR NOW
 * WAITING FOR NODE.JS ES6 FULL SUPPORT
 */

// Imports
var vfs = require("vinyl-fs");
var inquirer = require("inquirer");
require("colors");

/**
 * Form class
 */

var Form = (function () {

	// Form constructor

	function Form() {
		_classCallCheck(this, Form);

		this.displayBanner();
		this.render();
	}

	_createClass(Form, {
		render: {

			// render form prompt using inquirer and callback answer to this.response

			value: function render() {
				inquirer.prompt(this.model, this.response.bind(this));
			}
		},
		displayBanner: {

			// display logo with colors

			value: function displayBanner() {
				var banner = this.banner;
				console.log("\n");
				console.log(banner.cyan);
			}
		},
		response: {
			value: function response() {}
		}
	});

	return Form;
})();

Form.prototype.model = [];
Form.prototype.banner = "MICROSCOPE-CONSOLE";
Form.prototype.src = vfs.src;
Form.prototype.dest = vfs.dest;

module.exports = Form;