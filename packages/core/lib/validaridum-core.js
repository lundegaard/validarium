'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
	return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var ramdaExtension = require('ramda-extension');
var invariant = _interopDefault(require('invariant'));

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
	_curry2(function curryN(length, fn) {
		if (length === 1) {
			return _curry1(fn);
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
	_curry2(function max(a, b) {
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
	_curry1(function isArrayLike(x) {
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
	_curry2(function bind(fn, thisObj) {
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
	_curry2(function _xmap(f, xf) {
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
	_curry2(
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

var prop =
	/*#__PURE__*/
	_curry2(function prop(p, obj) {
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
	_curry2(function pluck(p, list) {
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
	_curry3(_reduce);

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
		return curryN(reduce(max, 0, pluck('length', fns)), function() {
			var args = arguments;
			var context = this;
			return after.apply(
				context,
				_map(function(fn) {
					return fn.apply(context, args);
				}, fns)
			);
		});
	});

/**
 * juxt applies a list of functions to a list of values.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Function
 * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
 * @param {Array} fns An array of functions
 * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
 * @see R.applySpec
 * @example
 *
 *      const getRange = R.juxt([Math.min, Math.max]);
 *      getRange(3, 4, 9, -3); //=> [-3, 9]
 * @symb R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]
 */

var juxt =
	/*#__PURE__*/
	_curry1(function juxt(fns) {
		return converge(function() {
			return Array.prototype.slice.call(arguments, 0);
		}, fns);
	});

function _pipe(f, g) {
	return function() {
		return g.call(this, f.apply(this, arguments));
	};
}

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
		return _isArray(obj) || typeof obj[methodname] !== 'function'
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

	return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
}

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
		return _isString(list)
			? list
					.split('')
					.reverse()
					.join('')
			: Array.prototype.slice.call(list, 0).reverse();
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

function _isObject(x) {
	return Object.prototype.toString.call(x) === '[object Object]';
}

/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWithKey, R.merge, R.mergeWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeWithKey(concatValues,
 *                     { a: true, thing: 'foo', values: [10, 20] },
 *                     { b: true, thing: 'bar', values: [15, 35] });
 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
 */

var mergeWithKey =
	/*#__PURE__*/
	_curry3(function mergeWithKey(fn, l, r) {
		var result = {};
		var k;

		for (k in l) {
			if (_has(k, l)) {
				result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
			}
		}

		for (k in r) {
			if (_has(k, r) && !_has(k, result)) {
				result[k] = r[k];
			}
		}

		return result;
	});

/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to the key and associated values
 *   using the resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWithKey, R.mergeDeepWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeDeepWithKey(concatValues,
 *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
 *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
 *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
 */

var mergeDeepWithKey =
	/*#__PURE__*/
	_curry3(function mergeDeepWithKey(fn, lObj, rObj) {
		return mergeWithKey(
			function(k, lVal, rVal) {
				if (_isObject(lVal) && _isObject(rVal)) {
					return mergeDeepWithKey(fn, lVal, rVal);
				} else {
					return fn(k, lVal, rVal);
				}
			},
			lObj,
			rObj
		);
	});

/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the first object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepRight, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                      { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
 */

var mergeDeepLeft =
	/*#__PURE__*/
	_curry2(function mergeDeepLeft(lObj, rObj) {
		return mergeDeepWithKey(
			function(k, lVal, rVal) {
				return lVal;
			},
			lObj,
			rObj
		);
	});

/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 * @example
 *
 *      const mergeThree = (a, b, c) => [].concat(a, b, c);
 *
 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
 *
 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 * @symb R.flip(f)(a, b, c) = f(b, a, c)
 */

var flip =
	/*#__PURE__*/
	_curry1(function flip(fn) {
		return curryN(fn.length, function(a, b) {
			var args = Array.prototype.slice.call(arguments, 0);
			args[0] = b;
			args[1] = a;
			return fn.apply(this, args);
		});
	});

/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      const list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */

var nth =
	/*#__PURE__*/
	_curry2(function nth(offset, list) {
		var idx = offset < 0 ? list.length + offset : offset;
		return _isString(list) ? list.charAt(idx) : list[idx];
	});

/**
 * Returns a function which returns its nth argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig Number -> *... -> *
 * @param {Number} n
 * @return {Function}
 * @example
 *
 *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
 *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
 * @symb R.nthArg(-1)(a, b, c) = c
 * @symb R.nthArg(0)(a, b, c) = a
 * @symb R.nthArg(1)(a, b, c) = b
 */

var nthArg =
	/*#__PURE__*/
	_curry1(function nthArg(n) {
		var arity = n < 0 ? 1 : n + 1;
		return curryN(arity, function() {
			return nth(n, arguments);
		});
	});

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

/**
 * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
 * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
 * to `fn` are applied to each of the predicates in turn until one returns a
 * "truthy" value, at which point `fn` returns the result of applying its
 * arguments to the corresponding transformer. If none of the predicates
 * matches, `fn` returns undefined.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Logic
 * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
 * @param {Array} pairs A list of [predicate, transformer]
 * @return {Function}
 * @see R.ifElse, R.unless, R.when
 * @example
 *
 *      const fn = R.cond([
 *        [R.equals(0),   R.always('water freezes at 0°C')],
 *        [R.equals(100), R.always('water boils at 100°C')],
 *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
 *      ]);
 *      fn(0); //=> 'water freezes at 0°C'
 *      fn(50); //=> 'nothing special happens at 50°C'
 *      fn(100); //=> 'water boils at 100°C'
 */

var cond =
	/*#__PURE__*/
	_curry1(function cond(pairs) {
		var arity = reduce(
			max,
			0,
			map(function(pair) {
				return pair[0].length;
			}, pairs)
		);
		return _arity(arity, function() {
			var idx = 0;

			while (idx < pairs.length) {
				if (pairs[idx][0].apply(this, arguments)) {
					return pairs[idx][1].apply(this, arguments);
				}

				idx += 1;
			}
		});
	});

/**
 * Returns a partial copy of an object containing only the keys that satisfy
 * the supplied predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig ((v, k) -> Boolean) -> {k: v} -> {k: v}
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 *         on it.
 * @see R.pick, R.filter
 * @example
 *
 *      const isUpperCase = (val, key) => key.toUpperCase() === key;
 *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 */

var pickBy =
	/*#__PURE__*/
	_curry2(function pickBy(test, obj) {
		var result = {};

		for (var prop in obj) {
			if (test(obj[prop], prop, obj)) {
				result[prop] = obj[prop];
			}
		}

		return result;
	});

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
	_curry1(function allPass(preds) {
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
	_curry1(function isNil(x) {
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
	_curry1(function anyPass(preds) {
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
	_curry2(function _xall(f, xf) {
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
	_curry2(
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

var isNilOrAllIsNil = anyPass([isNil, allPass([ramdaExtension.isArray, allIsNil])]);

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
	_curry3(function unless(pred, whenFalseFn, x) {
		return pred(x) ? x : whenFalseFn(x);
	});

var unlessIsNil = unless(isNil);

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

	var keysA = keys(a);

	if (keysA.length !== keys(b).length) {
		return false;
	}

	var extendedStackA = stackA.concat([a]);
	var extendedStackB = stackB.concat([b]);
	idx = keysA.length - 1;

	while (idx >= 0) {
		var key = keysA[idx];

		if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
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

var XFilter =
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
		_dispatchable(['filter'], _xfilter, function(pred, filterable) {
			return _isObject(filterable)
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

	var mapPairs = function mapPairs(obj, keys$$1) {
		return _map(function(k) {
			return _quote(k) + ': ' + recur(obj[k]);
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
							reject(function(k) {
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

var toString$1 =
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
					toString$1(pattern)
			);
		}

		return _cloneRegExp(pattern).test(str);
	});

var testPhoneNumber = test(/^\d{9}$/);

anyPass([ramdaExtension.isNilOrEmptyString, testPhoneNumber]);

var isIntlMessage = function isIntlMessage(x) {
	return x && ramdaExtension.notNil(x.id) && ramdaExtension.notNil(x.defaultMessage);
};

var notNilObject = allPass([ramdaExtension.notNil, ramdaExtension.isObject]);

var isIntlMessageWithArgs = allPass([
	ramdaExtension.isObject,
	function(_ref) {
		var message = _ref.message;
		return !!isIntlMessage(message);
	},
]);

var pickByNotNil = pickBy(ramdaExtension.notNil);
/**
 * Recursevily translates messages in validation result.
 */

var translate = function translate(formatMessage) {
	return cond([
		[
			isIntlMessageWithArgs,
			function(_ref2) {
				var message = _ref2.message,
					messageValues = _ref2.messageValues;
				return formatMessage(message, messageValues);
			},
		],
		[
			notNilObject,
			map(
				unlessIsNil(function(x) {
					return translate(formatMessage)(x);
				})
			),
		],
		[T, identity],
	]);
};

var existFormatMessage = o(ramdaExtension.isFunction, path(['intl', 'formatMessage']));
/**
 * For merging validation results.
 * We don't want to null results replacing those already filled.
 */

var mergeResults = ramdaExtension.mergeDeepAllWith(
	cond([
		[isNilOrAllIsNil, nthArg(1)],
		[flip(isNilOrAllIsNil), ramdaExtension.headArg],
		[
			function(a, b) {
				return ramdaExtension.isObject(a) && ramdaExtension.isObject(b);
			},
			mergeDeepLeft,
		],
		[T, ramdaExtension.headArg],
	])
);
/**
 * Applies `fns` with `values` and `props`.
 * Results of `fns` are translated with `react-intl`;
 * We assume that `props` contains `intl` object from `react-intl` (usually obtained by `injectIntl`).
 *
 * @param  {...Function} fns) Validation functions.
 * @param {Object} props
 * @param {any} values
 * @return {Object}         Translated result.
 */

var createMainValidate = function createMainValidate() {
	for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
		fns[_key] = arguments[_key];
	}

	return function(props) {
		return function(values) {
			invariant(existFormatMessage(props), 'Function `intl` is required in `createMainValidate`.'); // prettier-ignore

			return compose(
				pickByNotNil,
				unlessIsNil(translate(props.intl.formatMessage)),
				mergeResults,
				ramdaExtension.rejectNil,
				juxt(fns)
			)(values, props);
		};
	};
};

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
	_curry3(function ifElse(condition, onTrue, onFalse) {
		return curryN(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
			return condition.apply(this, arguments)
				? onTrue.apply(this, arguments)
				: onFalse.apply(this, arguments);
		});
	});

function _objectAssign(target) {
	if (target == null) {
		throw new TypeError('Cannot convert undefined or null to object');
	}

	var output = Object(target);
	var idx = 1;
	var length = arguments.length;

	while (idx < length) {
		var source = arguments[idx];

		if (source != null) {
			for (var nextKey in source) {
				if (_has(nextKey, source)) {
					output[nextKey] = source[nextKey];
				}
			}
		}

		idx += 1;
	}

	return output;
}

var _objectAssign$1 = typeof Object.assign === 'function' ? Object.assign : _objectAssign;

/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeRight, R.mergeDeepRight, R.mergeWith, R.mergeWithKey
 * @deprecated
 * @example
 *
 *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 *      //=> { 'name': 'fred', 'age': 40 }
 *
 *      const withDefaults = R.merge({x: 0, y: 0});
 *      withDefaults({y: 2}); //=> {x: 0, y: 2}
 * @symb R.merge(a, b) = {...a, ...b}
 */

var merge =
	/*#__PURE__*/
	_curry2(function merge(l, r) {
		return _objectAssign$1({}, l, r);
	});

/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.omit, R.props
 * @example
 *
 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */

var pick =
	/*#__PURE__*/
	_curry2(function pick(names, obj) {
		var result = {};
		var idx = 0;

		while (idx < names.length) {
			if (names[idx] in obj) {
				result[names[idx]] = obj[names[idx]];
			}

			idx += 1;
		}

		return result;
	});

/**
 * Creates a new object by recursively evolving a shallow copy of `object`,
 * according to the `transformation` functions. All non-primitive properties
 * are copied by reference.
 *
 * A `transformation` function will not be invoked if its corresponding key
 * does not exist in the evolved object.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {k: (v -> v)} -> {k: v} -> {k: v}
 * @param {Object} transformations The object specifying transformation functions to apply
 *        to the object.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      const tomato = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
 *      const transformations = {
 *        firstName: R.trim,
 *        lastName: R.trim, // Will not get invoked.
 *        data: {elapsed: R.add(1), remaining: R.add(-1)}
 *      };
 *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
 */

var evolve =
	/*#__PURE__*/
	_curry2(function evolve(transformations, object) {
		var result = object instanceof Array ? [] : {};
		var transformation, key, type;

		for (key in object) {
			transformation = transformations[key];
			type = _typeof(transformation);
			result[key] =
				type === 'function'
					? transformation(object[key])
					: transformation && type === 'object'
						? evolve(transformation, object[key])
						: object[key];
		}

		return result;
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

/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across different
 * JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own properties.
 * @see R.valuesIn, R.keys
 * @example
 *
 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
 */

var values =
	/*#__PURE__*/
	_curry1(function values(obj) {
		var props = keys(obj);
		var len = props.length;
		var vals = [];
		var idx = 0;

		while (idx < len) {
			vals[idx] = obj[props[idx]];
			idx += 1;
		}

		return vals;
	});

/**
 * Returns the empty value of its argument's type. Ramda defines the empty
 * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
 * types are supported if they define `<Type>.empty`,
 * `<Type>.prototype.empty` or implement the
 * [FantasyLand Monoid spec](https://github.com/fantasyland/fantasy-land#monoid).
 *
 * Dispatches to the `empty` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> a
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R.empty(Just(42));      //=> Nothing()
 *      R.empty([1, 2, 3]);     //=> []
 *      R.empty('unicorns');    //=> ''
 *      R.empty({x: 1, y: 2});  //=> {}
 */

var empty =
	/*#__PURE__*/
	_curry1(function empty(x) {
		return x != null && typeof x['fantasy-land/empty'] === 'function'
			? x['fantasy-land/empty']()
			: x != null &&
			  x.constructor != null &&
			  typeof x.constructor['fantasy-land/empty'] === 'function'
				? x.constructor['fantasy-land/empty']()
				: x != null && typeof x.empty === 'function'
					? x.empty()
					: x != null && x.constructor != null && typeof x.constructor.empty === 'function'
						? x.constructor.empty()
						: _isArray(x)
							? []
							: _isString(x)
								? ''
								: _isObject(x)
									? {}
									: _isArguments(x)
										? (function() {
												return arguments;
										  })()
										: void 0; // else
	});

/**
 * Returns `true` if the given value is its type's empty value; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> Boolean
 * @param {*} x
 * @return {Boolean}
 * @see R.empty
 * @example
 *
 *      R.isEmpty([1, 2, 3]);   //=> false
 *      R.isEmpty([]);          //=> true
 *      R.isEmpty('');          //=> true
 *      R.isEmpty(null);        //=> false
 *      R.isEmpty({});          //=> true
 *      R.isEmpty({length: 0}); //=> false
 */

var isEmpty =
	/*#__PURE__*/
	_curry1(function isEmpty(x) {
		return x != null && equals(x, empty(x));
	});

var dispatchValidPredicates = function dispatchValidPredicates(predicates) {
	return function() {
		return ramdaExtension.isNilOrEmpty(predicates)
			? null
			: ramdaExtension.dispatch(predicates).apply(void 0, arguments);
	};
};

var validObject = anyPass([
	isEmpty,
	o(function(x) {
		return !x;
	}, values),
]); // TODO: refactor

var validateObjectDescriptor = function validateObjectDescriptor(descriptor) {
	var evolution = map(dispatchValidPredicates)(descriptor);

	var keysToValidate = keys(descriptor);

	var dull = map(ramdaExtension.alwaysNull)(descriptor);

	return compose(
		when(validObject, ramdaExtension.alwaysNull),
		pickBy(allPass([ramdaExtension.notNil, ramdaExtension.notEmpty])),
		evolve(evolution),
		pick(keysToValidate),
		merge(dull)
	);
};

var validateListDescriptor = function validateListDescriptor(listDescriptor) {
	return dispatchValidPredicates(listDescriptor);
};
/**
 * Applies validations in `descriptor` for `value`.
 * Params are curried.
 *
 * @param {object} descriptor Object that contains validations for each item in `values`
 * @param {any} value Value for validation
 *
 * @sig Object -> a -> b
 *
 * @example
 *
 *			validate({
 *				id: [(x) => !x && 'Is required.', (x) => x < 0 && 'Must be greater than 0.'],
 *				name: [(x) => !x && 'Is required.'],
 *				surname: [(x) => !x && 'Is required.'],
 *			}, {
 *					id: -1,
 *					surname: 'Doe',
 *				}
 *			])
 *
 *			// 	{
 *			// 		id: 'Must be greater than 0.',
 *			// 		name: 'Is required.',
 *			// 		surname: false,
 *			// 	}
 *
 */

var validate = ifElse(ramdaExtension.isArray, validateListDescriptor, validateObjectDescriptor);

/**
 * Accepts a function `fn` and a list of transformer functions and returns a
 * new curried function. When the new function is invoked, it calls the
 * function `fn` with parameters consisting of the result of calling each
 * supplied handler on successive arguments to the new function.
 *
 * If more arguments are passed to the returned function than transformer
 * functions, those arguments are passed directly to `fn` as additional
 * parameters. If you expect additional arguments that don't need to be
 * transformed, although you can ignore them, it's best to pass an identity
 * function so that the new function reports the correct arity.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((x1, x2, ...) -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} fn The function to wrap.
 * @param {Array} transformers A list of transformer functions
 * @return {Function} The wrapped function.
 * @see R.converge
 * @example
 *
 *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
 *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
 *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
 *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
 * @symb R.useWith(f, [g, h])(a, b) = f(g(a), h(b))
 */

var useWith =
	/*#__PURE__*/
	_curry2(function useWith(fn, transformers) {
		return curryN(transformers.length, function() {
			var args = [];
			var idx = 0;

			while (idx < transformers.length) {
				args.push(transformers[idx].call(this, arguments[idx]));
				idx += 1;
			}

			return fn.apply(
				this,
				args.concat(Array.prototype.slice.call(arguments, transformers.length))
			);
		});
	});

/**
 * Applies validations in `descriptor` for each item in `values`.
 * Params are curried.
 *
 * @param {object} descriptor Object that contains validations for each item in `values`
 * @param {array} values Values for validations
 * @sig Object -> [Object] -> [Object]
 *
 * @example
 *
 *			validateMany({
 *				id: [(x) => !x && 'Is required.', (x) => x < 0 && 'Must be greater than 0.'],
 *				name: [(x) => !x && 'Is required.'],
 *				surname: [(x) => !x && 'Is required.'],
 *			}, [
 *				{
 *					id: -1,
 *					surname: 'Doe',
 *				},
 *				{
 *					id: 13,
 *					name: 'Bob',
 *				},
 *			])
 *
 *		 	// [
 *			// 	{
 *			// 		id: 'Must be greater than 0.',
 *			// 		name: 'Is required.',
 *			// 		surname: false,
 *			// 	}, {
 *			// 		id: false,
 *			// 		name: false,
 *			// 		surname: 'Is required.',
 *			// 	},
 *			// ]
 *
 */

var validateMany = useWith(map, [validate, ramdaExtension.defaultToEmptyArray]);

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
	_curry1(function always(val) {
		return function() {
			return val;
		};
	});

var createValidation = function(predicate, message, messageValues) {
	return ifElse(
		allPass([ramdaExtension.isNotNil, ramdaExtension.isNotEmpty, predicate]),
		ramdaExtension.alwaysNull,
		always({
			message: message,
			messageValues: messageValues,
		})
	);
};

var createOptionalValidation = function(predicate, message, messageValues) {
	return ifElse(
		predicate,
		ramdaExtension.alwaysNull,
		always({
			message: message,
			messageValues: messageValues,
		})
	);
};

exports.createMainValidate = createMainValidate;
exports.validate = validate;
exports.validateMany = validateMany;
exports.createValidation = createValidation;
exports.createOptionalValidation = createOptionalValidation;
