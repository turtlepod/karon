/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__example1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__example1___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__example1__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__example2__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__example2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__example2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__example3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__example3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__example3__);
/**
 * Import example blocks
 */




/***/ }),
/* 1 */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    RichText = _wp$editor.RichText;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    ServerSideRender = _wp$components.ServerSideRender,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    RadioControl = _wp$components.RadioControl,
    SelectControl = _wp$components.SelectControl;


registerBlockType('karon/example1', {
	edit: function edit(props) {
		return [!!props.isSelected && wp.element.createElement(
			InspectorControls,
			null,
			wp.element.createElement(
				PanelBody,
				{
					title: __('Block Settings'),
					initialOpen: false
				},
				wp.element.createElement(
					PanelRow,
					null,
					wp.element.createElement(
						'label',
						null,
						__('Select Something')
					),
					wp.element.createElement(SelectControl, {
						value: props.attributes.aSelectOption,
						options: [{
							label: 'Red',
							value: 'red'
						}, {
							label: 'Green',
							value: 'green'
						}, {
							label: 'Blue',
							value: 'blue'
						}],
						onChange: function onChange(value) {
							props.setAttributes({ aSelectOption: value });
						}
					})
				),
				wp.element.createElement(
					PanelRow,
					null,
					wp.element.createElement(
						'label',
						null,
						__('Pick Something')
					),
					wp.element.createElement(RadioControl, {
						selected: props.attributes.aRadioOption,
						options: [{
							label: 'Banana',
							value: 'banana'
						}, {
							label: 'Apple',
							value: 'apple'
						}],
						onChange: function onChange(value) {
							props.setAttributes({ aRadioOption: value });
						}
					})
				)
			)
		), wp.element.createElement(
			Fragment,
			null,
			wp.element.createElement(
				BlockControls,
				null,
				wp.element.createElement(
					'div',
					{ className: 'components-toolbar' },
					wp.element.createElement(IconButton, {
						icon: props.attributes.preview ? 'edit' : 'welcome-view-site',
						label: props.attributes.preview ? __('Edit') : __('Preview'),
						onClick: function onClick(event) {
							event.stopPropagation();
							props.setAttributes({ preview: !props.attributes.preview });
							event.target.blur();
						},
						className: 'components-toolbar__control'
					})
				)
			),
			props.attributes.preview ? wp.element.createElement(
				'div',
				null,
				wp.element.createElement(ServerSideRender, {
					block: props.name,
					attributes: props.attributes
				})
			) : wp.element.createElement(
				'div',
				null,
				wp.element.createElement(
					Fragment,
					null,
					wp.element.createElement(TextControl, {
						type: 'text',
						placeholder: 'Text',
						value: props.attributes.aTextInput,
						onChange: function onChange(value) {
							return props.setAttributes({ aTextInput: value });
						}
					}),
					wp.element.createElement(TextareaControl, {
						type: 'text',
						placeholder: 'Text area',
						value: props.attributes.aTextArea,
						onChange: function onChange(value) {
							return props.setAttributes({ aTextArea: value });
						}
					})
				)
			)
		)];
	},
	save: function save() {
		return null;
	}
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    RichText = _wp$editor.RichText;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    ServerSideRender = _wp$components.ServerSideRender,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    RadioControl = _wp$components.RadioControl,
    SelectControl = _wp$components.SelectControl;


registerBlockType('karon/example2', {
	edit: function edit(props) {
		return [wp.element.createElement(
			Fragment,
			null,
			wp.element.createElement(
				BlockControls,
				null,
				wp.element.createElement(
					'div',
					{ className: 'components-toolbar' },
					wp.element.createElement(IconButton, {
						icon: props.attributes.preview ? 'edit' : 'welcome-view-site',
						label: props.attributes.preview ? __('Edit') : __('Preview'),
						onClick: function onClick(event) {
							event.stopPropagation();
							props.setAttributes({ preview: !props.attributes.preview });
							event.target.blur();
						},
						className: 'components-toolbar__control'
					})
				)
			),
			props.attributes.preview ? wp.element.createElement(
				'div',
				null,
				wp.element.createElement(ServerSideRender, {
					block: props.name,
					attributes: props.attributes
				})
			) : wp.element.createElement(
				'div',
				null,
				wp.element.createElement(
					Fragment,
					null,
					wp.element.createElement(TextControl, {
						type: 'text',
						placeholder: 'Text',
						value: props.attributes.typeHere,
						onChange: function onChange(value) {
							return props.setAttributes({ typeHere: value });
						}
					})
				)
			)
		)];
	},
	save: function save() {
		return null;
	}
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    RichText = _wp$editor.RichText;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    ServerSideRender = _wp$components.ServerSideRender,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    RadioControl = _wp$components.RadioControl,
    SelectControl = _wp$components.SelectControl;


registerBlockType('karon/example3', {
	edit: function edit(props) {
		return [wp.element.createElement(
			Fragment,
			null,
			props.isSelected ? wp.element.createElement(
				"div",
				null,
				wp.element.createElement(
					Fragment,
					null,
					wp.element.createElement(TextAreaControl, {
						type: "text",
						placeholder: "Text",
						value: props.attributes.textInput,
						onChange: function onChange(value) {
							return props.setAttributes({ textInput: value });
						}
					})
				)
			) : wp.element.createElement(
				"div",
				null,
				wp.element.createElement(ServerSideRender, {
					block: props.name,
					attributes: props.attributes
				})
			)
		)];
	},
	save: function save() {
		return null;
	}
});

/***/ })
/******/ ]);