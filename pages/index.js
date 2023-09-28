import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';



import Layout from '../components/layout'
import Presentacion from '../components/presentacion'
import FeedInstagram from '../components/instagram';
import Clientes from '../components/clientes';


import styles from '../styles/index.module.css'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import ShowInstagram from '../components/instagram';




export default function Home({feed}) {


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

          <Clientes />

          <FeedInstagram feedinstagram={feed} />

         


        </main>

      </Layout>

    </>

  )
}

export const getStaticProps = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,username&access_token=${process.env.INSTAGRAM_TOKEN}`
  const data = await fetch(url)
  const feed = await data.json()

  return {
    props: {
      feed
    }
  }
}