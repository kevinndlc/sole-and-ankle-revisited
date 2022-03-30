/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Mobile Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" size={24} />
          <VisuallyHidden>Dismiss modal</VisuallyHidden>
        </CloseButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: hsla(220, 5%, 40%, 0.8);
`;

const Content = styled(DialogContent)`
  background: hsl(0deg, 0%, 100%);
  width: min(300px, 100%);
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 26px;
  right: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  font-size: ${18 / 16}rem;
  color: ${COLORS.gray[900]};
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 32px;
  left: 32px;
  display: flex;
  flex-direction: column;
  gap: ${14 / 16}rem;
`;

const FooterLink = styled.a`
  font-size: ${14 / 16}rem;
  text-decoration: none;
  color: ${COLORS.gray[700]};
  font-weight: 500;
`

export default MobileMenu;
