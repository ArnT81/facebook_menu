import React, { useState, useEffect } from 'react';
//  COMPONENTS
import DropdownItem from '../DropdownItem';
//  ICONS
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
//  EFFECTS
import { CSSTransition } from 'react-transition-group';


function Menu(props) {
    const [showReturn, setShowReturn] = useState(false)

    useEffect(() => {
        if (props.currentClass === 'menu-primary') return;
        else setShowReturn(true);
    }, [props.currentClass])

    return (
        <CSSTransition
            in={props.activeMenu === props.menu}
            timeout={500}
            classNames={props.currentClass}
            unmountOnExit
            onEnter={props.calcHeight}>
            <div className="menu">
                <h3 style={{ margin: 0, textAlign: "center" }}>{props.subtext}</h3>
                {showReturn &&
                    <DropdownItem
                        leftIcon={<ArrowIcon />}
                        setActiveMenu={props.setActiveMenu}
                        goToMenu="main"
                    />
                }
                {props.children}
            </div>
        </CSSTransition >
    )
}

export default Menu;