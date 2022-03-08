import React, {useState, useEffect} from 'react';
import Feed from './components/Feed/Feed'
import UsernamePrompt from './components/UsernamePrompt/UsernamePrompt'

import {Ws} from './lib/Websockets';
import {getCookie} from './lib/Cookies';


export const Username = React.createContext();
export const Websocket= React.createContext();

  // Build '45.17.184.82:8080'
  // Dev '192.168.1.118:8080'
let ws = new Ws('192.168.1.118:8080','chat');

export default function App() {

  /*--------------hooks--------------*/
  const [username, setUsername] = useState(getCookie("username"));


  /*--------------component functions--------------*/
  const showPromptOrChat = () =>{
    if (username !== ""){
      return <Feed/>;
    }

    return <UsernamePrompt changeUsername={setUsername}/>;
  };

  return (

  

    <Websocket.Provider value={ws}>  
      <Username.Provider value={username}>
          {showPromptOrChat()}
      </Username.Provider>
    </Websocket.Provider>
  );
}


