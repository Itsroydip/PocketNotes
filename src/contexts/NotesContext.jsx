import React, { useContext, useState, useEffect } from 'react'

const NotesContext = React.createContext();

const NotesContextProvider = ({children})=>{
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const savedGroups = localStorage.getItem('groups');
        if (savedGroups) {
          setGroups(JSON.parse(savedGroups));
        }
    }, []);

    const addGroups = (group) => {
        const newGroups = [...groups, group];
        setGroups(newGroups);
        localStorage.setItem('groups', JSON.stringify(newGroups));
    };

    return(
        <NotesContext.Provider value={{groups, addGroups}}>
            {children}
        </NotesContext.Provider>
    )
}

export {NotesContextProvider};

const useGlobalContext = ()=>{
    return useContext(NotesContext);
};

export default useGlobalContext;

