import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Project from './pages/project/project' // Updated import statement

const AllRoutes = () => {
  return (
    <Router>
        <Routes>
          {/* <Route path="/" component={<Home/>} /> */}
          {/* <Route path='/' element={<Home/>} /> */}
          <Route path='/project' element={<Project/>} />
        </Routes>
    </Router>
  )
}

export default AllRoutes
