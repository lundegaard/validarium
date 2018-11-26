import {
	alwaysNull,
	isNotNil,
	isNotEmpty,
	between,
	isNumeric,
	isArray,
	isNilOrEmptyString,
	isNotNumeric,
	ltThanLength,
	listToString,
} from 'ramda-extension';

var m = {
	isDivisibleBy: {
		id: 'validarium.isDivisibleBy',
		defaultMessage: 'Must be divisible by {divider}',
	},
	isEmail: {
		id: 'validarium.isEmail',
		defaultMessage: 'Invalid e-mail address',
	},
	isInteger: {
		id: 'validarium.isInteger',
		defaultMessage: 'Invalid integer',
	},
	hasLengthInInterval: {
		id: 'validarium.hasLengthInInterval',
		defaultMessage: 'Invalid number of characters ({min} to {max})',
	},
	hasValueInInterval: {
		id: 'validarium.hasValueInInterval',
		defaultMessage: 'Must be between {min} and {max}',
	},
	isNumber: {
		id: 'validarium.isNumber',
		defaultMessage: 'Must be a number',
	},
	isPhoneNumber: {
		id: 'validarium.isPhoneNumber',
		defaultMessage: 'Invalid phone number',
	},
	isPositiveNumber: {
		id: 'validarium.isPositiveNumber',
		defaultMessage: 'Must be a positive number',
	},
	isRequired: {
		id: 'validarium.isRequired',
		defaultMessage: 'This field is required',
	},
	hasLengthMax: {
		id: 'validarium.hasLengthMax',
		defaultMessage: 'Maximum number of characters exceeded ({max})',
	},
	hasLengthMin: {
		id: 'validarium.hasLengthMin',
		defaultMessage: 'Minimum number of characters not reached ({min})',
	},
	hasValueMin: {
		id: 'validarium.hasValueMin',
		defaultMessage: 'Minimum value is {min}',
	},
	hasValueMax: {
		id: 'validarium.hasValueMax',
		defaultMessage: 'Maximum value is {max}',
	},
	hasOnlyDigits: {
		id: 'validarium.hasOnlyDigits',
		defaultMessage: 'Must only contain digits',
	},
	hasNoSpecialSymbols: {
		id: 'validarium.hasNoSpecialSymbols',
		defaultMessage: 'Special characters are not allowed',
	},
	hasLength: {
		id: 'validarium.hasLength',
		defaultMessage: 'Must contain exactly {length} characters',
	},
	startsWith: {
		id: 'validarium.startsWith',
		defaultMessage: 'Value must start with {string}',
	},
	isValidIban: {
		id: 'validarium.isValidIban',
		defaultMessage: 'IBAN is not valid',
	},
};

function _typeof(obj) {
	if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
		_typeof = function(obj) {
			return typeof obj;
		};
	} else {
		_typeof = function(obj) {
			return obj &&
				typeof Symbol === 'function' &&
				obj.constructor === Symbol &&
				obj !== Symbol.prototype
				? 'symbol'
				: typeof obj;
		};
	}

	return _typeof(obj);
}

function _isPlaceholder(a) {
	return a != null && _typeof(a) === 'object' && a['@@functional/placeholder'] === true;
}

/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry1(fn) {
	return function f1(a) {
		if (arguments.length === 0 || _isPlaceholder(a)) {
			return f1;
		} else {
			return fn.apply(this, arguments);
		}
	};
}

function _isNumber(x) {
	return Object.prototype.toString.call(x) === '[object Number]';
}

/**
 * Returns the number of elements in the array by returning `list.length`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [a] -> Number
 * @param {Array} list The array to inspect.
 * @return {Number} The length of the array.
 * @example
 *
 *      R.length([]); //=> 0
 *      R.length([1, 2, 3]); //=> 3
 */

var length =
	/*#__PURE__*/
	_curry1(function length(list) {
		return list != null && _isNumber(list.length) ? list.length : NaN;
	});

/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry2(fn) {
	return function f2(a, b) {
		switch (arguments.length) {
			case 0:
				return f2;

			case 1:
				return _isPlaceholder(a)
					? f2
					: _curry1(function(_b) {
							return fn(a, _b);
					  });

			default:
				return _isPlaceholder(a) && _isPlaceholder(b)
					? f2
					: _isPlaceholder(a)
						? _curry1(function(_a) {
								return fn(_a, b);
						  })
						: _isPlaceholder(b)
							? _curry1(function(_b) {
									return fn(a, _b);
							  })
							: fn(a, b);
		}
	};
}

/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry3(fn) {
	return function f3(a, b, c) {
		switch (arguments.length) {
			case 0:
				return f3;

			case 1:
				return _isPlaceholder(a)
					? f3
					: _curry2(function(_b, _c) {
							return fn(a, _b, _c);
					  });

			case 2:
				return _isPlaceholder(a) && _isPlaceholder(b)
					? f3
					: _isPlaceholder(a)
						? _curry2(function(_a, _c) {
								return fn(_a, b, _c);
						  })
						: _isPlaceholder(b)
							? _curry2(function(_b, _c) {
									return fn(a, _b, _c);
							  })
							: _curry1(function(_c) {
									return fn(a, b, _c);
							  });

			default:
				return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c)
					? f3
					: _isPlaceholder(a) && _isPlaceholder(b)
						? _curry2(function(_a, _b) {
								return fn(_a, _b, c);
						  })
						: _isPlaceholder(a) && _isPlaceholder(c)
							? _curry2(function(_a, _c) {
									return fn(_a, b, _c);
							  })
							: _isPlaceholder(b) && _isPlaceholder(c)
								? _curry2(function(_b, _c) {
										return fn(a, _b, _c);
								  })
								: _isPlaceholder(a)
									? _curry1(function(_a) {
											return fn(_a, b, c);
									  })
									: _isPlaceholder(b)
										? _curry1(function(_b) {
												return fn(a, _b, c);
										  })
										: _isPlaceholder(c)
											? _curry1(function(_c) {
													return fn(a, b, _c);
											  })
											: fn(a, b, c);
		}
	};
}

/**
 * `o` is a curried composition function that returns a unary function.
 * Like [`compose`](#compose), `o` performs right-to-left function composition.
 * Unlike [`compose`](#compose), the rightmost function passed to `o` will be
 * invoked with only one argument. Also, unlike [`compose`](#compose), `o` is
 * limited to accepting only 2 unary functions. The name o was chosen because
 * of its similarity to the mathematical composition operator ∘.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (b -> c) -> (a -> b) -> a -> c
 * @param {Function} f
 * @param {Function} g
 * @return {Function}
 * @see R.compose, R.pipe
 * @example
 *
 *      const classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + name.last
 *      const yellGreeting = R.o(R.toUpper, classyGreeting);
 *      yellGreeting({first: 'James', last: 'Bond'}); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.o(R.multiply(10), R.add(10))(-4) //=> 60
 *
 * @symb R.o(f, g, x) = f(g(x))
 */

var o =
	/*#__PURE__*/
	_curry3(function o(f, g, x) {
		return f(g(x));
	});

function _isPlaceholder$1(a) {
	return a != null && _typeof(a) === 'object' && a['@@functional/placeholder'] === true;
}

/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry1$1(fn) {
	return function f1(a) {
		if (arguments.length === 0 || _isPlaceholder$1(a)) {
			return f1;
		} else {
			return fn.apply(this, arguments);
		}
	};
}

/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      const t = R.always('Tee');
 *      t(); //=> 'Tee'
 */

var always =
	/*#__PURE__*/
	_curry1$1(function always(val) {
		return function() {
			return val;
		};
	});

function _arity(n, fn) {
	/* eslint-disable no-unused-vars */
	switch (n) {
		case 0:
			return function() {
				return fn.apply(this, arguments);
			};

		case 1:
			return function(a0) {
				return fn.apply(this, arguments);
			};

		case 2:
			return function(a0, a1) {
				return fn.apply(this, arguments);
			};

		case 3:
			return function(a0, a1, a2) {
				return fn.apply(this, arguments);
			};

		case 4:
			return function(a0, a1, a2, a3) {
				return fn.apply(this, arguments);
			};

		case 5:
			return function(a0, a1, a2, a3, a4) {
				return fn.apply(this, arguments);
			};

		case 6:
			return function(a0, a1, a2, a3, a4, a5) {
				return fn.apply(this, arguments);
			};

		case 7:
			return function(a0, a1, a2, a3, a4, a5, a6) {
				return fn.apply(this, arguments);
			};

		case 8:
			return function(a0, a1, a2, a3, a4, a5, a6, a7) {
				return fn.apply(this, arguments);
			};

		case 9:
			return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
				return fn.apply(this, arguments);
			};

		case 10:
			return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				return fn.apply(this, arguments);
			};

		default:
			throw new Error(
				'First argument to _arity must be a non-negative integer no greater than ten'
			);
	}
}

/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry2$1(fn) {
	return function f2(a, b) {
		switch (arguments.length) {
			case 0:
				return f2;

			case 1:
				return _isPlaceholder$1(a)
					? f2
					: _curry1$1(function(_b) {
							return fn(a, _b);
					  });

			default:
				return _isPlaceholder$1(a) && _isPlaceholder$1(b)
					? f2
					: _isPlaceholder$1(a)
						? _curry1$1(function(_a) {
								return fn(_a, b);
						  })
						: _isPlaceholder$1(b)
							? _curry1$1(function(_b) {
									return fn(a, _b);
							  })
							: fn(a, b);
		}
	};
}

/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curryN(length, received, fn) {
	return function() {
		var combined = [];
		var argsIdx = 0;
		var left = length;
		var combinedIdx = 0;

		while (combinedIdx < received.length || argsIdx < arguments.length) {
			var result;

			if (
				combinedIdx < received.length &&
				(!_isPlaceholder$1(received[combinedIdx]) || argsIdx >= arguments.length)
			) {
				result = received[combinedIdx];
			} else {
				result = arguments[argsIdx];
				argsIdx += 1;
			}

			combined[combinedIdx] = result;

			if (!_isPlaceholder$1(result)) {
				left -= 1;
			}

			combinedIdx += 1;
		}

		return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
	};
}

/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      const sumArgs = (...args) => R.sum(args);
 *
 *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */

var curryN =
	/*#__PURE__*/
	_curry2$1(function curryN(length, fn) {
		if (length === 1) {
			return _curry1$1(fn);
		}

		return _arity(length, _curryN(length, [], fn));
	});

/**
 * Returns the larger of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.maxBy, R.min
 * @example
 *
 *      R.max(789, 123); //=> 789
 *      R.max('a', 'b'); //=> 'b'
 */

var max =
	/*#__PURE__*/
	_curry2$1(function max(a, b) {
		return b > a ? b : a;
	});

/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
var _isArray =
	Array.isArray ||
	function _isArray(val) {
		return (
			val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]'
		);
	};

function _isTransformer(obj) {
	return obj != null && typeof obj['@@transducer/step'] === 'function';
}

/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */

function _dispatchable(methodNames, xf, fn) {
	return function() {
		if (arguments.length === 0) {
			return fn();
		}

		var args = Array.prototype.slice.call(arguments, 0);
		var obj = args.pop();

		if (!_isArray(obj)) {
			var idx = 0;

			while (idx < methodNames.length) {
				if (typeof obj[methodNames[idx]] === 'function') {
					return obj[methodNames[idx]].apply(obj, args);
				}

				idx += 1;
			}

			if (_isTransformer(obj)) {
				var transducer = xf.apply(null, args);
				return transducer(obj);
			}
		}

		return fn.apply(this, arguments);
	};
}

function _map(fn, functor) {
	var idx = 0;
	var len = functor.length;
	var result = Array(len);

	while (idx < len) {
		result[idx] = fn(functor[idx]);
		idx += 1;
	}

	return result;
}

function _isString(x) {
	return Object.prototype.toString.call(x) === '[object String]';
}

/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */

var _isArrayLike =
	/*#__PURE__*/
	_curry1$1(function isArrayLike(x) {
		if (_isArray(x)) {
			return true;
		}

		if (!x) {
			return false;
		}

		if (_typeof(x) !== 'object') {
			return false;
		}

		if (_isString(x)) {
			return false;
		}

		if (x.nodeType === 1) {
			return !!x.length;
		}

		if (x.length === 0) {
			return true;
		}

		if (x.length > 0) {
			return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
		}

		return false;
	});

var XWrap =
	/*#__PURE__*/
	(function() {
		function XWrap(fn) {
			this.f = fn;
		}

		XWrap.prototype['@@transducer/init'] = function() {
			throw new Error('init not implemented on XWrap');
		};

		XWrap.prototype['@@transducer/result'] = function(acc) {
			return acc;
		};

		XWrap.prototype['@@transducer/step'] = function(acc, x) {
			return this.f(acc, x);
		};

		return XWrap;
	})();

function _xwrap(fn) {
	return new XWrap(fn);
}

/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      const log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */

var bind =
	/*#__PURE__*/
	_curry2$1(function bind(fn, thisObj) {
		return _arity(fn.length, function() {
			return fn.apply(thisObj, arguments);
		});
	});

function _arrayReduce(xf, acc, list) {
	var idx = 0;
	var len = list.length;

	while (idx < len) {
		acc = xf['@@transducer/step'](acc, list[idx]);

		if (acc && acc['@@transducer/reduced']) {
			acc = acc['@@transducer/value'];
			break;
		}

		idx += 1;
	}

	return xf['@@transducer/result'](acc);
}

function _iterableReduce(xf, acc, iter) {
	var step = iter.next();

	while (!step.done) {
		acc = xf['@@transducer/step'](acc, step.value);

		if (acc && acc['@@transducer/reduced']) {
			acc = acc['@@transducer/value'];
			break;
		}

		step = iter.next();
	}

	return xf['@@transducer/result'](acc);
}

function _methodReduce(xf, acc, obj, methodName) {
	return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
}

var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
function _reduce(fn, acc, list) {
	if (typeof fn === 'function') {
		fn = _xwrap(fn);
	}

	if (_isArrayLike(list)) {
		return _arrayReduce(fn, acc, list);
	}

	if (typeof list['fantasy-land/reduce'] === 'function') {
		return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
	}

	if (list[symIterator] != null) {
		return _iterableReduce(fn, acc, list[symIterator]());
	}

	if (typeof list.next === 'function') {
		return _iterableReduce(fn, acc, list);
	}

	if (typeof list.reduce === 'function') {
		return _methodReduce(fn, acc, list, 'reduce');
	}

	throw new TypeError('reduce: list must be array or iterable');
}

var _xfBase = {
	init: function init() {
		return this.xf['@@transducer/init']();
	},
	result: function result(_result) {
		return this.xf['@@transducer/result'](_result);
	},
};

var XMap =
	/*#__PURE__*/
	(function() {
		function XMap(f, xf) {
			this.xf = xf;
			this.f = f;
		}

		XMap.prototype['@@transducer/init'] = _xfBase.init;
		XMap.prototype['@@transducer/result'] = _xfBase.result;

		XMap.prototype['@@transducer/step'] = function(result, input) {
			return this.xf['@@transducer/step'](result, this.f(input));
		};

		return XMap;
	})();

var _xmap =
	/*#__PURE__*/
	_curry2$1(function _xmap(f, xf) {
		return new XMap(f, xf);
	});

function _has(prop, obj) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
}

var toString = Object.prototype.toString;

var _isArguments =
	/*#__PURE__*/
	(function() {
		return toString.call(arguments) === '[object Arguments]'
			? function _isArguments(x) {
					return toString.call(x) === '[object Arguments]';
			  }
			: function _isArguments(x) {
					return _has('callee', x);
			  };
	})();

var hasEnumBug = !/*#__PURE__*/
{
	toString: null,
}.propertyIsEnumerable('toString');
var nonEnumerableProps = [
	'constructor',
	'valueOf',
	'isPrototypeOf',
	'toString',
	'propertyIsEnumerable',
	'hasOwnProperty',
	'toLocaleString',
]; // Safari bug

var hasArgsEnumBug =
	/*#__PURE__*/
	(function() {
		return arguments.propertyIsEnumerable('length');
	})();

var contains = function contains(list, item) {
	var idx = 0;

	while (idx < list.length) {
		if (list[idx] === item) {
			return true;
		}

		idx += 1;
	}

	return false;
};
/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */

var keys =
	typeof Object.keys === 'function' && !hasArgsEnumBug
		? /*#__PURE__*/
		  _curry1$1(function keys(obj) {
				return Object(obj) !== obj ? [] : Object.keys(obj);
		  })
		: /*#__PURE__*/
		  _curry1$1(function keys(obj) {
				if (Object(obj) !== obj) {
					return [];
				}

				var prop, nIdx;
				var ks = [];

				var checkArgsLength = hasArgsEnumBug && _isArguments(obj);

				for (prop in obj) {
					if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
						ks[ks.length] = prop;
					}
				}

				if (hasEnumBug) {
					nIdx = nonEnumerableProps.length - 1;

					while (nIdx >= 0) {
						prop = nonEnumerableProps[nIdx];

						if (_has(prop, obj) && !contains(ks, prop)) {
							ks[ks.length] = prop;
						}

						nIdx -= 1;
					}
				}

				return ks;
		  });

/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      const double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */

var map =
	/*#__PURE__*/
	_curry2$1(
		/*#__PURE__*/
		_dispatchable(['fantasy-land/map', 'map'], _xmap, function map(fn, functor) {
			switch (Object.prototype.toString.call(functor)) {
				case '[object Function]':
					return curryN(functor.length, function() {
						return fn.call(this, functor.apply(this, arguments));
					});

				case '[object Object]':
					return _reduce(
						function(acc, key) {
							acc[key] = fn(functor[key]);
							return acc;
						},
						{},
						keys(functor)
					);

				default:
					return _map(fn, functor);
			}
		})
	);

/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */

var path =
	/*#__PURE__*/
	_curry2$1(function path(paths, obj) {
		var val = obj;
		var idx = 0;

		while (idx < paths.length) {
			if (val == null) {
				return;
			}

			val = val[paths[idx]];
			idx += 1;
		}

		return val;
	});

/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 *      R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
 */

var prop =
	/*#__PURE__*/
	_curry2$1(function prop(p, obj) {
		return path([p], obj);
	});

/**
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 *
 * `pluck` will work on
 * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
 * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => k -> f {k: v} -> f v
 * @param {Number|String} key The key name to pluck off of each object.
 * @param {Array} f The array or functor to consider.
 * @return {Array} The list of values for the given key.
 * @see R.props
 * @example
 *
 *      var getAges = R.pluck('age');
 *      getAges([{name: 'fred', age: 29}, {name: 'wilma', age: 27}]); //=> [29, 27]
 *
 *      R.pluck(0, [[1, 2], [3, 4]]);               //=> [1, 3]
 *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
 * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
 * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
 */

var pluck =
	/*#__PURE__*/
	_curry2$1(function pluck(p, list) {
		return map(prop(p), list);
	});

/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry3$1(fn) {
	return function f3(a, b, c) {
		switch (arguments.length) {
			case 0:
				return f3;

			case 1:
				return _isPlaceholder$1(a)
					? f3
					: _curry2$1(function(_b, _c) {
							return fn(a, _b, _c);
					  });

			case 2:
				return _isPlaceholder$1(a) && _isPlaceholder$1(b)
					? f3
					: _isPlaceholder$1(a)
						? _curry2$1(function(_a, _c) {
								return fn(_a, b, _c);
						  })
						: _isPlaceholder$1(b)
							? _curry2$1(function(_b, _c) {
									return fn(a, _b, _c);
							  })
							: _curry1$1(function(_c) {
									return fn(a, b, _c);
							  });

			default:
				return _isPlaceholder$1(a) && _isPlaceholder$1(b) && _isPlaceholder$1(c)
					? f3
					: _isPlaceholder$1(a) && _isPlaceholder$1(b)
						? _curry2$1(function(_a, _b) {
								return fn(_a, _b, c);
						  })
						: _isPlaceholder$1(a) && _isPlaceholder$1(c)
							? _curry2$1(function(_a, _c) {
									return fn(_a, b, _c);
							  })
							: _isPlaceholder$1(b) && _isPlaceholder$1(c)
								? _curry2$1(function(_b, _c) {
										return fn(a, _b, _c);
								  })
								: _isPlaceholder$1(a)
									? _curry1$1(function(_a) {
											return fn(_a, b, c);
									  })
									: _isPlaceholder$1(b)
										? _curry1$1(function(_b) {
												return fn(a, _b, c);
										  })
										: _isPlaceholder$1(c)
											? _curry1$1(function(_c) {
													return fn(a, b, _c);
											  })
											: fn(a, b, c);
		}
	};
}

/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *      //          -               -10
 *      //         / \              / \
 *      //        -   4           -6   4
 *      //       / \              / \
 *      //      -   3   ==>     -3   3
 *      //     / \              / \
 *      //    -   2           -1   2
 *      //   / \              / \
 *      //  0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */

var reduce =
	/*#__PURE__*/
	_curry3$1(_reduce);

/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if every one of the provided predicates is satisfied
 * by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.anyPass
 * @example
 *
 *      const isQueen = R.propEq('rank', 'Q');
 *      const isSpade = R.propEq('suit', '♠︎');
 *      const isQueenOfSpades = R.allPass([isQueen, isSpade]);
 *
 *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
 *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
 */

var allPass =
	/*#__PURE__*/
	_curry1$1(function allPass(preds) {
		return curryN(reduce(max, 0, pluck('length', preds)), function() {
			var idx = 0;
			var len = preds.length;

			while (idx < len) {
				if (!preds[idx].apply(this, arguments)) {
					return false;
				}

				idx += 1;
			}

			return true;
		});
	});

/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @see R.unless, R.when, R.cond
 * @example
 *
 *      const incCount = R.ifElse(
 *        R.has('count'),
 *        R.over(R.lensProp('count'), R.inc),
 *        R.assoc('count', 1)
 *      );
 *      incCount({});           //=> { count: 1 }
 *      incCount({ count: 1 }); //=> { count: 2 }
 */

var ifElse =
	/*#__PURE__*/
	_curry3$1(function ifElse(condition, onTrue, onFalse) {
		return curryN(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
			return condition.apply(this, arguments)
				? onTrue.apply(this, arguments)
				: onFalse.apply(this, arguments);
		});
	});

var createValidation = function(predicate, message, messageValues) {
	return ifElse(
		allPass([isNotNil, isNotEmpty, predicate]),
		alwaysNull,
		always({
			message: message,
			messageValues: messageValues,
		})
	);
};

var hasLengthInInterval = function(min, max) {
	return createValidation(o(between(min, max), length), m.hasLengthInInterval, {
		max: max,
		min: min,
	});
};

var hasOnlyDigits = createValidation(function(value) {
	return /^\d*$/.test(value);
}, m.hasOnlyDigits);

/**
 * Returns `true` if the first argument is less than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.gte
 * @example
 *
 *      R.lte(2, 1); //=> false
 *      R.lte(2, 2); //=> true
 *      R.lte(2, 3); //=> true
 *      R.lte('a', 'z'); //=> true
 *      R.lte('z', 'a'); //=> false
 */

var lte =
	/*#__PURE__*/
	_curry2(function lte(a, b) {
		return a <= b;
	});

var hasValueMin = function(min) {
	return createValidation(lte(min), m.hasValueMin, {
		min: min,
	});
};

function _cloneRegExp(pattern) {
	return new RegExp(
		pattern.source,
		(pattern.global ? 'g' : '') +
			(pattern.ignoreCase ? 'i' : '') +
			(pattern.multiline ? 'm' : '') +
			(pattern.sticky ? 'y' : '') +
			(pattern.unicode ? 'u' : '')
	);
}

function _isRegExp(x) {
	return Object.prototype.toString.call(x) === '[object RegExp]';
}

function _arrayFromIterator(iter) {
	var list = [];
	var next;

	while (!(next = iter.next()).done) {
		list.push(next.value);
	}

	return list;
}

function _includesWith(pred, x, list) {
	var idx = 0;
	var len = list.length;

	while (idx < len) {
		if (pred(x, list[idx])) {
			return true;
		}

		idx += 1;
	}

	return false;
}

function _functionName(f) {
	// String(x => x) evaluates to "x => x", so the pattern may not match.
	var match = String(f).match(/^function (\w*)/);
	return match == null ? '' : match[1];
}

function _has$1(prop, obj) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
}

// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function _objectIs(a, b) {
	// SameValue algorithm
	if (a === b) {
		// Steps 1-5, 7-10
		// Steps 6.b-6.e: +0 != -0
		return a !== 0 || 1 / a === 1 / b;
	} else {
		// Step 6.a: NaN == NaN
		return a !== a && b !== b;
	}
}

var _objectIs$1 = typeof Object.is === 'function' ? Object.is : _objectIs;

var toString$1 = Object.prototype.toString;

var _isArguments$1 =
	/*#__PURE__*/
	(function() {
		return toString$1.call(arguments) === '[object Arguments]'
			? function _isArguments(x) {
					return toString$1.call(x) === '[object Arguments]';
			  }
			: function _isArguments(x) {
					return _has$1('callee', x);
			  };
	})();

var hasEnumBug$1 = !/*#__PURE__*/
{
	toString: null,
}.propertyIsEnumerable('toString');
var nonEnumerableProps$1 = [
	'constructor',
	'valueOf',
	'isPrototypeOf',
	'toString',
	'propertyIsEnumerable',
	'hasOwnProperty',
	'toLocaleString',
]; // Safari bug

var hasArgsEnumBug$1 =
	/*#__PURE__*/
	(function() {
		return arguments.propertyIsEnumerable('length');
	})();

var contains$1 = function contains(list, item) {
	var idx = 0;

	while (idx < list.length) {
		if (list[idx] === item) {
			return true;
		}

		idx += 1;
	}

	return false;
};
/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */

var keys$1 =
	typeof Object.keys === 'function' && !hasArgsEnumBug$1
		? /*#__PURE__*/
		  _curry1(function keys(obj) {
				return Object(obj) !== obj ? [] : Object.keys(obj);
		  })
		: /*#__PURE__*/
		  _curry1(function keys(obj) {
				if (Object(obj) !== obj) {
					return [];
				}

				var prop, nIdx;
				var ks = [];

				var checkArgsLength = hasArgsEnumBug$1 && _isArguments$1(obj);

				for (prop in obj) {
					if (_has$1(prop, obj) && (!checkArgsLength || prop !== 'length')) {
						ks[ks.length] = prop;
					}
				}

				if (hasEnumBug$1) {
					nIdx = nonEnumerableProps$1.length - 1;

					while (nIdx >= 0) {
						prop = nonEnumerableProps$1[nIdx];

						if (_has$1(prop, obj) && !contains$1(ks, prop)) {
							ks[ks.length] = prop;
						}

						nIdx -= 1;
					}
				}

				return ks;
		  });

/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */

var type =
	/*#__PURE__*/
	_curry1(function type(val) {
		return val === null
			? 'Null'
			: val === undefined
				? 'Undefined'
				: Object.prototype.toString.call(val).slice(8, -1);
	});

/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparision of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */

function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
	var a = _arrayFromIterator(aIterator);

	var b = _arrayFromIterator(bIterator);

	function eq(_a, _b) {
		return _equals(_a, _b, stackA.slice(), stackB.slice());
	} // if *a* array contains any element that is not included in *b*

	return !_includesWith(
		function(b, aItem) {
			return !_includesWith(eq, aItem, b);
		},
		b,
		a
	);
}

function _equals(a, b, stackA, stackB) {
	if (_objectIs$1(a, b)) {
		return true;
	}

	var typeA = type(a);

	if (typeA !== type(b)) {
		return false;
	}

	if (a == null || b == null) {
		return false;
	}

	if (
		typeof a['fantasy-land/equals'] === 'function' ||
		typeof b['fantasy-land/equals'] === 'function'
	) {
		return (
			typeof a['fantasy-land/equals'] === 'function' &&
			a['fantasy-land/equals'](b) &&
			typeof b['fantasy-land/equals'] === 'function' &&
			b['fantasy-land/equals'](a)
		);
	}

	if (typeof a.equals === 'function' || typeof b.equals === 'function') {
		return (
			typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a)
		);
	}

	switch (typeA) {
		case 'Arguments':
		case 'Array':
		case 'Object':
			if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
				return a === b;
			}

			break;

		case 'Boolean':
		case 'Number':
		case 'String':
			if (!(_typeof(a) === _typeof(b) && _objectIs$1(a.valueOf(), b.valueOf()))) {
				return false;
			}

			break;

		case 'Date':
			if (!_objectIs$1(a.valueOf(), b.valueOf())) {
				return false;
			}

			break;

		case 'Error':
			return a.name === b.name && a.message === b.message;

		case 'RegExp':
			if (
				!(
					a.source === b.source &&
					a.global === b.global &&
					a.ignoreCase === b.ignoreCase &&
					a.multiline === b.multiline &&
					a.sticky === b.sticky &&
					a.unicode === b.unicode
				)
			) {
				return false;
			}

			break;
	}

	var idx = stackA.length - 1;

	while (idx >= 0) {
		if (stackA[idx] === a) {
			return stackB[idx] === b;
		}

		idx -= 1;
	}

	switch (typeA) {
		case 'Map':
			if (a.size !== b.size) {
				return false;
			}

			return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));

		case 'Set':
			if (a.size !== b.size) {
				return false;
			}

			return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));

		case 'Arguments':
		case 'Array':
		case 'Object':
		case 'Boolean':
		case 'Number':
		case 'String':
		case 'Date':
		case 'Error':
		case 'RegExp':
		case 'Int8Array':
		case 'Uint8Array':
		case 'Uint8ClampedArray':
		case 'Int16Array':
		case 'Uint16Array':
		case 'Int32Array':
		case 'Uint32Array':
		case 'Float32Array':
		case 'Float64Array':
		case 'ArrayBuffer':
			break;

		default:
			// Values of other types are only equal if identical.
			return false;
	}

	var keysA = keys$1(a);

	if (keysA.length !== keys$1(b).length) {
		return false;
	}

	var extendedStackA = stackA.concat([a]);
	var extendedStackB = stackB.concat([b]);
	idx = keysA.length - 1;

	while (idx >= 0) {
		var key = keysA[idx];

		if (!(_has$1(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
			return false;
		}

		idx -= 1;
	}

	return true;
}

/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      const a = {}; a.v = a;
 *      const b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */

var equals =
	/*#__PURE__*/
	_curry2(function equals(a, b) {
		return _equals(a, b, [], []);
	});

function _indexOf(list, a, idx) {
	var inf, item; // Array.prototype.indexOf doesn't exist below IE9

	if (typeof list.indexOf === 'function') {
		switch (_typeof(a)) {
			case 'number':
				if (a === 0) {
					// manually crawl the list to distinguish between +0 and -0
					inf = 1 / a;

					while (idx < list.length) {
						item = list[idx];

						if (item === 0 && 1 / item === inf) {
							return idx;
						}

						idx += 1;
					}

					return -1;
				} else if (a !== a) {
					// NaN
					while (idx < list.length) {
						item = list[idx];

						if (typeof item === 'number' && item !== item) {
							return idx;
						}

						idx += 1;
					}

					return -1;
				} // non-zero numbers can utilise Set

				return list.indexOf(a, idx);
			// all these types can utilise Set

			case 'string':
			case 'boolean':
			case 'function':
			case 'undefined':
				return list.indexOf(a, idx);

			case 'object':
				if (a === null) {
					// null can utilise Set
					return list.indexOf(a, idx);
				}
		}
	} // anything else not covered above, defer to R.equals

	while (idx < list.length) {
		if (equals(list[idx], a)) {
			return idx;
		}

		idx += 1;
	}

	return -1;
}

function _includes(a, list) {
	return _indexOf(list, a, 0) >= 0;
}

function _map$1(fn, functor) {
	var idx = 0;
	var len = functor.length;
	var result = Array(len);

	while (idx < len) {
		result[idx] = fn(functor[idx]);
		idx += 1;
	}

	return result;
}

function _quote(s) {
	var escaped = s
		.replace(/\\/g, '\\\\')
		.replace(/[\b]/g, '\\b') // \b matches word boundary; [\b] matches backspace
		.replace(/\f/g, '\\f')
		.replace(/\n/g, '\\n')
		.replace(/\r/g, '\\r')
		.replace(/\t/g, '\\t')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');
	return '"' + escaped.replace(/"/g, '\\"') + '"';
}

/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */
var pad = function pad(n) {
	return (n < 10 ? '0' : '') + n;
};

var _toISOString =
	typeof Date.prototype.toISOString === 'function'
		? function _toISOString(d) {
				return d.toISOString();
		  }
		: function _toISOString(d) {
				return (
					d.getUTCFullYear() +
					'-' +
					pad(d.getUTCMonth() + 1) +
					'-' +
					pad(d.getUTCDate()) +
					'T' +
					pad(d.getUTCHours()) +
					':' +
					pad(d.getUTCMinutes()) +
					':' +
					pad(d.getUTCSeconds()) +
					'.' +
					(d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
					'Z'
				);
		  };

function _complement(f) {
	return function() {
		return !f.apply(this, arguments);
	};
}

/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
var _isArray$1 =
	Array.isArray ||
	function _isArray(val) {
		return (
			val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]'
		);
	};

function _isTransformer$1(obj) {
	return obj != null && typeof obj['@@transducer/step'] === 'function';
}

/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */

function _dispatchable$1(methodNames, xf, fn) {
	return function() {
		if (arguments.length === 0) {
			return fn();
		}

		var args = Array.prototype.slice.call(arguments, 0);
		var obj = args.pop();

		if (!_isArray$1(obj)) {
			var idx = 0;

			while (idx < methodNames.length) {
				if (typeof obj[methodNames[idx]] === 'function') {
					return obj[methodNames[idx]].apply(obj, args);
				}

				idx += 1;
			}

			if (_isTransformer$1(obj)) {
				var transducer = xf.apply(null, args);
				return transducer(obj);
			}
		}

		return fn.apply(this, arguments);
	};
}

function _filter(fn, list) {
	var idx = 0;
	var len = list.length;
	var result = [];

	while (idx < len) {
		if (fn(list[idx])) {
			result[result.length] = list[idx];
		}

		idx += 1;
	}

	return result;
}

function _isObject(x) {
	return Object.prototype.toString.call(x) === '[object Object]';
}

function _isString$1(x) {
	return Object.prototype.toString.call(x) === '[object String]';
}

/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */

var _isArrayLike$1 =
	/*#__PURE__*/
	_curry1(function isArrayLike(x) {
		if (_isArray$1(x)) {
			return true;
		}

		if (!x) {
			return false;
		}

		if (_typeof(x) !== 'object') {
			return false;
		}

		if (_isString$1(x)) {
			return false;
		}

		if (x.nodeType === 1) {
			return !!x.length;
		}

		if (x.length === 0) {
			return true;
		}

		if (x.length > 0) {
			return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
		}

		return false;
	});

var XWrap$1 =
	/*#__PURE__*/
	(function() {
		function XWrap(fn) {
			this.f = fn;
		}

		XWrap.prototype['@@transducer/init'] = function() {
			throw new Error('init not implemented on XWrap');
		};

		XWrap.prototype['@@transducer/result'] = function(acc) {
			return acc;
		};

		XWrap.prototype['@@transducer/step'] = function(acc, x) {
			return this.f(acc, x);
		};

		return XWrap;
	})();

function _xwrap$1(fn) {
	return new XWrap$1(fn);
}

function _arity$1(n, fn) {
	/* eslint-disable no-unused-vars */
	switch (n) {
		case 0:
			return function() {
				return fn.apply(this, arguments);
			};

		case 1:
			return function(a0) {
				return fn.apply(this, arguments);
			};

		case 2:
			return function(a0, a1) {
				return fn.apply(this, arguments);
			};

		case 3:
			return function(a0, a1, a2) {
				return fn.apply(this, arguments);
			};

		case 4:
			return function(a0, a1, a2, a3) {
				return fn.apply(this, arguments);
			};

		case 5:
			return function(a0, a1, a2, a3, a4) {
				return fn.apply(this, arguments);
			};

		case 6:
			return function(a0, a1, a2, a3, a4, a5) {
				return fn.apply(this, arguments);
			};

		case 7:
			return function(a0, a1, a2, a3, a4, a5, a6) {
				return fn.apply(this, arguments);
			};

		case 8:
			return function(a0, a1, a2, a3, a4, a5, a6, a7) {
				return fn.apply(this, arguments);
			};

		case 9:
			return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
				return fn.apply(this, arguments);
			};

		case 10:
			return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				return fn.apply(this, arguments);
			};

		default:
			throw new Error(
				'First argument to _arity must be a non-negative integer no greater than ten'
			);
	}
}

/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      const log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */

var bind$1 =
	/*#__PURE__*/
	_curry2(function bind(fn, thisObj) {
		return _arity$1(fn.length, function() {
			return fn.apply(thisObj, arguments);
		});
	});

function _arrayReduce$1(xf, acc, list) {
	var idx = 0;
	var len = list.length;

	while (idx < len) {
		acc = xf['@@transducer/step'](acc, list[idx]);

		if (acc && acc['@@transducer/reduced']) {
			acc = acc['@@transducer/value'];
			break;
		}

		idx += 1;
	}

	return xf['@@transducer/result'](acc);
}

function _iterableReduce$1(xf, acc, iter) {
	var step = iter.next();

	while (!step.done) {
		acc = xf['@@transducer/step'](acc, step.value);

		if (acc && acc['@@transducer/reduced']) {
			acc = acc['@@transducer/value'];
			break;
		}

		step = iter.next();
	}

	return xf['@@transducer/result'](acc);
}

function _methodReduce$1(xf, acc, obj, methodName) {
	return xf['@@transducer/result'](obj[methodName](bind$1(xf['@@transducer/step'], xf), acc));
}

var symIterator$1 = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
function _reduce$1(fn, acc, list) {
	if (typeof fn === 'function') {
		fn = _xwrap$1(fn);
	}

	if (_isArrayLike$1(list)) {
		return _arrayReduce$1(fn, acc, list);
	}

	if (typeof list['fantasy-land/reduce'] === 'function') {
		return _methodReduce$1(fn, acc, list, 'fantasy-land/reduce');
	}

	if (list[symIterator$1] != null) {
		return _iterableReduce$1(fn, acc, list[symIterator$1]());
	}

	if (typeof list.next === 'function') {
		return _iterableReduce$1(fn, acc, list);
	}

	if (typeof list.reduce === 'function') {
		return _methodReduce$1(fn, acc, list, 'reduce');
	}

	throw new TypeError('reduce: list must be array or iterable');
}

var _xfBase$1 = {
	init: function init() {
		return this.xf['@@transducer/init']();
	},
	result: function result(_result) {
		return this.xf['@@transducer/result'](_result);
	},
};

var XFilter =
	/*#__PURE__*/
	(function() {
		function XFilter(f, xf) {
			this.xf = xf;
			this.f = f;
		}

		XFilter.prototype['@@transducer/init'] = _xfBase$1.init;
		XFilter.prototype['@@transducer/result'] = _xfBase$1.result;

		XFilter.prototype['@@transducer/step'] = function(result, input) {
			return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
		};

		return XFilter;
	})();

var _xfilter =
	/*#__PURE__*/
	_curry2(function _xfilter(f, xf) {
		return new XFilter(f, xf);
	});

/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      const isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */

var filter =
	/*#__PURE__*/
	_curry2(
		/*#__PURE__*/
		_dispatchable$1(['filter'], _xfilter, function(pred, filterable) {
			return _isObject(filterable)
				? _reduce$1(
						function(acc, key) {
							if (pred(filterable[key])) {
								acc[key] = filterable[key];
							}

							return acc;
						},
						{},
						keys$1(filterable)
				  ) // else
				: _filter(pred, filterable);
		})
	);

/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      const isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */

var reject =
	/*#__PURE__*/
	_curry2(function reject(pred, filterable) {
		return filter(_complement(pred), filterable);
	});

function _toString(x, seen) {
	var recur = function recur(y) {
		var xs = seen.concat([x]);
		return _includes(y, xs) ? '<Circular>' : _toString(y, xs);
	}; //  mapPairs :: (Object, [String]) -> [String]

	var mapPairs = function mapPairs(obj, keys) {
		return _map$1(function(k) {
			return _quote(k) + ': ' + recur(obj[k]);
		}, keys.slice().sort());
	};

	switch (Object.prototype.toString.call(x)) {
		case '[object Arguments]':
			return '(function() { return arguments; }(' + _map$1(recur, x).join(', ') + '))';

		case '[object Array]':
			return (
				'[' +
				_map$1(recur, x)
					.concat(
						mapPairs(
							x,
							reject(function(k) {
								return /^\d+$/.test(k);
							}, keys$1(x))
						)
					)
					.join(', ') +
				']'
			);

		case '[object Boolean]':
			return _typeof(x) === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();

		case '[object Date]':
			return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';

		case '[object Null]':
			return 'null';

		case '[object Number]':
			return _typeof(x) === 'object'
				? 'new Number(' + recur(x.valueOf()) + ')'
				: 1 / x === -Infinity
					? '-0'
					: x.toString(10);

		case '[object String]':
			return _typeof(x) === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);

		case '[object Undefined]':
			return 'undefined';

		default:
			if (typeof x.toString === 'function') {
				var repr = x.toString();

				if (repr !== '[object Object]') {
					return repr;
				}
			}

			return '{' + mapPairs(x, keys$1(x)).join(', ') + '}';
	}
}

/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */

var toString$2 =
	/*#__PURE__*/
	_curry1(function toString(val) {
		return _toString(val, []);
	});

/**
 * Determines whether a given string matches a given regular expression.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category String
 * @sig RegExp -> String -> Boolean
 * @param {RegExp} pattern
 * @param {String} str
 * @return {Boolean}
 * @see R.match
 * @example
 *
 *      R.test(/^x/, 'xyz'); //=> true
 *      R.test(/^y/, 'xyz'); //=> false
 */

var test =
	/*#__PURE__*/
	_curry2(function test(pattern, str) {
		if (!_isRegExp(pattern)) {
			throw new TypeError(
				'‘test’ requires a value of type RegExp as its first argument; received ' +
					toString$2(pattern)
			);
		}

		return _cloneRegExp(pattern).test(str);
	});

var testIsInteger = test(/^-?[0-9]+$/);

var isInteger = createValidation(testIsInteger, m.isInteger);

var isPositiveNumber = createValidation(function(x) {
	return parseInt(x, 10) > 0;
}, m.isPositiveNumber);

var hasLengthMax = function(max) {
	return createValidation(
		function(value) {
			return value.length <= max;
		},
		m.hasLengthMax,
		{
			max: max,
		}
	);
};

var hasValueInInterval = function(min, max) {
	return createValidation(between(min, max), m.hasValueInInterval, {
		max: max,
	});
};

var isDivisibleBy = function(divisor) {
	return createValidation(
		function(x) {
			return x % divisor === 0;
		},
		m.isDivisibleBy,
		{
			divisor: divisor,
		}
	);
};

var isNumber = createValidation(isNumeric, m.isNumber);

/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.F
 * @example
 *
 *      R.T(); //=> true
 */
var T = function T() {
	return true;
};

var isRequired = createValidation(T, m.isRequired);

var hasLengthMin = function(min) {
	return createValidation(
		function(value) {
			return value.length >= min;
		},
		m.minLength,
		{
			min: min,
		}
	);
};

/**
 * Returns `true` if the first argument is greater than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.lte
 * @example
 *
 *      R.gte(2, 1); //=> true
 *      R.gte(2, 2); //=> true
 *      R.gte(2, 3); //=> false
 *      R.gte('a', 'z'); //=> false
 *      R.gte('z', 'a'); //=> true
 */

var gte =
	/*#__PURE__*/
	_curry2(function gte(a, b) {
		return a >= b;
	});

var hasValueMax = function(max) {
	return createValidation(gte(max), m.hasValueMax, {
		max: max,
	});
};

/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */

var isNil =
	/*#__PURE__*/
	_curry1$1(function isNil(x) {
		return x == null;
	});

/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if at least one of the provided predicates is
 * satisfied by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.allPass
 * @example
 *
 *      const isClub = R.propEq('suit', '♣');
 *      const isSpade = R.propEq('suit', '♠');
 *      const isBlackCard = R.anyPass([isClub, isSpade]);
 *
 *      isBlackCard({rank: '10', suit: '♣'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false
 */

var anyPass =
	/*#__PURE__*/
	_curry1$1(function anyPass(preds) {
		return curryN(reduce(max, 0, pluck('length', preds)), function() {
			var idx = 0;
			var len = preds.length;

			while (idx < len) {
				if (preds[idx].apply(this, arguments)) {
					return true;
				}

				idx += 1;
			}

			return false;
		});
	});

function _reduced(x) {
	return x && x['@@transducer/reduced']
		? x
		: {
				'@@transducer/value': x,
				'@@transducer/reduced': true,
		  };
}

var XAll =
	/*#__PURE__*/
	(function() {
		function XAll(f, xf) {
			this.xf = xf;
			this.f = f;
			this.all = true;
		}

		XAll.prototype['@@transducer/init'] = _xfBase.init;

		XAll.prototype['@@transducer/result'] = function(result) {
			if (this.all) {
				result = this.xf['@@transducer/step'](result, true);
			}

			return this.xf['@@transducer/result'](result);
		};

		XAll.prototype['@@transducer/step'] = function(result, input) {
			if (!this.f(input)) {
				this.all = false;
				result = _reduced(this.xf['@@transducer/step'](result, false));
			}

			return result;
		};

		return XAll;
	})();

var _xall =
	/*#__PURE__*/
	_curry2$1(function _xall(f, xf) {
		return new XAll(f, xf);
	});

/**
 * Returns `true` if all elements of the list match the predicate, `false` if
 * there are any that don't.
 *
 * Dispatches to the `all` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
 *         otherwise.
 * @see R.any, R.none, R.transduce
 * @example
 *
 *      const equals3 = R.equals(3);
 *      R.all(equals3)([3, 3, 3, 3]); //=> true
 *      R.all(equals3)([3, 3, 1, 3]); //=> false
 */

var all =
	/*#__PURE__*/
	_curry2$1(
		/*#__PURE__*/
		_dispatchable(['all'], _xall, function all(fn, list) {
			var idx = 0;

			while (idx < list.length) {
				if (!fn(list[idx])) {
					return false;
				}

				idx += 1;
			}

			return true;
		})
	);

var allIsNil = all(isNil);

anyPass([isNil, allPass([isArray, allIsNil])]);

/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is not satisfied, the function will return the result of
 * calling the `whenFalseFn` function with the same argument. If the predicate
 * is satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred        A predicate function
 * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
 *                               to a falsy value.
 * @param {*}        x           An object to test with the `pred` function and
 *                               pass to `whenFalseFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
 * @see R.ifElse, R.when, R.cond
 * @example
 *
 *      let safeInc = R.unless(R.isNil, R.inc);
 *      safeInc(null); //=> null
 *      safeInc(1); //=> 2
 */

var unless =
	/*#__PURE__*/
	_curry3$1(function unless(pred, whenFalseFn, x) {
		return pred(x) ? x : whenFalseFn(x);
	});

unless(isNil);

var isEmail = function(email) {
	// eslint-disable-next-line max-len
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return isNilOrEmptyString(email) || (re.test(email) && email.length <= 200);
};

function _cloneRegExp$1(pattern) {
	return new RegExp(
		pattern.source,
		(pattern.global ? 'g' : '') +
			(pattern.ignoreCase ? 'i' : '') +
			(pattern.multiline ? 'm' : '') +
			(pattern.sticky ? 'y' : '') +
			(pattern.unicode ? 'u' : '')
	);
}

function _isRegExp$1(x) {
	return Object.prototype.toString.call(x) === '[object RegExp]';
}

function _arrayFromIterator$1(iter) {
	var list = [];
	var next;

	while (!(next = iter.next()).done) {
		list.push(next.value);
	}

	return list;
}

function _includesWith$1(pred, x, list) {
	var idx = 0;
	var len = list.length;

	while (idx < len) {
		if (pred(x, list[idx])) {
			return true;
		}

		idx += 1;
	}

	return false;
}

function _functionName$1(f) {
	// String(x => x) evaluates to "x => x", so the pattern may not match.
	var match = String(f).match(/^function (\w*)/);
	return match == null ? '' : match[1];
}

// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function _objectIs$2(a, b) {
	// SameValue algorithm
	if (a === b) {
		// Steps 1-5, 7-10
		// Steps 6.b-6.e: +0 != -0
		return a !== 0 || 1 / a === 1 / b;
	} else {
		// Step 6.a: NaN == NaN
		return a !== a && b !== b;
	}
}

var _objectIs$3 = typeof Object.is === 'function' ? Object.is : _objectIs$2;

/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */

var type$1 =
	/*#__PURE__*/
	_curry1$1(function type(val) {
		return val === null
			? 'Null'
			: val === undefined
				? 'Undefined'
				: Object.prototype.toString.call(val).slice(8, -1);
	});

/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparision of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */

function _uniqContentEquals$1(aIterator, bIterator, stackA, stackB) {
	var a = _arrayFromIterator$1(aIterator);

	var b = _arrayFromIterator$1(bIterator);

	function eq(_a, _b) {
		return _equals$1(_a, _b, stackA.slice(), stackB.slice());
	} // if *a* array contains any element that is not included in *b*

	return !_includesWith$1(
		function(b, aItem) {
			return !_includesWith$1(eq, aItem, b);
		},
		b,
		a
	);
}

function _equals$1(a, b, stackA, stackB) {
	if (_objectIs$3(a, b)) {
		return true;
	}

	var typeA = type$1(a);

	if (typeA !== type$1(b)) {
		return false;
	}

	if (a == null || b == null) {
		return false;
	}

	if (
		typeof a['fantasy-land/equals'] === 'function' ||
		typeof b['fantasy-land/equals'] === 'function'
	) {
		return (
			typeof a['fantasy-land/equals'] === 'function' &&
			a['fantasy-land/equals'](b) &&
			typeof b['fantasy-land/equals'] === 'function' &&
			b['fantasy-land/equals'](a)
		);
	}

	if (typeof a.equals === 'function' || typeof b.equals === 'function') {
		return (
			typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a)
		);
	}

	switch (typeA) {
		case 'Arguments':
		case 'Array':
		case 'Object':
			if (typeof a.constructor === 'function' && _functionName$1(a.constructor) === 'Promise') {
				return a === b;
			}

			break;

		case 'Boolean':
		case 'Number':
		case 'String':
			if (!(_typeof(a) === _typeof(b) && _objectIs$3(a.valueOf(), b.valueOf()))) {
				return false;
			}

			break;

		case 'Date':
			if (!_objectIs$3(a.valueOf(), b.valueOf())) {
				return false;
			}

			break;

		case 'Error':
			return a.name === b.name && a.message === b.message;

		case 'RegExp':
			if (
				!(
					a.source === b.source &&
					a.global === b.global &&
					a.ignoreCase === b.ignoreCase &&
					a.multiline === b.multiline &&
					a.sticky === b.sticky &&
					a.unicode === b.unicode
				)
			) {
				return false;
			}

			break;
	}

	var idx = stackA.length - 1;

	while (idx >= 0) {
		if (stackA[idx] === a) {
			return stackB[idx] === b;
		}

		idx -= 1;
	}

	switch (typeA) {
		case 'Map':
			if (a.size !== b.size) {
				return false;
			}

			return _uniqContentEquals$1(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));

		case 'Set':
			if (a.size !== b.size) {
				return false;
			}

			return _uniqContentEquals$1(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));

		case 'Arguments':
		case 'Array':
		case 'Object':
		case 'Boolean':
		case 'Number':
		case 'String':
		case 'Date':
		case 'Error':
		case 'RegExp':
		case 'Int8Array':
		case 'Uint8Array':
		case 'Uint8ClampedArray':
		case 'Int16Array':
		case 'Uint16Array':
		case 'Int32Array':
		case 'Uint32Array':
		case 'Float32Array':
		case 'Float64Array':
		case 'ArrayBuffer':
			break;

		default:
			// Values of other types are only equal if identical.
			return false;
	}

	var keysA = keys(a);

	if (keysA.length !== keys(b).length) {
		return false;
	}

	var extendedStackA = stackA.concat([a]);
	var extendedStackB = stackB.concat([b]);
	idx = keysA.length - 1;

	while (idx >= 0) {
		var key = keysA[idx];

		if (!(_has(key, b) && _equals$1(b[key], a[key], extendedStackA, extendedStackB))) {
			return false;
		}

		idx -= 1;
	}

	return true;
}

/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      const a = {}; a.v = a;
 *      const b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */

var equals$1 =
	/*#__PURE__*/
	_curry2$1(function equals(a, b) {
		return _equals$1(a, b, [], []);
	});

function _indexOf$1(list, a, idx) {
	var inf, item; // Array.prototype.indexOf doesn't exist below IE9

	if (typeof list.indexOf === 'function') {
		switch (_typeof(a)) {
			case 'number':
				if (a === 0) {
					// manually crawl the list to distinguish between +0 and -0
					inf = 1 / a;

					while (idx < list.length) {
						item = list[idx];

						if (item === 0 && 1 / item === inf) {
							return idx;
						}

						idx += 1;
					}

					return -1;
				} else if (a !== a) {
					// NaN
					while (idx < list.length) {
						item = list[idx];

						if (typeof item === 'number' && item !== item) {
							return idx;
						}

						idx += 1;
					}

					return -1;
				} // non-zero numbers can utilise Set

				return list.indexOf(a, idx);
			// all these types can utilise Set

			case 'string':
			case 'boolean':
			case 'function':
			case 'undefined':
				return list.indexOf(a, idx);

			case 'object':
				if (a === null) {
					// null can utilise Set
					return list.indexOf(a, idx);
				}
		}
	} // anything else not covered above, defer to R.equals

	while (idx < list.length) {
		if (equals$1(list[idx], a)) {
			return idx;
		}

		idx += 1;
	}

	return -1;
}

function _includes$1(a, list) {
	return _indexOf$1(list, a, 0) >= 0;
}

function _quote$1(s) {
	var escaped = s
		.replace(/\\/g, '\\\\')
		.replace(/[\b]/g, '\\b') // \b matches word boundary; [\b] matches backspace
		.replace(/\f/g, '\\f')
		.replace(/\n/g, '\\n')
		.replace(/\r/g, '\\r')
		.replace(/\t/g, '\\t')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');
	return '"' + escaped.replace(/"/g, '\\"') + '"';
}

/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */
var pad$1 = function pad(n) {
	return (n < 10 ? '0' : '') + n;
};

var _toISOString$1 =
	typeof Date.prototype.toISOString === 'function'
		? function _toISOString(d) {
				return d.toISOString();
		  }
		: function _toISOString(d) {
				return (
					d.getUTCFullYear() +
					'-' +
					pad$1(d.getUTCMonth() + 1) +
					'-' +
					pad$1(d.getUTCDate()) +
					'T' +
					pad$1(d.getUTCHours()) +
					':' +
					pad$1(d.getUTCMinutes()) +
					':' +
					pad$1(d.getUTCSeconds()) +
					'.' +
					(d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
					'Z'
				);
		  };

function _complement$1(f) {
	return function() {
		return !f.apply(this, arguments);
	};
}

function _filter$1(fn, list) {
	var idx = 0;
	var len = list.length;
	var result = [];

	while (idx < len) {
		if (fn(list[idx])) {
			result[result.length] = list[idx];
		}

		idx += 1;
	}

	return result;
}

function _isObject$1(x) {
	return Object.prototype.toString.call(x) === '[object Object]';
}

var XFilter$1 =
	/*#__PURE__*/
	(function() {
		function XFilter(f, xf) {
			this.xf = xf;
			this.f = f;
		}

		XFilter.prototype['@@transducer/init'] = _xfBase.init;
		XFilter.prototype['@@transducer/result'] = _xfBase.result;

		XFilter.prototype['@@transducer/step'] = function(result, input) {
			return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
		};

		return XFilter;
	})();

var _xfilter$1 =
	/*#__PURE__*/
	_curry2$1(function _xfilter(f, xf) {
		return new XFilter$1(f, xf);
	});

/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      const isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */

var filter$1 =
	/*#__PURE__*/
	_curry2$1(
		/*#__PURE__*/
		_dispatchable(['filter'], _xfilter$1, function(pred, filterable) {
			return _isObject$1(filterable)
				? _reduce(
						function(acc, key) {
							if (pred(filterable[key])) {
								acc[key] = filterable[key];
							}

							return acc;
						},
						{},
						keys(filterable)
				  ) // else
				: _filter$1(pred, filterable);
		})
	);

/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      const isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */

var reject$1 =
	/*#__PURE__*/
	_curry2$1(function reject(pred, filterable) {
		return filter$1(_complement$1(pred), filterable);
	});

function _toString$1(x, seen) {
	var recur = function recur(y) {
		var xs = seen.concat([x]);
		return _includes$1(y, xs) ? '<Circular>' : _toString$1(y, xs);
	}; //  mapPairs :: (Object, [String]) -> [String]

	var mapPairs = function mapPairs(obj, keys$$1) {
		return _map(function(k) {
			return _quote$1(k) + ': ' + recur(obj[k]);
		}, keys$$1.slice().sort());
	};

	switch (Object.prototype.toString.call(x)) {
		case '[object Arguments]':
			return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';

		case '[object Array]':
			return (
				'[' +
				_map(recur, x)
					.concat(
						mapPairs(
							x,
							reject$1(function(k) {
								return /^\d+$/.test(k);
							}, keys(x))
						)
					)
					.join(', ') +
				']'
			);

		case '[object Boolean]':
			return _typeof(x) === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();

		case '[object Date]':
			return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote$1(_toISOString$1(x))) + ')';

		case '[object Null]':
			return 'null';

		case '[object Number]':
			return _typeof(x) === 'object'
				? 'new Number(' + recur(x.valueOf()) + ')'
				: 1 / x === -Infinity
					? '-0'
					: x.toString(10);

		case '[object String]':
			return _typeof(x) === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote$1(x);

		case '[object Undefined]':
			return 'undefined';

		default:
			if (typeof x.toString === 'function') {
				var repr = x.toString();

				if (repr !== '[object Object]') {
					return repr;
				}
			}

			return '{' + mapPairs(x, keys(x)).join(', ') + '}';
	}
}

/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */

var toString$3 =
	/*#__PURE__*/
	_curry1$1(function toString(val) {
		return _toString$1(val, []);
	});

/**
 * Determines whether a given string matches a given regular expression.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category String
 * @sig RegExp -> String -> Boolean
 * @param {RegExp} pattern
 * @param {String} str
 * @return {Boolean}
 * @see R.match
 * @example
 *
 *      R.test(/^x/, 'xyz'); //=> true
 *      R.test(/^y/, 'xyz'); //=> false
 */

var test$1 =
	/*#__PURE__*/
	_curry2$1(function test(pattern, str) {
		if (!_isRegExp$1(pattern)) {
			throw new TypeError(
				'‘test’ requires a value of type RegExp as its first argument; received ' +
					toString$3(pattern)
			);
		}

		return _cloneRegExp$1(pattern).test(str);
	});

var testPhoneNumber = test$1(/^\d{9}$/);

var isPhoneNumber = anyPass([isNilOrEmptyString, testPhoneNumber]);

var isEmail$1 = createValidation(isEmail, m.isEmail);

var isPhoneNumber$1 = createValidation(isPhoneNumber, m.isPhoneNumber);

var hasNoSpecialSymbols = createValidation(
	test(/[^_~`!#$%\^&*+=\-\[\]\\;,.\/{}@´'§|\\":<>\?]/g),
	m.hasNoSpecialSymbols
);

var hasLength = function(length) {
	return createValidation(
		function(value) {
			return value.length === length;
		},
		m.hasLength,
		{
			length: length,
		}
	);
};

function _reduced$1(x) {
	return x && x['@@transducer/reduced']
		? x
		: {
				'@@transducer/value': x,
				'@@transducer/reduced': true,
		  };
}

var XTake =
	/*#__PURE__*/
	(function() {
		function XTake(n, xf) {
			this.xf = xf;
			this.n = n;
			this.i = 0;
		}

		XTake.prototype['@@transducer/init'] = _xfBase$1.init;
		XTake.prototype['@@transducer/result'] = _xfBase$1.result;

		XTake.prototype['@@transducer/step'] = function(result, input) {
			this.i += 1;
			var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
			return this.n >= 0 && this.i >= this.n ? _reduced$1(ret) : ret;
		};

		return XTake;
	})();

var _xtake =
	/*#__PURE__*/
	_curry2(function _xtake(n, xf) {
		return new XTake(n, xf);
	});

/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */

function _checkForMethod(methodname, fn) {
	return function() {
		var length = arguments.length;

		if (length === 0) {
			return fn();
		}

		var obj = arguments[length - 1];
		return _isArray$1(obj) || typeof obj[methodname] !== 'function'
			? fn.apply(this, arguments)
			: obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
	};
}

/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */

var slice =
	/*#__PURE__*/
	_curry3(
		/*#__PURE__*/
		_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
			return Array.prototype.slice.call(list, fromIndex, toIndex);
		})
	);

/**
 * Returns the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `take` method).
 *
 * Dispatches to the `take` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*}
 * @see R.drop
 * @example
 *
 *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(3, 'ramda');               //=> 'ram'
 *
 *      const personnel = [
 *        'Dave Brubeck',
 *        'Paul Desmond',
 *        'Eugene Wright',
 *        'Joe Morello',
 *        'Gerry Mulligan',
 *        'Bob Bates',
 *        'Joe Dodge',
 *        'Ron Crotty'
 *      ];
 *
 *      const takeFive = R.take(5);
 *      takeFive(personnel);
 *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
 * @symb R.take(-1, [a, b]) = [a, b]
 * @symb R.take(0, [a, b]) = []
 * @symb R.take(1, [a, b]) = [a]
 * @symb R.take(2, [a, b]) = [a, b]
 */

var take =
	/*#__PURE__*/
	_curry2(
		/*#__PURE__*/
		_dispatchable$1(['take'], _xtake, function take(n, xs) {
			return slice(0, n < 0 ? Infinity : n, xs);
		})
	);

/**
 * Checks if a list starts with the provided sublist.
 *
 * Similarly, checks if a string starts with the provided substring.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> [a] -> Boolean
 * @sig String -> String -> Boolean
 * @param {*} prefix
 * @param {*} list
 * @return {Boolean}
 * @see R.endsWith
 * @example
 *
 *      R.startsWith('a', 'abc')                //=> true
 *      R.startsWith('b', 'abc')                //=> false
 *      R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
 *      R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
 */

var startsWith =
	/*#__PURE__*/
	_curry2(function(prefix, list) {
		return equals(take(prefix.length, list), prefix);
	});

var startsWith$1 = function(string) {
	return createValidation(startsWith(string), m.startsWith, {
		string: string,
	});
};

function _pipe(f, g) {
	return function() {
		return g.call(this, f.apply(this, arguments));
	};
}

/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *      //          -               -10
 *      //         / \              / \
 *      //        -   4           -6   4
 *      //       / \              / \
 *      //      -   3   ==>     -3   3
 *      //     / \              / \
 *      //    -   2           -1   2
 *      //   / \              / \
 *      //  0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */

var reduce$1 =
	/*#__PURE__*/
	_curry3(_reduce$1);

/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */

var tail =
	/*#__PURE__*/
	_curry1(
		/*#__PURE__*/
		_checkForMethod(
			'tail',
			/*#__PURE__*/
			slice(1, Infinity)
		)
	);

/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      const f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */

function pipe() {
	if (arguments.length === 0) {
		throw new Error('pipe requires at least one argument');
	}

	return _arity$1(arguments[0].length, reduce$1(_pipe, arguments[0], tail(arguments)));
}

/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curryN$1(length, received, fn) {
	return function() {
		var combined = [];
		var argsIdx = 0;
		var left = length;
		var combinedIdx = 0;

		while (combinedIdx < received.length || argsIdx < arguments.length) {
			var result;

			if (
				combinedIdx < received.length &&
				(!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)
			) {
				result = received[combinedIdx];
			} else {
				result = arguments[argsIdx];
				argsIdx += 1;
			}

			combined[combinedIdx] = result;

			if (!_isPlaceholder(result)) {
				left -= 1;
			}

			combinedIdx += 1;
		}

		return left <= 0 ? fn.apply(this, combined) : _arity$1(left, _curryN$1(length, combined, fn));
	};
}

/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      const sumArgs = (...args) => R.sum(args);
 *
 *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */

var curryN$1 =
	/*#__PURE__*/
	_curry2(function curryN(length, fn) {
		if (length === 1) {
			return _curry1(fn);
		}

		return _arity$1(length, _curryN$1(length, [], fn));
	});

/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @see R.unless, R.when, R.cond
 * @example
 *
 *      const incCount = R.ifElse(
 *        R.has('count'),
 *        R.over(R.lensProp('count'), R.inc),
 *        R.assoc('count', 1)
 *      );
 *      incCount({});           //=> { count: 1 }
 *      incCount({ count: 1 }); //=> { count: 2 }
 */

var ifElse$1 =
	/*#__PURE__*/
	_curry3(function ifElse(condition, onTrue, onFalse) {
		return curryN$1(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
			return condition.apply(this, arguments)
				? onTrue.apply(this, arguments)
				: onFalse.apply(this, arguments);
		});
	});

/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is satisfied, the function will return the result of calling
 * the `whenTrueFn` function with the same argument. If the predicate is not
 * satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred       A predicate function
 * @param {Function} whenTrueFn A function to invoke when the `condition`
 *                              evaluates to a truthy value.
 * @param {*}        x          An object to test with the `pred` function and
 *                              pass to `whenTrueFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
 * @see R.ifElse, R.unless, R.cond
 * @example
 *
 *      // truncate :: String -> String
 *      const truncate = R.when(
 *        R.propSatisfies(R.gt(R.__, 10), 'length'),
 *        R.pipe(R.take(10), R.append('…'), R.join(''))
 *      );
 *      truncate('12345');         //=> '12345'
 *      truncate('0123456789ABC'); //=> '0123456789…'
 */

var when =
	/*#__PURE__*/
	_curry3(function when(pred, whenTrueFn, x) {
		return pred(x) ? whenTrueFn(x) : x;
	});

var XMap$1 =
	/*#__PURE__*/
	(function() {
		function XMap(f, xf) {
			this.xf = xf;
			this.f = f;
		}

		XMap.prototype['@@transducer/init'] = _xfBase$1.init;
		XMap.prototype['@@transducer/result'] = _xfBase$1.result;

		XMap.prototype['@@transducer/step'] = function(result, input) {
			return this.xf['@@transducer/step'](result, this.f(input));
		};

		return XMap;
	})();

var _xmap$1 =
	/*#__PURE__*/
	_curry2(function _xmap(f, xf) {
		return new XMap$1(f, xf);
	});

/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      const double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */

var map$1 =
	/*#__PURE__*/
	_curry2(
		/*#__PURE__*/
		_dispatchable$1(['fantasy-land/map', 'map'], _xmap$1, function map(fn, functor) {
			switch (Object.prototype.toString.call(functor)) {
				case '[object Function]':
					return curryN$1(functor.length, function() {
						return fn.call(this, functor.apply(this, arguments));
					});

				case '[object Object]':
					return _reduce$1(
						function(acc, key) {
							acc[key] = fn(functor[key]);
							return acc;
						},
						{},
						keys$1(functor)
					);

				default:
					return _map$1(fn, functor);
			}
		})
	);

/**
 * Splits a given list or string at a given index.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig Number -> [a] -> [[a], [a]]
 * @sig Number -> String -> [String, String]
 * @param {Number} index The index where the array/string is split.
 * @param {Array|String} array The array/string to be split.
 * @return {Array}
 * @example
 *
 *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
 *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
 *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
 */

var splitAt =
	/*#__PURE__*/
	_curry2(function splitAt(index, array) {
		return [slice(0, index, array), slice(index, length(array), array)];
	});

/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */

var reverse =
	/*#__PURE__*/
	_curry1(function reverse(list) {
		return _isString$1(list)
			? list
					.split('')
					.reverse()
					.join('')
			: Array.prototype.slice.call(list, 0).reverse();
	});

function _isFunction(x) {
	return Object.prototype.toString.call(x) === '[object Function]';
}

/**
 * Returns the result of concatenating the given lists or strings.
 *
 * Note: `R.concat` expects both arguments to be of the same type,
 * unlike the native `Array.prototype.concat` method. It will throw
 * an error if you `concat` an Array with a non-Array value.
 *
 * Dispatches to the `concat` method of the first argument, if present.
 * Can also concatenate two members of a [fantasy-land
 * compatible semigroup](https://github.com/fantasyland/fantasy-land#semigroup).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} firstList The first list
 * @param {Array|String} secondList The second list
 * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
 * `secondList`.
 *
 * @example
 *
 *      R.concat('ABC', 'DEF'); // 'ABCDEF'
 *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      R.concat([], []); //=> []
 */

var concat =
	/*#__PURE__*/
	_curry2(function concat(a, b) {
		if (_isArray$1(a)) {
			if (_isArray$1(b)) {
				return a.concat(b);
			}

			throw new TypeError(toString$2(b) + ' is not an array');
		}

		if (_isString$1(a)) {
			if (_isString$1(b)) {
				return a + b;
			}

			throw new TypeError(toString$2(b) + ' is not a string');
		}

		if (a != null && _isFunction(a['fantasy-land/concat'])) {
			return a['fantasy-land/concat'](b);
		}

		if (a != null && _isFunction(a.concat)) {
			return a.concat(b);
		}

		throw new TypeError(
			toString$2(a) + ' does not have a method named "concat" or "fantasy-land/concat"'
		);
	});

/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      const yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */

function compose() {
	if (arguments.length === 0) {
		throw new Error('compose requires at least one argument');
	}

	return pipe.apply(this, reverse(arguments));
}

function _identity(x) {
	return x;
}

/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      const obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */

var identity =
	/*#__PURE__*/
	_curry1(_identity);

var XDrop =
	/*#__PURE__*/
	(function() {
		function XDrop(n, xf) {
			this.xf = xf;
			this.n = n;
		}

		XDrop.prototype['@@transducer/init'] = _xfBase$1.init;
		XDrop.prototype['@@transducer/result'] = _xfBase$1.result;

		XDrop.prototype['@@transducer/step'] = function(result, input) {
			if (this.n > 0) {
				this.n -= 1;
				return result;
			}

			return this.xf['@@transducer/step'](result, input);
		};

		return XDrop;
	})();

var _xdrop =
	/*#__PURE__*/
	_curry2(function _xdrop(n, xf) {
		return new XDrop(n, xf);
	});

/**
 * Returns all but the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `drop` method).
 *
 * Dispatches to the `drop` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*} A copy of list without the first `n` elements
 * @see R.take, R.transduce, R.dropLast, R.dropWhile
 * @example
 *
 *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(3, 'ramda');               //=> 'da'
 */

var drop =
	/*#__PURE__*/
	_curry2(
		/*#__PURE__*/
		_dispatchable$1(['drop'], _xdrop, function drop(n, xs) {
			return slice(Math.max(0, n), Infinity, xs);
		})
	);

/**
 * Returns the larger of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.maxBy, R.min
 * @example
 *
 *      R.max(789, 123); //=> 789
 *      R.max('a', 'b'); //=> 'b'
 */

var max$1 =
	/*#__PURE__*/
	_curry2(function max(a, b) {
		return b > a ? b : a;
	});

/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */

var path$1 =
	/*#__PURE__*/
	_curry2(function path(paths, obj) {
		var val = obj;
		var idx = 0;

		while (idx < paths.length) {
			if (val == null) {
				return;
			}

			val = val[paths[idx]];
			idx += 1;
		}

		return val;
	});

/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 *      R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
 */

var prop$1 =
	/*#__PURE__*/
	_curry2(function prop(p, obj) {
		return path$1([p], obj);
	});

/**
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 *
 * `pluck` will work on
 * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
 * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => k -> f {k: v} -> f v
 * @param {Number|String} key The key name to pluck off of each object.
 * @param {Array} f The array or functor to consider.
 * @return {Array} The list of values for the given key.
 * @see R.props
 * @example
 *
 *      var getAges = R.pluck('age');
 *      getAges([{name: 'fred', age: 29}, {name: 'wilma', age: 27}]); //=> [29, 27]
 *
 *      R.pluck(0, [[1, 2], [3, 4]]);               //=> [1, 3]
 *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
 * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
 * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
 */

var pluck$1 =
	/*#__PURE__*/
	_curry2(function pluck(p, list) {
		return map$1(prop$1(p), list);
	});

/**
 * Accepts a converging function and a list of branching functions and returns
 * a new function. The arity of the new function is the same as the arity of
 * the longest branching function. When invoked, this new function is applied
 * to some arguments, and each branching function is applied to those same
 * arguments. The results of each branching function are passed as arguments
 * to the converging function to produce the return value.
 *
 * @func
 * @memberOf R
 * @since v0.4.2
 * @category Function
 * @sig ((x1, x2, ...) -> z) -> [((a, b, ...) -> x1), ((a, b, ...) -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} after A function. `after` will be invoked with the return values of
 *        `fn1` and `fn2` as its arguments.
 * @param {Array} functions A list of functions.
 * @return {Function} A new function.
 * @see R.useWith
 * @example
 *
 *      const average = R.converge(R.divide, [R.sum, R.length])
 *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
 *
 *      const strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
 *      strangeConcat("Yodel") //=> "YODELyodel"
 *
 * @symb R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
 */

var converge =
	/*#__PURE__*/
	_curry2(function converge(after, fns) {
		return curryN$1(reduce$1(max$1, 0, pluck$1('length', fns)), function() {
			var args = arguments;
			var context = this;
			return after.apply(
				context,
				_map$1(function(fn) {
					return fn.apply(context, args);
				}, fns)
			);
		});
	});

/**
 * Divides the first parameter by the second and returns the remainder. Note
 * that this function preserves the JavaScript-style behavior for modulo. For
 * mathematical modulo see [`mathMod`](#mathMod).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The value to the divide.
 * @param {Number} b The pseudo-modulus
 * @return {Number} The result of `b % a`.
 * @see R.mathMod
 * @example
 *
 *      R.modulo(17, 3); //=> 2
 *      // JS behavior:
 *      R.modulo(-17, 3); //=> -2
 *      R.modulo(17, -3); //=> 2
 *
 *      const isOdd = R.modulo(R.__, 2);
 *      isOdd(42); //=> 0
 *      isOdd(21); //=> 1
 */

var modulo =
	/*#__PURE__*/
	_curry2(function modulo(a, b) {
		return a % b;
	});

/**
 * Replace a substring or regex match in a string with a replacement.
 *
 * The first two parameters correspond to the parameters of the
 * `String.prototype.replace()` function, so the second parameter can also be a
 * function.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category String
 * @sig RegExp|String -> String -> String -> String
 * @param {RegExp|String} pattern A regular expression or a substring to match.
 * @param {String} replacement The string to replace the matches with.
 * @param {String} str The String to do the search and replacement in.
 * @return {String} The result.
 * @example
 *
 *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *
 *      // Use the "g" (global) flag to replace all occurrences:
 *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
 */

var replace =
	/*#__PURE__*/
	_curry3(function replace(regex, replacement, str) {
		return str.replace(regex, replacement);
	});

/**
 * Turns a named method with a specified arity into a function that can be
 * called directly supplied with arguments and a target object.
 *
 * The returned function is curried and accepts `arity + 1` parameters where
 * the final parameter is the target object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
 * @param {Number} arity Number of arguments the returned function should take
 *        before the target object.
 * @param {String} method Name of the method to call.
 * @return {Function} A new curried function.
 * @see R.construct
 * @example
 *
 *      const sliceFrom = R.invoker(1, 'slice');
 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 *      const sliceFrom6 = R.invoker(2, 'slice')(6);
 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 * @symb R.invoker(0, 'method')(o) = o['method']()
 * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
 * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
 */

var invoker =
	/*#__PURE__*/
	_curry2(function invoker(arity, method) {
		return curryN$1(arity + 1, function() {
			var target = arguments[arity];

			if (target != null && _isFunction(target[method])) {
				return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
			}

			throw new TypeError(toString$2(target) + ' does not have a method named "' + method + '"');
		});
	});

/**
 * A special placeholder value used to specify "gaps" within curried functions,
 * allowing partial application of any combination of arguments, regardless of
 * their positions.
 *
 * If `g` is a curried ternary function and `_` is `R.__`, the following are
 * equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2, _)(1, 3)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @name __
 * @constant
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @example
 *
 *      const greet = R.replace('{name}', R.__, 'Hello, {name}!');
 *      greet('Alice'); //=> 'Hello, Alice!'
 */
var _ = {
	'@@functional/placeholder': true,
};

/**
 * Subtracts its second argument from its first argument.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a - b`.
 * @see R.add
 * @example
 *
 *      R.subtract(10, 8); //=> 2
 *
 *      const minus5 = R.subtract(R.__, 5);
 *      minus5(17); //=> 12
 *
 *      const complementaryAngle = R.subtract(90);
 *      complementaryAngle(30); //=> 60
 *      complementaryAngle(72); //=> 18
 */

var subtract =
	/*#__PURE__*/
	_curry2(function subtract(a, b) {
		return Number(a) - Number(b);
	});

var minus55 = subtract(_, 55);

var decodeChar = o(minus55, invoker(0, 'charCodeAt'));

var removeWhiteSpaces = replace(/ /g, '');

var modulo97 = o(modulo(_, 97), parseInt);

var take9chars = slice(0, 9);

var drop9charsFromIban = converge(drop, [o(length, take9chars), identity]);

var moduloOfFirst9Chars = compose(
	toString$2,
	modulo97,
	take9chars
);

var computeReducedIban = converge(concat, [moduloOfFirst9Chars, drop9charsFromIban]);

var moveFirstFourCharsToEnd = compose(
	listToString,
	reverse,
	splitAt(4)
); // on wikipedia they are using hardcoded values, but the value of number can be computed with ascii code - 55

var expandTextCharToNumber = o(listToString, map$1(when(isNotNumeric, decodeChar))); // javascript is not capable to compute module on whole number
// https://en.wikipedia.org/wiki/International_Bank_Account_Number#Modulo_operation_on_IBAN

var iso7064Mod97 = ifElse$1(
	ltThanLength(2),
	o(function(c) {
		return iso7064Mod97(c);
	}, computeReducedIban),
	modulo97
); // based on https://en.wikipedia.org/wiki/International_Bank_Account_Number#Validating_the_IBAN

var testIban = pipe(
	removeWhiteSpaces,
	moveFirstFourCharsToEnd,
	expandTextCharToNumber,
	iso7064Mod97,
	equals(1)
);
var isValidIban = createValidation(testIban, m.isValidIban);

export {
	hasLengthInInterval,
	hasOnlyDigits,
	hasValueMin,
	isInteger,
	isPositiveNumber,
	hasLengthMax,
	hasValueInInterval,
	isDivisibleBy,
	isNumber,
	isRequired,
	hasLengthMin,
	hasValueMax,
	isEmail$1 as isEmail,
	isPhoneNumber$1 as isPhoneNumber,
	hasNoSpecialSymbols,
	hasLength,
	startsWith$1 as startsWith,
	isValidIban,
	m as messages,
};
