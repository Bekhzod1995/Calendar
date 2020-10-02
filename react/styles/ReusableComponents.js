import styled from 'styled-components';

export const Text = styled.div`
    margin-right: 20px;
    margin-top: 5px;
	font-size: 20px;
	margin-bottom: 0
`;

export const HeaderDiv = styled.div`
	height: 54px;
	background-color: white;
	display: flex;
	align-items: center;
`;

export const TextButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fcb4b4;
	height: 20px;
	padding: 5px;
	border-radius: 5px;
	color: rgb(187, 2, 2);
	font-weight: bold;
	:hover {
		cursor: pointer;
	}
`;

export const BodyContainer = styled.div`
	margin: 32px;
	background-color: white;
	height: 100%;
`;

export const BodyHeadeDiv = styled.div`
	display: flex;
	align-items: center;
	margin-right: 20px;
`;
