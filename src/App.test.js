import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("<App />", () => {
  test("renders the title of the app", () => {
    render(<App />);
    const linkElement = screen.getByText(/todo app/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("CreateTodo should mount", () => {
    render(<App />);
    const createTodo = screen.getByTestId("CreateTodo");
    expect(createTodo).toBeInTheDocument();
  });

  test("the CreateTodo should update state when callback is triggered with data", async () => {
    render(<App />);

    const button = screen.getByRole("button", { text: /add item/i });
    const input = screen.getByTestId("input");

    userEvent.type(input, "Mow the lawn");
    userEvent.click(button);

    const todoItem = screen.getByText("Mow the lawn");

    expect(todoItem).toBeInTheDocument();
  });
});
