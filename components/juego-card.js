import { useState } from 'react';
import styles from '../styles/juego-card.module.css'
import Image from 'next/image'


export default function JuegoCard({ children: juego , id , setReserva, reserva, context}) {

    const [clickCard,setClickCard] = useState(false)

    const formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
    });

   
    const handleClick = () => {
        if (clickCard) {
            setClickCard(false)
            const index = reserva.juegos.indexOf(id)
            reserva.juegos.splice(index, 1)
            const indexTotal = reserva.totales.indexOf(juego.precio_juego)
            reserva.totales.splice(indexTotal, 1)
            setReserva({...reserva, juegos: reserva.juegos, totales: reserva.totales})

        }else{
            setClickCard(true)
            setReserva({...reserva , juegos: [...reserva.juegos, id] , totales: [...reserva.totales, juego.precio_juego]})
        }
       
      }
    const handleClickNothing = () => {}  
    

    return (

        <div onClick={ context === 'reserva' ? handleClick : handleClickNothing  }   className={ clickCard ? styles.card + ' ' + styles.cardClick : styles.card}>

            <Image src="/img/juego.jpg" width={220} height={200} alt="Juego" />
            <div className={styles.container}>
                <h4 className={styles.titulo}>{juego.nombre_juego}</h4>
                <p className={styles.subtitulo}>Inflable</p>
                { context === 'reserva' ? '' : <p className={styles.descripcion}>{juego.descripcion_juego}</p> }
                <p className={styles.precio}><span>Precio x 3 - 5 Hrs</span> <br />{formatter.format(juego.precio_juego)}</p>

            </div>

        </div>



    )
}
