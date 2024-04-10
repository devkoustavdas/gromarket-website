import { useState } from 'react';
import Btn from "../../components/Html.jsx/Button/Button";
import { Link } from "react-router-dom";
import { getUrl } from "../../util";
import Typewriter from 'typewriter-effect';

const LandingHeader = () => {
  const [whichTabOpen, setWhichTabOpen] = useState(localStorage.getItem("tab"));

  const handleTabClick = (tabName) => {
    setWhichTabOpen(tabName);
    localStorage.setItem('tab', whichTabOpen);
  };

  return (
    <header className="bg-slate-800 min-h-1/2 flex flex-col font-sans px-8 py-10 text-center  justify-center">
      <h1 className="sr-only">GroMarket Financial Services - Finance Blogs, Resources, News and Stocks Analysis</h1>
      <h2 className="my-5 text-4xl md:text-5xl font-extrabold font-title text-shadow">Make smarter financial decisions</h2>
      <h2 className="text-2xl md:text-3xl font-sans lowercase"><Typewriter
        options={{
          strings: ['#for yourself', '#for your business', "#for your family"],
          autoStart: true,
          loop: true,
        }}
      /></h2>

      <div className="font-title text-sm flex flex-row gap-3 justify-center my-8">
        <Link to={"/resources"} onClick={() => handleTabClick("resources")}><Btn type="warning" text="Resources" /></Link>
        <Link to={"/blogs"} onClick={() => handleTabClick("stocks")}><Btn type="neutral" text="Blogs" /></Link>
        <Link to={"/stocks"} onClick={() => handleTabClick("stocks")}><Btn type="blank" text="Stocks" /></Link>
      </div>
      <div className="bg-slate-700 rounded-circle w-fit mx-auto m-3 border-2 border-slate-500">
      <label htmlFor="hero-img" className='hidden'>Finance, Tax, Debt, Savings, Investment</label>
        <img id='hero-img' src={getUrl("GroMarket-Home-Page-Maskot.svg")} alt="GroMarket-maskot-homepage" className='select-none w-80 mx-auto' />
      </div>
    </header>
  )
};

export default LandingHeader
