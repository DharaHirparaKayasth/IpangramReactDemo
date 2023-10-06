import timezoneData from "../timezoneData.json";

function TimezonePicker({ selectedTimezone, onSelectTimezone }) {
  return (
    <div className="timezone-picker">
      <h2>Timezone:</h2>
      <select value={selectedTimezone} onChange={onSelectTimezone}>
        {timezoneData.map((timezone) => (
          <option key={timezone.value} value={timezone.value}>
            {timezone.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TimezonePicker