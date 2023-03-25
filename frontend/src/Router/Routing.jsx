import React from 'react'
import Signup from '../Pages/Signup'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Upload from '../Pages/Upload'

const Routing = () => {
  return (
   <Routes>
    <Route path='/' element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path='/upload' element={<Upload/>}/>
   </Routes>
  )
}

export default Routing