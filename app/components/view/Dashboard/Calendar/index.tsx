import React from 'react'
import ButtonTab from '../ButtonTab';

function Calendar() {
  const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  return (
    <section>
      <div className='flex justify-between p-[8px] border border-[#ebebeb] rounded-lg'>
        {days.map((day, index) => (
          <ButtonTab key={index} text={day} />
        ))}
      </div>

    </section>
  )
}

export default Calendar