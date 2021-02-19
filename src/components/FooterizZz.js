import React from 'react';
import styled from 'styled-components';
import { Container, IconButton, Box, Typography } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { flexCenterBetween } from 'common/utils/cssFunctions';
import { copyToClipboard } from 'common/utils/copyToClipboard';
import { TooltipCustom, StyledLink } from 'common/components';

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

		.MuiBox-root {
			${flexCenterBetween()}
			height: 100%;
			.MuiIconButton-root {
				.MuiSvgIcon-root {
					opacity: 0.7;
					transition: 0.2s;
				}
				&:hover .MuiSvgIcon-root {
					opacity: 1;
					transition: 0.2s;
				}
			}
		}

		.MuiTypography-root {
			padding-bottom: ${(p) => p.theme.spacing(2)}px;

			width: 100%;
			display: inline-block;
		}
	}
`;

const FooterizZz = () => {
	return (
		<Footer>
			<Container maxWidth="lg">
				<Box>
					<TooltipCustom
						placement="top"
						interactive
						items={
							<Typography variant="body2" color="textPrimary">
								Ipswich UK
							</Typography>
						}
					>
						<IconButton>
							<LocationOnIcon />
						</IconButton>
					</TooltipCustom>
					<TooltipCustom
						placement="top"
						interactive
						items={
							<Typography variant="body2" color="textPrimary">
								Copied to clipboard!
							</Typography>
						}
					>
						<IconButton
							onMouseDown={() => copyToClipboard('07428642217')}
						>
							<SmartphoneIcon />
						</IconButton>
					</TooltipCustom>
					<TooltipCustom
						placement="top"
						interactive
						items={
							<Typography variant="body2" color="textPrimary">
								Copied to clipboard!
							</Typography>
						}
					>
						<IconButton
							onMouseDown={() =>
								copyToClipboard('simaszurauskas@gmail.com')
							}
						>
							<MailOutlineIcon />
						</IconButton>
					</TooltipCustom>
					<StyledLink
						target="_blank"
						to={{
							pathname:
								'https://www.linkedin.com/in/simas-zurauskas-16b1a6104/',
						}}
					>
						<IconButton>
							<LinkedInIcon />
						</IconButton>
					</StyledLink>
					<StyledLink
						target="_blank"
						to={{ pathname: 'https://github.com/Simas89' }}
					>
						<IconButton>
							<GitHubIcon />
						</IconButton>
					</StyledLink>
				</Box>
				<Typography align="center" variant="body1" color="textSecondary">
					simaszurauskas.dev 2021
				</Typography>
			</Container>
		</Footer>
	);
};

export default FooterizZz;
