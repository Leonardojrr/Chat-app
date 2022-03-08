import { useContext } from 'react';
import styles from './Messages.module.css';

import {Username} from '../../../../App';


export default function Message(props){
    /*--------------------hooks--------------------*/
    const username = useContext(Username);


    /*--------------------component functions--------------------*/
    const clasifyMessage = ()=>{
        let same_user = props.message.data.user === username;

        if(props.message.kind === "message"){
            return (same_user ? <Msg showname={props.showname} style={styles.own} data={props.message.data}/> : <Msg showname={props.showname} style={styles.extern} data={props.message.data}/>);
        }

        if(props.message.kind === "response"){
            return ( same_user ?<Response showname={props.showname} style={styles.own} data={props.message.data}/> : <Response showname={props.showname} style={styles.extern} data={props.message.data}/> );
        }
    };

    return(
        <>
            {clasifyMessage()}
        </>
    )
}


function Msg(props){
    return(
        <div className={`${styles.container} ${props.style}`}>
            <div className={`${styles.message} ${props.style}`}>
                {(props.style === styles.extern && props.showname) ? <span>{props.data.user}</span> : <></>}
                <span>{props.data.message}</span>
            </div>
        </div>
    )
}

function Response(props){

    return(
        <>
            <div className={`${styles.container} ${props.style}`}>
                
            </div>
        </>
    )
}
