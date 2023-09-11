import styles from '../styles/juego-card.module.css'
import Image from 'next/image'

export default function juegoCard({ children: juego }) {
    return (

        <div className={styles.card}>
            <Image src="/img/juego.jpg" width={220} height={200}  alt="Juego" />
            <div className={styles.container}>
                <h4>{juego.nombre_juego}</h4>
                <p>{juego.precio_juego}</p>
            </div>
        </div>



    )
}
