
import Link from 'next/link'
import styles from '../styles/footer.module.css'



export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
                    <Link href="/" className={styles.enlace}>
                      Inicio
                    </Link>

                    <Link href="/reserva" className={styles.enlace}>
                      Reserva tu hora
                    </Link>

                    <Link href="/juegos" className={styles.enlace}>
                      Juegos 
                    </Link>

                    <Link href="/contacto" className={styles.enlace}>
                      Contacto
                    </Link>

        </nav>

        <p className={styles.copyright}>Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
