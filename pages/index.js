import Layout from '../components/layout'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/index.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";


export default function Home() {
  return (
    <>
      <Layout
        title={'inicio'}
        description='Arriendo de juegos inflables para cumpleaños y eventos'>

        <main className="contenedorBody">

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
              spaceBetween={30}

            >
              <SwiperSlide>
                <div className={styles.imagenSlider}>
                  <Image src="/img/slider1.jpg" width={600} height={400} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.imagenSlider}>
                  <Image src="/img/slider2.jpg" width={600} height={400} />
                </div>
              </SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </div>
        </main>

      </Layout>

    </>

  )
}
