import { useEffect, useState } from 'react';
import styles from '../styles/juego-card.module.css'
import Image from 'next/image'


export default function JuegoCard({ children: juego, id, setReserva, reserva, context }) {



    const verifyStateCard = () => {

        if (context === 'reserva') {
            const verifyJuegoAdd = reserva.juegos.find((juego) => juego == id)

            if (verifyJuegoAdd) {
                return true
            } else {
                return false
            }
        }

    }


    const [clickCard, setClickCard] = useState(verifyStateCard())

    useEffect(() => {
        verifyActiveCard()
    }, [])

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
            setReserva({ ...reserva, juegos: reserva.juegos, totales: reserva.totales })

        } else {
            setClickCard(true)
            //Buscar si ya esta agregado el juego
            if (reserva.juegos.length <= 0) {
                setReserva({ ...reserva, juegos: [...reserva.juegos, id], totales: [...reserva.totales, juego.precio_juego] })
            } else {
                const verifyJuegoAdd = reserva.juegos.find((juego) => juego == id)

                if (!verifyJuegoAdd) {
                    setReserva({ ...reserva, juegos: [...reserva.juegos, id], totales: [...reserva.totales, juego.precio_juego] })
                }
            }




        }

    }



    const verifyActiveCard = () => {

        if (context === 'reserva') {

            if (reserva.juegos.length <= 0) {
                return styles.card
            } else {
                return reserva.juegos.map((juego) => {
                    if (juego == id) {

                        return styles.card + ' ' + styles.cardClick
                    } else {

                        return styles.card
                    }
                }).join(' ')
            }
        } else {
            return styles.card
        }




    }
    const handleClickNothing = () => { }


    return (

        <div onClick={context === 'reserva' ? handleClick : handleClickNothing} className={clickCard ? styles.card + ' ' + styles.cardClick : verifyActiveCard()}>

            <Image src="/img/juego.jpg" width={220} height={200} alt="Juego" />
            <div className={styles.container}>
                <h4 className={styles.titulo}>{juego.nombre_juego}</h4>
                <p className={styles.subtitulo}>Inflable</p>
                {context === 'reserva' ? '' : <p className={styles.descripcion}>{juego.descripcion_juego}</p>}
                <p className={styles.precio}><span>Precio x 3 - 5 Hrs</span> <br />{formatter.format(juego.precio_juego)}</p>

            </div>

        </div>



    )
}
