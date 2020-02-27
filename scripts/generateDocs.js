const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');
const docsTemplates = require('./docsTemplates');
const readmeTemplates = require('./readmeTemplates');

const packagePath = './packages';

const writeDocs = ({ config, templates, getDestinationByPackageName }) =>
	templates.forEach(({ packageName, template }) => {
		const readmes = jsdoc2md.renderSync({
			data: jsdoc2md.getTemplateDataSync({
				'no-cache': true,
				files: `${packagePath}/${packageName}/src/*.js`,
			}),
			separators: true,
			template,
			'heading-depth': 1,
			...config,
		});

		fs.writeFileSync(getDestinationByPackageName(packageName), readmes.trim());
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
	templates: readmeTemplates,
	getDestinationByPackageName: packageName => `./packages/${packageName}/README.md`,
	config: {
		// scope seems broken with point-free, use our special custom implementation
		partial: './scripts/scope.hbs',
	},
});
