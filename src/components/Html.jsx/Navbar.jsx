import { useState } from 'react';
import Logo from "./Logo";
import { Link } from "react-router-dom";
import 'animate.css';

const Navbar = () => {
    const [whichTabOpen, setWhichTabOpen] = useState(localStorage.getItem("tab"));

    const handleTabClick = (tabName) => {
        setWhichTabOpen(tabName);
        localStorage.setItem('tab', whichTabOpen);
    };

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-slate-700 px-4 py-3 z-50 w-full font-title text-sm">
            <div className="container mx-auto flex items-center justify-between">
                <div><Logo size={4.5} /></div>

                <div className="hidden md:flex space-x-4 text-slate-400 text-center">
                    <Link to={"/"} onClick={() => handleTabClick("home")}>
                        <span className={`block py-2 px-3 rounded duration-200 hover:bg-slate-600 hover:text-slate-300 hover:shadow-md active:bg-slate-600 active:text-slate-300 ${whichTabOpen === "home" ? "bg-slate-600 text-slate-300 shadow-md" : ""}`}>Home</span>
                    </Link>
                    <Link to={"/resources"} onClick={() => handleTabClick("resources")}>
                        <span className={`block py-2 px-3 rounded duration-200 hover:bg-slate-600 hover:text-slate-300 hover:shadow-md active:bg-slate-600 active:text-slate-300 ${whichTabOpen === "resources" ? "bg-slate-600 text-slate-300 shadow-md" : ""}`}>Resources</span>
                    </Link>
                    <Link to={"/blogs"} onClick={() => handleTabClick("blogs")}>
                        <span className={`block py-2 px-3 rounded duration-200 hover:bg-slate-600 hover:text-slate-300 hover:shadow-md active:bg-slate-600 active:text-slate-300 ${whichTabOpen === "blogs" ? "bg-slate-600 text-slate-300 shadow-md" : ""}`}>Blogs</span>
                    </Link>
                    <Link to={"/news"} onClick={() => handleTabClick("news")}>
                        <span className={`block py-2 px-3 rounded duration-200 hover:bg-slate-600 hover:text-slate-300 hover:shadow-md active:bg-slate-600 active:text-slate-300 ${whichTabOpen === "news" ? "bg-slate-600 text-slate-300 shadow-md" : ""}`}>Finance News</span>
                    </Link>
                    <Link to={"/stocks"} onClick={() => handleTabClick("stocks")}>
                        <span className={`block py-2 px-3 rounded duration-200 hover:bg-slate-600 hover:text-slate-300 hover:shadow-md active:bg-slate-600 active:text-slate-300 ${whichTabOpen === "stocks" ? "bg-slate-600 text-slate-300 shadow-md" : ""}`}>Analyse Stocks</span>
                    </Link>
                </div>

                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-grey-800 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div>
                        <div className="md:hidden z-50 fixed top-0 right-0 w-3/5 max-w-sm bg-slate-800 border-l-4 border-slate-500 rounded-md p-4 space-y-2 animate__animated animate__bounceInRight">
                            <div onClick={toggleMobileMenu} className='bg-slate-700 border-2 z-50 border-red-500 rounded-circle w-fit p-2 float-right text-red-500 '><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                            </svg></div>

                            <div className='pt-8'></div>
                            <Link to={"/"} onClick={() => handleTabClick("home")}><span className={`text-slate-400 hover:text-slate-300 block py-2 px-3 rounded duration-200 my-1 hover:bg-slate-700 hover:shadow ${whichTabOpen === "home" ? "bg-slate-700 text-slate-300 shadow-md" : ""}`}>Home</span></Link>
                            <Link to={"/resources"} onClick={() => handleTabClick("resources")}><span className={`text-slate-400 hover:text-slate-300 block py-2 px-3 rounded duration-200 my-1 hover:bg-slate-700 hover:shadow ${whichTabOpen === "resources" ? "bg-slate-700 text-slate-300 shadow-md" : ""}`}>Resources</span></Link>
                            <Link to={"/blogs"} onClick={() => handleTabClick("blogs")}><span className={`text-slate-400 hover:text-slate-300 block py-2 px-3 rounded duration-200 my-1 hover:bg-slate-700 hover:shadow ${whichTabOpen === "blogs" ? "bg-slate-700 text-slate-300 shadow-md" : ""}`}>Blogs</span></Link>
                            <Link to={"/news"} onClick={() => handleTabClick("news")}><span className={`text-slate-400 hover:text-slate-300 block py-2 px-3 rounded duration-200 my-1 hover:bg-slate-700 hover:shadow ${whichTabOpen === "news" ? "bg-slate-700 text-slate-300 shadow-md" : ""}`}>Finance News</span></Link>
                            <Link to={"/stocks"} onClick={() => handleTabClick("stocks")}><span className={`text-slate-400 hover:text-slate-300 block py-2 px-3 rounded duration-200 my-1 hover:bg-slate-700 hover:shadow ${whichTabOpen === "stocks" ? "bg-slate-700 text-slate-300 shadow-md" : ""}`}>Analyse Stocks</span></Link>

                            <div className='pt-8 pl-4'><Logo size={3} /></div>
                        </div>
                        <div onClick={toggleMobileMenu} className='top-0 left-0 min-w-full min-h-screen fixed bg-slate-900 z-40 bg-opacity-70 animate__animated animate__bounceInRight'></div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
