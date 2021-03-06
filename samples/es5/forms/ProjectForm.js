var Form = require('../../../src/FormEs5');
var ejs  = require("gulp-ejs");

/**
 * Project form
 * Es5 syntax
 */
var ProjectForm = Form.extend({

	banner: 'PROJECT FORM',

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