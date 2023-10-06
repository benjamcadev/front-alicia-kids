import styles from '../styles/juego-card.module.css'
import Image from 'next/image'


export default function juegoCard({ children: juego }) {

    const formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
    });


    return (

        <div className={styles.card}>

            <Image src="/img/juego.jpg" width={220} height={200} alt="Juego" />
            <div className={styles.container}>
                <h4 className={styles.titulo}>{juego.nombre_juego}</h4>
                <p className={styles.subtitulo}>Inflable</p>
                <p className={styles.descripcion}>{juego.descripcion_juego}</p>
                <p className={styles.precio}><span>Precio x 3 - 5 Hrs</span> <br />{formatter.format(juego.precio_juego)}</p>

            </div>








        </div>



    )
}
