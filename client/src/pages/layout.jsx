import { Link } from "react-router-dom";

export default function Layout(props) {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Stinky-Notes</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900 ring-1 px-3 py-1 rounded-md ring-yellow-500">Login</Link>
            <Link className="mr-5 hover:text-gray-900 bg-yellow-500 px-3 py-1 rounded-md hover:bg-yellow-400">Sign up</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-2xl mx-auto bg-slate-100">
        {props.children}
      </main>
      <footer>Footer</footer>
    </>
  );
}
