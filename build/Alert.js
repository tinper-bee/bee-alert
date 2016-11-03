'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _beeButton = require('bee-button');

var _beeButton2 = _interopRequireDefault(_beeButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
	onDismiss: _react2["default"].PropTypes.func,
	closeLabel: _react2["default"].PropTypes.string
};

var clsPrefix = "u-alert";

var Alert = function (_React$Component) {
	_inherits(Alert, _React$Component);

	function Alert(props) {
		_classCallCheck(this, Alert);

		var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

		_this.state = {
			showCloseLabel: !!_this.props.closeLabel
		};
		return _this;
	}
	/**
  * 渲染右上角关闭alert按钮
  */


	Alert.prototype.renderDismissButton = function renderDismissButton(onDismiss) {
		return _react2["default"].createElement(
			_beeButton2["default"],
			{
				className: 'close',
				onClick: onDismiss
			},
			_react2["default"].createElement(
				'span',
				null,
				'\xD7'
			)
		);
	};
	/**
 * 渲染alert信息内部关闭alert的文字按钮
 * @onDismiss 外界传进来的操作动作方法
 * @closeLabel 内部关闭按钮显示的文字
 */


	Alert.prototype.renderSrOnlyDismissButton = function renderSrOnlyDismissButton(onDismiss, closeLabel) {
		return _react2["default"].createElement(
			_beeButton2["default"],
			{
				className: 'close sr-only',
				onClick: onDismiss
			},
			closeLabel
		);
	};

	Alert.prototype.render = function render() {
		var _props = this.props;
		var onDismiss = _props.onDismiss;
		var closeLabel = _props.closeLabel;
		var colors = _props.colors;
		var className = _props.className;
		var children = _props.children;

		var others = _objectWithoutProperties(_props, ['onDismiss', 'closeLabel', 'colors', 'className', 'children']);

		var clsObj = {
			"u-alert": true
		};
		if (colors) {
			clsObj[clsPrefix + '-' + colors] = true;
		} else {
			clsObj[clsPrefix + '-warning'] = true;
		}
		return _react2["default"].createElement(
			'div',
			_extends({}, others, {
				role: 'alert',
				className: (0, _classnames2["default"])(className, clsObj)
			}),
			children,
			!this.state.showCloseLabel && this.renderDismissButton(onDismiss),
			this.state.showCloseLabel && this.renderSrOnlyDismissButton(onDismiss, closeLabel)
		);
	};

	return Alert;
}(_react2["default"].Component);

Alert.propTypes = propTypes;

exports["default"] = Alert;
module.exports = exports['default'];