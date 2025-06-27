import Image from 'next/image'
import bgCat from '@/public/image/cat-bg.png'
import Logo from '@/public/image/logo.svg'
import React from 'react'
import FormLogin from '../components/view/Login/Form'

function LoginPage() {
    return (
        <section className='bg-login w-full min-h-screen relative p-10 flex flex-col'>
            <Image src={bgCat}
                alt='Ilustração de um gato branco de olhos fechados, com nariz e orelhas cor de rosa'
                className='absolute right-0 bottom-0' width={600} height={600}
            />

            <div className="rounded-[20px] overflow-hidden flex flex-1 z-10 max-w-[1280px] max-h-[944px] w-full h-full mx-auto">
                <div className="bg-white w-full flex flex-col justify-center items-center">
                    <div className="w-full max-w-[484px] flex flex-col justify-start gap-5">
                        <FormLogin />
                    </div>
                </div>
                <div className=" bg-white/40 w-full items-start  flex justify-center">
                    <Image className='mt-48' src={Logo} alt='Logotipo Enne Task' />
                </div>
            </div>

        </section>
    )
}

export default LoginPage