import React, {forwardRef} from 'react';
import './Post.css'
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import InputOption from '../InputOption/InputOption';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

const Post = forwardRef(({ name, description, message }, ref) => {
    return (
        <div ref={ref} className='single-post'>
            <div className='post-header'>
                <IconButton>
                    <Avatar />
                </IconButton>
                <div className='post-header-text'>
                    <h3>{name}</h3>
                    <p><small>{description}</small></p>
                </div>
            </div>
            <p className='message'>{message}</p>
            <div className='post-InputOption'>
                <InputOption color='grey' name='Photo' Icon={ThumbUpIcon} />
                <InputOption color='grey'  name='Video' Icon={ChatIcon} />
                <InputOption color='grey'  name='Event' Icon={ShareIcon} />
                <InputOption color='grey'  name='Write Article' Icon={SendIcon} />
            </div>
        </div>
    );
});

export default Post;