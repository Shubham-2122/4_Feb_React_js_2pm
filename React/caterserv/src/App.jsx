import React from 'react'
import Home from './Webiste/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Webiste/Pages/About'
import Service from './Webiste/Pages/Service'
import NotFound from './Webiste/Pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          
          {/* website Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />

          {/* not Found */}
          <Route path='*' element={<NotFound />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
