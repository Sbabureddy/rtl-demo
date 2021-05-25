import React from "react";
import ReactDOM from "react-dom";
import { strictMode, rootElem } from "./index";

jest.mock("react-dom", () => ({
  render: jest.fn(),
}));

describe("index.js", () => {
  it("renders without crashing", () => {
    ReactDOM.render(strictMode, rootElem);
    expect(ReactDOM.render).toHaveBeenCalledWith(strictMode, rootElem);
  });
});
