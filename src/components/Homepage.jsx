import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #000;
  color: #fff;
`;

const NavItem = styled.div`
  margin-right: 20px;
  cursor: pointer;
`;

const Navigation = () => {
  return (
    <NavWrapper>
      <NavItem>Home</NavItem>
      <NavItem>Charts</NavItem>
      <NavItem>Automation</NavItem>
      <NavItem>Pricing</NavItem>
      <NavItem>Profile</NavItem>
    </NavWrapper>
  );
};

export default Navigation;
