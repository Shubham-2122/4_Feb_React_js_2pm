import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserGet from './Compoenent/UserGet'
import Header from './Compoenent/Header'
import AddUser from './Compoenent/AddUser'

function App() {
  return (
    <BrowserRouter>
     <div>
      <Header />
      <Routes>
        <Route path='/' element={<UserGet />} />
        <Route path='add' element={<AddUser />} />
      </Routes>
    </div>
    </BrowserRouter>
   
  )
}

export default App
