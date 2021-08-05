import React from 'react';
import './option.css'
import { IconButton } from '@material-ui/core';
import {Avatar} from '@material-ui/core'

const Option = ({title, Icon, avatar, onClick}) => {
    return (
        <div onClick={onClick} className='header-option'>
            <IconButton>
                {Icon && <Icon className='icon' />}
                {avatar && <Avatar className='icon' />}
            </IconButton>
            
            <h5> {title} </h5>
        </div>
    );
};

export default Option;