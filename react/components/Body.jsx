import React from 'react';
import styled from 'styled-components';
import { BodyContainer } from '../styles/ReusableComponents';
import BodyHeader from './BodyHeader';
import BigCalendar from './BigCalendar';
import SmallCalendar from './SmallCalendar';

const CalendarContainer = styled.div`
	margin: 25px;
`;

const checkWidth = () => {
	if (window.innerWidth >= 550) {
		return <BigCalendar />;
	}
	return <SmallCalendar />;
};

const Body = () => (
	<BodyContainer>
		<BodyHeader />
		<CalendarContainer>
			{checkWidth()}
		</CalendarContainer>
	</BodyContainer>
);

export default Body;
