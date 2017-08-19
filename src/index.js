import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import theme from './common/components/Theme';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import AppComponent from './common/components/AppComponent';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={theme}>
    <AppComponent>
      { routes }
    </AppComponent>
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();