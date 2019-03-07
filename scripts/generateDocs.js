const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');
const docsTemplates = require('./docsTemplates');

docsTemplates.forEach(({ packageName, template }) => {
	const packagePath = `./packages/${packageName}`;
	const templateData = jsdoc2md.getTemplateDataSync({
		'no-cache': true,
		files: `${packagePath}/src/*.js`,
	});
	const docs = jsdoc2md.renderSync({
		data: templateData,
		separators: true,
		template,
		// scope seems broken with point-free, use our special custom implementation
		partial: './scripts/scope.hbs',
	});
	fs.writeFileSync(`${packagePath}/README.md`, docs.trim());
});
