import { HashRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from "./Signup.jsx"
import Login from "./Login.jsx"
import Welcome from './Welcome.jsx'


function App() {

  return (
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/welcome' element={<Welcome/>}/>
    </Routes>
  )
}

export default App
