import React from "react";
import { render, waitFor, cleanup } from "@testing-library/react";

import mockedAxios from "axios";
import Test from "../components/Test";
afterEach(cleanup);
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
  const { getByText } = render(<Test />);
  await waitFor(() => {
    expect(getByText("mocked title"));
  });
});
