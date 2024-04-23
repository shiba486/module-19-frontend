import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout/Layout';

import {AllFoodPage ,CreateFoodPage,FoodEditPage,HomePage} from './pages';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<HomePage/>} />
      <Route path='/create-food' element={<CreateFoodPage/>} />
      <Route path='/' element={<AllFoodPage/>} />
      <Route path='/edit/:id' element={<FoodEditPage/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
