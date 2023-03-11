import React from 'react'
import styles from './button.module.css'

export function Button (props){
    return (
        <button className={styles.btn}> 
            <a className={styles.ancla} href="#">{props.text}</a>
        </button>
    )
}

export default Button