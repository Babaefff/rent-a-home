import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingDates = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };
  return (
    <div className="flex flex-row gap-4 items-center justify-center sm:mb-60">
      <DatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        selectsStart
        minDate={new Date()}
        startDate={startDate}
        endDate={endDate}
        placeholderText="Start Date"
        className="p-3 border border-gray-300 rounded-lg max-w-28 sm:max-w-48"
        required
      />
      <DatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="End Date"
        className="p-3 border border-gray-300 rounded-lg max-w-28 sm:max-w-48"
        required
      />
    </div>
  );
};

export default BookingDates;
