import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const calendarFormatSize = () => {
	const width = window.innerWidth;
	if (width >= 1200) {
		return 'desktop';
	}
	if (width >= 768) {
		return 'laptop';
	}
	return 'mobile';
};

const hideWeekDays = (width) => {
	if (width === 'desktop') {
		return [0];
	}
	return [0, 4, 5, 6];
};

const CustomizedCalendar = () => {
	const [size, setSize] = useState();

	useEffect(() => {
		setSize(calendarFormatSize());
		console.log('width: ', size);
	}, []);
	return (
		<FullCalendar
			aspectRatio="3"
			plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
			headerToolbar={{
				left: 'prev,next today',
				center: 'title',
				right: 'dayGridMonth,timeGridWeek,timeGridDay',
			}}
			buttonText={{
				today: 'Today',
				month: 'Month',
				week: 'Week',
				day: 'Day',
			}}
			hiddenDays={hideWeekDays(size)}
			height="70vh"
		/>
	);
};

export default CustomizedCalendar;
