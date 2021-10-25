import sanityClient from '@sanity/client';
import {Coctail} from "../model/coctail";

const api = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: '2021-10-25',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

export const fetchCoctails = async (): Promise<Coctail[]> =>
  api.fetch('*[_type=="coctails"]{name,ingredients[]{volume,"name":ingredient->name}}');
