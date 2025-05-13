import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Authentication from './Pages/Authentication/Authentication'
import { Route, Routes } from 'react-router-dom'
import Message from './Pages/Message/Message'
import HomePage from './Pages/HomePage/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/home' element = {<HomePage />} />
        <Route path='/message' element = {<Message />} />
        <Route path='/*' element = {<Authentication />} />
      </Routes>
    </>
  )
}

export default App
