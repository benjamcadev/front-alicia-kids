import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.css'
import logo from '../public/img/alicia-kids-logo.png'

export default function Header() {
    return (
     <header className={styles.header}>
        <div className="contenedor">
         <Image src={logo.src}  width={160} height={140} alt='imagen logotipo'/>

         <nav>
            <Link  href="/">
               Inicio
            </Link>

            <Link href="/contacto">
               Contacto
            </Link>
         </nav>
        </div>
     </header>
    )
  }