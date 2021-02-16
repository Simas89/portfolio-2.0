import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Particles from 'react-particles-js';
import { particlesConfig1 } from 'config';

const StyledParticles = styled(Particles)`
	top: 50px;
	position: absolute;
	height: 100%;
	width: 100%;
	border: 1px solid red;
`;

const ParticlesMod = () => {
	const windowScroll = useSelector((state) => state.elemScrolls.windowScroll);
	return <StyledParticles params={particlesConfig1} />;
};

export default ParticlesMod;
