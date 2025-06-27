import React from 'react'
import logoGoogle from '@/public/image/iconGoogle.svg'
import ButtonLogin from './Button'
import Link from 'next/link'

function FormLogin() {
    return (
        <form className=' flex flex-col gap-5 w-full mx-auto  max-w-[380px]'>
            <span className='text-secondary'>
                Olá! Faça login ou
                <a className='hover:underline' href="#">crie uma nova conta.</a>
            </span>
            <ButtonLogin icon={logoGoogle} text='Login com Google' />

            <div className='flex items-center gap-4'>
                <hr className='w-full text-pink-line' />
                <span className='text-secondary'>ou</span>
                <hr className='w-full text-pink-line' />
            </div>

            <label className='flex flex-col gap-3' htmlFor="email">
                <span>Digite seu e-mail</span>
                <input id='email' className='border-2 border-pink-200 rounded-md h-[48px] p-3 outline-pink-300' type="email" />
            </label>
            <label className='flex flex-col gap-3' htmlFor="password">
                <span>Digite sua senha</span>
                <input id='password' className='border-2 border-pink-200 rounded-md h-[48px] p-3 outline-pink-300' type="password" />
            </label>
            <div className='flex'>
                <Link className='text-sm hover:underline text-secondary' href="#">Esqueceu sua senha?</Link>
            </div>

            <ButtonLogin text='Entrar' />

            <div className='flex justify-center'>
                <span>Não tem uma conta?</span>
                &nbsp;
                <Link className='hover:underline' href="#">Criar conta</Link>
            </div>
        </form>
    )
}

export default FormLogin