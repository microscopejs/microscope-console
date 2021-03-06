microscope-console
==================

Console application librairie - play well with gulp and npm workflow.

[![Build Status](https://travis-ci.org/microscopejs/microscope-console.svg?branch=master)](https://travis-ci.org/microscopejs/microscope-console)

![microscopejs](http://microscopejs.com/images/mcsp_bg.png)

Requirements
------------

* node
* npm
* gulp

Node.js installation
--------------------

#### Install on OSX

Using homebrew:

	brew install node

#### Install on Linux (Ubuntu/Mint)

	sudo apt-get install python-software-properties python g++ make
	sudo add-apt-repository ppa:chris-lea/node.js
	sudo apt-get update
	sudo apt-get install nodejs

#### Install on Windows

[Download Node.js MSI](http://nodejs.org/download/)

Installation
------------

#### install gulp (sudo on linux/OSX) :

	npm install gulp -g

#### install dependencies (sudo on linux/OSX) :

	npm install

Development commands
--------------------

#### test (run gulp test):

	npm test

#### build (not use yet):

	gulp build

* compile src with babel to lib folder

#### test:

	grunt test
	
* validate source code (jsHint).

#### docs:

	grunt docs
	
* generate annoted code documentation (docco).
* generate annoted code samples documentation (docco).

How to use ?
============

Create console application wich rich form:

***old school way (ES5):***

```js
var Form = require('microscope-console').Form;
var ejs  = require("gulp-ejs");

/**
 * Project form
 * Es5 syntax
 */
var ProjectForm = Form.extend({

	model: [{
		type: 'input',
		name: 'projectName',
		message: 'What is your project name ?',
		validate: this.validate
	}],

	// input validation here
	validate: function (input) {
		var done = this.async();
		done(true);
	},

	// manage user answer here
	response: function (answer) {
		this.src([__dirname + '/../templates/index.ejs'])
			.pipe(ejs({projectName: answer.projectName}))
			.pipe(this.dest(__dirname + '/../' + answer.projectName + '/'));

		var output = '\nYour project '+ answer.projectName +' was generated !';
		console.log(output.green);
	}
});

module.exports = ProjectForm;
```

***new school way (ES6 with babel):***

```js
var Form = require('microscope-console').Form;
var ejs  = require("gulp-ejs");

/**
 * Project form with es6 syntax
 * native extend es5 form
 */
class ProjectForm extends Form {

	get model(){
		return [{
			type: 'input',
			name: 'projectName',
			message: 'What is your project name ?',
			validate: this.validate
		}];
	}

	// input validation here
	validate(input){
		var done = this.async();
		done(true);
	}

	// manage user answer here
	response(answer){
		this.src([__dirname + '/../templates/index.ejs'])
			.pipe(ejs({projectName: answer.projectName}))
			.pipe(this.dest(__dirname + '/../' + answer.projectName + '/'));

		var output = '\nYour project '+ answer.projectName +' was generated !';
		console.log(output.green);
	}
}

module.exports = ProjectForm;
```

Instatiate it and compose tasks console applications using gulp

```js
var ProjectForm = require('./forms/ProjectForm');
var c = new ProjectForm();
```

Roadmap
=======

* improve testing