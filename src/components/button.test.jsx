/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { render, screen, fireEvent } from "@testing-library/react";
// eslint-disable-next-line no-unused-vars
import Button from "../components/button";
import { expect, vi } from "vitest";

describe("Button", () => {
  it("should render the Button", () => {
    render(<Button />);
    // eslint-disable-next-line no-unused-vars
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should be disabled", () => {
    render(<Button disabled={true} />);
    // eslint-disable-next-line no-unused-vars
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("should be able to clicked", () => {
    const fn = vi.fn();
    render(<Button onClick={fn} />);
    fireEvent.click(screen.getByRole("button"));
    expect(fn).toHaveBeenCalled();
  });

  it("should render the text", () => {
    render(<Button text="Login" />);
    const button = screen.getByText("Login");
    expect(button).toBeInTheDocument();
  });
});
