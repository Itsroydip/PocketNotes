import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import AppLayout from './components/layout/AppLayout';
import Home from './components/layout/Home';
import MainSection from './components/layout/MainSection';
import { NotesContextProvider } from './contexts/NotesContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/:id",
        element: <MainSection/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotesContextProvider>
      <RouterProvider router={router} />
    </NotesContextProvider>
  </StrictMode>,
)
