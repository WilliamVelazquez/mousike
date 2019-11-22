import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import gravatar from '../../utils/gravatar';
import { logoutRequest } from '../../actions';
// import '../assets/styles/components/Header.scss';
import userIcon from '../../assets/static/user-icon.png';

const HeaderMenu = styled.menu`
  &:hover ul, &ul:hover{
    display:block
  }
  /* float:left; */
  padding:0;
  justify-self: flex-end;
`;
const HeaderUl = styled.ul`
  display: none;
  list-style: none;
  /* padding: 0px; */
  /* position: absolute; */
  /* width: 100px; */
  /* text-align: left; */
  right: 0;
  position: absolute;
  text-align: right;
  padding: 5px 15px;
  margin-right: 2px;
  border-radius: 6px;
  background-color: #262930;
  &:hover{
    display: block;
  }
  & li{
    margin:10px 0px;
    & a {
      color: white;
      text-decoration: none;
      &:hover{
        text-decoration:underline;
      }
    }
  }
`;
const HeaderMenuProfile = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  & img {
    width: 40px;
    object-fit: cover;    
    margin-right: 8px;
    border-radius: 100%;
  }
`;

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    document.cookie = 'email=';
    document.cookie = 'name=';
    document.cookie = 'id=';
    document.cookie = 'token=';
    props.logoutRequest({});
    window.location.href = '/login';
  };

  return (
    <>
      <HeaderMenu className="header__menu">
        <HeaderMenuProfile className="header__menu--profile">
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt="" />
          }
          {/* <p>Perfil</p> */}
        </HeaderMenuProfile>
        <HeaderUl>
          {hasUser ?
            <li><a href="/">{user.name}</a></li> : null
          }
          {hasUser ?
            <li><a href="#logout" onClick={handleLogout}>Log out</a></li> :
            <li><Link to="/login">Log in</Link></li>
          }
        </HeaderUl>
      </HeaderMenu>
    </>
  );
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
