import React from 'react';
import styled from 'styled-components';
import ParticlesMod from 'components/ParticlesMod';

const Div = styled.div`
	z-index: -1;
	position: absolute;
	position: fixed;
	height: 100%;
	width: 100%;
	background: radial-gradient(
		${(p) => p.theme.palette.gradient.light},
		${(p) => p.theme.palette.gradient.dark}
	);
`;

const Background = () => {
	return (
		<>
			<Div>
				<ParticlesMod />
			</Div>
		</>
	);
};

export default Background;
