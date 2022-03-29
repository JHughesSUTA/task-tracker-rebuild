import { render, screen } from '@testing-library/react'
import Task from "../Task"

describe("task", () => {
  it("should render same text passed in through prop", () => {
    render(
      <Task text={"this is a task"} />
    )
    
    const h3Element = screen.getByText(/this is a task/i)
    expect(h3Element).toBeInTheDocument()
  })
})