import React from 'react'
import styles from './Home.module.css'
import hero from '../../assets/hero.png'
import { MdLock } from "react-icons/md";



const Home = () => {
  return (
    <div className={styles.container}>
        
        <img src={hero} alt="hero-img" className={styles.hero} />
        <p className={styles.heading}>Pocket Notes</p>
        <p className={styles.subheading}>
        Send and receive messages without keeping your phone online. <br />
        Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>

        <div className={styles.text}>
            <MdLock />
            <span>end-to-end encrypted</span>
        </div>

    </div>
  )
}

export default Home