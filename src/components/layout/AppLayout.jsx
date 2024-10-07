import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import styles from './AppLayout.module.css'

const AppLayout = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <Sidebar/>
        </div>
        <div className={styles.right}>
            <Outlet />
        </div>
        
    </div>
  )
}

export default AppLayout