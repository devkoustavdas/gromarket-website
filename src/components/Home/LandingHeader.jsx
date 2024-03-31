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
    <h1 className="sr-only">GroMarket Financial Services</h1>
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
        <Link to={"/news"} onClick={() => handleTabClick("news")}><Btn type="blank" text="News" /></Link>
      </div>
      <div className="w-full scale-110 md:scale-100 mx-auto lg:w-4/5 ">
        <img src={getUrl("gromarket-homepage.svg")} alt="gromarket-homepage" className='select-none' />
      </div>
    </header>
  )
};

export default LandingHeader
