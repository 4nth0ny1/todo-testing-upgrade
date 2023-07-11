import { render, screen } from "@testing-library/react";
import TodoItem from "../components/todo/TodoItem";
import userEvent from "@testing-library/user-event";

describe("<TodoItem />", () => {
  test("if props are not empty, TodoItem should mount", () => {
    const todo = { id: 1, content: "test content" };
    render(<TodoItem todo={todo} />);
    const component = screen.getByTestId("TodoItem");
    expect(component).toBeInTheDocument();
  });

  test("should render the props correctly", () => {
    const todo = { id: 1, content: "test content" };
    render(<TodoItem todo={todo} />);
    const content = screen.getByTestId("content");
    expect(content).toBeInTheDocument();
  });

  test("should render a delete button", () => {
    const todo = { id: 1, content: "test content" };
    render(<TodoItem todo={todo} />);
    const deleteButton = screen.getByTestId("delete-button");
    expect(deleteButton).toBeInTheDocument();
  });

  test("click on deleteButton should trigger callback", () => {
    const deleteButtonCallback = jest.fn();

    const todo = { id: 1, content: "test content" };
    render(<TodoItem todo={todo} deleteTodo={deleteButtonCallback} />);
    const deleteButton = screen.getByTestId("delete-button");

    userEvent.click(deleteButton);

    expect(deleteButtonCallback).toBeCalledTimes(1);
  });
});
