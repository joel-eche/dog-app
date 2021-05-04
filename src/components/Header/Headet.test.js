import * as React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders learn react link", () => {
  render(<Header />);
  const titleHeader = screen.getByText("Dog App");
  expect(titleHeader).toBeInTheDocument();
});
