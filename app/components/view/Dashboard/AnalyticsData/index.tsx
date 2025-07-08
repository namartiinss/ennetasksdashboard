import React from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'

function AnalyticsData() {
  return (
    <div className='flex bg-[#F3F3F3] p-8 gap-8'>
      <Sidebar />
      <section className='bg-white w-full rounded-[20px] px-8 py-5'>
        <Navbar labelButtonNav={"Baixar Resumo"}/>
      </section>
    </div>
  )
}

export default AnalyticsData