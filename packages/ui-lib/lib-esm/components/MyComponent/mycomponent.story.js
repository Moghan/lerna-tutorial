import React from "react";
import { storiesOf } from "@storybook/react";
import MyNewComponent from "./index";
const testText = "this is a test";
storiesOf("MyNewComponent", module).add("text test", () => (React.createElement(React.Fragment, null,
    React.createElement(MyNewComponent, { text: testText }),
    " ")));
