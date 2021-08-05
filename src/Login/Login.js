import React, { useState } from 'react';
import './Login.css'
import { Button } from '@material-ui/core';
import {auth} from '../firebase'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

const Login = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [profilePic, setprofilePic] = useState('')

    //dispatch 就像是槍，shoot data into data layer
    const dispatch = useDispatch()

    const new_register =()=>{
        if (!name) {
            return alert('Please Enter Your Name!')
        }

        auth
        .createUserWithEmailAndPassword(email, password)
        .then(
            (userAuth) =>{
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL:profilePic
            })
            .then(()=>{
                dispatch(login(
                    {
                        email:userAuth.user.email,
                        uid:userAuth.user.uid,
                        displayName:name,
                        photoURL:profilePic,
                    }
                ))
            }).catch(error=>alert(error))  
        })
        .catch(error=>alert(error)) 
    }

    const loginToApp = (e) =>{
        e.preventDefault();
        
    }

    return (
        <div className='login'>
            <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png' />
            <form>
                <input 
                value={name} 
                onChange={e=>setName(e.target.value)} 
                type='text' placeholder='Full Name' 
                />
                <input
                value={profilePic} 
                onChange={e=>setprofilePic(e.target.value)} 
                 type='text' placeholder='Profile Pic URL (optional)' />
                <input 
                value={email} 
                onChange={e=>setEmail(e.target.value)} 
                type='text' placeholder='Email'
                />
                <input 
                value={password} 
                onChange={e=>setPassword(e.target.value)} 
                type='password' placeholder='Password'
                />
                <Button onClick={loginToApp} className='login-btn'>Sign In</Button>
            </form>
            <p>Not a member?
                <span onClick={new_register} className='login-register'>Register Now</span>
            </p>
        </div>
    );
};

export default Login;