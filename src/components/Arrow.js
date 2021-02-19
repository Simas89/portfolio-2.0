import React from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { flexCenter } from 'common/utils/cssFunctions';
import { motion } from 'framer-motion';

const Div = styled.div`
	transform: scale(0.9);
	${flexCenter()}
	${(p) =>
		p.showArrow &&
		css`
			&:hover {
				cursor: pointer;
			}
		`}


	.arrows {
		width: 60px;
		height: 72px;
	}

	.arrows path {
		stroke: ${(p) => p.theme.palette.primary.light};
		fill: transparent;
		stroke-width: 1px;
		animation: arrow 2s infinite;
		-webkit-animation: arrow 2s infinite;
	}

	@keyframes arrow {
		0% {
			opacity: 0;
		}
		40% {
			opacity: 1;
		}
		80% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	@-webkit-keyframes arrow /*Safari and Chrome*/ {
		0% {
			opacity: 0;
		}
		40% {
			opacity: 1;
		}
		80% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	.arrows path.a1 {
		animation-delay: -1s;
		-webkit-animation-delay: -1s; /* Safari 和 Chrome */
	}

	.arrows path.a2 {
		animation-delay: -0.5s;
		-webkit-animation-delay: -0.5s; /* Safari 和 Chrome */
	}

	.arrows path.a3 {
		animation-delay: 0s;
		-webkit-animation-delay: 0s; /* Safari 和 Chrome */
	}
`;

const MotionDiv = motion.custom(Div);

const Arrow = () => {
	const showArrow = useSelector(
		(state) => state.elemScrolls.windowScroll < 10
	);
	const handleClick = () => {
		if (showArrow) {
			const anchor = document.querySelector('#target-anchor');
			if (anchor) {
				anchor.scrollIntoView({ behavior: 'smooth' });
			}
		}
	};
	return (
		<MotionDiv
			showArrow={showArrow}
			onClick={handleClick}
			animate={{ opacity: showArrow ? 1 : 0 }}
			transition={{ duration: 1 }}
		>
			<svg className="arrows">
				<path className="a1" d="M0 0 L30 32 L60 0"></path>
				<path className="a2" d="M0 20 L30 52 L60 20"></path>
				<path className="a3" d="M0 40 L30 72 L60 40"></path>
			</svg>
		</MotionDiv>
	);
};

export default Arrow;
