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
    <>
      <Header>Шилкинская 15</Header>
      <Routes>li
        <Route path="/" element=<Homepage /> />
        <Route path="/login" element=<Login /> />
        <Route path="/register" element=<Register /> />
      </Routes>
    </>
  )
}

export default App
