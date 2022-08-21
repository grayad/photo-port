import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

// will ensure that after each test, we won't have any leftover memory data that could give us false results
afterEach(cleanup);

describe("About component", () => {
  // First Test- baseline test to verify component is rendering
  it("renders", () => {
    render(<About />);
  });
  //   Second Test- test case to compare versions of the DOM node structure
  it("matches snapshot DOM node structure", () => {
    // render About
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
