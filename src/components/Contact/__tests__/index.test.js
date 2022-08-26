import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

// will ensure that after each test, we won't have any leftover memory data that could give us false results
afterEach(cleanup);

describe("Contact component", () => {
  // First Test- baseline test to verify component is rendering
  it("renders", () => {
    render(<ContactForm></ContactForm>);
  });
  //   Second Test- test case to compare versions of the DOM node structure
  it("matches snapshot DOM node structure", () => {
    // render Nav
    const { asFragment } = render(<ContactForm></ContactForm>);
    expect(asFragment()).toMatchSnapshot();
  });
});

// test to ensure H1 is visible
describe("H1 is visible", () => {
  it("includes the Contact Me text", () => {
    // Arrange
    const { getByTestId } = render(<ContactForm></ContactForm>);
    // Assert
    expect(getByTestId("h1")).toHaveTextContent("Contact Me");
    expect(getByTestId("btn")).toHaveTextContent("Submit");
  });
});
