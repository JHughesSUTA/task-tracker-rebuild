import { render, screen } from '@testing-library/react'
import Task from "../Task"

describe("task", () => {
  it("should render same text passed in through prop", () => {
    const task = {
      id: 2,
      text: "feed dog",
      day: "Wednesday",
      reminder: true,
    }
    
    render(
      <Task text={task.text} task={task}/>
    )
    
    const h3Element = screen.getByText(/feed dog/i)
    expect(h3Element).toBeInTheDocument()
  })
})