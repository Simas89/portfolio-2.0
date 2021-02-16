import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { variantShiftAndFadeIn as defaultVariant } from 'config';

let elemDistance = 0;

const ElemScrolls = ({
	children,
	variants = defaultVariant,
	initial = 'initial',
	animate = 'animate',
	triggerDistance = 0,
	reset = true,
	resetDistance = 300,
	className,
}) => {
	const [animationTrigger, setAnimationTrigger] = React.useState(false);
	const windowScroll = useSelector((state) => state.elemScrolls.windowScroll);
	const ref = React.useRef();

	React.useEffect(() => {
		elemDistance = ref.current.getBoundingClientRect().top;
		elemDistance = Math.trunc(elemDistance);
		elemDistance = elemDistance - window.innerHeight;

		elemDistance < triggerDistance && setAnimationTrigger(true);
		if (reset) {
			elemDistance > resetDistance && setAnimationTrigger(false);
		}
	}, [ref, windowScroll, triggerDistance, resetDistance, reset]);

	return (
		<motion.div
			className={className}
			ref={ref}
			variants={variants}
			initial={initial}
			animate={animationTrigger ? animate : initial}
		>
			{children}
		</motion.div>
	);
};

ElemScrolls.propTypes = {
	children: PropTypes.node,
	variants: PropTypes.object,
	initial: PropTypes.string,
	animate: PropTypes.string,
	triggerDistance: PropTypes.number,
	reset: PropTypes.bool,
	resetDistance: PropTypes.number,
	className: PropTypes.string,
};

export default ElemScrolls;
