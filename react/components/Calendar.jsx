import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => (
	<FullCalendar
		plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
		initialView="dayGridMonth"
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
		hiddenDays={[0]}
	/>
);

export default Calendar;
