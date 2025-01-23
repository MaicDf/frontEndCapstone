import { render, screen } from '@testing-library/react';
import { initializeTimes } from './component/Booking/';
import { updateTimes } from './component/Booking/';

test('initializeTimes returns the correct available times', () => {
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});

test('updateTimes returns the same available times', () => {
  const selectedDate = '2025-01-25';
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];

  // Call updateTimes with the selected date
  const result = updateTimes(selectedDate);
  expect(result).toEqual(expectedTimes);
});
