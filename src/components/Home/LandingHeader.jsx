import { useState } from 'react';
import Btn from "../../components/Html.jsx/Button/Button";
import { Link } from "react-router-dom";
import { getUrl } from "../../util";

const LandingHeader = () => {
  const [whichTabOpen, setWhichTabOpen] = useState(localStorage.getItem("tab"));

  const handleTabClick = (tabName) => {
    setWhichTabOpen(tabName);
    localStorage.setItem('tab', whichTabOpen);
  };

  return (
    <header className="bg-slate-800 min-h-1/2 flex flex-col gap-8 font-title px-8 py-10 text-center  justify-center">
      <h2 className="text-6xl text-shadow">Make smarter financial decisions</h2>
      <h2 className="text-3xl text-shadow lowercase">FULFILL YOUR SAVINGS DREAMS</h2>
      <div className="font-serif flex flex-row gap-3 justify-center">
        <Link to={"/resources"} onClick={() => handleTabClick("resources")}><Btn type="warning" text="Resources" /></Link>
        <Link to={"/stocks"} onClick={() => handleTabClick("stocks")}><Btn type="blank" text="Stock Insights" /></Link>
      </div>
      <div className="w-11/12 mx-auto xl:w-4/5 ">
        <img src={getUrl("gromarket-homepage.svg")} alt="gromarket-homepage" className='select-none' />
      </div>
    </header>
  )
};

export default LandingHeader
