import React from 'react'
import Card from '../Card'

function Tasks() {
  return (
    <div>
        <div className='grid grid-cols-7 gap-2 p-2 rounded-lg border border-[#ebebeb] w-full '>
                    <div className='flex flex-col gap-2'>
                        <Card dayColor='Dom' />
                        <Card dayColor='Dom' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Card dayColor='Seg' />
                        <Card dayColor='Seg' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Card dayColor='Ter' />
                        <Card dayColor='Ter' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Card dayColor='Qua' />
                        <Card dayColor='Qua' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Card dayColor='Qui' />
                        <Card dayColor='Qui' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Card dayColor='Sex' />
                        <Card dayColor='Sex' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Card dayColor='Sáb' />
                        <Card dayColor='Sáb' />
                    </div>
                </div>
    </div>
  )
}

export default Tasks