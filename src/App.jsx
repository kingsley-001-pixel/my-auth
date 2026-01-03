import { Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from "./Signup.jsx"
import Login from "./Login.jsx"
import Welcome from './Welcome.jsx'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/welcome' element={<Welcome/>}/>
    </Routes>
  )
}

export default App
