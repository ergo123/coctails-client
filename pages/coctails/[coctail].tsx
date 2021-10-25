import Head from 'next/head'
import {fetchCoctails} from "../../lib/api/api";
import {Coctail} from "../../lib/model/coctail";
import styles from '../../styles/Home.module.css'


const CoctailPage = ({coctail}: { coctail: Coctail }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {coctail.name}
        </h1>

        <div className={styles.grid}>

          {coctail.ingredients.map(ingredient => (
            <a href="#" className={styles.card} key={coctail.name}>
              <h2>{ingredient.name} ({ingredient.volume} ml)</h2>
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default CoctailPage

export async function getStaticPaths() {
  const coctails = await fetchCoctails();
  const paths = coctails.map(coctail => ({
    params: {coctail: coctail.name},
  }));
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params}: { params: any }) {
  const coctail = (await fetchCoctails()).filter(coctail => coctail.name === params.coctail)[0];
  return {
    props: {coctail}
  };
}