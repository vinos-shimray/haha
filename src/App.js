import { Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'

function App () {
  return (
    <div className='container'>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
