import React from 'react';
import styled from 'styled-components';
import { flexCenter, gradientText } from 'common/utils';
import { Typography } from '@material-ui/core';
import Arrow from 'components/Arrow';

const Div = styled.div`
	width: 100%;
	height: 100vh;
	${flexCenter()}
	.kicker {
		position: relative;
		${flexCenter()}
		gap: ${(p) => p.theme.spacing(8)}px;
		background-color: rgba(0, 0, 0, 0.2);
		width: 100%;
		.headings {
			${gradientText('white', 'rgb(170, 170, 185)')}
			.MuiTypography-h1 {
				font-family: 'Alegreya Sans SC', sans-serif;
				font-weight: 100;
			}
			.MuiTypography-h4 {
				font-family: 'Alegreya Sans SC', sans-serif;
				font-weight: 300;
			}
			/* border: 1px solid rgba(255, 255, 255, 0.2); */
			height: 100%;
			margin: 0;
		}
		.me {
			background-image: url('img/transparent.PNG');
			background-size: cover;
			background-position: center;
			height: 350px;
			width: 350px;
			border: 1px solid rgba(255, 255, 255, 0.5);
			backdrop-filter: blur(4px);
			/* border-radius: 50%; */
		}
	}
	.arrow-spot {
		position: absolute;
		bottom: 0;
		width: 100px;
		height: 100px;
	}
`;

const Showcase = () => {
	return (
		<Div>
			<div className="kicker">
				<div className="headings">
					<Typography variant="h1">Simas Zurauskas</Typography>
					<Typography variant="h4">Full-Stack MERN Developer</Typography>
				</div>

				<div className="me" />
			</div>
			<div className="arrow-spot">
				<Arrow />
			</div>
		</Div>
	);
};

export default Showcase;
