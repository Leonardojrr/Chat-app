import React from 'react';
import styles from './Input.module.css';

export default function Input(props){
    return(
       <div className={styles.container}>
           <input type='text'/>
           <button/>
       </div>
    );
}