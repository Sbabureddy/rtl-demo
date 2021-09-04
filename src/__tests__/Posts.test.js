import React from "react";
import {
  cleanup,
  screen,
  render,
  within,
  waitFor,
} from "@testing-library/react";
import axios from "axios";
import Posts from "../components/Posts";

afterEach(cleanup);

jest.mock("axios");

const data = {
  data: [
    {
      id: 1,
      title: "title 1",
    },
    {
      id: 2,
      title: "title 2",
    },
    {
      id: 3,
      title: "mocked title",
    },
  ],
};

describe("<Posts />", () => {
  test("mocking axios request", async () => {
    axios.get.mockResolvedValue(data);
    const { queryByRole } = render(<Posts />);
    const loading = queryByRole("heading", {
      name: /loading\.\.\./i,
    });
    // expect(loading).toBeInTheDocument();
    await waitFor(() => loading);
    expect(loading).not.toBeInTheDocument();
  });
  test("render title to the dom", async () => {
    axios.get.mockResolvedValue(data);
    const { findByRole } = render(<Posts />);
    // const loading = getByRole('heading', {
    //   name: /loading\.\.\./i
    // });
    const list = await findByRole("list");
    // screen.logTestingPlaygroundURL(list)
    // expect(loading).toBeInTheDocument();

    const { findAllByRole } = within(list);

    const items = findAllByRole("listitem");

    expect((await items).length).toBe(3);
  });
});
