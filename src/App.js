import {useContext, useState, useEffect} from 'react';
import Feed from './components/Feed/Feed'
import UsernamePrompt from './components/UsernamePrompt/UsernamePrompt'
import styles from './App.module.css';

import {getCookie} from './lib/Cookies';

function App() {

  //hooks
  const [username, setUsername] = useState('');


  // component functions
  const showPromptOrChat = () =>{

    let username_cookie = getCookie("username");

    if(username === "" && username_cookie !== ""){
      setUsername(username_cookie);
    }

    if (username !== ""){
      return <Feed/>;
    }

    return <UsernamePrompt/>;
  };

  return (
    <>
     {showPromptOrChat()}
    </>
  );
}

export default App;
