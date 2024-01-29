import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import React, { useRef } from 'react'

export default function ProgramBelajarin() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1']
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    return (
        <div
            className='bg-primary text-secondary px-36 my-20'>
            <p className='text-4xl font-bold mb-10 font-space'>We Deserve, what you need</p>
            <div className='flex flex-row flex-wrap justify-between items-center'>
                <Link href='/ProgrammingTech'>
                    <motion.div
                        ref={ref}
                        style={{
                            scale: scaleProgress,
                            opacity: opacityProgress
                        }}
                        className='flex flex-col items-center duration-300 hover:shadow-md hover:shadow-secondary/45 w-48 p-3 rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none">
                            <path d="M55.08 55.0801L71.28 38.88L55.08 22.68M22.68 22.68L6.47998 38.88L22.68 55.0801M45.36 9.72003L32.4 68.0401" stroke="black" stroke-width="6.48" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Programming & Tech</p>
                    </motion.div>
                </Link>

                <Link href='/Data'>
                    <motion.div
                        ref={ref}
                        style={{
                            scale: scaleProgress,
                            opacity: opacityProgress
                        }}
                        className='flex flex-col items-center duration-200 hover:shadow-md hover:shadow-secondary/45 w-48 p-3 rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="69" height="69" viewBox="0 0 69 69" fill="none">
                            <path d="M25.6493 34.1992H13.1097C11.5135 34.1992 10.7155 34.1992 10.1059 34.5098C9.56961 34.783 9.13363 35.219 8.8604 35.7552C8.54977 36.3649 8.54977 37.1629 8.54977 38.759V55.2886C8.54977 56.8847 8.54977 57.6828 8.8604 58.2924C9.13363 58.8287 9.56961 59.2646 10.1059 59.5379C10.7155 59.8485 11.5135 59.8485 13.1097 59.8485H25.6493M25.6493 59.8485H42.7489M25.6493 59.8485L25.6493 24.5094C25.6493 22.9133 25.6493 22.1152 25.96 21.5056C26.2332 20.9694 26.6692 20.5334 27.2054 20.2601C27.8151 19.9495 28.6131 19.9495 30.2092 19.9495H38.189C39.7851 19.9495 40.5832 19.9495 41.1928 20.2601C41.7291 20.5334 42.1651 20.9694 42.4383 21.5056C42.7489 22.1152 42.7489 22.9133 42.7489 24.5094V59.8485M42.7489 59.8485H55.2886C56.8847 59.8485 57.6827 59.8485 58.2924 59.5379C58.8286 59.2646 59.2646 58.8287 59.5378 58.2924C59.8485 57.6828 59.8485 56.8847 59.8485 55.2886V13.1097C59.8485 11.5136 59.8485 10.7155 59.5378 10.1059C59.2646 9.56964 58.8286 9.13366 58.2924 8.86043C57.6828 8.5498 56.8847 8.5498 55.2886 8.5498H47.3088C45.7127 8.5498 44.9146 8.5498 44.305 8.86043C43.7687 9.13366 43.3328 9.56964 43.0595 10.1059C42.7489 10.7155 42.7489 11.5136 42.7489 13.1097V22.7994" stroke="black" stroke-width="4.98737" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Data</p>
                    </motion.div>
                </Link>

                <Link href='/Bussiness'>
                    <motion.div
                        ref={ref}
                        style={{
                            scale: scaleProgress,
                            opacity: opacityProgress
                        }}
                        className='flex flex-col items-center duration-200 hover:shadow-md  hover:shadow-secondary/45 w-48 p-3 rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="69" height="69" viewBox="0 0 69 69" fill="none">
                            <path d="M17.0996 31.3492V42.7489M51.2987 25.6494V37.0491M48.4488 11.3997C55.4274 11.3997 59.2019 12.4678 61.08 13.2962C61.3301 13.4065 61.4552 13.4617 61.8161 13.8061C62.0324 14.0126 62.4273 14.6184 62.5289 14.8997C62.6984 15.3689 62.6984 15.6254 62.6984 16.1384V46.7706C62.6984 49.3605 62.6984 50.6555 62.31 51.3211C61.915 51.9982 61.534 52.3129 60.7945 52.5732C60.0675 52.829 58.6001 52.547 55.6653 51.9831C53.6111 51.5884 51.1748 51.2987 48.4488 51.2987C39.899 51.2987 31.3492 56.9986 19.9495 56.9986C12.9709 56.9986 9.19634 55.9305 7.31828 55.1021C7.06818 54.9918 6.94312 54.9366 6.5822 54.5922C6.36585 54.3857 5.97094 53.7799 5.86934 53.4986C5.69986 53.0294 5.69986 52.7729 5.69986 52.2599L5.69986 21.6277C5.69986 19.0378 5.69986 17.7428 6.08824 17.0772C6.48331 16.4001 6.86431 16.0853 7.60378 15.8251C8.33073 15.5693 9.79815 15.8513 12.733 16.4152C14.7872 16.8099 17.2235 17.0996 19.9495 17.0996C28.4993 17.0996 37.0491 11.3997 48.4488 11.3997ZM41.324 34.1991C41.324 38.1341 38.1341 41.324 34.1991 41.324C30.2642 41.324 27.0743 38.1341 27.0743 34.1991C27.0743 30.2642 30.2642 27.0743 34.1991 27.0743C38.1341 27.0743 41.324 30.2642 41.324 34.1991Z" stroke="black" stroke-width="4.98737" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Business</p>
                    </motion.div>
                </Link>

                <Link href='/WritingTranslation'>
                    <motion.div
                        ref={ref}
                        style={{
                            scale: scaleProgress,
                            opacity: opacityProgress
                        }}
                        className='flex flex-col items-center duration-200 hover:shadow-md  hover:shadow-secondary/45 w-48 p-3 rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="69" height="69" viewBox="0 0 69 69" fill="none">
                            <path d="M45.5988 28.4993H8.54978M56.9986 17.0995H8.54978M56.9986 39.899H8.54978M45.5988 51.2987H8.54978" stroke="black" stroke-width="4.98737" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Writing & Translation</p>
                    </motion.div>
                </Link>

                <Link href='/GraphicDesign'>
                    <motion.div
                        ref={ref}
                        style={{
                            scale: scaleProgress,
                            opacity: opacityProgress
                        }}
                        className='flex flex-col items-center duration-200 hover:shadow-md  hover:shadow-secondary/45 w-48 p-3 rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="69" height="69" viewBox="0 0 69 69" fill="none">
                            <path d="M5.69986 34.1991C5.69986 49.9388 18.4594 62.6984 34.1991 62.6984C38.9211 62.6984 42.7489 58.8705 42.7489 54.1486V52.7236C42.7489 51.4001 42.7489 50.7383 42.8221 50.1827C43.3272 46.3461 46.3462 43.3271 50.1827 42.822C50.7383 42.7489 51.4001 42.7489 52.7237 42.7489H54.1486C58.8705 42.7489 62.6984 38.921 62.6984 34.1991C62.6984 18.4594 49.9389 5.69983 34.1991 5.69983C18.4594 5.69983 5.69986 18.4594 5.69986 34.1991Z" stroke="black" stroke-width="4.98737" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19.9495 37.049C21.5235 37.049 22.7994 35.7731 22.7994 34.1991C22.7994 32.6251 21.5235 31.3492 19.9495 31.3492C18.3755 31.3492 17.0996 32.6251 17.0996 34.1991C17.0996 35.7731 18.3755 37.049 19.9495 37.049Z" stroke="black" stroke-width="4.98737" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M45.5988 25.6493C47.1728 25.6493 48.4488 24.3734 48.4488 22.7994C48.4488 21.2254 47.1728 19.9495 45.5988 19.9495C44.0249 19.9495 42.7489 21.2254 42.7489 22.7994C42.7489 24.3734 44.0249 25.6493 45.5988 25.6493Z" stroke="black" stroke-width="4.98737" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M28.4993 22.7994C30.0733 22.7994 31.3492 21.5234 31.3492 19.9495C31.3492 18.3755 30.0733 17.0995 28.4993 17.0995C26.9253 17.0995 25.6494 18.3755 25.6494 19.9495C25.6494 21.5234 26.9253 22.7994 28.4993 22.7994Z" stroke="black" stroke-width="4.98737" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Graphic & Design</p>
                    </motion.div>
                </Link>

                <Link href='/VideoAnimation'>
                    <motion.div
                        ref={ref}
                        style={{
                            scale: scaleProgress,
                            opacity: opacityProgress
                        }}
                        className='flex flex-col items-center duration-200 hover:shadow-md  hover:shadow-secondary/45 w-48 p-3 rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="69" height="69" viewBox="0 0 69 69" fill="none">
                            <path d="M62.6984 25.4538C62.6984 23.7272 62.6984 22.864 62.357 22.4642C62.0608 22.1174 61.6164 21.9333 61.1616 21.9691C60.6376 22.0103 60.0272 22.6208 58.8063 23.8416L48.4488 34.1991L58.8063 44.5567C60.0272 45.7775 60.6376 46.3879 61.1616 46.4292C61.6164 46.465 62.0608 46.2809 62.357 45.934C62.6984 45.5343 62.6984 44.671 62.6984 42.9445V25.4538Z" stroke="black" stroke-width="4.98737" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5.69986 27.9293C5.69986 23.141 5.69986 20.7468 6.63173 18.9179C7.45143 17.3092 8.75938 16.0012 10.3681 15.1815C12.197 14.2496 14.5912 14.2496 19.3795 14.2496H34.7691C39.5574 14.2496 41.9516 14.2496 43.7805 15.1815C45.3893 16.0012 46.6972 17.3092 47.5169 18.9179C48.4488 20.7468 48.4488 23.141 48.4488 27.9293V40.469C48.4488 45.2573 48.4488 47.6515 47.5169 49.4804C46.6972 51.0891 45.3893 52.3971 43.7805 53.2168C41.9516 54.1486 39.5574 54.1486 34.7691 54.1486H19.3795C14.5912 54.1486 12.197 54.1486 10.3681 53.2168C8.75938 52.3971 7.45143 51.0891 6.63173 49.4804C5.69986 47.6515 5.69986 45.2573 5.69986 40.469V27.9293Z" stroke="black" stroke-width="4.98737" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Video & Animation</p>
                    </motion.div>
                </Link>

                <Link href='/MusicAudio'>
                    <motion.div
                        ref={ref}
                        style={{
                            scale: scaleProgress,
                            opacity: opacityProgress
                        }}
                        className='flex flex-col items-center duration-200 hover:shadow-md  hover:shadow-secondary/45 w-48 p-3 rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="69" height="69" viewBox="0 0 69 69" fill="none">
                            <path d="M25.6493 51.2987V18.1125C25.6493 16.7401 25.6493 16.054 25.899 15.4974C26.1191 15.0069 26.4734 14.5886 26.9212 14.2908C27.4291 13.9531 28.1059 13.8403 29.4596 13.6147L54.539 9.43476C56.3657 9.1303 57.279 8.97808 57.9909 9.24247C58.6155 9.47448 59.1391 9.91804 59.4707 10.4961C59.8485 11.1547 59.8485 12.0807 59.8485 13.9326V45.5989M25.6493 51.2987C25.6493 56.0207 21.8215 59.8485 17.0996 59.8485C12.3776 59.8485 8.54977 56.0207 8.54977 51.2987C8.54977 46.5768 12.3776 42.749 17.0996 42.749C21.8215 42.749 25.6493 46.5768 25.6493 51.2987ZM59.8485 45.5989C59.8485 50.3208 56.0206 54.1487 51.2987 54.1487C46.5768 54.1487 42.7489 50.3208 42.7489 45.5989C42.7489 40.877 46.5768 37.0491 51.2987 37.0491C56.0206 37.0491 59.8485 40.877 59.8485 45.5989Z" stroke="black" stroke-width="4.98737" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Music & Audio</p>
                    </motion.div>
                </Link>
            </div>
        </div>
    )
}
