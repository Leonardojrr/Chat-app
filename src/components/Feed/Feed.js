import {useEffect, useState} from 'react';
import {Ws} from '../../lib/Websockets';
import styles from './Feed.module.css';

function Feed(props) {

  let return_message = (item) =>{
    return (
      <div className='message-container'>
        <span className='message-user'>{item.user}</span>
        <span className='message-value'>{item.message}</span>
      </div>
    )
  }

  return (
    <div className="Feed">
      {props.messagesList.map(return_message)}
    </div>
  );
}

export default Feed;