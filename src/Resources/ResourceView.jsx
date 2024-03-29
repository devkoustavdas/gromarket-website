import ResourceList from "../Resources/ResourceList";
import { getUrl } from "../util";
import { Link } from "react-router-dom";

const ResourceView = () => {

    return (
        <section>
            <h1 className="sr-only">Finance Resources and Finance tools from GroMarket covering Investment, Taxation, Insurance, Trading, Startups, and others</h1>
            <h2 className="titleHead mt-7">Resources & Tools</h2>
            <h3 className="text-center text-md font-serif text-slate-400 mb-7">All the tools you need to better manage your finances</h3>
            <div className="flex flex-col md:flex-row">
                <div className="w-4/5 lg:w-3/4 xl:w-3/5 mx-auto"><Link to={"/resources"}><img className="w-3/5 md:w-4/5 xl:w-3/5 mx-auto select-none" src={getUrl("GroMarket-Resources-Page.png")} alt="GroMarket Resources" /></Link></div>
                <ResourceList type={"full"} />
            </div>
        </section>
    );
}

export default ResourceView;
