import React, {useState,}from 'react';
import styles from './UsernamePrompt.module.css';

function Username(props){
    

    const [userinput, setUserInput] =  useState('');

    const changeInput = (e) =>{
        setUserInput(e.target.value);
    }

    const sendUsername = () =>{
        document.cookie = `username=${userinput}`;
        props.changeUsername(userinput);
    }


    return(
        <div className={styles.container}>
            <span className={styles.title}>Choose a Username</span>
            <div className={styles.input_container}>
                <input value={userinput} onChange={changeInput} type='text' />
                <button onClick={sendUsername}>O</button>
            </div>
        </div>
    )
}

export default Username;