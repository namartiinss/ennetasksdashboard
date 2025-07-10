import React from 'react'
import Navbar from '../Navbar';
import Tasks from '../Tasks';
import Calendar from '../Calendar';

function Board() {

    return (
        <div className='flex flex-col p-8 w-full rounded-3xl bg-white'>
            <div>
                <Navbar labelButtonNav={"Criar tarefa"} />
            </div>
            <section className='flex flex-col overflow-x-auto w-full m-auto gap-8'>
                <Calendar />
                <Tasks />
            </section>
        </div>
    )
}

export default Board