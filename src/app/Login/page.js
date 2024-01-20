import React from 'react'
import Image from 'next/image'
import logoSign from '/src/assets/logo-belajarin.png'
import Link from 'next/link'
import bannerSign from '/src/assets/sign-member.png'
import LoginForm from './login'

export default function Login() {
    return (
        <div className='bg-home md:pl-52 pl-4 h-screen flex md:flex-row md:justify-between'>
            <div className='md:w-1/2'>
                <Link href='/'>
                    <Image src={logoSign} alt='belajarin' className='md:mb-32 md: py-10 md:item-baseline' width={200} height={100} />
                </Link>

                <p className='md:text-6xl md:font-semibold md:mb-14 text-3xl font-medium mb-10 text-white'>
                    Welcome,
                    <br />
                    Members👋🏻 !
                </p>
                <LoginForm />
                <p className=' text-slate-300 md:text-lg md:mt-10 mt-5'>Do you not have account? <Link href='/Register' className='text-white font-bold'>Register</Link></p>
            </div>
            <div>
                <Image src={bannerSign} alt='sign-belajarin' className='md:w-max md:h-screen md:visible invisible' width={400} height={500} />
            </div>
        </div >
    )
}
