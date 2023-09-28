
import Image from 'next/image'
import styles from '../styles/clientes.module.css'
export default function Clientes() {
    return (
        <section className={styles.background}>
            <div className={styles.backgroundInside}>
                <h2 className='heading'>Clientes Felices !</h2>
                <div className={styles.contenido} >

                    <div >
                        <h2 className='title'> <b>GRACIAS A USTEDES</b></h2>
                        <p>Estamos agradecidos por su preferencia con alicia kids.</p>
                    </div>
                    <div>
                        <Image src="/img/imagen_contacto.jpg" width={300} height={250} layout="responsive" className={styles.imagenContacto} alt="Imagen contacto" />
                    </div>


                </div>
            </div>

        </section>
    )
}
