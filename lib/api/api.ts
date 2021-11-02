import sanityClient from '@sanity/client';
import {Coctail} from "../model/coctail";
import {Ingredient} from "../model/ingredient";

const api = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: '2021-10-25',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

export const fetchCoctails = async (): Promise<Coctail[]> =>
  api.fetch('*[_type=="coctails"]{name,ingredients[]{volume,"name":ingredient->name}}');

export const fetchIngredients = async (): Promise<Ingredient[]> =>
  api.fetch('*[_type=="ingredients"]{name}');