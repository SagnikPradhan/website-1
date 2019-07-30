import React, { PropsWithChildren } from "react"
import { Container } from "../Container"
import logo from "../../images/tph-logo.png"
import * as SC from "./styles"

function MenuItem({ children, to }: PropsWithChildren<{ to: string }>) {
  return (
    <SC.MenuItem to={to} activeClassName="active">
      {children}
    </SC.MenuItem>
  )
}

export function Header() {
  return (
    <SC.HeaderWrapper>
      <Container>
        <SC.InnerWrapper>
          <SC.Logo src={logo} />

          <SC.Menu>
            <MenuItem to="/">about</MenuItem>
            <MenuItem to="/">rules</MenuItem>
            <MenuItem to="/">faq</MenuItem>
            <MenuItem to="/">hotbot</MenuItem>
            <MenuItem to="/resources">resources</MenuItem>
            <MenuItem to="/">tech spotlight</MenuItem>
          </SC.Menu>
        </SC.InnerWrapper>
      </Container>
    </SC.HeaderWrapper>
  )
}