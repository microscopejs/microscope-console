var Form = require('../../../src/FormEs5');
var ejs  = require("gulp-ejs");

/**
 * Project form with es6 syntax
 * native extend es5 form
 */
class ProjectForm extends Form {

	get banner(){
		return 'PROJECT FORM';
	}

	// initialize model here and render form
	initialize(){
		this.model = [{
			type: 'input',
			name: 'projectName',
			message: 'What is your project name ?',
			validate: this.validate
		}];
		this.render();
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