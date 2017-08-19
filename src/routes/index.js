import React from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import GuardComponent from '../common/components/GuardComponent';

import { configure } from '../store/configureStore';

import Auth from './Auth';
import Home from './Home';

const store = configure();

export default (
  <Provider store={store}>
    <Router>
      <Switch>
        <GuardComponent>
          <Route exact path="/" component={Auth} />
          <Route path="/home" component={Home} />
        </GuardComponent>
      </Switch>
    </Router>
  </Provider>
);