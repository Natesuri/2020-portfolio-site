import React from 'react'
import { Link } from 'react-router-dom';

export const NavItem = props => {
  return (
    <Link className={props.activePath === props.page.route ? "active" : "" } to={ props.page.route }>
      { props.page.name }
    </Link>
  )
}
