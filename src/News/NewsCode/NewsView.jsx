import { getUrl } from "../../util";
import NewsList from "./NewsList";
import { Link } from "react-router-dom";

const NewsView = () => {

    return (
        <section>
            <h1 className="sr-only">Finance News from GroMarket covering Investment, Taxation, Insurance, Trading, Startups, and others</h1>
            <h2 className="titleHead mt-7">News & Updates</h2>
            <h3 className="text-center text-md font-serif text-slate-400 mb-7">Read the news around the market to stay updated</h3>
            <div className="flex flex-col md:flex-row">
                <div><Link to={"/news"}><img className="scale-115 w-3/5 md:w-3/4 mx-auto select-none" src={getUrl("GroMarket-News-Page.png")} alt="GroMarket Finance News" /></Link></div>
                <NewsList type={"full"} />
            </div>
        </section>
    );
}

export default NewsView;
