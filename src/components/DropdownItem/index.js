import React from 'react';

function DropdownItem(props) {

    return (
        <div className="menu-item" onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu)}>
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
        </div>
    );
}

export default DropdownItem;