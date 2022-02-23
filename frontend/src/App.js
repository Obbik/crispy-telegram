import React from "react";
import LogoImage from "../images/logo.png";
import {
  Navigation,
  Logo,
  Links,
  NavigationContainer,
  NavLinks,
  NavItem,
} from "./Header.style";

function header() {
  return (
    <>
      <Navigation>
        <NavigationContainer>
          <Logo>
            <img src={LogoImage} alt="" />
          </Logo>
          <Links>
            <NavItem>
              <NavLinks>Sign up</NavLinks>
            </NavItem>
          </Links>
        </NavigationContainer>
      </Navigation>
    </>
  );
}

export default header;