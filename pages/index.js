import Layout from '../components/layout'
import Presentacion from '../components/presentacion'
import FeedInstagram from '../components/instagram'
import Clientes from '../components/clientes'
import Slider from '../components/slider'


export default function Home({ feed }) {


  return (
    <>
      <Layout
        title={'inicio'}
        description='Arriendo de juegos inflables para cumpleaños y eventos'>

        <main className="contenedorBody">

          <Slider />
          <Presentacion />
          <Clientes />
          {(feed.error) ? <h3>Problemas para cargar Instagram , contacte soporte</h3> : <FeedInstagram feedinstagram={feed} /> }
          

        </main>

      </Layout>

    </>

  )
}

export const getServerSideProps = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,username&access_token=${process.env.INSTAGRAM_TOKEN}`
  const data = await fetch(url)
  const feed = await data.json()



  return {
    props: {
      feed
    }
  }
}