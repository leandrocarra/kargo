import Head from 'next/head'
import Register from '../components/Register'

function Home() {
  return (
    <>
      <Head>
        <title>Painel</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Register />
    </>
  )
}

export default Home;