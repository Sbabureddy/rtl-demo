import React from "react";
import { cleanup, fireEvent, screen, render } from "@testing-library/react";
import Counter from "../components/Counter";

afterEach(cleanup);

describe("<Counter />", () => {
  it("count incremented button clicks", () => {
    const incFn = jest.fn();
    const { getByTestId, getByRole } = render(<Counter />);
    const plusBtn = getByRole("button", {
      name: /\+/i,
    });
    const counter = getByTestId("count");
    fireEvent.click(plusBtn);
    expect(counter).toHaveTextContent("You Clicked - 1 times");
  });

  it("count decremented button clicks", () => {
    const { getByTestId, getByRole } = render(<Counter />);
    const negBtn = getByRole("button", {
      name: /\-/i,
    });
    const counter = getByTestId("count");
    fireEvent.click(negBtn);
    expect(counter).toHaveTextContent("You Clicked - -1 times");
  });
  it("count reset button clicks", () => {
    const { getByTestId, getByRole } = render(<Counter />);
    const plusBtn = getByRole("button", {
      name: /\+/i,
    });
    fireEvent.click(plusBtn);
    fireEvent.click(plusBtn);
    fireEvent.click(plusBtn);

    const negBtn = getByRole("button", {
      name: /\-/i,
    });
    const counter = getByTestId("count");
    fireEvent.click(negBtn);

    const resBtn = getByRole("button", {
      name: /reset/i,
    });

    fireEvent.click(resBtn);
    expect(counter).toHaveTextContent("You Clicked - 0 times");
  });
});
