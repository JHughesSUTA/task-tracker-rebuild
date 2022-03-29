import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("should show that there are no tasks left when there are no tasks", () => {
    // const tasks = []
    // render(<App />);
    // const noTasksElement = screen.getByText(/there are no tasks left/i);
    // expect(noTasksElement).toBeInTheDocument();
  });

  it("should show new task in list after adding", () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText(/add text/i);
    const buttonElement = screen.getByRole("button", {
      name: /save task/i,
    });

    fireEvent.change(inputElement, { target: { value: "do something" } });
    fireEvent.click(buttonElement);

    const taskElement = screen.getByTestId("task: do something");
    expect(taskElement).toBeInTheDocument();
  });
});