import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
const AppointmentBanner = ({ date, setDate }) => {
    const handleDateSelect = (selectedDate) => {
        // Ensure that the selected date is not null or undefined
        if (selectedDate) {
          setDate(selectedDate);
        }
      };
  return (
    <div
      style={{ background: `url(${bg})`, backgroundSize: "cover" }}
      className="hero h-[70vh]"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} alt="" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <DayPicker mode="single" selected={date} onSelect={handleDateSelect} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
