import React from "react";
import { FaArrowLeft } from "react-icons/fa";

function PreviousWeekSelector({ onPreviousWeek }) {
  const handlePreviousWeek = () => {
    onPreviousWeek();
  };

  return (
    <div>
      <h2>
        <span onClick={handlePreviousWeek} style={{ cursor: "pointer" }}>
          <FaArrowLeft />
        </span>{" "}
        Previous Week
      </h2>
    </div>
  );
}

export default PreviousWeekSelector;
