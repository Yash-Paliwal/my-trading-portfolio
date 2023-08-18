import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: flex-end;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-left: 10px;
  cursor: pointer;
`;

const Navigation = () => {
  return (
    <NavWrapper>
      <NavList>
        <NavItem>Home</NavItem>
        <NavItem>Charts</NavItem>
        <NavItem>Automation</NavItem>
        <NavItem>Pricing</NavItem>
        <NavItem>Profile</NavItem>
      </NavList>
    </NavWrapper>
  );
};

export default Navigation;
