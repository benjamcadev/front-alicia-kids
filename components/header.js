import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'
import logo from '../public/img/alicia-kids-logo.png'
import { GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from 'react-icons/im'

export default function Header() {

   const router = useRouter()

   return (
      <header className={styles.header}>
         <div className="contenedorHeader">
            <div className={styles.logoHeader}>
               <Link href={'/'}>
                <Image src={logo.src} width={160} height={140} alt='imagen logotipo' />
               </Link>
              
            </div>

            <div className={styles.navHeader}>
               <nav className={styles.navegacion}>
                  <Link className={ router.pathname === '/' ? styles.enlace +' '+ styles.active : styles.enlace} href="/">
                     Inicio
                  </Link>

                  <Link className={router.pathname === '/contacto' ? styles.enlace +' '+ styles.active : styles.enlace} href="/contacto">
                     Contacto
                  </Link>

                  <Link className={router.pathname === '/juegos' ? styles.enlace +' '+ styles.active : styles.enlace} href="/juegos">
                     Juegos 
                  </Link>

                  <Link className={router.pathname === '/reserva' ? styles.enlace +' '+ styles.active : styles.enlace} href="/reserva">
                     Reserva tu hora
                  </Link>

                  <div className={styles.enlace +' '+ styles.rrss}>

                  <Link className={styles.rrss}  href="/ig">
                   <GrInstagram />
                  </Link>

                  <Link className={styles.rrss}  href="/wts">
                   <ImWhatsapp />
                  </Link>
                  </div>
                 

               </nav>
            </div>

         </div>
      </header>
   )
}