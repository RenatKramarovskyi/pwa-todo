import React, {useState} from 'react';
import cl from './PrettyButton.module.css'

const PrettyButton = ({children, onClick, props, isNegative= false}) => {
    return (
        <button
            className={isNegative ? cl.prettyButtonRed : cl.prettyButtonGreen}
            onClick={onClick}
            {...props}
            >
            {children}
        </button>
    );
};

export default PrettyButton;