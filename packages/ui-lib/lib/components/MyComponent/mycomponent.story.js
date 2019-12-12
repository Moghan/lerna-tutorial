"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_2 = require("@storybook/react");
var index_1 = __importDefault(require("./index"));
var testText = "this is a test";
react_2.storiesOf("MyNewComponent", module).add("text test", function () { return (react_1["default"].createElement(react_1["default"].Fragment, null,
    react_1["default"].createElement(index_1["default"], { text: testText }),
    " ")); });
