(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define('postmonger', [], function () { return factory(root); });
	} else if (typeof exports === 'object') {
		module.exports = factory(root);
	} else {
		// OR use browser globals if AMD is not present
		root.Postmonger = factory(root);
	}
}(this, function (root) {
	root = root || window;

	var exports = exports || undefined;
	var Postmonger;
	var previous = root.Postmonger;
	var _window = (root.addEventListener || root.attachEvent) ? root : window;
	var Connection, Events, Session;

	//Set up Postmonger namespace, provide noConflict support, and version
	if (typeof(exports) !== 'undefined') {
		Postmonger = exports;
	} else {
		Postmonger = {};
	}
	Postmonger.noConflict = function () {
		root.Postmonger = previous;
		return this;
	};
	Postmonger.version = '0.0.14';
}