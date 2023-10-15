
import styles from '../styles/juegos.module.css'
import JuegoCard from '../components/juego-card'

export default function ListadoJuegos({ children: juegos , setReserva, reserva, context }) {


  return (
    <div className={styles.listado}>

      {juegos.map((juego) => {
        return (
          <JuegoCard 
          key={juego.id_juego}
          id={juego.id_juego}
          setReserva={setReserva}
          reserva={reserva}
          context={context}
          >{juego}</JuegoCard>
        )
      })
      }
    </div>
  )
}
