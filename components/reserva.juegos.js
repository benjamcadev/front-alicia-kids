
import React, { useState } from 'react'
import Image from 'next/image'
import ListadoJuegos from '../components/listado-juegos'
import styles from '../styles/reserva.module.css'


export default function ReservaJuegos({juegos}) {
    const [clickCard, setClickCard] = useState()


    return (
        <div >
            <h3>Ahora selecciona los juegos que quieres en tu cumpleaños</h3>
            <p className={styles.warning}>Nos quedan <b>{juegos.length}</b> juegos disponibles</p>
            <ListadoJuegos>
                {juegos}
            </ListadoJuegos>

        </div>

    )
}
