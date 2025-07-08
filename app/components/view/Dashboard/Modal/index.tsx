import React from 'react'

function Modal() {
    return (
        <div className='flex flex-col items-center justify-center z-50 fixed inset-0 bg-black/50'>
            <div className='bg-white p-8 rounded-3xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='font-normal font-[#1c1c1c] text-3xl text-center w-full mb-8'>Criar nova tarefa</h3>
                </div>

                <form>
                    <label className='flex flex-col'>
                        <span
                            className='mb-2.5 text-[16px] text-[#333]'>
                            Nome da tarefa
                        </span>
                        <input
                            type="text"
                            className='mb-5 border border-pink-300 rounded-md w-[484px] outline-pink-400 p-2'
                        />

                        <span
                            className='mb-2.5 text-[16px] text-[#333]'>
                            Descrição da tarefa
                        </span>
                        <textarea
                            name="description"
                            className='w-full resize-none border border-pink-300 rounded-md p-2 mb-5 outline-pink-400'>
                        </textarea>
                    </label>

                    <div className='flex gap-5'>
                        <label htmlFor="" className='flex flex-col'>
                            <span className='mb-2.5 text-[16px] text-[#333]'>
                                Selecionar dia da semana
                            </span>
                            <select name="category"
                                className='mb-5 border border-pink-300 rounded-md outline-pink-400 p-2'
                                id="">
                                    <option value="Domingo">Domingo</option>
                                    <option value="Segunda">Segunda</option>
                                    <option value="Terça">Terça</option>
                                    <option value="Quarta">Quarta</option>
                                    <option value="Quinta">Quinta</option>
                                    <option value="Sexta">Sexta</option>
                                    <option value="Sábado">Sábado</option>
                            </select>
                        </label>

                        <label className='flex flex-col'>
                            <span 
                                className='mb-2.5 text-[16px] text-[#333]'>
                                    Tempo estimado
                            </span>
                            <input 
                                type="time" 
                                className='w-[230px] mb-5 border border-pink-300 rounded-md outline-pink-400 p-2'/>
                        </label>
                    </div>
                    
                        <button type='submit' className='w-full mt-8 bg-pink-100 py-2.5 rounded-md hover:bg-pink-200 cursor-pointer transition'>
                            Salvar
                        </button>
                </form>
            </div>
        </div>
    )
}

export default Modal