// const footer = `© 2018-${new Date().getFullYear()} Lundegaard a.s.`;

// const apiRef = ref => `## API reference
//  {{#module name="${ref}"}}
//  {{>docs~}}
//  {{/module}}`;

const getLayout = ({ ref }) => `{{#module name="${ref}"}}
 {{>docs}}
 {{/module}}
`;

const validations = getLayout({
	ref: 'validations',
});

const predicates = getLayout({
	ref: 'predicates',
});

const intl = getLayout({
	ref: 'intl',
});
const core = getLayout({
	ref: 'core',
});

const createRecord = (packageName, template) => ({ packageName, template });

module.exports = [
	createRecord('validations', validations),
	createRecord('core', core),
	createRecord('predicates', predicates),
	createRecord('intl', intl),
];
