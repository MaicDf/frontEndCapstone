// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BookingForm from './component/BookingComponents/BookingForm';

test('Renders the "Choose date" label', () => {
  render(<BookingForm />); // Render the BookingForm component
  const labelElement = screen.getByLabelText('Choose date'); // Find the label element by its text
  expect(labelElement).toBeInTheDocument(); // Ensure the label is rendered
});
