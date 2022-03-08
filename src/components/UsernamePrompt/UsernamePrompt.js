import React, {useState, useEffect, useRef}from 'react';
import styles from './UsernamePrompt.module.css';

function Username(props){
    const [userinput, setUserInput] =  useState('');
    const buttom = useRef();

    useEffect(()=>{
        const listen_enter = (e) =>{
            if( e.key === 'Enter' || e.which === 13){   
                buttom.current.click();
            }
        }

        window.addEventListener("keypress", listen_enter);

        return (()=>{window.removeEventListener("keypress", listen_enter)});
    },[]);

    const changeInput = (e) =>{
        setUserInput(e.target.value);
    }

    const sendUsername = () =>{
        if(userinput.trim() !== ''){
            document.cookie = `username=${userinput}`;
            props.changeUsername(userinput);
        }else{
            setUserInput(userinput.trim());
        }
    }

    return(
        <div className={styles.container}>
            <span className={styles.title}>Choose a Username</span>
            <div className={styles.input_container}>
                <input value={userinput} onChange={changeInput} type='text' />
                <button ref={buttom} onClick={sendUsername}>O</button>
            </div>
        </div>
    )
}

export default Username;