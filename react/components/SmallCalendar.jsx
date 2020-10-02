import React, { useState } from 'react';
import { Calendar } from 'react-modern-calendar-datepicker';

const App = () => {
	const [selectedDay, setSelectedDay] = useState(null);
	return (
		<Calendar
			value={selectedDay}
			onChange={setSelectedDay}
			colorPrimary="rgb(187, 2, 2)"
			calendarClassName="custom-calendar"
			calendarTodayClassName="custom-today-day"
		/>
	);
};

export default App;
