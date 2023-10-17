import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addcoffe from './Component/Addcoffe.jsx';
import Update from './Component/Update.jsx';

import SignIn from './Component/SignIn.jsx';
import REgister from './Component/REgister.jsx';
import AuthProvider from './Component/AuthProvider.jsx';
import Users from './Component/Users.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/register",
        element: <REgister></REgister>,
      },
      
    ],
    loader: () => fetch('http://localhost:3000/coffee')
  },
  
  {
    path: "/add",
    element: <Addcoffe></Addcoffe>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader:() =>fetch('http://localhost:3000/user')
  },
  {
    path: "/update/:id",
    element: <Update></Update>,
    loader: ({params}) =>fetch(`http://localhost:3000/coffee/${params.id}`)
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
