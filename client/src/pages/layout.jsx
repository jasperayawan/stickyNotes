import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

export default function Layout(props) {
  const {user, dispatch} = useContext(Context);
  const Navigate = useNavigate()

  const currentDate = new Date().getFullYear();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    Navigate("/login");
  };

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Stinky-Notes</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {user ? (
              <>
                <div className="flex gap-2 justify-center items-center">
                  <span>{user.email}</span>
                <button onClick={handleLogout} className="mr-5 hover:text-gray-900 bg-yellow-500 px-3 py-1 rounded-md hover:bg-yellow-400">
                  Logout
                </button>
                </div>
              </>
            ):(
              <>
                
              <Link to='/login' className="mr-5 hover:text-gray-900 ring-1 px-3 py-1 rounded-md ring-yellow-500">
                  Login
                </Link>
                <Link to='/register' className="mr-5 hover:text-gray-900 bg-yellow-500 px-3 py-1 rounded-md hover:bg-yellow-400">
                  Sign up
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>
      <main className="min-h-screen max-w-2xl mx-auto bg-slate-100">
        {props.children}
      </main>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">Sticky-Notes</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © {currentDate} Sticky-Notes —
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-600 ml-1"
            >
              @JasperAyawan
            </a>
          </p>
          
        </div>
      </footer>
    </>
  );
}
