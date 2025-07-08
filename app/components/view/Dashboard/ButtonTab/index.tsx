import React from 'react'

interface ButtonTabProps {
    text: string;
}

function ButtonTab({ text } : ButtonTabProps) {
    return (
        <div>
            <button className='w-[140px] hover:bg-[#fff6fc] cursor-pointer px-10 py-2 rounded-full'>
                <span className='text-[20px] text-primary'>
                    {text}
                </span>
            </button>
        </div>
    )
}

export default ButtonTab