import React from 'react'
import Board from '../components/view/Dashboard/Board'
import Sidebar from '../components/view/Dashboard/Sidebar'

function page() {
  return (
    <div className='flex p-8 bg-[#F3F3F3] gap-8'>
      <Sidebar />
      <Board />
    </div>
  )
}

export default page