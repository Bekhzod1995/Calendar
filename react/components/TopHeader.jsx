import React from 'react';
import styled from 'styled-components';
import bell from '../icons/bell1.svg';
import chat from '../icons/chat.svg';
import user from '../icons/user.svg';
import { Text, HeaderDiv } from '../styles/ReusableComponents';

const TopHeaderDiv = styled(HeaderDiv)`
    height: 75px;
    justify-content: flex-end;
	border-bottom: 1px solid  #cccccc
`;

const Icon = styled.img.attrs((props) => ({
    src: props.src,
    alt: props.alt,
}))`
    width: 32px;
    height: 32px;
    margin-right: 20px;
    color: rgb(187, 2, 2);
    :hover {
		cursor: pointer;
	}
`;

const NotificationIcon = styled.div`
    margin-right: 20px;
    :hover {
        cursor: pointer;
    }
`;

const MobileIcon = styled(Icon)`
    width: 24px;
    height: 24px;
`;

const MobileText = styled(Text)`
    font-size: 20px;
`;

const TopHeader = () => (
    <TopHeaderDiv>
        {window.innerWidth <= 550 ? (
            <>
            <MobileIcon src={chat} alt="chat" />
            <NotificationIcon>
                <img style={{ width: 24, height: 24 }} src={bell} alt="bell" />
                <span className="Mobilebadge">4</span>
            </NotificationIcon>
            <MobileText>Hi, Mirsaid</MobileText>
            <MobileIcon src={user} alt="user" />
            </>
        ) : (
            <>
            <Icon src={chat} alt="chat" />
            <NotificationIcon>
                <img style={{ width: 32, height: 32 }} src={bell} alt="bell" />
                <span className="badge">4</span>
            </NotificationIcon>
            <Text>Hi, Mirsaid</Text>
            <Icon src={user} alt="user" />
            </>
        )}
    </TopHeaderDiv>
);

export default TopHeader;
