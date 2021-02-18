import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const Div = styled.div`
	margin: 0 ${(p) => p.theme.spacing(2)}px;
	&:hover {
		cursor: pointer;
	}
`;

export const NavBarItem = ({ title }) => {
	const handleClick = () => {};
	return (
		<Div onClick={handleClick}>
			<Typography variant="button">{title}</Typography>
		</Div>
	);
};
