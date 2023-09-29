
import Image from 'next/image'
import { motion, useAnimation } from "framer-motion"
import styles from '../styles/clientes.module.css'


export default function Clientes() {

    const introClientesTexto = {
        hide: {
            opacity: 0,
            x: -50,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 2,
            },
        },
    }

    const introClientesImagen = {
        hide: {
            opacity: 0,
            y: 100,
        },
        show: {
            opacity: 1,
            y: 0,
           
            transition: {
                duration: 2,
            },
          
        },
    }

    return (
        <section className={styles.background}>
            <div className={styles.backgroundInside}>
                <h2 className='heading'>Clientes Felices 🤗</h2>
                <div className={styles.contenido} >

                    <motion.div
                      
                        initial='hide'
                        whileInView='show'
                        exit='hide'
                        variants={introClientesTexto}
                    >
                        <div >
                            <h2 className='title'> <b>GRACIAS A USTEDES 🧡</b></h2>
                            <p>Estamos agradecidos por su preferencia con alicia kids.</p>
                        </div>
                    </motion.div>

                    <motion.div
                    
                  
                     initial='hide'
                     whileInView='show'
                     exit='hide'
                     variants={introClientesImagen}
                    >
                        <div>
                            <Image src="/img/clientes.jpg" width={300} height={250} layout="responsive" className={styles.imagenContacto} alt="Imagen contacto" />
                        </div>
                    </motion.div>



                </div>
            </div>

        </section>
    )
}
