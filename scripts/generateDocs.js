const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');
const docsTemplates = require('./docsTemplates');
const readmeTemplates = require('./readmeTemplates');
const { join, filter, compose } = require('ramda');

const packagePath = './packages';

const writeDocs = ({ config, templates, header = '', footer = '', getDestinationByPackageName }) =>
	templates.forEach(({ packageName, title = '', description = '', template }) => {
		const data = jsdoc2md.getTemplateDataSync({
			'no-cache': true,
			files: `${packagePath}/${packageName}/src/*.js`,
		});

		const options = {
			data,
			separators: true,
			template,
			'heading-depth': 1,
			...config,
		};

		const generatedMarkdown = jsdoc2md.renderSync(options);

		const content = compose(
			join('\n'),
			filter(Boolean)
		)([title && `# ${title}`, header, description, generatedMarkdown, footer]);

		fs.writeFileSync(getDestinationByPackageName(packageName), content);
	});

writeDocs({
	templates: docsTemplates,
	getDestinationByPackageName: packageName => `./docs/packages/${packageName}.md`,
	config: {
		// scope seems broken with point-free, use our special custom implementation
		partial: ['./scripts/scope.hbs', './scripts/docs.hbs'],
	},
});
writeDocs({
	...readmeTemplates,
	getDestinationByPackageName: packageName => `./packages/${packageName}/README.md`,
	config: {
		// scope seems broken with point-free, use our special custom implementation
		partial: './scripts/scope.hbs',
	},
});
