// Test away
import React from "react";
import { render, fireEvent } from "react-testing-library";
import Controls from '../controls/Controls';
import Display from '../display/Display';
import Dashboard from "./Dashboard";

//Make sure controls renders correctly

test("Controls renders without crashing", () => {
  const toggleLocked = jest.fn()
  const toggleClosed = jest.fn()
  render(<Controls
    locked={false}
    closed={false}
    toggleLocked={toggleLocked}
    toggleClosed={toggleClosed}
  />);
});

//Make sure display renders correctly

test("Display renders without crashing", () => {
  render(<Display
    locked={false}
    closed={false}
  />);
});

//Gate - defaults to unlocked and open & cannot be open or closed if it is locked.

test("defaults to unlocked and open", () => {
  const { getByText } = render(<Display
  />);
  const getUnlockedText = getByText(/unlocked/i)
  const getOpenText = getByText(/open/i)
});

//Display component part
