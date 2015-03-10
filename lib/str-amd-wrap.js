"use strict";

module.exports = function(str) {
	return [
		'define(function(require, exports, module){',
			'module.exports=\n',
			"['",
				str.replace(/\r\n/g, '\n')
					.replace(/([\\'"])/g, '\\$1')
					.replace(/\n/g, "',\n'"),
			"'].join('\\n')\n",
		'});'
	].join('');
};
