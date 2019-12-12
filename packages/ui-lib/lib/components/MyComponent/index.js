"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
exports.MyNewComponent = function (props) {
    return (react_1["default"].createElement("span", null, props.text));
};
exports["default"] = exports.MyNewComponent;
