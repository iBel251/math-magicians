import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

test('renders the quote correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

// describe('Calculator properly functions', () => {
//     test('returns 120 after summing 56 and 64', () => {
//         render(<Calculator />)
//         fireEvent.click(screen.getByRole('button', {name: '5'}))
//         fireEvent.click(screen.getByRole('button', {name: '6'}))
//         fireEvent.click(screen.getByRole('button', {name: '+'}))
//         fireEvent.click(screen.getByRole('button', {name: '6'}))
//         fireEvent.click(screen.getByRole('button', {name: '4'}))
//         fireEvent.click(screen.getByRole('button', {name: '='}))
        
//         const result = waitFor(() => screen.getByText('120'));
//         expect(result.textContent).toBe('120');
//     })
// })