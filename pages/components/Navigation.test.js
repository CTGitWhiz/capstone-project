import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Navigation", () => {
  it("renders the navigation links", () => {
    render(<Navigation />);
    const homeLink = screen.getByLabelText("PicJudge Home");
    const supremeLink = screen.getByLabelText("Supreme Page");

    expect(homeLink).toBeInTheDocument();
    expect(supremeLink).toBeInTheDocument();
  });
});
