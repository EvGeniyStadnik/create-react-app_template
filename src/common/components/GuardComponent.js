import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Home from '../../routes/Home';

const GuardComponent = ({ token, children }) => {

  if (token == 'Home') {
    return (
      <div>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
      </div>
    );
  }

  return (
    <div>
      { children }
    </div>
  );
};

GuardComponent.propTypes = {
  children: PropTypes.node.isRequired,
  token: PropTypes.string.isRequired
};

export default connect(state => state)(GuardComponent);