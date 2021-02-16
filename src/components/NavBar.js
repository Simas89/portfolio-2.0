import React from 'react';
import styled from 'styled-components';
import { Container, AppBar } from '@material-ui/core';

const StyledAppBar = styled(AppBar)`
	display: flex;
	justify-content: center;
	${(p) => p.theme.gradiendBackground};
	height: 60px;
`;

const NavBar = () => {
	return (
		<StyledAppBar>
			<Container maxWidth="lg" disableGutters>
				<img src="logo.svg" alt="logo" />
			</Container>
		</StyledAppBar>
	);
};

export default NavBar;
