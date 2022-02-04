import React from 'react';
import { render, screen } from '@testing-library/react';
import Manager from './components/manager/Manager';

test('renders learn react link', () => {
  render(<Manager />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
