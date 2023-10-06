import axios from "axios"; 
import React, { useState, useEffect } from "react";

import TodayDate from "./components/TodayDate";
import TimezonePicker from "./components/TimezonePicker";
import WorkingDays from "./components/WorkingDays";
import PreviousWeekSelector from "./components/PreviousWeekSelector";
import NextWeekSelector from "./components/NextWeekSelector";
import "./App.css";

function App(){
  const [selectedTimezone, setSelectedTimezone] = useState("UTC");
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());
  const [timezoneData, setTimezoneData] = useState([]);

  useEffect(() => {
    // Read data from timezoneData.json using Axios
    axios.get("timezoneData.json")
      .then((response) => {
        setTimezoneData(response.data);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  }, []);
  
  const handlePreviousWeek = () => {
    const previousWeekStart = new Date(currentWeekStart);
    previousWeekStart.setDate(previousWeekStart.getDate() - 7);
    setCurrentWeekStart(previousWeekStart);
  };

  const handleNextWeek = () => {
    const nextWeekStart = new Date(currentWeekStart);
    nextWeekStart.setDate(nextWeekStart.getDate() + 7);
    setCurrentWeekStart(nextWeekStart);
  };
  
  const handleTimezoneChange = (event) => {
    setSelectedTimezone(event.target.value);
  };

  return (
    <div className="App">
      <div className="date-selector">
        <PreviousWeekSelector onPreviousWeek={handlePreviousWeek} />
        <TodayDate />
        <NextWeekSelector onNextWeek={handleNextWeek} />
      </div>
      <TimezonePicker selectedTimezone={selectedTimezone} onSelectTimezone={handleTimezoneChange} />
      <WorkingDays currentWeekStart={currentWeekStart} selectedTimezone={selectedTimezone}  timezoneData={timezoneData}/>
    </div>
  );
  
}
export default App;

