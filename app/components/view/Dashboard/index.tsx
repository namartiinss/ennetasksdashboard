import React from 'react'
import Sidebar from './Sidebar'
import Board from './Board'

function Dashboard() {
  return (
    <div className='flex bg-[#F3F3F3] p-8 gap-8'>
      <Sidebar />
      <div className='w-full bg-[#FFF] rounded-3xl'>
        <Board />
      </div>
    </div>
  )
}

export default Dashboard