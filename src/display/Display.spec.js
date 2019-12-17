// Test away!

import React from 'react';
import { render } from "@testing-library/react";

import Display from "./Display";


test('Is Locked being displayed', () => {
  const { getByTestId, rerender } = render(<Display />)
  getByTestId('locked');

    rerender(<Display />);
    getByTestId('closed');
} )