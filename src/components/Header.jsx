import React from 'react';

function Header(props) {
  return (
    <header className="header">
      <img src={props.logo} className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}

export default Header;
