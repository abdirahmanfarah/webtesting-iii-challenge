// Test away

import React from 'react';
import { render } from "@testing-library/react"

import Dashboard from './Dashboard';

test('should match snapshot', () => {
  expect(render(<Dashboard />)).toMatchSnapshot();
});

test('contains display and controls', () => {
  const { queryByText, findByText } = render(<Dashboard />);

  const successDisplay = queryByText(/display/i)
  const successControls = queryByText(/controls/i)
})