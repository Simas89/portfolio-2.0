export const variantShiftAndFadeIn = {
	initial: {
		y: 60,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			type: 'tween',
			ease: 'easeOut',
			duration: 0.8,
			delay: 0.1,
		},
	},
};
export const variantPopIn = {
	initial: {
		y: 150,
		opacity: 0,
		scale: 0.3,
	},
	animate: {
		y: 0,
		opacity: 1,
		scale: 1,
		transition: {
			type: 'spring',
			stiffness: 150,
			mass: 2,
			damping: 25,
			restSpeed: 0.001,
			restDelta: 0.001,
			delay: 0.5,
		},
	},
};
