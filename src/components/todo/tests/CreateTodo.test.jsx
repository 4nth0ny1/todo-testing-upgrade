import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateTodo from "../ui/CreateTodo";

describe("<CreateTodo Tests />", () => {
  test("it should mount", () => {
    render(<CreateTodo />);
    const component = screen.getByTestId("CreateTodo");
    expect(component).toBeInTheDocument();
  });

  test("should render an input field for todo", () => {
    render(<CreateTodo />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  test("should render a button to submit the form", () => {
    render(<CreateTodo />);
    const button = screen.getByRole("button", { text: /add item/i });
    expect(button).toBeInTheDocument();
  });

  test("button should be disabled when the input doesn't have any text", () => {
    render(<CreateTodo />);
    const button = screen.getByRole("button", { text: /add item/i });
    expect(button).toBeDisabled();
  });

  test("button should NOT be disabled when the input has text in it", () => {
    render(<CreateTodo />);
    const button = screen.getByRole("button", { text: /add item/i });
    const input = screen.getByRole("textbox");

    userEvent.type(input, "Mow my lawn");

    expect(button).toBeEnabled();
  });

  test("when the button is pressed, it should trigger a callback function with the value of the input as an argument", () => {
    const buttonCallback = jest.fn();

    render(<CreateTodo onNewItem={buttonCallback} />);

    const button = screen.getByRole("button", { text: /add item/i });
    const input = screen.getByRole("textbox");

    userEvent.type(input, "Mow my lawn");
    userEvent.click(button);

    expect(buttonCallback).toBeCalledTimes(1);
  });
});
