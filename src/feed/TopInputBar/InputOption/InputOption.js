import React from 'react';
import './InputOption.css'


const InputOption = ({name, color, Icon}) => {
    return (
        <div className='single-option'>
            <Icon style={{ color:color }} />
            <p> {name} </p>  
        </div>
    );
};

export default InputOption;