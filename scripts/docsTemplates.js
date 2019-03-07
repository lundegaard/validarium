const footer = `
[back to main page](../../README.md)

© 2018-${new Date().getFullYear()} Lundegaard a.s.`;

const apiRef = ref => `## API reference
 {{#module name="${ref}"}}
 {{>docs~}}
 {{/module}}`;

const intl = `# Intl
This package contains all validation functions for Intl

${apiRef('intlValidations')}
${footer}`;

const core = `# Core
This package contains all core functionalities for Validarium.

${apiRef('core')}
${footer}`;

const predicates = `# Predicates
This package contains all predicates used in validation functions.
Name and usage is self explanatory. If not, please look at the tests.

You can use them for composing custom functionality.

${apiRef('predicates')}
${footer}`;

const createRecord = (packageName, template) => ({ packageName, template });

module.exports = [
	createRecord('intl', intl),
	createRecord('core', core),
	createRecord('predicates', predicates),
];
