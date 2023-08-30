import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Layout title={'inicio'}>
      <h1>Bouncy Castles Sales</h1>
      <Link href='/contacto'>Contacto</Link>
      </Layout>
      
    </>

        )
}
