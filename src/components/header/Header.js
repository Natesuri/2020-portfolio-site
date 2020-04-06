import React from 'react';
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
          <a href="Nate_Suri_Software_Engineer_2020.pdf" download>
            { NAV.RESUME.name }
          </a>
        </nav>
      </header>
    )
  }
