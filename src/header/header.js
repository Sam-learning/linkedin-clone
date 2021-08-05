import React from 'react';
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import Option from './header-option/option';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { logout } from '../features/userSlice'
import { useDispatch } from 'react-redux';
import { auth } from '../firebase';



const Header = () => {
    const dispatch = useDispatch()

    //dispatch 就像是槍，shoot data into data layer，這裡激活了logout
    const header_logout = () =>{
        dispatch(logout())
        auth.signOut();
    }

    return (
        <div className='header'>
            <div className='left-box'>
                <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' />
                <div className='search-box'>
                    <SearchIcon />
                    <input type='text' />
                </div>
            </div>
            
            <div className='right-box'>
                <Option onClick={header_logout} title='Home' Icon={HomeIcon} />
                <Option title='My Networks' Icon={PeopleAltIcon} />
                <Option title='Jobs' Icon={BusinessCenterIcon} />
                <Option title='Message' Icon={MessageIcon} />
                <Option title='Notifications' Icon={NotificationsIcon} />
                <Option onClick={header_logout} title='Me' avatar={true} />
            </div>
        </div>
    );
};

export default Header;