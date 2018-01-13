import React from 'react';
import ReactDom from 'react-dom';
import App from './container/app.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDom.render(
	<MuiThemeProvider>
		<App />
	</MuiThemeProvider>
	,document.getElementById('app')
);