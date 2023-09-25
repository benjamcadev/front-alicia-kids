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

          <section>

            <div className={styles.containerWave}>
              <svg viewBox="0 0 500 150" preserveAspectRatio="xMinYMin meet">
                <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" className={styles.wave}></path>
              </svg>
            </div>

            <div className={styles.contenido }>




              <div>
              <Image src="/img/imagen_contacto.jpg" width={450} height={250} layout="responsive" className={styles.imagenContacto} alt="Imagen contacto" />
              </div>

              <div >
                <h1> <b>CELEBRA CON NOSOTROS !</b></h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>

          </section>


        </main>

      </Layout>

    </>

  )
}
