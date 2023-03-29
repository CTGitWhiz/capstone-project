import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Navigation from "../pages/components/Navigation";

test("renders Navigation with two NavItems", () => {
  const { getByText } = render(<Navigation />);
  const homeLink = getByText("[Home]");
  const supremeGalleryLink = getByText("[Supreme Gallery]");

  expect(homeLink).toBeInTheDocument();
  expect(supremeGalleryLink).toBeInTheDocument();
});
