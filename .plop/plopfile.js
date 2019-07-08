const path = require('path');
const newValidation = require('./newValidation');

module.exports = function(plop) {
	plop.setGenerator('new-validation', newValidation);
};
