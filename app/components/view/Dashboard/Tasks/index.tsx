import React from 'react'
import Card from '../Card'

function Tasks() {
  return (
    <div>
        <div className='flex justify-between rounded-lg border border-[#ebebeb] max-h-screen w-full'>
                    <div className='flex flex-col p-2 gap-3'>
                        <Card dayColor='Dom' />
                    </div>
                    <div className='flex flex-col p-2 gap-3'>
                        <Card dayColor='Seg' />
                        <Card dayColor='Seg' />
                    </div>
                    <div className='flex flex-col p-2 gap-3'>
                        <Card dayColor='Ter' />
                        <Card dayColor='Ter' />
                    </div>
                    <div className='flex flex-col p-2 gap-3'>
                        <Card dayColor='Qua' />
                        <Card dayColor='Qua' />
                    </div>
                    <div className='flex flex-col p-2 gap-3'>
                        <Card dayColor='Qui' />
                        <Card dayColor='Qui' />
                    </div>
                    <div className='flex flex-col p-2 gap-3'>
                        <Card dayColor='Sex' />
                        <Card dayColor='Sex' />
                    </div>
                    <div className='flex flex-col p-2 gap-3'>
                        <Card dayColor='Sáb' />
                        <Card dayColor='Sáb' />
                    </div>
                </div>
    </div>
  )
}

export default Tasks