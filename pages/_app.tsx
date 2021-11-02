import type {AppProps} from 'next/app'
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

function MyApp({Component, pageProps}: AppProps) {

  return <div className="flex flex-col w-full">
    <header role="banner" className="bg-darkgrey text-white font-main">
      <div className="max-w-screen mx-auto py-3 flex">
        <div>
          <h1 className="text-lg tracking-wider">
            <Link href="/">
              <a href="#">Coctails</a>
            </Link>
          </h1>
          <p className="text-xxsm text-lightgrey">Find your coctail by the ingredients you have</p>
        </div>
        <nav role="navigation" className="flex-1 text-sm">
          <div>
            <ul className="flex justify-end">
              <li className="mx-5 my-3">
                <Link href="/search/byName">
                  <a className="hover:text-yellow transition tracking-wider" href="#">Search by name</a>
                </Link>
              </li>
              <li className="mx-5 my-3">
                <Link href="/search/byIngredients">
                  <a className="hover:text-yellow transition tracking-wider" href="#">Search by ingredients</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <main className="max-w-screen mx-auto font-main tracking-wide w-full">
      <Component {...pageProps} />
    </main>
    <footer className="bg-darkgrey text-white font-main">
      <div className="max-w-screen mx-auto py-4 ">
      </div>
    </footer>
  </div>
}

export default MyApp
