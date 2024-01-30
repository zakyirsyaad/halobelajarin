import React from 'react'
import Image from 'next/image'
import logoSign from '/src/assets/logo-belajarin.png'
import Link from 'next/link'
import bannerSign from '/src/assets/sign-member.png'
import LoginForm from './login'

export default function Login() {
    return (
        <div className='bg-secondary md:pl-10 p-4 lg:pl-10 lg:p-0 2xl:pl-36 h-screen flex md:flex-row md:justify-center lg:justify-between'>
            <div className='md:w-full lg:w-1/2 lg:mr-10 flex flex-col justify-evenly'>
                <Link href='/'>
                    <Image src={logoSign} alt='belajarin' className='md:py-10 md:item-baseline' width={200} height={100} />
                </Link>

                <p className='md:text-6xl md:font-semibold text-3xl font-medium text-third'>
                    Welcome,
                    <br />
                    Members👋🏻 !
                </p>
                <LoginForm />
                <p className=' text-third md:text-lg'>Do you not have account? <Link href='/Register' className='text-white font-bold'>Register</Link></p>
            </div>
            <div>
                <Image src={bannerSign} alt='sign-belajarin' className='hidden lg:block lg:h-full xl:w-full object-cover' width={400} height={500} />
            </div>
        </div >
    )
}
