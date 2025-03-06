import { render, screen } from "@testing-library/react";
import LoginPage from "../src/app/login/page";

test("renders login page", () => {
  render(<LoginPage />);
  expect(screen.getByText("Sign in with Google")).toBeInTheDocument();
});
