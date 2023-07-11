import { render, screen } from "@testing-library/react";
import TodoItem from "../components/todo/TodoItem";

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
});
