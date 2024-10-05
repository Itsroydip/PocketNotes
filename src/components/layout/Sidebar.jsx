import React, { useState } from 'react'
import styles from './Sidebar.module.css'
import GroupStrip from '../ui/GroupStrip'
import Modal from '../ui/Modal'
import useGlobalContext from '../../contexts/NotesContext'

const Sidebar = () => {
    const {groups} = useGlobalContext();
    const [showModal, setShowModal] = useState(false);

    const handleCreate = ()=>{
        setShowModal(true);
    }

  return (
    <div className={styles.container}>
        <nav className={styles.heading}>
            <p>Pocket Notes</p>
        </nav>
        <div className={styles.main}>
            { groups.length > 0 &&
                groups.map((group)=>{
                    return <GroupStrip 
                            key={group.id}
                            name = {group.groupName}
                            initial = {group.initial}
                            color = {group.groupColor}
                            />
                })
            }
            
        </div>
        <div className={styles.button}>
            <button onClick={handleCreate}>+</button>
        </div>

        { 
            showModal && 
            <Modal 
            setShowModal={setShowModal}
            />
        }
    </div>
  )
}

export default Sidebar