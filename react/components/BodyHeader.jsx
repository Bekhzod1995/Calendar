import React from 'react';
import styled from 'styled-components';
import {
	HeaderDiv,
	Text,
	TextButton,
	BodyHeadeDiv,
} from '../styles/ReusableComponents';
import addSign from '../icons/addWhite.svg';
import geo from '../icons/placeholder.svg';

const ExtendedTextButton = styled(TextButton)`
	height: 35px;
	background-color: rgb(187, 2, 2);
	color: white;
`;
const ExtendedHeader = styled(HeaderDiv)`
	height: 75px;
	border-bottom: 1px solid  #cccccc;
	justify-content: space-between;
	display: flex;
`;

const ExtendedText = styled(Text)`
	margin-left: 20px;
	font-weight: bold
`;

const Button = styled.span`
	background-color: rgb(255, 237, 157);
	padding: 15px;
	border-radius: 5px;
	color: rgb(223, 182, 0);
	font-weight: bold;
	margin-right: 10px;
	:hover {
		cursor: pointer;
	}
`;

const MobileBodyHeadeDiv = styled(BodyHeadeDiv)`
	justify-content: space-between;
	margin-right: 20px;
`;

const MobileIconDisplayYellow = styled.span`
	background-color: rgb(252, 252, 136);
	padding: 8px;
	border-radius: 5px;
	:hover {
		cursor: pointer;
	}
`;

const MobileIconDisplayRed = styled.span`
	background-color: rgb(187, 2, 2);
	padding: 8px;
	border-radius: 5px;
	margin-left: 8px;
	:hover {
		cursor: pointer;
	}
`;

const BodyHeader = () => (
	<ExtendedHeader>
		<ExtendedText>Pickup Calendar</ExtendedText>
		{window.innerWidth <= 550 ? (
			<MobileBodyHeadeDiv>
				<MobileIconDisplayYellow><img src={geo} style={{ width: 13 }} alt="geo"/></MobileIconDisplayYellow>
				<MobileIconDisplayRed><img style={{ width: 13 }} src={addSign} alt="plus" /></MobileIconDisplayRed>
			</MobileBodyHeadeDiv>
		) : (
			<BodyHeadeDiv>
				<Button>View in Map</Button>
				<ExtendedTextButton>
					<div><img style={{ width: 13 }} src={addSign} alt="" /></div>
					<p style={{ marginLeft: 8, fontSize: 13 }}>{'add event'.toUpperCase()}</p>
				</ExtendedTextButton>
			</BodyHeadeDiv>
		)}
	</ExtendedHeader>
);

export default BodyHeader;
