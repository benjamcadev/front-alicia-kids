
import styles from '../styles/juegos.module.css'
import JuegoCard from '../components/juego-card'

export default function ListadoJuegos({ children: juegos }) {

  return (
    <div className={styles.listado}>

      { juegos.map((juego) => {
          return (
              <JuegoCard key={juego.id_juego}>{juego}</JuegoCard> 
          )
        })
      }
    </div>
  )
}
