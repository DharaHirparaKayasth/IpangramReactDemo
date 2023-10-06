import React from "react";
import { FaArrowRight } from "react-icons/fa";

function NextWeekSelector({ onNextWeek }) {
  const handleNextWeek = () => {
    onNextWeek();
  };

  return (
    <div>
      <h2>
        Next Week{" "}
        <span onClick={handleNextWeek} style={{ cursor: "pointer" }}>
          <FaArrowRight />
        </span>
      </h2>
    </div>
  );
}

export default NextWeekSelector;
