import Logo from "./Logo";
import Btn from "../Html.jsx/Button/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div>
          <nav className="backdrop-blur-md fixed w-full z-20 top-0 start-0 border-b border-gray-200">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                  <span className="flex items-center space-x-3 rtl:space-x-reverse">
                      <Logo size={3.5} />
                  </span>
                  <divName className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                      <Btn type="NEUTRAL" icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                      </svg>} text="Login" />
                      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-blue focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                          </svg>
                      </button>
                  </divName>
                  <div className="items-center justify-between hidden w-full bg-transparent md:flex md:w-auto md:order-1" id="navbar-sticky">
                      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                          <li>
                              <Link to={"/"}><span className="block py-2 px-3 text-white bg-blue-700 rounded bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</span></Link>
                          </li>
                          <li>
                              <Link to={"/resources"}><span className="block py-2 px-3 text-gray-900 rounded  md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500">Resources</span></Link>
                          </li>
                          <li>
                              <Link to={"/blogs"}><span className="block py-2 px-3 text-gray-900 rounded  md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500">Blogs</span></Link>
                          </li>
                          <li>
                              <Link to={"/stocks"}><span className="block py-2 px-3 text-gray-900 rounded  md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500">Analyse Stocks</span></Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
          <div className="mt-16 pt-2"></div>
      </div>
  )
}

export default Navbar
