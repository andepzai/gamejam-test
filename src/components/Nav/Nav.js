import styled from 'styled-components'
import React from "react";
// import png from './gamejam-logo.png'
const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: rgb(32,41,61);
`
const NavLogo = styled.img`
  height: 45px;
`

const NavItems = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
`

const NavItem = styled.div`
  flex: ${props => props.flex};
  color: rgb(188,190,192);
  font-weight: 500;
  cursor: pointer;
  font-size: 12px;
`

export const Nav = () => <NavContainer>
        <NavLogo src={require('./gamejam-logo.png').default}/>
        <NavItems>
            <NavItem flex={1}>
                BROWSE GAMES
            </NavItem>
            <NavItem flex={4}/>
            <NavItem flex={1}>
                UPLOAD GAME
            </NavItem>
            <NavItem flex={1}>
                COMMUNITY
            </NavItem>
            <NavItem flex={1}>
                SUPPORT
            </NavItem>
            <NavItem flex={2}/>
            <NavItem flex={1}>
                Sign up
            </NavItem>
            <NavItem flex={1}>
                Login
            </NavItem>
        </NavItems>
    </NavContainer>