import React, {useState, useEffect} from 'react'
import styles from './MainSection.module.css'
import { IoSendSharp } from "react-icons/io5";
import useGlobalContext from '../../contexts/NotesContext';
import { useParams } from 'react-router-dom';

const MainSection = () => {
  const { groupId } = useParams();
  const {groups, setGroups} = useGlobalContext();
  const [note, setNote] = useState('');
  const [metaData, setMetaData] = useState();

  useEffect(() => {
    setMetaData(groups.find(group => group.id === parseInt(groupId)));  
    
  }, [groupId,groups])  
  

  const handleAddNote = (e)=>{
    e.preventDefault();
    if (note.trim() === '') return;

    const currentDate = new Date();
    const newNoteObj = {
      id: Date.now(),
      content: note,
      date: currentDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
      time: currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };

    const newGroups = groups.map((group) => {
    return  group.id === parseInt(groupId)
        ? { ...group, notes: [...group.notes, newNoteObj] }
        : group
    })

    setGroups(newGroups);
    localStorage.setItem('groups', JSON.stringify(newGroups));
    setNote('');

  }


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo} style={{background: metaData?.groupColor}}>
          <p> {metaData?.initial} </p>
        </div>
        <h1 className={styles.heading}> {metaData?.groupName} </h1>
      </div>

      <div className={styles.notesContainer}>
          {
            metaData?.notes
            .map((note) => (
              <div key={note.id} className={styles.note}>
                <p className={styles.noteContent}>{note.content}</p>
                <p className={styles.noteTimestamp}>
                  {note.time} 
                  <span className={styles.divider}>•</span>
                  {note.date}

                </p>
              </div>
            ))
          }
      </div>

      <div className={styles.footer}>
        <form onSubmit={handleAddNote} className={styles.input_container}>
            <textarea
              value={note}
              placeholder="Enter your text here..........."
              className={styles.textbox}
              onChange={(e)=> setNote(e.target.value)}
              onKeyDown={(e)=> {if(e.key==='Enter') handleAddNote(e)} }
            />
            <button type="submit" className={styles.send_button}>
            <IoSendSharp className={styles.send_icon}/>
            </button>
        </form>
      </div>
    </div>
  )
}

export default MainSection