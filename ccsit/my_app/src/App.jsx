import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import Hello from './components/Hello'
import Api from './components/Api'
import Pokemon from './components/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1>WELCOME TO REACT</h1>


      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/s' element={<Statebasics />} />
        <Route path='/c' element={<Counter />} />
        <Route path='/h' element={<Hello />} />
        <Route path='/a' element={< Api />} />
        <Route path='/p' element={<Pokemon />} />
      </Routes >


    </>
  )
}

export default App
