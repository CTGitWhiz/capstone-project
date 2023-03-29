import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import ImageList from "../pages/components/ImageList";

test("renders ImageList component", () => {
  render(<ImageList />);
});
