import React, {useEffect, useContext, useState, useRef} from 'react';
import Message from './Feed_components/Messages/Messages';
import Input from './Feed_components/Input/Input';
import styles from './Feed.module.css';
import {Username, Websocket} from '../../App';

export default function Feed(props) {

    /*--------------hooks--------------*/
    const username = useContext(Username);
    const ws = useContext(Websocket);

    const [messages, _setMessages] = useState([]);
    const messagesRef = useRef([]);
    const setMessages = (data) => {
      messagesRef.current = data;
      _setMessages(data);
    };

    useEffect(()=>{

      ws.on("message", (socket, data) =>{
        let new_messages = [...messagesRef.current, data];
        setMessages(new_messages);
      });

      ws.on("messages", (socket, data) =>{
        let new_messages = [...data];
        setMessages(new_messages);
      });

      ws.on("open", (socket, data) =>{
        socket.send('get_messages', '');
      });
    }
    ,[]);
    
  
  
    /*--------------component functions--------------*/
  const displayMessages = () =>{
    let current_name = '';

    return messages.map((message, key) =>{
      let showname = false;

      if(current_name === '' || current_name !== message.data.user){
        showname = true;
        current_name = message.data.user;
      }

      return <Message key={key} showname={showname} message={message}/>
    });
  }

  return (
    
    <div className={styles.feed}>
      <div className={styles.background}/>
      <div className={styles.messages_list}>
        {displayMessages()}
      </div>
      <Input messages={messages} setMessages={setMessages}/>
    </div>
  );
}