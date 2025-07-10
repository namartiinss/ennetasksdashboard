import React from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import Image from 'next/image'
import analyticsDonuts from '@/public/image/analyticsDonuts.png'

function AnalyticsData() {
  return (
    <div className='flex bg-[#F3F3F3] p-8 gap-8'>
      <Sidebar />
      <section className=' bg-white w-full rounded-[20px] px-8 py-5'>
        <Navbar labelButtonNav={"Baixar Resumo"}/>
        <Image src={analyticsDonuts} alt='' className=' mx-50 my-20 w-[710px]' />
      </section>
    </div>
  )
}

export default AnalyticsData