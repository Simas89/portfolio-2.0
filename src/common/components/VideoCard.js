import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { Typography, IconButton } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { projectData } from 'config';
import { StyledLink, TooltipCustom } from 'common/components';

const Wrapper = styled.div`
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 5px;
	overflow: hidden;

	.under-section {
		margin-top: -4px;
		height: ${(p) => p.theme.spacing(8)}px;
		padding: 0 ${(p) => p.theme.spacing(2)}px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 0.1) 0%,
			rgba(0, 0, 0, 0.2) 100%
		);
		.MuiTypography-root {
			font-family: 'Alegreya Sans SC', sans-serif;
			font-weight: 100;
		}
	}
`;

export const VideoCard = ({ projectName }) => {
	return (
		<Wrapper>
			<ReactPlayer
				url={projectData[projectName].video}
				playing
				muted
				loop
				width={'calc(100% )'}
				height={'calc(100%)'}
			/>

			<div className="under-section">
				<StyledLink
					target="_blank"
					to={{ pathname: projectData[projectName].url }}
				>
					<Typography variant="h5">
						{projectData[projectName].title}
					</Typography>
				</StyledLink>
				<TooltipCustom items={projectData[projectName].description()}>
					<IconButton disableRipple>
						<InfoOutlinedIcon />
					</IconButton>
				</TooltipCustom>
			</div>
		</Wrapper>
	);
};
