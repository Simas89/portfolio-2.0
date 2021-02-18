import React from 'react';
import styled, { css } from 'styled-components';
import { Typography } from '@material-ui/core';
import { gradientText } from 'common/utils';
import Emojify from 'react-emojione';

const Div = styled.div`
	margin: ${(p) => p.theme.spacing(4)}px 0;
	${(p) =>
		p.important &&
		css`
			margin: ${(p) => p.theme.spacing(8)}px 0;
		`}
	.MuiTypography-root {
		font-family: 'Alegreya Sans SC', sans-serif;
		font-weight: 300;
		${gradientText()}
	}
`;

export const Header = ({ title, important }) => {
	return (
		<Div important={important}>
			<Typography variant={important ? 'h2' : 'h3'} align="center" id="key">
				<Emojify style={{ height: 50, width: 50 }}>{title}</Emojify>
			</Typography>
		</Div>
	);
};
