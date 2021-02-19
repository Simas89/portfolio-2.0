import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: { main: '#2E4057' },
		text: {
			middle: 'rgba(255, 255, 255, 0.85)',
		},
		gradient: {
			light: '#2E4057',
			dark: 'black',
		},
	},
	gradiendBackground: {
		background: 'linear-gradient(0deg,#1E73B6 0%,#44B7ED 100%)',
	},
});

export default theme;
