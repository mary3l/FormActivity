/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { render, screen, fireEvent } from "@testing-library/react";
// eslint-disable-next-line no-unused-vars
import App from "../src/App";
import { expect } from "vitest";

describe("App", () => {
  it("should render the App", () => {
    render(<App />);
    // eslint-disable-next-line no-unused-vars
    const appContainer = screen.getByTestId("app-container");
    expect(appContainer).toBeInTheDocument();
  });

  it("should enable the button if two textboxes are typed", () => {
    render(<App />);
    const usernameInput = screen.getByLabelText("Username");
    const passwordInput = screen.getByLabelText("Password");
    const button = screen.getByText("Login");
    expect(button).toBeDisabled();

    fireEvent.change(usernameInput, { target: { value: "test" } });

    expect(button).toBeDisabled();

    fireEvent.change(passwordInput, { target: { value: "test" } });

    expect(button).not.toBeDisabled();
  });
});
