import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

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
