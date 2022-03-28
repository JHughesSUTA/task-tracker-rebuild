import { render, screen } from '@testing-library/react'
import Button from "../Button"

describe("button attributes", () => {
  it("should render same text passed in text prop", () => {
    render(<Button text="Add" />)
    const buttonElement = screen.getByRole("button", { name: /add/i })

    expect(buttonElement).toBeInTheDocument()
  })
})