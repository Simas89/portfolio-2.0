import React from 'react';
import styled from 'styled-components';
import { Container, AppBar } from '@material-ui/core';
import { flexCenter } from 'common/utils';
import { NavBarItem } from 'common/components';

const StyledAppBar = styled(AppBar)`
	display: flex;
	justify-content: center;
	/* ${(p) => p.theme.gradiendBackground}; */
	height: 60px;
	background-color: rgba(0, 0, 0, 0.2);
	.MuiContainer-root {
		display: flex;
		justify-content: space-between;
		align-items: center;
		img {
			opacity: 0.7;
		}
		.links {
			${flexCenter()}
		}
	}
`;

const NavBar = () => {
	return (
		<StyledAppBar>
			<Container maxWidth="lg" disableGutters>
				<img src="logo.svg" alt="logo" />
				<div className="links">
					<NavBarItem title="My work" />
					<NavBarItem title="About" />
					<NavBarItem title="Contact" />
				</div>
			</Container>
		</StyledAppBar>
	);
};

export default NavBar;
