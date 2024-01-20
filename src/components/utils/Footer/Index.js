import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import footerLogo from '/src/assets/logo-belajarin.png'
import tiktokLogo from '/src/assets/tiktok-logo.webp'
import igLogo from '/src/assets/ig-logo.jpg'
import discordLogo from '/src/assets/dc.png'
import ytLogo from '/src/assets/youtube-logo-youtube-icon-transparent-free-png 1.png'
import xLogo from '/src/assets/Twitter-new-cross-mark-Icon-PNG-X 1.png'
import linkedinLogo from '/src/assets/linkedin-logo-linkedin-icon-transparent-free-png 1.png'


export default function Footer() {
    return (
        <footer className='text-white md:px-36 md:pt-24 md: pb-10'>
            <div className='flex nd:flex-row md:justify-between invisible md:visible'>
                <div className='flex md:flex-row'>
                    <div className='flex md:flex-col md:mr-20'>
                        <p className='md:text-2xl md:font-medium md:mb-5'>Categories</p>
                        <Link href='/'>Programming & Tech</Link>
                        <Link href='/'>Data</Link>
                        <Link href='/'>Business</Link>
                        <Link href='/'>Graphic & Design</Link>
                        <Link href='/'>Digital Marketing</Link>
                        <Link href='/'>Writing & Translation</Link>
                        <Link href='/'>Video & Animation</Link>
                        <Link href='/'>Music & Audio</Link>
                    </div>
                    <div className='flex md:flex-col md:mr-20'>
                        <p className='md:text-2xl md:font-medium md:mb-5'>About</p>
                        <Link href='/'>Careers</Link>
                        <Link href='/'>Blog</Link>
                        <Link href='/'>About Belajarin</Link>
                    </div>
                    <div className='flex md:flex-col'>
                        <p className='md:text-2xl md:font-medium md:mb-5'>Support</p>
                        <Link href='/'>Careers</Link>
                        <Link href='/'>Blog</Link>
                        <Link href='/'>About Belajarin</Link>
                    </div>
                </div>
                <div>
                    <Image src={footerLogo} className='md:w-96' />
                    <p className='md:text-xl mb-10'>Found us</p>
                    <div className='flex md:flex-row md:justify-between'>
                        <Image width={75} height={75} className='rounded-full mr-5' src={tiktokLogo} />
                        <Image width={75} height={75} className='rounded-full bg-black mr-5' src={discordLogo} />
                        <Image width={75} height={75} className='rounded-full mr-5' src={xLogo} />
                        <Image width={75} height={75} className='rounded-full bg-black mr-5' src={ytLogo} />
                        <Image width={75} height={75} className='rounded-full mr-5' src={igLogo} />
                        <Image width={75} height={75} className='rounded-full' src={linkedinLogo} />
                    </div>
                </div>
            </div>
            <div>
                <p className=' mt-24 text-center md:text-lg'>© Catalyst International Ltd. 2024</p>
            </div>
        </footer >
    )
}
