import React, {useEffect, useContext, useState} from 'react';
import {Message, ResponseMessage, OwnMessage} from './Feed_components/Messages/Messages';
import Input from './Feed_components/Input/Input';
import styles from './Feed.module.css';
import {Username, Websocket} from '../../App';

export default function Feed(props) {

    /*--------------hooks--------------*/
    const username = useContext(Username);
    const ws = useContext(Websocket);
    
  
  
    /*--------------component functions--------------*/

  let displayMessages = (item) =>{
    return (
      <div className={styles.message}>
        <Message/>
      </div>
    )
  }

  return (
    <div className={styles.Feed}>
      <div className={styles.messages_list}>
        {displayMessages()}
      </div>
      <Input/>
    </div>
  );
}