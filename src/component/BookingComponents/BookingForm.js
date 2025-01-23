// BookingForm.js
import React, { useState } from 'react';

const BookingForm = ({
  availableTimes,
  selectedDate,
  setSelectedDate,
  updateTimes,
}) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  });

  const handleDateChange = (e) => {
    const date = e.target.value;
    setFormData({
      ...formData,
      date: date,
    });
    setSelectedDate(date); // Updating the selected date in the parent component
    updateTimes(date); // Fetch available times based on the selected date
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    // Handle form submission (API call, etc.)
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'grid',
        gap: '20px',
        maxWidth: '500px',
        margin: 'auto',
      }}
    >
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleDateChange} // This triggers state update in BookingPage
        required
      />

      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
        min="1"
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit">Submit reservation</button>
    </form>
  );
};

export default BookingForm;
