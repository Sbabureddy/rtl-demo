import { render } from "react-dom";
import { strictMode, rootElem } from "./index";

jest.mock("react-dom", () => ({
  render: jest.fn(),
}));

describe("index.js", () => {
  it("renders without crashing", () => {
    render(strictMode, rootElem);
    expect(render).toHaveBeenCalledWith(strictMode, rootElem);
  });
});
