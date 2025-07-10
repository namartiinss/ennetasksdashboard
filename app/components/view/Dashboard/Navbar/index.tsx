"use client"

import { Cloudy, Plus } from 'lucide-react'
import React, { useState } from 'react'
import Modal from '../Modal'

interface NavbarProps {
    labelButtonNav: string
}

function Navbar({labelButtonNav} : NavbarProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <header className='flex justify-between items-center pb-8'>
            <div>
                <span className='text-2xl text-primary'>Olá, Nathália.</span>
            </div>

            <div className='flex gap-5'>
                <Cloudy color={'#666'} size={32} />
                <span className='text-xl text-secondary'>01 de julho de 2025</span>
            </div>

            <button onClick={() => setIsModalOpen(true)} className='flex gap-2 px-4 py-3 bg-white rounded-full border-2 border-[#FFCFF1] hover:bg-[#fff6fc] transition cursor-pointer '>
                <Plus color={'#DD73B0'} size={24} strokeWidth={3} />
                {labelButtonNav}
            </button>

            <Modal open={isModalOpen} onOpenChange={setIsModalOpen} />
        </header>
    )
}

export default Navbar