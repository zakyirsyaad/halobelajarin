import { Carousel } from 'antd';
import React from 'react'
import banner1 from '../../assets/banner1.png'
import banner2 from '../../Assets/banner2.png'
import banner3 from '../../Assets/banner3.png'
import banner4 from '../../Assets/banner4.png'
import Image from 'next/image';


export default function BannerCarousel() {
    const contentStyle = {
        width: '100%',
        height: 'auto',
        color: '#fff',
    };
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
