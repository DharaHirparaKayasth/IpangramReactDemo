import React, { useState, useEffect } from "react";

function CheckboxGenerator({ data, currentDate }) {
  const [timeIntervals, setTimeIntervals] = useState([]);

  useEffect(() => {
    generateTimeIntervals();
  }, [currentDate]);

  const generateTimeIntervals = () => {
    const intervals = [
      generateInterval("08:00 AM", "11:30 AM"),
      generateInterval("12:00 PM", "05:00 PM"),
      generateInterval("07:00 PM", "11:00 PM"),
    ];

    setTimeIntervals(intervals);
  };

  const generateInterval = (startTime, endTime) => {
    const intervals = [];
    const start = new Date(`January 1, 2023 ${startTime}`);
    const end = new Date(`January 1, 2023 ${endTime}`);

    let currentTime = new Date(start);

    while (currentTime <= end) {
      const timeString = currentTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      const matchingData = data.find(
        (item) =>
          item.Date ===
            currentDate.toISOString().slice(0, 10) && item.Time === timeString
      );

      intervals.push({ time: timeString, selected: !!matchingData });

      currentTime.setTime(currentTime.getTime() + 30 * 60 * 1000);
    }

    return intervals;
  };

  const handleCheckboxClick = (lineIndex, index) => {
    const updatedIntervals = [...timeIntervals];
    updatedIntervals[lineIndex][index].selected = !updatedIntervals[lineIndex][index].selected;
    setTimeIntervals(updatedIntervals);
  };

  const renderCheckboxes = () => {
    return timeIntervals.map((line, lineIndex) => (
      <div key={lineIndex}>
        {line.map((interval, index) => (
          <div key={index} style={{ display: "inline-block", marginRight: "10px" }}>
            <input
              type="checkbox"
              checked={interval.selected}
              onChange={() => handleCheckboxClick(lineIndex, index)}
            />
            {interval.time}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div>
      {renderCheckboxes()}
    </div>
  );
}

export default CheckboxGenerator;