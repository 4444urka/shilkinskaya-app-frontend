import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Homepage from './pages/Homepage/Homepage'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'

const App = () => {
  return (
    <div>
      <Header>Шилкинская 15</Header>
      <NavBar>
        <a href=''>Pizda</a>
        <a href=''>Pizda</a>
        <a href=''>Pizda</a>
        <a href=''>Pizda</a>
      </NavBar>
      <Routes>li
        <Route path="/" element=<Homepage /> />
        <Route path="/login" element=<Login /> />
        <Route path="/register" element=<Register /> />
      </Routes>
      
    </div>
  )
}

export default App
