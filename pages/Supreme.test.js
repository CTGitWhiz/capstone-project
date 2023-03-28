import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Supreme from "./Supreme";

describe("Supreme", () => {
  it("renders the Supreme title", () => {
    render(<Supreme />);
    const title = screen.getByText("Top-Rated Images Showcase");
    expect(title).toBeInTheDocument();
  });
});
