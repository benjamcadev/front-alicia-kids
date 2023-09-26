
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/presentacion.module.css'

export default function Presentacion() {
    return (
        <section >

            <div className={styles.contenido}>

                <div>
                    <Image src="/img/imagen_contacto.jpg" width={300} height={250} layout="responsive" className={styles.imagenContacto} alt="Imagen contacto" />
                </div>

                <div >
                    <h2 className='title'> <b>CELEBRA CON NOSOTROS !</b></h2>
                    <p>Celebra tu cumpleaños con Alicia Kids, Por 3 horas tendras diversion garantizada con nuestros juegos inflables, maquina de burbujas y mas... Recuerda que estamos en La Serena y Coquimbo.</p>
                    <Link href={'/reserva'}>
                        <button type="button" className={"buttonForm " + styles.button}>RESERVA TU HORA !</button>
                    </Link>

                    <Link href={'/juegos'}>
                        <button type="button" className={"buttonForm " + styles.button}>CONOCE NUESTROS JUEGOS</button>
                    </Link>

                </div>
            </div>

            <div className={styles.containerWave}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="xMinYMin meet">
                    <path d="M0,90 C250,150 330,10, 500, 100 L500,00 L0,0 Z" className={styles.wave}></path>
                </svg>
            </div>

        </section>

    )
}
