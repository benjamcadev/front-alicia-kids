
import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/reserva.module.css'
import stylesJuegos from '../styles/juegos.module.css'
import stylesCard from '../styles/juego-card.module.css'

export default function ReservaJuegos() {

    const juego = {nombre_juego: "Nombre juego", descripcion_juego: "Descripcion", precio_juego: "$40.000"}
    const [clickCard, setClickCard] = useState()

    
    return (
        <div className={stylesJuegos.contenido}>
            <h3>Ahora selecciona los juegos que quieres en tu cumpleaños</h3>

          
        </div>

    )
}
