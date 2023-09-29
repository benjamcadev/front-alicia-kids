import Image from 'next/image'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import styles from '../styles/slider.module.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import "swiper/css/navigation"


export default function slider() {

    const introSlider = {
        hide: {
            opacity: 0,
            x: -100,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
            },
        },
    }


    return (
        <section>
            <motion.div
                initial='hide'
                whileInView='show'
                exit='hide'
                variants={introSlider}
            >
                <div className={styles.slider}>
                    <Swiper
                        modules={[Pagination, Navigation, Autoplay]}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true
                        }}
                        autoplay={{
                            delay: 22500,
                            disableOnInteraction: false
                        }}
                        centeredSlides={true}
                        navigation={true}
                        spaceBetween={10}

                    >
                        <SwiperSlide>
                            <div className={styles.imagenSlider}>
                                <Image src="/img/slider1.jpg" width={984} height={400} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.imagenSlider}>
                                <Image src="/img/slider1.jpg" width={984} height={400} />
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </motion.div>

        </section>

    )
}
