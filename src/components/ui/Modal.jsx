import React, { useRef, useState } from 'react'
import styles from './Modal.module.css'
import useGlobalContext from '../../contexts/NotesContext'

const Modal = ({setShowModal}) => {
    const {addGroups} = useGlobalContext();
    const [groupName, setGroupName] = useState();
    const [groupColor, setGroupColor] = useState();
    const modalRef = useRef();


    const closeModal = (e)=>{
        if(modalRef.current === e.target)
            setShowModal(false)
    }

    const selectColor = (e)=>{
        if(e.target.tagName==='LABEL' || e.target.tagName==='INPUT')
            setGroupColor(e.target.value);
    }

    const getInitial = (input)=> {
        return input.split(' ')
                    .map(word => word[0].toUpperCase())
                    .join('')
                    .slice(0, 2);
    }


    const handleCreateGroup = (e)=>{
        setShowModal(false)
        addGroups({
            id: Date.now(),
            groupName: groupName,
            initial: getInitial(groupName),
            groupColor: groupColor,
            notes: []
        })

        
        console.log("Group created successfully!!!");           
    }

  return (
    <div ref={modalRef} onClick={closeModal} className={styles.background}>
        <div className={styles.container}>
            <h1 className={styles.heading}>Create New group</h1>
            <div className={styles.text_input}>
                <label>Group Name</label>
                <input 
                    type="text" 
                    placeholder='Enter group name' 
                    onChange={(e)=>setGroupName(e.target.value)}
                />
            </div>
            <div className={styles.color_input}>
                <label>Choose colour</label>
                <div className={styles.color_selector} onClick={selectColor}>
                    <input type="radio" name="color" id={styles.color1} value="rgba(179, 139, 250, 1)"/>
                    <label for={styles.color1}></label>
                    <input type="radio" name="color" id={styles.color2} value="rgba(255, 121, 242, 1)"/>
                    <label for={styles.color2}></label>
                    <input type="radio" name="color" id={styles.color3} value="rgba(67, 230, 252, 1)"/>
                    <label for={styles.color3}></label>
                    <input type="radio" name="color" id={styles.color4} value="rgba(241, 149, 118, 1)"/>
                    <label for={styles.color4}></label>
                    <input type="radio" name="color" id={styles.color5} value="rgba(0, 71, 255, 1)"/>
                    <label for={styles.color5}></label>
                    <input type="radio" name="color" id={styles.color6} value="rgba(102, 145, 255, 1)"/>
                    <label for={styles.color6}></label>
                </div>
            </div>
            <button 
                className={styles.create_btn} 
                onClick={handleCreateGroup} 
                disabled={!groupName || !groupColor}
            > 
            Create
            </button>
        </div>
    </div>
  )
}

export default Modal