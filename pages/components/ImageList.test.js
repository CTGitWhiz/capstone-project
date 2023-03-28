import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import ImageList from "./ImageList";

describe("ImageList", () => {
  const mockImages = [
    { id: 1, src: "/image1.png", alt: "My Image 1" },
    { id: 2, src: "/image2.png", alt: "My Image 2" },
    { id: 3, src: "/image3.png", alt: "My Image 3" },
    { id: 4, src: "/image4.png", alt: "My Image 4" },
    { id: 5, src: "/image5.png", alt: "My Image 5" },
    { id: 6, src: "/image6.png", alt: "My Image 6" },
    { id: 7, src: "/image7.png", alt: "My Image 7" },
    { id: 8, src: "/image8.png", alt: "My Image 8" },
    { id: 9, src: "/image9.png", alt: "My Image 9" },
    { id: 10, src: "/image10.png", alt: "My Image 10" },
    { id: 11, src: "/image11.png", alt: "My Image 11" },
    { id: 12, src: "/image12.png", alt: "My Image 12" },
    { id: 13, src: "/image13.png", alt: "My Image 13" },
    { id: 14, src: "/image14.png", alt: "My Image 14" },
    { id: 15, src: "/image15.png", alt: "My Image 15" },
    { id: 16, src: "/image16.png", alt: "My Image 16" },
    { id: 17, src: "/image17.png", alt: "My Image 17" },
    { id: 18, src: "/image18.png", alt: "My Image 18" },
    { id: 19, src: "/image19.png", alt: "My Image 19" },
    { id: 20, src: "/image20.png", alt: "My Image 20" },
  ];

  it("renders the image list", () => {
    render(<ImageList images={mockImages} />);

    mockImages.forEach((image) => {
      const img = screen.getByAltText(image.alt);
      expect(img).toBeInTheDocument();
    });
  });
});
