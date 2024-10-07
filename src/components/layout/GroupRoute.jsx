import React from 'react'
import useGlobalContext from '../../contexts/NotesContext';
import { useParams } from 'react-router-dom';
import ErrorPage from './ErrorPage'
import MainSection from './MainSection';

const GroupRoute = () => {
    const { groupId } = useParams();
    const { groups } = useGlobalContext();
  
    if (!groups.find((group)=> group.id.toString()===groupId)) {
      return <ErrorPage />;
    }
  
    return <MainSection />;
}

export default GroupRoute