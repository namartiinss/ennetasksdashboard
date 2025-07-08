import { Cloudy, Plus } from 'lucide-react'
import React from 'react'

interface NavbarProps {
    labelButtonNav: string
}

function Navbar({labelButtonNav} : NavbarProps) {
    return (
        <header className='flex justify-between items-center py-5'>
            <div>
                <span className='text-2xl text-primary'>Olá, Nathália.</span>
            </div>

            <div className='flex gap-5'>
                <Cloudy color={'#666'} size={32} />
                <span className='text-xl text-secondary'>01 de julho de 2025</span>
            </div>

            <button className='flex gap-2 px-4 py-3 bg-white rounded-full border-2 border-[#FFCFF1] hover:bg-[#fff6fc] transition cursor-pointer '>
                <Plus color={'#DD73B0'} size={24} strokeWidth={3} />
                {labelButtonNav}
            </button>
        </header>
    )
}

export default Navbar