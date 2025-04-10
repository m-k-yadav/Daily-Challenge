import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { Routes, Route } from 'react-router-dom'

function NavBar() {

  return (
    <div>
        <h1>Navbar</h1>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />}>About</Route>
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
    </div>
  )
}

export default NavBar