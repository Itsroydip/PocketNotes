import React, {useState} from 'react'
import styles from './MainSection.module.css'
import { IoSendSharp } from "react-icons/io5";

const MainSection = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
      timestamp: "9 Mar 2023 • 10:10 AM"
    },
    {
      id: 2,
      content: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
      timestamp: "9 Mar 2023 • 10:10 AM"
    },
    // {
    //   id: 3,
    //   content: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
    //   timestamp: "9 Mar 2023 • 10:10 AM"
    // }
  ]);

  const handleSubmit = ()=>{}

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <p>MN</p>
        </div>
        <h1 className={styles.heading}>My Notes</h1>
      </div>

      <div className={styles.notesContainer}>
          {notes.map((note) => (
            <div key={note.id} className={styles.note}>
              <p className={styles.noteContent}>{note.content}</p>
              <p className={styles.noteTimestamp}>{note.timestamp}</p>
            </div>
          ))}
      </div>

      <div className={styles.footer}>
        <form onSubmit={handleSubmit} className={styles.input_container}>
            <textarea
              // value={}
              placeholder="Here's the sample text for sample work"
              className={styles.textbox}
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