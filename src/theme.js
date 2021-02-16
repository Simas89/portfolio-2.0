import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		gradient: {
			light: '#2E4057',
			// dark: blueGrey[900],
			dark: 'black',
			// dark: '#2E4057',
		},
	},
	gradiendBackground: {
		background: 'linear-gradient(0deg,#1E73B6 0%,#44B7ED 100%)',
	},
});

export default theme;
