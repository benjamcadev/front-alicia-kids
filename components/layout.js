import Head from 'next/head'

export default function Layout({children, title, description}) {
  return (
    <>
    <Head>
        <title>{`Alicia Kids - ${title}`}</title>
    </Head>
    {children}
    </>
  )
}
