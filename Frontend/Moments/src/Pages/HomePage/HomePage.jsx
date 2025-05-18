import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import MiddlePart from '../../Components/MiddlePart/MiddlePart';
import Reels from '../../Components/Reels/Reels';
import CreateReelsForm from '../../Components/Reels/CreateReelsForm';
import Profile from '../Profile/Profile';
import { Grid2 } from '@mui/material';
import HomeRight from '../../Components/HomeRight/HomeRight';
import Sidebar from '../../Components/Sidebar/Sidebar';
import {useDispatch, useSelector} from "react-redux"
import { getProfileAction } from '../../Redux/Auth/auth.action';
import { store } from '../../Redux/store';

function HomePage() {

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const location = useLocation();
  const {auth} = useSelector(store => store);

  return (
    <div className='px-20'>
      <Grid2 container spacing={0}>
        <Grid2 size={{ xs: 0, lg: 3}}>
          <div className='sticky top-0'>
            <Sidebar />
          </div>
        </Grid2>
        <Grid2 className = 'px-5 flex justify-center' size={{xs: 12, lg: location.pathname === "/" ? 6 : 9}}>
          <Routes>
            <Route path = "/" element = {<MiddlePart />} />
            <Route path = "/reels" element = {<Reels />} />
            <Route path = "/create-reels" element = {<CreateReelsForm />} />
            <Route path = "/profile/:id" element = {<Profile />} />
          </Routes> 
        </Grid2>
        {location.pathname === "/" && (<Grid2 size = {{lg: 3}} className = "relative">
          <div className='sticky top-0 w-full'>
            <HomeRight />
          </div>
        </Grid2>)}
      </Grid2>
    </div>
  )
}

export default HomePage