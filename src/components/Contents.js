import React from 'react';
import styled from 'styled-components';
import { Container, Grid, Box } from '@material-ui/core';
import { Header, VideoCard } from 'common/components';
import ElemScrolls from 'components/ElemScrolls';

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
			<div id="target-anchor" />
			<Header title="Key Projects" important topHeader />
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<ElemScrolls>
						<VideoCard projectName="demoshop" />
					</ElemScrolls>
				</Grid>
				<Grid item xs={12} md={6}>
					<ElemScrolls>
						<VideoCard projectName="chat" />
					</ElemScrolls>
				</Grid>
				<Grid item xs={12} md={6}>
					<ElemScrolls>
						<VideoCard projectName="crosseris" />
					</ElemScrolls>
				</Grid>
			</Grid>
			<Header title="Secondary" />
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<ElemScrolls>
						<VideoCard projectName="cryptron" />
					</ElemScrolls>
				</Grid>
				<Grid item xs={12} md={6}>
					<ElemScrolls>
						<VideoCard projectName="social" />
					</ElemScrolls>
				</Grid>
			</Grid>
			<Header title="About Me" important />

			<Header title="Always coding B)" />
			<Box height={50} />
		</StyledContainer>
	);
};

export default Contents;
