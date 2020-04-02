import React from 'react';
import { Link } from 'react-router-dom';
import { NAV } from '../../constants/constants'

import './Header.scss'

export const Header = () => (
    <header className='main-header' >
      <nav>
        <Link to={ NAV.HOME.route }>
          { NAV.HOME.name }
        </Link>
        <Link to={ NAV.HISTORY.route }>
          { NAV.HISTORY.name }
        </Link>
        { /* <Link to={ NAV.SKILLS.route }>
          { NAV.SKILLS.name }
        </Link> */ }
        <Link to={ NAV.PERSONAL.route }>
          { NAV.PERSONAL.name }
        </Link>
        <Link to={ NAV.CONTACT.route }>
          { NAV.CONTACT.name }
        </Link>
        <Link to={ NAV.RESUME.route }>
          { NAV.RESUME.name }
        </Link>
      </nav>
    </header>
)
