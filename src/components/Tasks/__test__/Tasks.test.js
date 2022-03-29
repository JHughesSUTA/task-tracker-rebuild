import { render, screen, fireEvent } from '@testing-library/react'
import Tasks from '../Tasks'

// const mockedDeleteTask = jest.fn();
const tasks = [{
      id: 1,
      text: "take banjo out",
      day: "tuesday",
      reminder: false,
    },
    {
      id: 2,
      text: "take trixie out",
      day: "Wednesday",
      reminder: true,
    },
    {
      id: 3,
      text: "get haircut",
      day: "noon",
      reminder: false,
    },
    {
      id: 4,
      text: "study webpack",
      day: "this evening",
      reminder: false,
    }
  ]

it("should render multiple tasks", () => {
  // const tasks = [{
  //     id: 1,
  //     text: "take banjo out",
  //     day: "tuesday",
  //     reminder: false,
  //   },
  //   {
  //     id: 2,
  //     text: "take trixie out",
  //     day: "Wednesday",
  //     reminder: true,
  //   },
  //   {
  //     id: 3,
  //     text: "get haircut",
  //     day: "noon",
  //     reminder: false,
  //   },
  //   {
  //     id: 4,
  //     text: "study webpack",
  //     day: "this evening",
  //     reminder: false,
  //   }
  // ]

  // render (<Tasks tasks={tasks} />)
  // const taskElements = screen.getAllByTestId("task")
  // expect(taskElements.length).toBe(4)
})

// it("should remove task from list when deleted", () => {
//   render(<Tasks tasks={tasks} onDelete={mockedDeleteTask} />);

//   const buttonElement = screen.getByTestId("delete-button=1");
//   const taskElement = screen.getByTestId("task: take banjo out");

//   expect(taskElement).toBeInTheDocument()
//   fireEvent.click(buttonElement)
//   expect(taskElement).not.toBeInTheDocument()
// });