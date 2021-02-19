import React from 'react';
import styled from 'styled-components';
import { Container, IconButton, Box, Typography } from '@material-ui/core';
import { flexCenterBetween } from 'common/utils/cssFunctions';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = styled.footer`
	position: relative;
	height: 150px;
	width: 100%;
	border-top: 1px solid rgba(0, 0, 0, 0.3);
	background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 0.1) 0%,
		rgba(0, 0, 0, 0.2) 100%
	);
	.MuiContainer-root {
		height: 100px;
	}
	.MuiBox-root {
		${flexCenterBetween()}
		height: 100%;
	}
	.MuiTypography-root {
		padding-bottom: ${(p) => p.theme.spacing(2)}px;

		width: 100%;
		display: inline-block;
	}
`;

const FooterizZz = () => {
	return (
		<Footer>
			<Container maxWidth="lg">
				<Box>
					<IconButton>
						<MailOutlineIcon />
					</IconButton>
					<IconButton>
						<SmartphoneIcon />
					</IconButton>
					<IconButton>
						<LocationOnIcon />
					</IconButton>
					<IconButton>
						<LinkedInIcon />
					</IconButton>
					<IconButton>
						<GitHubIcon />
					</IconButton>
				</Box>
				<Typography align="center" variant="body1" color="textSecondary">
					simaszurauskas.dev 2021
				</Typography>
			</Container>
		</Footer>
	);
};

export default FooterizZz;
