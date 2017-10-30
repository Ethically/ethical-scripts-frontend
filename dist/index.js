'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var _fs = require('fs');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ethicalUtilityResolveModule = require('ethical-utility-resolve-module');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _ethicalUtilityResolveModule.getAppPrefix)();
var scriptPath = '/node_modules/ethical-scripts-frontend/dist/';
var initScript = '\n    window.require\n        .load(\'module?exclude=\' + window.require.ids.toString())\n        .then(() => setTimeout(() => window.require(\'' + app + '\'), 0))\n        .catch(e => console.error(e))\n';
var beforeScript = function beforeScript(state) {
    return '\n    window.global = window\n    window.process = { env: {} }\n    window.state = JSON.parse(\'' + JSON.stringify(state) + '\')\n';
};

var getInitScripts = function getInitScripts() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var scriptName = (process.env.NODE_ENV || 'NODE_ENV_UNDEFINED') + '.js';
    var script = scriptPath + scriptName;
    var before = beforeScript(state);
    return [_react2.default.createElement('script', { key: '0', dangerouslySetInnerHTML: { __html: before } }), _react2.default.createElement('script', { key: '1', src: script }), _react2.default.createElement('script', { key: '2', dangerouslySetInnerHTML: { __html: initScript } })];
};

exports.default = getInitScripts;

//# sourceMappingURL=index.js.map