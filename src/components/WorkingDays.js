import React, { useState, useEffect } from "react";
import CheckboxGenerator from "./CheckboxGenerator";
import "../App.css";

function WorkingDays({ currentWeekStart, selectedTimezone, timezoneData }) {
  const [workingDays, setWorkingDays] = useState([]);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const generateWorkingDays = () => {
    const startDate = new Date(currentWeekStart);
    const timezoneOffset = startDate.getTimezoneOffset();
    startDate.setMinutes(startDate.getMinutes() - timezoneOffset);

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const currentDayIndex = currentDate.getDay();
    const currentDay = daysOfWeek[currentDayIndex];

    const workingDays = [];
    let daysAdded = 0;

    for (let i = currentDayIndex; daysAdded < 5; i++) {
      const dayIndex = i % 7;
      const currentDay = daysOfWeek[dayIndex];

      if (currentDay !== "Sat" && currentDay !== "Sun") {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + daysAdded);
        workingDays.push({ date: currentDate, day: currentDay });
        daysAdded++;
      }
    }
    setWorkingDays(workingDays);
  };

  useEffect(() => {
    generateWorkingDays();
  }, [currentWeekStart, selectedTimezone]);

  return (
    <div>
      <ul className="working-days">
        {workingDays.map((dayInfo, index) => (
          <li key={index} className="working-day">
            <div className="day">{dayInfo.day}</div>
            <div className="date">{dayInfo.date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric"
            })}</div>
            <CheckboxGenerator data={timezoneData} currentDate={dayInfo.date} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkingDays;