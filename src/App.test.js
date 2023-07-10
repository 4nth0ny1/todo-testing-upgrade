import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the title of the app", () => {
  render(<App />);
  const linkElement = screen.getByText(/todo app/i);
  expect(linkElement).toBeInTheDocument();
});
