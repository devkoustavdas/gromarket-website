import { getUrl } from "../../util";
import NewsList from "./NewsList";
import { Link } from "react-router-dom";

const NewsView = () => {

    return (
        <section>
            <h3 className="titleHead mt-7">Finance News.</h3>
            <p className="text-center text-md font-sans text-gray-500 mb-7">All the news around the market</p>
            <div className="flex flex-col md:flex-row">
                <div><Link to={"/news"}><img className="scale-115 w-3/5 md:w-3/4 mx-auto select-none" src={getUrl("GroMarket-News-Page.png")} alt="GroMarket Finance News" /></Link></div>
                <NewsList type={"full"} />
            </div>
        </section>
    );
}

export default NewsView;
