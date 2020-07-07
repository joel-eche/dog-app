import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'

import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <FontAwesomeIcon icon={faDog} /> <span className="header__brand"> Dog App</span>
    </header>
  );
}

export default Header;