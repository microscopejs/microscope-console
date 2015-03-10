microscope-console
==================

Console application librairie - play well with gulp and npm workflow.

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

#### install grunt-cli (sudo on linux/OSX) :

	npm install grunt-cli

#### install dependencies (sudo on linux/OSX) :

	npm install

Commands
--------

#### test (run gulp test):

	npm test

#### build:

	gulp build

* compile src with babel to lib folder

#### test:

	grunt test
	
* validate source code (jsHint).

#### docs:

	grunt docs
	
* generate annoted code documentation (docco).
* generate annoted code samples documentation (docco).

Roadmap
=======