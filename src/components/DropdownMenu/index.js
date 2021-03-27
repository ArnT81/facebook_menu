import React, { useState, useEffect, useRef } from 'react';
//  COMPONENTS
import Menu from '../Menu';
import DropdownItem from '../DropdownItem';
//  ICONS
import { SiHtml5, SiCss3, SiJavascript, SiReact } from 'react-icons/si';
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';


function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }


    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
            <Menu
                menu={'main'}
                subtext={'Learn'}
                currentClass={'menu-primary'}
                activeMenu={activeMenu}
                calcHeight={calcHeight}
                setActiveMenu={setActiveMenu}
            >
                <DropdownItem
                    leftIcon={<SiHtml5 />}
                    rightIcon={<ChevronIcon width="13px" fill="var(--text-color)" />}
                    setActiveMenu={setActiveMenu}
                    goToMenu="html"
                >
                    HTML
                </DropdownItem>
                <DropdownItem
                    leftIcon={<SiCss3 />}
                    rightIcon={<ChevronIcon width="13px" fill="var(--text-color)" />}
                    setActiveMenu={setActiveMenu}
                    goToMenu="css"
                >
                    CSS
                </DropdownItem>
                <DropdownItem
                    leftIcon={<SiJavascript />}
                    rightIcon={<ChevronIcon width="13px" fill="var(--text-color)" />}
                    setActiveMenu={setActiveMenu}
                    goToMenu="js"
                >
                    JS
                </DropdownItem>
                <DropdownItem
                    leftIcon={<SiReact />}
                    rightIcon={<ChevronIcon width="13px" fill="var(--text-color)" />}
                    setActiveMenu={setActiveMenu}
                    goToMenu="react"
                >
                    REACT
                </DropdownItem>
            </Menu>

            <Menu
                menu={'html'}
                subtext={'HTML'}
                currentClass={'menu-secondary'}
                activeMenu={activeMenu}
                calcHeight={calcHeight}
                setActiveMenu={setActiveMenu}
            >
                <DropdownItem leftIcon="🦘">HTML1</DropdownItem>
                <DropdownItem leftIcon="🐸">HTML2</DropdownItem>
                <DropdownItem leftIcon="🦋">HTML3</DropdownItem>
                <DropdownItem leftIcon="🦔">HTML4</DropdownItem>
            </Menu>

            <Menu
                menu={'css'}
                subtext={'CSS'}
                currentClass={'menu-secondary'}
                activeMenu={activeMenu}
                calcHeight={calcHeight}
                setActiveMenu={setActiveMenu}
            >
                <DropdownItem leftIcon="🦘">CSS1</DropdownItem>
                <DropdownItem leftIcon="🐸">CSS2</DropdownItem>
                <DropdownItem leftIcon="🦋">CSS3</DropdownItem>
                <DropdownItem leftIcon="🦔">CSS4</DropdownItem>
            </Menu>

            <Menu
                menu={'js'}
                subtext={'Javascript'}
                currentClass={'menu-secondary'}
                activeMenu={activeMenu}
                calcHeight={calcHeight}
                setActiveMenu={setActiveMenu}
            >
                <DropdownItem leftIcon="🦘">JS1</DropdownItem>
                <DropdownItem leftIcon="🐸">JS2</DropdownItem>
                <DropdownItem leftIcon="🦋">JS3</DropdownItem>
                <DropdownItem leftIcon="🦔">JS4</DropdownItem>
            </Menu>

            <Menu
                menu={'react'}
                subtext={'React'}
                currentClass={'menu-secondary'}
                activeMenu={activeMenu}
                calcHeight={calcHeight}
                setActiveMenu={setActiveMenu}
            >
                <DropdownItem leftIcon="🦘">React1</DropdownItem>
                <DropdownItem leftIcon="🐸">React2</DropdownItem>
                <DropdownItem leftIcon="🦋">React3</DropdownItem>
                <DropdownItem leftIcon="🦔">React4</DropdownItem>
            </Menu>
        </div>
    );
}

export default DropdownMenu;