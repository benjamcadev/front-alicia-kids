import Layout from '../components/layout'
import Presentacion from '../components/presentacion'
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

          <section>

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

          </section>

          <Presentacion />


        </main>

      </Layout>

    </>

  )
}
