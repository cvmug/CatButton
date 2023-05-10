import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #191919;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const Logo = styled.h1`
  font-family: 'CustomFont', sans-serif;
  font-size: 2rem;
  color: #ffffff;
  text-shadow: 2px 2px 5px #800092;
`;

const NavLinks = styled.nav`
  display: flex;
`;

const NavLink = styled(Link)`
  font-family: 'CustomFont', sans-serif;
  font-size: 1.2rem;
  color: #ffffff;
  text-decoration: none;
  margin-left: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #800092;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Lorem ipsum dolor sit amet</Logo>
      <NavLinks>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
