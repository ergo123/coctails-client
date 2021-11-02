import {Coctail} from "../model/coctail";
import Link from 'next/link';

type CoctailListElementType = {
  coctail: Coctail
}

export const CoctailListElement = ({ coctail }: CoctailListElementType) => {
  return <article className="p-10 border border-1 border-grey">
    <div>
      <h2 className="text-darkergrey text-xl font-light tracking-wider mb-5">
        <Link href={`/coctails/${encodeURIComponent(coctail.name)}`}>
          <a href="#">{coctail.name}</a>
        </Link>
      </h2>
      <p className="border-t border-b border-1 border-grey p-1 mb-5 text-minor">
        {coctail.ingredients.map(ingredient => ingredient.name).join(', ')}
      </p>
    </div>
    <div>
      <p>Lorem ipsum mi dolo cos tam bla bla</p>
    </div>
  </article>
}