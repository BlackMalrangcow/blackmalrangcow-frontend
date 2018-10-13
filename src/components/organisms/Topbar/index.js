import * as React from 'react';

import Menu from 'components/atoms/Menu';
import ButtonLink from 'components/atoms/ButtonLink';
import { Navbar, NavItem, Nav, ButtonGroup } from 'react-bootstrap';

const Topbar = () => (
  <Navbar inverse collapseOnSelect>
    <Nav pullRight>
      <NavItem>
      <ButtonGroup>
        <Menu nth='1' />
        <Menu nth='2' />
        <Menu nth='3' />
        <Menu nth='4' />
        <ButtonLink to='/news/write'>
          기사 작성하기
        </ButtonLink>
      </ButtonGroup>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Topbar;