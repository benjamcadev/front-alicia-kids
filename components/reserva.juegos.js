
import React, { useState } from 'react'
import Image from 'next/image'
import ListadoJuegos from '../components/listado-juegos'
import styles from '../styles/reserva.module.css'
import stylesJuegos from '../styles/juegos.module.css'
import stylesCard from '../styles/juego-card.module.css'

export default function ReservaJuegos({juegos}) {
    const [clickCard, setClickCard] = useState()


    return (
        <div >
            <h3>Ahora selecciona los juegos que quieres en tu cumpleaños</h3>
            <ListadoJuegos>
                {juegos}
            </ListadoJuegos>

        </div>

    )
}
