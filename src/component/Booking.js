import './styles/booking.css';
import React, { useReducer, useState, useEffect } from 'react';
import BookingForm from './BookingComponents/BookingForm';

// External API link to get available times (correct URL)
const fetchAPI = async (date) => {
  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/courseraap/capstone/main/api.js?date=${date}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch available times for date: ${date}`);
    }
    const data = await response.json();
    return data.times; // Adjust according to your API response format
  } catch (error) {
    console.error('Error fetching available times:', error);
    return []; // Return an empty array on error
  }
};

// Reducer function for updating available times in the state
const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.availableTimes;
    default:
      return state;
  }
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);
  const [selectedDate, setSelectedDate] = useState('');

  // Function to initialize available times using today's date
  const initializeTimes = async () => {
    const today = new Date().toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    const fetchedTimes = await fetchAPI(today);
    dispatch({ type: 'UPDATE_TIMES', availableTimes: fetchedTimes });
  };

  // Fetch initial available times on component mount
  useEffect(() => {
    initializeTimes(); // Fetch available times for today's date
  }, []);

  // Update available times based on selected date
  const updateTimes = async (date) => {
    setSelectedDate(date); // Update selected date in the state
    const fetchedTimes = await fetchAPI(date);
    dispatch({ type: 'UPDATE_TIMES', availableTimes: fetchedTimes });
  };

  return (
    <div>
      <h1>Little Lemon Table Booking</h1>
      <BookingForm
        availableTimes={availableTimes}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        updateTimes={updateTimes}
      />
    </div>
  );
};

export default BookingPage;
