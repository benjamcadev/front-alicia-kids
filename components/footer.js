
import Link from 'next/link'
import styles from '../styles/footer.module.css'



export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="contenedor">
        <nav className={styles.navegacion}>
                    <Link href="/">
                      Inicio
                    </Link>

                    <Link href="/reserva">
                      Reserva tu hora
                    </Link>

                    <Link href="/juegos">
                      Juegos 
                    </Link>

                    <Link href="/contacto">
                      Contacto
                    </Link>

        </nav>

        <a>Todos los derechos reservados {new Date().getFullYear()}</a>
      </div>
    </footer>
  )
}
