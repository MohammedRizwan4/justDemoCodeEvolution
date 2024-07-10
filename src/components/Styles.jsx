import React from 'react'
// this won't go in child component as this is object
import styles from './style.module.css';

// this will applied in child component - when we use this style in App.js then also it will apply - which is not good
import './style.css'

export default function Styles() {
    return (
        <div>
            <h1 className={styles.error}>Error</h1>
            <h1 className="success">Success</h1>
        </div>
    )
}
