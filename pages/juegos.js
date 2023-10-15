import Layout from "../components/layout";
import styles from '../styles/juegos.module.css'
import ListadoJuegos from '../components/listado-juegos'
import { motion } from "framer-motion"


export default function Juegos({ juegos }) {

    const introJuegos = {
        hide: {
          opacity: 0,
          y: -100,
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1.5,
          },
        },
      }

    return (
        <Layout
            title={'Juegos'}
            description='Juegos, Alicia Kids, Revisa nuestros juegos inflables para celebrar tu cumpleaños o evento'
        >
            <motion.div
              initial='hide'
              whileInView='show'
              exit='hide'
              variants={introJuegos}
            >
            <main className="contenedorBody">
                <h2 className="heading">Juegos</h2>

                <div className={styles.contenido}>
                    <ListadoJuegos
                    context={'juegos'}
                    >
                        {juegos}
                    </ListadoJuegos>
                </div>
            </main>
            </motion.div>

          

        </Layout>
    )
}

export async function getServerSideProps() {
    const respuesta = await fetch('https://api-alicia-kids.onrender.com/juego')
    const { juegos } = await respuesta.json()

    
    return {
        props: {
            juegos
        }
    }
}
