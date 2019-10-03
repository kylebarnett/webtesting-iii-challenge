// Test away
import React from "react";
import { render, fireEvent } from "react-testing-library";
import Controls from '../controls/Controls';
import Display from '../display/Display';
import Dashboard from "./Dashboard";

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

test("Display renders without crashing", () => {
  render(<Display
    locked={false}
    closed={false}
  />);
});