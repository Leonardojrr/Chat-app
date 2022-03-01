import React, {useState,}from 'react';
import styles from './UsernamePrompt.module.css';

function Username(props){

    const [userinput, setUserInput] =  useState('');

    const changeInput = (e) =>{
        setUserInput(e.target.value);
    }

    const sendUsername = () =>{
        document.cookie = `username=${userinput}`;
        props.setUsername(userinput);
    }


    return(
        <div className='username-container'>
            <span className='username'>Choose a Username</span>
            <div className='username-input-container'>
                <input value={userinput} onChange={changeInput} type='text' />
                <button onClick={sendUsername}>Set</button>
            </div>
        </div>
    )
}

export default Username;