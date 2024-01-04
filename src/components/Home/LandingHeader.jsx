import Btn from "../../components/Html.jsx/Button/Button";
import { Link } from "react-router-dom";

const LandingHeader = () => {
  return (
    <header className="bg-teal-500 min-h-1/2 flex flex-col gap-8 font-title px-8 py-10 text-center text-white justify-center">
      <h2 className="text-6xl text-shadow">Make smarter financial decisions</h2>
      <h2 className="text-3xl text-shadow lowercase">FULFILL YOUR SAVINGS DREAMS</h2>
      <div className="font-serif flex flex-row gap-3 justify-center">
        <Link to={"/resources"}><Btn type="warning" text="Resources" /></Link>
        <Link to={"/stocks"}><Btn type="blank" text="Stock Insights" /></Link>
      </div>
    </header>
  )
};

export default LandingHeader
