import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header attributes", () => {
  it("should render a header with the same text passed in title prop", () => {
    render(<Header title="Task Tracker" />);
    const headerElement = screen.getByRole("heading", {
      name: /Task Tracker/i,
    });

    expect(headerElement).toBeInTheDocument();
  });
});
