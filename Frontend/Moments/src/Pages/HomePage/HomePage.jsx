import React from 'react'
import Sidebar from '../../Components/Sidebar'

function HomePage() {
  return (
    <div className='grid grid-cols-4'>
        <div className='sticky'>
            <Sidebar />
        </div>
        <div className='col-span-2 overflow-y-scroll'>
            
        </div>
    </div>
  )
}

export default HomePage