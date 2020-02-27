const footer = `
[back to main page](../../README.md)

© 2018-${new Date().getFullYear()} Lundegaard a.s.`;

const apiRef = ref => `## API reference
 {{#module name="${ref}"}}
 {{>docs~}}
 {{/module}}`;

const validations = `# Validations
This package contains common validation functions

${apiRef('validations')}
${footer}`;

const intl = `# Intl
This package provides translator for react-inl messages. Also convenient API for validations.

${apiRef('intl')}
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
	createRecord('validations', validations),
	createRecord('core', core),
	createRecord('predicates', predicates),
	createRecord('intl', intl),
];
