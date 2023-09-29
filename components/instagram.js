import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { GrInstagram } from "react-icons/gr";
import styles from '../styles/instagram.module.css'


export default function FeedInstagram({ feedinstagram }) {

  const images = feedinstagram.data.slice(0, 9)

  const introInstagram = {
    hide: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
      },
    },
  }

  return (
    <section>
      <h2 className='heading'>Siguenos en Instagram</h2>
      <Link href={'https://instagram.com/aliciakids_inflables'} target='_blank'><h2 className='heading'><GrInstagram /></h2></Link>

      <motion.div
        initial='hide'
        whileInView='show'
        exit='hide'
        variants={introInstagram}
      >
        <div className={styles.contenido}>

          {images.map(image => (
            <div className={styles.containerImage} key={image.id}>
              <Link href={image.permalink}>
                <Image className={styles.image} src={image.media_url} alt={image.caption} width={250} height={250} layout='responsive' />
              </Link>

            </div>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
