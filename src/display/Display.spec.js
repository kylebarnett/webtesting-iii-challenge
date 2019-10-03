// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import Display from './Display';

describe("displays 'Closed' if the closed prop is true and 'Open' if otherwise", () => {
  it("displays closed", () => {
    const { getByText } = render(<Display
      closed={true}
    />);
    let closed = getByText(/closed/i)
    expect(closed.textContent).toBe("Closed")
  })
  it("open otherwise", () => {
    const { getByText } = render(<Display
      closed={false}
    />);
    let open = getByText(/open/i)
    expect(open.textContent).toBe("Open")
  })
})