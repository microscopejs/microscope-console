var Form = require('../../src/Form');
var ejs  = require("gulp-ejs");

/**
 * Project form
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

	validate(input){
		var done = this.async();
		done(true);
	}

	response(answer){
		this.src([__dirname + '/../templates/index.ejs'])
			.pipe(ejs({projectName: answer.projectName}))
			.pipe(this.dest(__dirname + '/../' + answer.projectName + '/'));

		var output = '\nYour project '+ answer.projectName +' was generated !';
		console.log(output.green);
	}
}

module.exports = ProjectForm;