import { render, screen, act } from "@testing-library/react";
import TodoList from "../components/todo/TodoList";

describe("<TodoList />", () => {
  test("it should mount", () => {
    render(<TodoList />);
    const todoList = screen.getByTestId("TodoList");
    expect(todoList).toBeInTheDocument();
  });

  test("it should render a helpful message when no items are passed to it", () => {
    render(<TodoList />);
    const message = screen.getByText("There are no items in your list.");
    expect(message).toBeInTheDocument();
  });

  test("it should render a set of TodoItems when items are passed to it", () => {
    const todoItems = [
      { id: 1, content: "Go" },
      { id: 2, content: "Sure" },
    ];

    render(<TodoList items={todoItems} />);

    const renderedItem1 = screen.getByText(todoItems[0].content);
    const renderedItem2 = screen.getByText(todoItems[1].content);

    expect(renderedItem1.innerHTML).toBe("Go");
    expect(renderedItem2.innerHTML).toBe("Sure");
  });

  test("it should NOT render a helpful message when no items are passed to it", () => {
    const todoItems = [
      { id: 1, content: "Stop" },
      { id: 2, content: "No Way" },
    ];

    render(<TodoList items={todoItems} />);

    const message = screen.queryByText("There are no items in your list.");
    expect(message).not.toBeInTheDocument();
  });
});
