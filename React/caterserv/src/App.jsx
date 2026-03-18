import React from 'react'
import Home from './Webiste/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Webiste/Pages/About'
import Service from './Webiste/Pages/Service'
import NotFound from './Webiste/Pages/NotFound'
import Blogs from './Webiste/Pages/Blogs'
import Booking from './Webiste/Pages/Booking'
import Contact from './Webiste/Pages/Contact'
import Events from './Webiste/Pages/Events'
import Menu from './Webiste/Pages/Menu'
import Team from './Webiste/Pages/Team'
import Testi from './Webiste/Pages/Testi'
import Dashboard from './Admin/Apages/Dashboard'
import ServiceMange from './Admin/Apages/ServiceMange'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>

          {/* website Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/book' element={<Booking />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/event' element={<Events />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/team' element={<Team />} />
          <Route path='/test' element={<Testi />} />

          {/* not Found */}
          <Route path='*' element={<NotFound />} />

          {/* Admin Routes */}

          <Route path='/dash' element={<Dashboard />} />
           <Route path='/servicemange' element={<ServiceMange />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
