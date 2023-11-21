/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { render, screen } from "@testing-library/react";
// eslint-disable-next-line no-unused-vars
import InputField from "./inputField";
import { expect } from "vitest";

describe("InputField", () => {
  it("should render the InputField", () => {
    render(<InputField />);
    // eslint-disable-next-line no-unused-vars
    const inputField = screen.getByRole("textbox");
    expect(inputField).toBeInTheDocument();
  });

  it("it should be typed", () => {
    render(<InputField />);
    // eslint-disable-next-line no-unused-vars
    const textbox = screen.getByRole("textbox");
    expect(textbox).toBeEnabled();
  });

  it("should render the label", () => {
    render(<InputField id="username" type="text" label="Username" />);
    render(<InputField id="username" type="text" label="Password" />);
    const textLabel = screen.getByText("Username");
    const textLabel2 = screen.getByText("Password");
    expect(textLabel).toBeInTheDocument();
    expect(textLabel2).toBeInTheDocument();
  });
});
