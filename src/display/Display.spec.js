// Test away!

import React from 'react';
import { queryByText, findByText, render, fireEvent } from '@testing-library/react';

import Display from './Display';

test('it renders correctly', () => {
  render(<Display />);
});

test('if gate is open or closed', () => {
  const closedGateMock = jest.fn();
  const { getByText } = render(
    <Display locked={closedGateMock}  />
  );
})

test('displays Closed', () => {
  const successClosedMock = jest.fn();
  const { queryByText }= render(
    <Display closed={successClosedMock} />
  ) 
  // queryByDisplayValue(/closed/i);
  // expect(successClosed).toHaveBeenCalled();
})