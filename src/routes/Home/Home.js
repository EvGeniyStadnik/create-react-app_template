import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

import styles from './Home.css';

const style = {
  buttonStyle: {
    margin: 12
  },
  labelStyle: {
    color: 'red'
  }
};

const Home = ({ token, title, icon, onClick, href, ...rest }) => (
  <div>
    <div className={styles.headerColor}>Home component</div>
    <div>{token}</div>
    <RaisedButton
      label={title}
      labelColor={rest.labelColor || 'yellow'}
      labelPosition="after"
      labelStyle={{ ...style.labelStyle, ...rest.labelStyle }}
      href={href}
      onClick={onClick}
      icon={icon}
      style={style.buttonStyle}
      {...rest}
      primary
    />
  </div>
);

Home.defaultProps = {
  token: '',
  title: 'Button',
  icon: null,
  href: null,
  onClick: () => {}
};

Home.propTypes = {
  token: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.node,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export default connect(
  store => {
    return {
      token: store.token
    };
  }
)(Home);
