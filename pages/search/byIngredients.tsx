import Head from 'next/head'
import {fetchCoctails, fetchIngredients} from "../../lib/api/api";
import {Coctail} from "../../lib/model/coctail";
import {CoctailListElement} from "../../lib/components/CoctailListElement";
import {useEffect, useState} from "react";
import {Ingredient} from "../../lib/model/ingredient";
import * as R from 'ramda';

type SearchByIngredientsType = {
  coctails: Coctail[];
  ingredients: Ingredient[];
}

const SearchByIngredients = ({ coctails, ingredients }: SearchByIngredientsType) => {

  const [ownIngredients, setOwnIgredients] = useState<Ingredient[]>([])
  const [filteredCoctails, setFilteredCoctails] = useState<Coctail[]>(coctails)

  const updateIngredient = (ingredient: Ingredient) => {
    if(ownIngredients.includes(ingredient)) {
      setOwnIgredients(R.reject(R.equals(ingredient))(ownIngredients))
    } else {
      setOwnIgredients([...ownIngredients, ingredient]);
    }
  }

  useEffect(() => {
    const hasIngredient = R.includes(R.__, ownIngredients.map(R.prop('name')));
    const xx = coctails.filter(coctail => R.all(hasIngredient)(coctail.ingredients.map(R.prop('name'))));
    setFilteredCoctails(xx);
    console.log({ ownIngredients, xx, coctails })
  }, [ownIngredients]);


  return (
    <>
      <Head>
        <title>Coctails - search by name</title>
        <meta name="description" content="Find a coctail by name" />
      </Head>
      <div className="pt-7">
        <h1 className="text-darkergrey text-2xl font-light tracking-wider mb-7">Search coctails by name</h1>
        <div className="mb-7 flex flex-wrap justify-start">
          {ingredients.map(ingredient => (
            <button key={ingredient.name}
                    className={`border border-1 border-grey px-2 py-1 mr-2 mb-2 ${ownIngredients.includes(ingredient) ? 'bg-grey' : ''}`}
                    onClick={() => updateIngredient(ingredient)}>
              {ingredient.name}
            </button>
          ))}
        </div>

        <div >
          {filteredCoctails.map(coctail => <CoctailListElement key={coctail.name} coctail={coctail} />)}
        </div>
      </div>
    </>
  )
}

export default SearchByIngredients

export async function getStaticProps() {
  const coctails = await fetchCoctails();
  const ingredients = await fetchIngredients();
  return {
    props: { coctails, ingredients }
  };
}