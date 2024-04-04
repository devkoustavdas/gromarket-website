import { getUrl } from "../../util";
import NewsList from "./NewsList";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

const NewsView = () => {

    return (
        <section>
            <h1 className="sr-only">Finance News from GroMarket covering Investment, Taxation, Insurance, Trading, Startups, and others</h1>
            <h2 className="titleHead mt-7">News & Updates</h2>
            <h3 className="w-fit mx-auto text-md font-serif text-slate-400 mb-7  flex-row md:flex">Read the news around the market to&nbsp;
                <Typewriter
                    options={{
                        strings: ['to catch your next breakout trade', 'change your investment plan as required'],
                        autoStart: true,
                        loop: true,
                    }} /></h3>
            <div className="w-19/20 mx-auto md:w-full flex flex-col md:flex-row">
                <div className="mx-auto"><Link to={"/news"}><img className="w-3/5 md:w-30vw xl:w-25vw mx-auto select-none p-2" src={getUrl("GroMarket-News-Page.png")} alt="GroMarket Finance News" /></Link></div>
                <NewsList type={"full"} />
            </div>
        </section>
    );
}

export default NewsView;
