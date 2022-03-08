import React, {useState, useEffect, useContext, useRef} from 'react';
import styles from './Input.module.css';

import {Username, Websocket} from '../../../../App';



export default function Input(props){

    const {messages, setMessages} = props;

    /*--------------------hooks--------------------*/
    const username = useContext(Username);
    const ws = useContext(Websocket);

    const [input, setInput] = useState('');
    const button = useRef();

    useEffect(()=>{
        window.addEventListener("keypress", listen_enter);

        return (()=>{window.removeEventListener("keypress", listen_enter)});
    },[]);

    /*--------------------component functions--------------------*/

    const listen_enter = (e) =>{
        if( e.key === 'Enter' || e.which === 13){   
           button.current.click()
        }
    }

    const send_message = ()=>{
        if(input.trim() !== ''){
            setMessages([...messages,  {kind:"message", data:{user: username, message:input}}]);
            ws.send('message', {kind:"message", data:{user: username, message:input}});
            setInput('');
        }
    }
  
    const handleInput = (e)=>{
        setInput(e.target.value);
    }

    return(
       <div className={styles.container}>
           <input value={input} onChange={handleInput} type='text'/>
           <button ref={button} onClick={send_message}>></button>
       </div>
    );
}