import Head from 'next/head'
import Register from '../components/Register'
import axios from 'axios';
function Home() {
  const URL = 'http://44.241.150.240/tracking/5fc81c203dbc1b04c22bec10'
  const api = axios.create({
    baseURL: URL,
    withCredentials: false,
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
  });
const teste = () => {
  api.get()
      .then((response) => console.log(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
     });
}

  return (
    <>
      <Head>
        <title>Painel</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <button onClick={teste}>reer</button>
      <Register />
    </>
  )
}

export default Home;