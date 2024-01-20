import { Carousel } from 'antd';
import React from 'react'
import banner1 from '/src/assets/banner1.png'
import banner2 from '/src/assets/banner2.png'
import banner3 from '/src/assets/banner3.png'
import banner4 from '/src/assets/banner4.png'
import Image from 'next/image';


export default function BannerCarousel() {

    return (
        <div>
            <Carousel autoplay>
                <div>
                    <Image src={banner1} className=' w-full h-auto' />
                </div>
                <div>
                    <Image src={banner2} className=' w-full h-auto' />
                </div>
                <div>
                    <Image src={banner3} className=' w-full h-auto' />
                </div>
                <div>
                    <Image src={banner4} className=' w-full h-auto' />
                </div>
            </Carousel>
        </div>
    )
}
