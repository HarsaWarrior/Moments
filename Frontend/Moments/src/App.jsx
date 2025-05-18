import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Authentication from './Pages/Authentication/Authentication'
import { Route, Routes } from 'react-router-dom'
import Message from './Pages/Message/Message'
import HomePage from './Pages/HomePage/HomePage'
import { useSelector, useDispatch } from 'react-redux'
import { getProfileAction } from './Redux/Auth/auth.action'



function App() {
  const {auth} = useSelector(store => store)
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    dispatch(getProfileAction(jwt))
  },[jwt])
  return (
    <>
      <Routes>
        <Route path='/*' element = {auth.user?<HomePage />:<Authentication />} />
        <Route path='/message' element = {<Message />} />
        <Route path='/*' element = {<Authentication />} />
      </Routes>
    </>
  )
}

export default App
