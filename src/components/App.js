import React from 'react';
import Background from 'components/Background';
import Showcase from 'components/Showcase';
import Contents from 'components/Contents';
import FooterizZz from 'components/FooterizZz';
import useElemScrollsInit from 'hooks/useElemScrollsInit';

const App = () => {
	useElemScrollsInit();
	console.log('render');

	return (
		<>
			<Background />
			<Showcase />
			<Contents />
			<FooterizZz />
		</>
	);
};

export default App;
