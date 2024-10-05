import React from 'react'
import styles from './GroupStrip.module.css'
import { NavLink } from 'react-router-dom'

const GroupStrip = ({id, name, color, initial}) => {
  return (
    <NavLink to={`/${id}`} className={({isActive})=> isActive ? styles.active : styles.container }>
        <div className={styles.initial} style={{backgroundColor: color}}>
            <p>{initial}</p>
        </div>
        <span className={styles.name}>{name}</span>
    </NavLink>
  )
}

export default GroupStrip