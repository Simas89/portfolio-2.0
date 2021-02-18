import React from 'react';
import styled from 'styled-components';
import { Container, Grid } from '@material-ui/core';
import { Header, VideoCard } from 'common/components';

const StyledContainer = styled(Container).attrs({
	maxWidth: 'lg',
	disableGutters: true,
})`
	/* border: 1px solid gray; */
	/* height: 2500px; */
	padding: 0 ${(p) => p.theme.spacing(2)}px;
`;

const Contents = () => {
	return (
		<StyledContainer>
			<Header title="Key Projects" important />
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<VideoCard projectName="demoshop" />
				</Grid>
				<Grid item xs={6}>
					<VideoCard projectName="chat" />
				</Grid>
				<Grid item xs={6}>
					<VideoCard projectName="crosseris" />
				</Grid>
			</Grid>
			<Header title="Secondary" />
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<VideoCard projectName="cryptron" />
				</Grid>
				<Grid item xs={6}>
					<VideoCard projectName="social" />
				</Grid>
			</Grid>
			<Header title="About Me" important />

			<Header title="Always coding B)" />
		</StyledContainer>
	);
};

export default Contents;
