import React from 'react';
//  COMPONENTS
import Navbar from './components/Navbar';
import NavItem from './components/NavItem';
import DropdownMenu from './components/DropdownMenu';
//  CSS
import './index.css';
//  ICONS
// import { SiMinutemailer } from 'react-icons/si';
import { ReactComponent as CaretIcon } from './icons/caret.svg';


function App() {
  return (
    <Navbar>
      {/* <NavItem icon={<SiMinutemailer />} /> */}
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

export default App;
