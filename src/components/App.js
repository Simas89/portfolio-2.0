import React from 'react';
import Background from 'components/Background';
import Showcase from 'components/Showcase';
import Contents from 'components/Contents';
import NavBar from 'components/NavBar';
import useElemScrollsInit from 'hooks/useElemScrollsInit';

const App = () => {
	useElemScrollsInit();
	console.log('render');

	return (
		<>
			<Background />
			<NavBar />
			<Showcase />
			<Contents />
		</>
	);
};

export default App;
