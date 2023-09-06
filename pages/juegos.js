import Layout from "../components/layout";
import styles from '../styles/juegos.module.css'
import ListadoJuegos from '../components/listado-juegos'


export default function Juegos({ juegos }) {
    return (
        <Layout
            title={'Juegos'}
            description='Juegos, Alicia Kids, Revisa nuestros juegos inflables para celebrar tu cumpleaños o evento'
        >

            <main className="contenedorBody">
                <h2 className="heading">Juegos</h2>

                <div className={styles.contenido}>
                    <ListadoJuegos>

                    </ListadoJuegos>
                </div>
            </main>

        </Layout>
    )
}

export async function getServerSideProps() {
    const respuesta = await fetch('')
    const { juegos } = await respuesta.json()
    return {
        props: {
            juegos
        }
    }
}
