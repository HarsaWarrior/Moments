import { Avatar } from '@mui/material'
import React from 'react'

function StoryCircle() {
  return (
    <div>
        <div className='flex items-center p-5 rounded-b-md'>
            <div className='flex flex-col items-center mr-4 cursor-pointer'>
                <Avatar sx={{width: "5rem", height: "5rem"}}>
                </Avatar>
                <p>Name</p>
            </div>
        </div>
    </div>
  )
}

export default StoryCircle