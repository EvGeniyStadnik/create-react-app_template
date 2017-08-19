import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import './Auth.css';
import { addToken } from '../../actions/actions';

class Auth extends Component {

  state = {
    loginFrom: '',
    passwordFrom: ''
  };

  handleChangeLogin = (event, value) => {
    this.setState({
      loginFrom: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    const valueLoginField = this.state.loginFrom;
    if(valueLoginField){
      dispatch(addToken(valueLoginField));
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="login">Login</label>
          <div>
            <Field
              onChange={this.handleChangeLogin}
              name="login"
              id="login"
              component="input"
              type="text"
              placeholder="Login"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div>
            <Field
              name="password"
              id="password"
              component="input"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div>
          <button type="submit">
            Submit
          </button>
          <button type="button">
            Clear Values
          </button>
        </div>

      </form>
    );
  }
}

Auth.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const AuthExport = connect(
  state => state
)(Auth);

export default reduxForm({
  form: 'Auth' // a unique identifier for this form
})(AuthExport);
// export default connect()(Auth);
