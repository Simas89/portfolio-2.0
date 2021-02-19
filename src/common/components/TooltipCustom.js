import React from 'react';
import styled from 'styled-components';
import { Tooltip, ClickAwayListener } from '@material-ui/core';

const StyledTooltip = styled((props) => (
	<Tooltip
		classes={{ popper: props.className, tooltip: 'tooltip' }}
		{...props}
	/>
))`
	// backdrop-filter: blur(4px);

	& .tooltip {
		padding: 10px;
		margin: 0;
		background: -webkit-linear-gradient(
			${(p) => p.theme.palette.primary.main},
			${(p) => p.theme.palette.primary.dark}
		);
		border: 1px solid rgba(0, 0, 0, 0.2);
	}
`;

const Contents = styled.div`
	display: flex;
	flex-direction: column;
	.MuiTypography-root {
		color: ${(p) => p.theme.palette.text.middle};
	}
`;

export const TooltipCustom = ({
	children,
	items,
	arrow,
	placement = 'bottom',
	interactive,
}) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};
	const handleClickAway = () => {
		setIsOpen(false);
	};

	return (
		<StyledTooltip
			onClick={handleClick}
			placement={placement}
			interactive={interactive}
			arrow={arrow}
			open={isOpen}
			title={
				<ClickAwayListener onClickAway={handleClickAway}>
					<Contents>{items}</Contents>
				</ClickAwayListener>
			}
		>
			{children}
		</StyledTooltip>
	);
};
