import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.css'
import logo from '../public/img/alicia-kids-logo.png'

export default function Header() {
   return (
      <header className={styles.header}>
         <div className="contenedorHeader">
            <div className={styles.logoHeader}>
               <Image src={logo.src} width={160} height={140} alt='imagen logotipo' />
            </div>

            <div className={styles.navHeader}>
               <nav className={styles.navegacion}>
                  <Link className={styles.enlace} href="/">
                     Inicio
                  </Link>

                  <Link href="/contacto">
                     Contacto
                  </Link>

                  <Link href="/juegos">
                     Juegos
                  </Link>

                  <Link href="/reserva">
                     Reserva tu hora
                  </Link>
               </nav>
            </div>

         </div>
      </header>
   )
}