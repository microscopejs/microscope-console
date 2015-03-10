"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

// Imports
var vfs = require("vinyl-fs");
var inquirer = require("inquirer");
require("colors");

// Blackboard Form

var Form = (function () {

	// Form constructor

	function Form() {
		_classCallCheck(this, Form);

		this.displaylogo();
		this.render();
	}

	_createClass(Form, {
		model: {

			// getter for model

			get: function () {
				return [];
			}
		},
		render: {

			// render form prompt using inquirer and callback answer to this.response

			value: function render() {
				inquirer.prompt(this.model, this.response.bind(this));
			}
		},
		logo: {

			// Default logo

			get: function () {
				return ["\n", "================================", "           BlackBoard           ", "================================"].join("\n");
			}
		},
		displaylogo: {

			// display logo with colors

			value: function displaylogo() {
				var logo = this.logo;
				console.log(logo.cyan);
			}
		},
		response: {
			value: function response() {}
		}
	});

	return Form;
})();

// Add vinyl-fs function to Form prototype
Form.prototype.src = vfs.src;
Form.prototype.dest = vfs.dest;

module.exports = Form;