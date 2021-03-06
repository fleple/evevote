import React from 'react'
import { connect } from 'react-redux'
import { handleLogin } from '../actions/user_actions'
import { Link } from 'react-router-dom'

import { css } from 'aphrodite/no-important'
import header from '../styles/header_styl'

const Header = (props) => (
  <header className={css(header.header)}>
    <div className={css(header.container)}>
      <h1 className={css(header.logo)}>
        AVAVOTE
      </h1>
      <ul className={css(header.navLinks)}>
        <li className={css(header.hoverLink, header.navLink)} onClick={props.handleLogin}>
          Login vk
        </li>
        <li className={css(header.hoverLink, header.navLink)}>
          <Link className={css(header.linkHead)} to='/'>
            Home
          </Link>
        </li>
        <li className={css(header.hoverLink, header.navLink)}>
          <Link className={css(header.linkHead)} to='/vote'>
            Vote
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

export default connect(null, { handleLogin })(Header)
