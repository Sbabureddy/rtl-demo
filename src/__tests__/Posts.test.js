import React from "react";
import { cleanup, screen, render, waitFor } from "@testing-library/react";
import mockedAxios from "axios";
import Posts from "../components/Posts";

afterEach(cleanup);

describe("<Posts />", () => {
  test("mocking axios request", async () => {
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
    mockedAxios.get.mockResolvedValueOnce(data);
    const { getByText } = render(<Posts />);
    await screen.findByText(/loading/i);
    await waitFor(() => {
      expect(getByText("mocked title"));
    });
  });
});
