
import React, {  useRef, useEffect } from 'react'
import ListadoJuegos from '../components/listado-juegos'
import styles from '../styles/reserva.module.css'


export default function ReservaJuegos({ juegos, setReserva, reserva }) {

    const juegosReference = useRef(null);

    useEffect(() => {
        juegosReference.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <div  ref={juegosReference}>
            <h3>Ahora selecciona los juegos que quieres en tu cumpleaños</h3>
            <p className={styles.warning}>Nos quedan <b>{juegos.length}</b> juegos disponibles
                <br />
                <small>Haz click en los juegos para seleccionarlos</small>
            </p>
            <ListadoJuegos
                setReserva={setReserva}
                reserva={reserva}
                context={'reserva'}
            >
                {juegos}
            </ListadoJuegos>

        </div>

    )
}
