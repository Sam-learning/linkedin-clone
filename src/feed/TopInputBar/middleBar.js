import React, { useEffect, useState } from 'react';
import './middleBar.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption/InputOption';
import PhotoIcon from '@material-ui/icons/Photo';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './post/Post';
import { db } from '../../firebase';
import firebase from 'firebase';
import { Button } from '@material-ui/core';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';

const MiddleBar = () => {
    const user = useSelector(selectUser)
    
    //當state, props 改變時，會自動re-render
    const [inputs, setInputs] = useState('')
    const [posts, setPosts] = useState([])

    //realtime updates
    //snapshot.docs是個Array
    useEffect(()=>{
        db.collection('posts')
        .orderBy('timeStamp','desc')
        .onSnapshot((snapshot)=>
            
            setPosts(
                snapshot.docs.map((doc)=>(
                    {
                        id:doc.id,
                        data:doc.data()
                    }
                ))
            )
        )
    },[])

    //所有clickable function 都有event
    const sendPost = (e)=>{
        e.preventDefault();

        db.collection('posts').add({
            name:`${user.displayName}`,
            description:`${user.email}`,
            message:inputs,
            photoURL:'',
            timeStamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        setInputs('')
    }

    //onChange 一有改變就 Fire event
    // 記得加ref={ref}
    return (
        <div>
            <div className='middleBar'>
                <div className='inputField'>
                    <CreateIcon style={{ color:'gray' }}  />
                    <input value={inputs}  onChange={e => setInputs(e.target.value)}  type='text' />
                    <Button onClick={sendPost} type='submit'>Send</Button>
                </div>
                <div className='top-InputOption'>
                    <InputOption color='#70B5F9' name='Photo' Icon={PhotoIcon} />
                    <InputOption color='#E7A331' name='Video' Icon={SubscriptionsIcon} />
                    <InputOption color='#C0CBCD' name='Event' Icon={EventNoteIcon} />
                    <InputOption color='#7FC15E' name='Write Article' Icon={CalendarViewDayIcon} />
                </div>
            </div>
            
            <FlipMove>
            {
                posts.map(({id, data:{name, description, message, photoURL}})=>(
                    <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    />
                ))
            }
            </FlipMove>
        </div>
    );
};

export default MiddleBar;

