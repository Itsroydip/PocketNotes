import React from 'react'
import styles from './GroupStrip.module.css'

const GroupStrip = ({name, color, initial}) => {
  return (
    <div className={styles.container} >
        <div className={styles.initial} style={{backgroundColor: color}}>
            <p>{initial}</p>
        </div>
        <span className={styles.name}>{name}</span>
    </div>
  )
}

export default GroupStrip