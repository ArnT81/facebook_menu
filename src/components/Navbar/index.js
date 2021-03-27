import React from 'react';

const Navbar = (props) => <nav className="navbar"><ul className="navbar-nav">{props.children}</ul></nav>;

export default Navbar;