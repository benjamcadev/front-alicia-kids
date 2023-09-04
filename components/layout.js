import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Layout({children, title = '', description = ''}) {
  return (
    <>
    <Head>
        <title>{`Alicia Kids - ${title}`}</title>
        <meta name='description' content={description}></meta>
    </Head>

    <Header>
    </Header>

    {children}

    <Footer>      
    </Footer>
    </>
  )
}
