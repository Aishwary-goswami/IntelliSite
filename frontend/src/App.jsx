import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Pricing from './pages/Pricing.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Generate from './pages/Generate.jsx'
import WebsiteEditor from './pages/WebsiteEditor.jsx'
import LiveSite from './pages/LiveSite.jsx'

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/generate' element={<Generate/>} />
        <Route path='/editor/:id' element={<WebsiteEditor/>} />
        <Route path='/site/:id' element={<LiveSite/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
