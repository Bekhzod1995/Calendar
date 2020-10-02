import React from 'react';
import styled from 'styled-components';
import {
    Text,
    HeaderDiv,
    TextButton,
} from '../styles/ReusableComponents';
import addSign from '../icons/add.svg';

const ExtendedFormatHeader = styled(HeaderDiv)`
    padding-left: 32px;
`;

const BottomHeader = () => (
    <ExtendedFormatHeader>
        {window.innerWidth <= 550 ? '' : <Text>Pickups schedule</Text>}
        <TextButton>
            <div><img style={{ width: 13 }} src={addSign} alt="" /></div>
            <p style={{ marginLeft: 8, fontSize: 13 }}>{'add order'.toUpperCase()}</p>
        </TextButton>
    </ExtendedFormatHeader>
);

export default BottomHeader;
