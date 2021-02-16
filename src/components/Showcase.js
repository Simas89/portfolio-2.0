import React from 'react';
import styled from 'styled-components';
import { flexCenter } from 'common/utils';

const Div = styled.div`
	width: 100%;
	height: 100vh;
	/* background-image: url('img/sky.jpg');
	background-size: cover;
	background-position: center; */
	${flexCenter('column')}
`;

const Showcase = () => {
	return (
		<Div>
			<p>123</p>
			<p>123</p>
		</Div>
	);
};

export default Showcase;
