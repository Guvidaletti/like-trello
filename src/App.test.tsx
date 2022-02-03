import React from 'react';
import { render, screen } from '@testing-library/react';
import LikeTrello from './LikeTrello';

test('renders learn react link', () => {
  render(<LikeTrello />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
