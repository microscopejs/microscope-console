"use strict";

// Imports
var vfs = require("vinyl-fs");
var inquirer = require("inquirer");
var _ = require("lodash");
require("colors");

// Form class
function Form() {
	this.displayBanner();
	this.initialize.apply(this, arguments);
	this.render();
}

_.extend(Form.prototype, {

	// initialize properties here
	initialize: function initialize() {},

	banner: "MICROSCOPE-CONSOLE",

	model: [],

	// render form with inquirer librairie
	render: function render() {
		inquirer.prompt(this.model, this.response.bind(this));
	},

	// display organisation logo
	displayBanner: function displayBanner() {
		var banner = _.result(this, "banner");
		console.log("\n");
		console.log(banner.cyan);
	},

	// manage user answers here
	response: function response() {},

	// Add vinyl-fs function to Form prototype
	src: vfs.src,
	dest: vfs.dest
});

// prototype inheritance extend helper
// static function
Form.extend = function (protoProps, staticProps) {
	var parent = this;
	var child;

	if (protoProps && _.has(protoProps, "constructor")) {
		child = protoProps.constructor;
	} else {
		child = function () {
			return parent.apply(this, arguments);
		};
	}
	_.extend(child, parent, staticProps);

	child.prototype = Object.create(parent.prototype, {
		constructor: {
			value: child,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});

	if (protoProps) {
		_.extend(child.prototype, protoProps);
	}

	child.__super__ = parent.prototype;

	return child;
};

module.exports = Form;