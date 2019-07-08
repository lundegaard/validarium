const path = require('path');
const { rootDir } = require('../utils');

module.exports = {
	description: 'New validation',
	prompts: [
		{
			type: 'input',
			name: 'name',
			message: 'Name of the validation',
		},
	],
	actions: (/* input */) => [
		{
			type: 'add',
			path: path.join(rootDir, 'packages/validations/src/{{camelCase name}}.js'),
			templateFile: path.join(__dirname, './newValidation.js.hbs'),
		},
		{
			type: 'list',
			name: 'category',
			message: 'Category of the function',
			choices: ['String', 'Number', 'Object', 'Array', 'Boolean'],
		},

		{
			type: 'append',
			path: path.join(rootDir, 'packages/validations/src/index.js'),
			templateFile: path.join(__dirname, './root.js.hbs'),
			separator: '',
			pattern: /\n$/gi,
		},
		{
			type: 'append',
			path: path.join(rootDir, 'packages/validations/src/messages.js'),
			templateFile: path.join(__dirname, './rootMessages.js.hbs'),
			separator: '',
			pattern: /^export[^\n]+\n/gi,
			unique: true,
		},
		{
			type: 'add',
			path: path.join(rootDir, 'packages/predicates/src/{{camelCase name}}.js'),
			templateFile: path.join(__dirname, './newPredicate.js.hbs'),
		},
		{
			type: 'add',
			path: path.join(rootDir, 'packages/predicates/src/{{camelCase name}}.test.js'),
			templateFile: path.join(__dirname, './testPredicate.js.hbs'),
		},
		{
			type: 'append',
			path: path.join(rootDir, 'packages/predicates/src/index.js'),
			templateFile: path.join(__dirname, './root.js.hbs'),
			separator: '',
			pattern: /\n$/gi,
		},
	],
};
