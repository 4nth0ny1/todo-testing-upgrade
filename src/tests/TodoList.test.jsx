import { render, screen } from "@testing-library/react";
import TodoList from "../components/todo/TodoList";

describe("<TodoList />", () => {
  test("TodoList should mount if todos.length is NOT 0", () => {
    const todos = [{ id: 1, content: "BJJ" }];
    render(<TodoList todos={todos} />);
    const todoList = screen.getByTestId("TodoList");
    expect(todoList).toBeInTheDocument();

    const message = screen.queryByTestId("no-todos");
    expect(message).not.toBeInTheDocument();
  });

  test("Helpful message should mount if todos.length IS 0", () => {
    const todos = [];
    render(<TodoList todos={todos} />);

    const todoList = screen.queryByTestId("TodoList");
    expect(todoList).not.toBeInTheDocument();

    const message = screen.getByTestId("no-todos");
    expect(message).toBeInTheDocument();
  });
});
