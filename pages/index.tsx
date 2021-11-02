import Head from 'next/head'
import {fetchCoctails} from "../lib/api/api";
import {Coctail} from "../lib/model/coctail";
import {CoctailListElement} from "../lib/components/CoctailListElement";
import {useEffect, useState} from "react";

const Home = ({ coctails }: { coctails: Coctail[]}) => {

  const [randomCoctails, setRandomCoctails] = useState<Coctail[]>([]);

  useEffect(() => {
    setRandomCoctails(coctails.sort(() => 0.5 - Math.random()).slice(0, 3));
  }, [])

  return (
    <>
      <Head>
        <title>Coctails</title>
        <meta name="description" content="Find a coctail by ingredients you have" />
      </Head>
      <div className="pt-7">
        <h1 className="text-darkergrey text-2xl font-light tracking-wider mb-7">Random coctails</h1>
        <div >
          {randomCoctails.map(coctail => <CoctailListElement key={coctail.name} coctail={coctail} />)}
        </div>
      </div>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const coctails = await fetchCoctails();
  return {
    props: { coctails }
  };
}