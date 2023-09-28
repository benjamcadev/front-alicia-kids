import Image from 'next/image'
import Link from 'next/link'
import { GrInstagram } from "react-icons/gr";
import styles from '../styles/instagram.module.css'


export default function FeedInstagram({ feedinstagram }) {
  
  const images = feedinstagram.data.slice(0,9)

  return (
    <section>
      <h2 className='heading'>Siguenos en Instagram</h2>
      <h2 className='heading'><GrInstagram /></h2>
      <div className={styles.contenido}>

        {images.map(image => (
          <div className={styles.containerImage} key={image.id}>
            <Link href={image.permalink}>
              <Image className={styles.image} src={image.media_url} alt={image.caption} width={250} height={250} layout='responsive' />
            </Link>

          </div>
        ))}
      </div>
    </section>
  )
}
