import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Supreme from "../pages/supreme";

test("renders supreme component title", () => {
  const { getByText } = render(<Supreme />);
  const title = getByText(/Top-Rated Images Showcase/i);
  expect(title).toBeInTheDocument();
});
