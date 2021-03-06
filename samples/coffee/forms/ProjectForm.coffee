# imports
Form = require('../../../src/FormEs5')
ejs  = require('gulp-ejs')

#
# Project form with es6 syntax
# coffee extend es5 form
#
class ProjectForm extends Form

	banner: 'PROJECT FORM'

	model: [{
		type: 'input',
		name: 'projectName',
		message: 'What is your project name ?',
		validate: this.validate
	}]

	# input validation here
	validate: (input)->
		done = @async()
		done(true)

	# manage user answer here
	response: (answer)->
		@src(["#{ __dirname }/../templates/index.ejs"])
			.pipe(ejs({projectName: answer.projectName}))
			.pipe(@dest("#{__dirname}/../#{answer.projectName}/"))

		output = "\nYour project #{answer.projectName} was generated !"
		console.log(output.green)

module.exports = ProjectForm