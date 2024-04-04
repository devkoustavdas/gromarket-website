import StocksList from "./StocksList";
import { getUrl } from "../../util";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

const StocksView = () => {

    return (
        <section>
            <h1 className="sr-only">Indian and International Stocks Analysis and Analysis from GroMarket covering Investment, Trading, Taxes, Strategies</h1>
            <h2 className="titleHead mt-7">Stocks Analysis</h2>
            <h3 className="w-fit mx-auto text-md font-serif text-slate-400 mb-7  flex-row md:flex">Explore the analysis of&nbsp;
                <Typewriter
                    options={{
                        strings: ['stocks', 'mutual funds', "smallcases"],
                        autoStart: true,
                        loop: true,
                    }} /></h3>
            <div className="w-19/20 mx-auto md:w-full flex flex-col md:flex-row">
                <div className="mx-auto"><Link to={"/stocks"}><img className="w-3/5 md:w-30vw xl:w-25vw mx-auto select-none p-2" src={getUrl("GroMarket-Stocks-Page.png")} alt="GroMarket Stocks Analysis" /></Link></div>
                <StocksList type={"full"} />
            </div>
        </section>
    );
}

export default StocksView;
