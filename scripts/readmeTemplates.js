/* eslint-disable max-len */
const footer = `

## Related projects

- [@redux-tools](https://github.com/lundegaard/redux-tools) – Maintaining large Redux applications with ease.
- [react-union](https://github.com/lundegaard/react-union) – Integrate React apps into various CMSs seamlessly.
- [lundium](https://github.com/lundegaard/lundium) – Beautiful React component library.

## License

All packages are distributed under the MIT license. See the license [here](https://github.com/lundegaard/validarium/blob/master/LICENSE).`;

const header = ` <p align="center">
  <a href="https://validarium.js.org">
    <img alt="Validarium" src="https://validarium.js.org/_media/logo.png" width="300" />
  </a>
</p>

<h1 align="center">
  <a href="https://lundegaard.eu">
    <img alt="by Lundegaard" src="https://validarium.js.org/_media/by-lundegaard.png" width="120" />
  </a>
</h1>

<h3 align="center">
🖍️ 🛡  🚀
</h3>

<h3 align="center">
Validations done right.
</h3>

<p align="center">
Platform-agnostic validation library for JavaScript applications with extra focus on composable validations and message translations. Includes (pretty much) out-of-the-box support for both <a href="https://redux-form.com/">Redux Form</a> and <a href="https://github.com/formatjs/react-intl">React Intl</a>.
</p>

<p align="center">
Create your validation schema based on priciples of functional programming.
</p>

<p align="center">
<a href="https://runkit.com/aizerin/validarium">Open Validarium in a RunKit sandbox!</a>
</p>

<p align="center">
<a href="https://validarium.js.org">See our documentation site.</a>
</p>

<p align="center">
  <a href="https://github.com/lundegaard/validarium">
    <img src="https://flat.badgen.net/badge/-/github?icon=github&label" alt="Github" />
  </a>

  <img src="https://flat.badgen.net/badge/license/MIT/blue" alt="MIT License" />

  <a href="https://travis-ci.org/lundegaard/validarium">
    <img src="https://img.shields.io/travis/lundegaard/validarium/master.svg?style=flat-square" alt="Travis" />
  </a>

  <a href="https://npmjs.com/package/validarium">
    <img src="https://img.shields.io/npm/dm/@validarium/core.svg" alt="Downloads" />
  </a>

  <a href="https://npmjs.com/package/validarium">
    <img src="https://flat.badgen.net/npm/v/validarium" alt="Version" />
  </a>
</p>`;

const apiRef = ref => `## API reference
 {{#module name="${ref}"}}
 {{>docs~}}
 {{/module}}`;

const validations = {
	title: 'Validations',
	description: 'This package contains common validation functions',

	template: apiRef('validations'),
};

const intl = {
	title: 'Intl',
	description:
		'This package provides translator for react-inl messages. Also convenient API for validations.',
	template: apiRef('intl'),
};

const core = {
	title: 'Core',
	description: 'This package contains all core functionalities for Validarium.',
	template: apiRef('core'),
};

const predicates = {
	title: 'Predicates',
	description: `
This package contains all predicates used in validation functions.
Name and usage is self explanatory. If not, please look at the tests.

You can use them for composing custom functionality.
	`,
	template: apiRef('predicates'),
};

const createRecord = (packageName, config) => ({ packageName, ...config });

module.exports = {
	header,
	footer,
	templates: [
		createRecord('validations', validations),
		createRecord('core', core),
		createRecord('predicates', predicates),
		createRecord('intl', intl),
	],
};
