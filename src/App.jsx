import React from 'react'
import './App.css'
import { BrowserRouter as Root, Routes, Route, Form } from 'react-router-dom'
import Navbar from './compo/Navbar'
import Footer from './compo/Footer'

import View from './pages/View'
import Update from './pages/Update'
import UserForm from './pages/UserForm'

function App() {

  return (
    <>
      <Root>
        <Navbar />
        <Routes>
          <Route path='/' element={<View />} />
          <Route path='/update' element={<Update />} />
          <Route path='/form' element={<UserForm />} />
        </Routes>
        <Footer />
      </Root>
    </>
  )
}

export default App
