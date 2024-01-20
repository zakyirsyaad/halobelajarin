import React from 'react';
import imgTesti1 from '/src/assets/human-testi-1.png';
import { Carousel } from 'antd';
import Image from 'next/image';

export default function Testimonicarousel() {
    return (
        <div>
            <Carousel autoplay>
                <div className=' bg-black/[.4] p-5 rounded-box'>
                    <div className='flex flex-col md:flex-row md:justify-between mx-3 my-5'>
                        <div className='md:w-1/2 md:mx-5 md:my-10'>
                            <p className='text-white text-2xl md:text-4xl mb-5 italic'>“The mentor can always be relied on to answer my confusion at any time”</p>
                            <p className='text-white md:text-2xl mb-10'>Kirana, 21 year-old</p>
                        </div>
                        <div>
                            <Image src={imgTesti1} className=' w-48 md:w-72 rounded-box' />
                        </div>
                    </div>
                </div>
                <div className=' bg-black/[.4] p-5 rounded-box'>
                    <div className='flex flex-col md:flex-row md:justify-between mx-3 my-5'>
                        <div className='md:w-1/2 md:mx-5 md:my-10'>
                            <p className='text-white text-2xl md:text-4xl mb-5 italic'>“The mentor can always be relied on to answer my confusion at any time”</p>
                            <p className='text-white md:text-2xl mb-10'>Kirana, 21 year-old</p>
                        </div>
                        <div>
                            <Image src={imgTesti1} className=' w-48 md:w-72 rounded-box' />
                        </div>
                    </div>
                </div>
                <div className=' bg-black/[.4] p-5 rounded-box'>
                    <div className='flex flex-col md:flex-row md:justify-between mx-3 my-5'>
                        <div className='md:w-1/2 md:mx-5 md:my-10'>
                            <p className='text-white text-2xl md:text-4xl mb-5 italic'>“The mentor can always be relied on to answer my confusion at any time”</p>
                            <p className='text-white md:text-2xl mb-10'>Kirana, 21 year-old</p>
                        </div>
                        <div>
                            <Image src={imgTesti1} className=' w-48 md:w-72 rounded-box' />
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}
