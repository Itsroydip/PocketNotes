import React from 'react'
import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.container}>
        <nav className={styles.heading}>
            <p>Pocket Notes</p>
        </nav>
        <div className={styles.main}>
            {/* all groups */}
        </div>
        <div className={styles.button}>
            <button>+</button>
        </div>
    </div>
  )
}

export default Sidebar