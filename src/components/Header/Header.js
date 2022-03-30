import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, BREAKPOINTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side>
          <IconButtonsWrapper>
            <IconButton>
              <Icon id="shopping-bag" size={24} />
            </IconButton>
            <IconButton>
              <Icon id="search" size={24} />
            </IconButton>
            <IconButton onClick={() => setShowMobileMenu(true)}>
              <Icon id="menu" size={24} />
            </IconButton>
          </IconButtonsWrapper>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media (max-width: ${BREAKPOINTS.tablet}) {
    border-top: 4px solid ${COLORS.gray[900]};
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const IconButtonsWrapper = styled.div`
  display: none;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: flex;
    justify-content: flex-end;
    gap: clamp(1rem, 6vw - 1rem, 2rem);
  }
`;

const IconButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const MobileMenuIcons = styled.div``;

export default Header;
