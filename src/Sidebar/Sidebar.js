import React from 'react';
import { Avatar } from '@material-ui/core';
import './Sidebar.css'
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const user = useSelector(selectUser)

    const hashtag = (tag)=>(
        <div className='tag-contain'>
            <div className='tag'>
                <h4 className='tag-icon'>#</h4>
                <h4>{tag}</h4>
            </div>
        </div>
        
    )

    return (
        <div className='sidebar'>
            <div className='sidebar-top'>
                <img alt='' src='https://images.pexels.com/photos/8732939/pexels-photo-8732939.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
                <Avatar  className='sidebar-avatar' />
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className='sidebar-stats'>
                <div className='sidebar-stat'>
                    <h5>Who View You</h5>
                    <p>2530</p>
                </div>
                <div className='sidebar-stat'>
                    <h5>Views on post</h5>
                    <p>2330</p>
                </div>
            </div>
            <div className='recent'>
                <h3>Recent</h3>
                {hashtag('react.js')}
                {hashtag('next.js')}
                {hashtag('startup')}
                {hashtag('entrepreneur')}
                {hashtag('developer')}
            </div>
        </div>
    );
};

export default Sidebar;