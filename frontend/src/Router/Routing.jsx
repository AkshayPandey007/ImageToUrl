import React from 'react'
import Signup from '../Pages/Signup'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Upload from '../Pages/Upload'
import ListingPage from '../Pages/ListingPage'
import DetailedPage from '../Pages/DetailedPage'


const Routing = () => {
  return (
   <Routes>
    <Route path='/' element={<Signup/>}/>
    <Route  path="/login" element={<Login/>}/>
    <Route path='/uploadImage' element={<Upload/>}/>
    <Route path='/list' element={<ListingPage/>}/>
    <Route path='/detail/:_id' element={<DetailedPage/>}/>
   </Routes>
  )
}

export default Routing