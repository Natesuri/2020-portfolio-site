import React from 'react';
import { Link } from 'react-router-dom';
import { NAV } from '../../constants/constants'
import { NavItem } from './NavItem'

import './Header.scss'

export const Header = (props) => {
    return (
      <header className='main-header' >
        <nav>
          <NavItem activePath={props.history.location.pathname} page={NAV.HOME}/>
          <NavItem activePath={props.history.location.pathname} page={NAV.HISTORY}/>
          <NavItem activePath={props.history.location.pathname} page={NAV.PERSONAL}/>
          <NavItem activePath={props.history.location.pathname} page={NAV.CONTACT}/>
          <NavItem activePath={props.history.location.pathname} page={NAV.RESUME}/>
        </nav>
      </header>
    )
  }
