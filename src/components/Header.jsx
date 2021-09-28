/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { logoutRequest } from '../actions';

import gravatar from '../utils/gravatar';

import '../assets/styles/components/Header.scss';

import logo from '../assets/images/logo-platzi-video-BW2.png';
import userIcon from '../assets/images/user-icon.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = (event) => {
    props.logoutRequest({});
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={hasUser ? gravatar(user.email) : userIcon} alt={hasUser ? user.email : ''} />
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ?
            <li><a href="/">{user.name}</a></li> :
            null
          }

          {hasUser ?
            <li><a href="#logout" onClick={handleLogout}>Cerrar sesión</a></li> :
            (
              <li>
                <Link to="/login">Iniciar Sesión</Link>
              </li>
            )
          }
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
