import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Particles from 'react-particles-js';
import { particlesConfig1 } from 'config';
import { particlesContainerSizeSelector } from 'redux/slices/elemScrollsSlice';
import { motion } from 'framer-motion';

const Div = styled.div`
	position: absolute;
	width: 100%;
`;

const MotionDiv = motion.custom(Div);

const ParticlesMod = () => {
	const windowScroll = useSelector((state) => state.elemScrolls.windowScroll);
	const containerSize = useSelector(particlesContainerSizeSelector);

	const variants = {
		initial: {
			y: 0,
		},
		animate: {
			y: -windowScroll * 0.25,
			transition: {
				type: 'spring',
				mass: 1,
				damping: 100,
				tension: 500,
			},
		},
	};
	return (
		<MotionDiv variants={variants} animate="animate">
			<Particles params={particlesConfig1} height={`${containerSize}px`} />
		</MotionDiv>
	);
};

export default ParticlesMod;
