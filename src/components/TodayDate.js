import React from "react";

function TodayDate() {
  const today = new Date();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div>
      <p>{formattedDate}</p>
    </div>
  );
}

export default TodayDate;
