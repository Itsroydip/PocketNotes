import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import AppLayout from './components/layout/AppLayout';
import Home from './components/layout/Home';
import { NotesContextProvider } from './contexts/NotesContext';
import GroupRoute from './components/layout/GroupRoute';
import ErrorPage from './components/layout/ErrorPage';
import Sidebar from './components/layout/Sidebar';

const largeScreenRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/groups/:groupId",
        element: <GroupRoute/>
      },
    ]
  },
  {
    path:"*",
    element: <ErrorPage/>
  }
]);

const smallScreenRouter = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar/>,
    
  },
  {
    path: "/groups/:groupId",
    element: <GroupRoute/>
  },
  {
    path:"*",
    element: <ErrorPage/>
  }
]);

const router = ()=>{
  if(screen.availWidth < 768) 
  return smallScreenRouter;

  return largeScreenRouter;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotesContextProvider>
      <RouterProvider router={router()} />
    </NotesContextProvider>
  </StrictMode>,
)
