
import { Clock } from 'lucide-react'
import React from 'react'

interface CardProps {
    dayColor: 'Dom' | 'Seg' | 'Ter' | 'Qua' | 'Qui' | 'Sex' | 'Sáb';
}

function Card({dayColor} : CardProps) {
    const cardsColorsDays: Record<string, string> = {
        Dom: '#F6ECF8',
        Seg: '#F8F8EC',
        Ter: '#F8ECEC',
        Qua: '#ECF8EC',
        Qui: '#ECF0F8',
        Sex: '#F8ECEC',
        Sáb: '#F6ECF8',
    }

    const bgColor = cardsColorsDays[dayColor]

  return (
    <div className='flex flex-col  p-2 gap-7 rounded-lg' style={{backgroundColor: bgColor}}>

        <span>Lorem Ipsum<br />Estudos
        </span>

        <div className='flex gap-2 items-center'>
            <Clock size={20} color={'#999'} />
            <span className='text-[20px] text-[#999]'>1h</span>
        </div>
    </div>
  )
}

export default Card