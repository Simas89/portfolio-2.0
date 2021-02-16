import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';

const StyledContainer = styled(Container).attrs({
	maxWidth: 'lg',
	disableGutters: true,
})`
	border: 1px solid gray;
	height: 500px;
`;

const Contents = () => {
	return <StyledContainer>abc</StyledContainer>;
};

export default Contents;
